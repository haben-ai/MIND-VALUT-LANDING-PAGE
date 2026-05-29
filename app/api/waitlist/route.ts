import { NextResponse } from "next/server";
import { supabase, supabaseAdmin, isSupabaseConfigured } from "@/lib/supabase";
import { resend, isResendConfigured } from "@/lib/resend";

// Simple in-memory fallback for local mock signups if database is not set up
// Note: This resets on server restarts, which is perfectly acceptable for dev fallback.
let mockWaitlistCount = 2847;
const mockDb = new Map<string, { email: string; firstName: string; position: number }>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstName, platform } = body;

    // 1. Validate email (format check)
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: "invalid_email" }, { status: 400 });
    }

    // 2. Validate firstName (not empty, < 50 chars)
    if (!firstName || typeof firstName !== "string" || firstName.trim().length === 0) {
      return NextResponse.json({ error: "invalid_name" }, { status: 400 });
    }
    if (firstName.length > 50) {
      return NextResponse.json({ error: "name_too_long" }, { status: 400 });
    }

    let position = 0;
    const cleanFirstName = firstName.trim();
    const cleanEmail = email.toLowerCase().trim();

    // 3. Database operation
    if (isSupabaseConfigured && supabase) {
      // Check for existing email in Supabase
      const { data: existing, error: fetchError } = await supabase
        .from("waitlist")
        .select("position, first_name")
        .eq("email", cleanEmail)
        .maybeSingle();

      if (fetchError) {
        console.error("Supabase fetch error:", fetchError);
        return NextResponse.json(
          { error: "server_error", message: `Supabase Fetch: ${fetchError.message}`, details: fetchError },
          { status: 500 }
        );
      }

      if (existing) {
        return NextResponse.json(
          {
            error: "already_registered",
            position: existing.position + 100,
            firstName: existing.first_name,
          },
          { status: 409 }
        );
      }

      // Insert into waitlist table
      // Use service role if available for reliable insert, otherwise anon client
      const client = supabaseAdmin || supabase;
      const { data: inserted, error: insertError } = await client
        .from("waitlist")
        .insert([
          {
            email: cleanEmail,
            first_name: cleanFirstName,
            source: "landing_page",
            platform: platform || [],
          },
        ])
        .select("position")
        .single();

      if (insertError) {
        console.error("Supabase insert error:", insertError);
        return NextResponse.json(
          { error: "server_error", message: `Supabase Insert: ${insertError.message}`, details: insertError },
          { status: 500 }
        );
      }

      position = inserted.position + 100;
    } else {
      // MOCK FALLBACK MODE
      console.log("⚠️ Supabase not configured. Using in-memory fallback waitlist database.");

      if (mockDb.has(cleanEmail)) {
        const existing = mockDb.get(cleanEmail)!;
        return NextResponse.json(
          {
            error: "already_registered",
            position: existing.position + 100,
            firstName: existing.firstName,
          },
          { status: 409 }
        );
      }

      mockWaitlistCount += 1;
      position = mockWaitlistCount + 100;

      mockDb.set(cleanEmail, {
        email: cleanEmail,
        firstName: cleanFirstName,
        position: position - 100,
      });
    }

    // 4. Formulate email contents
    const tweetText = `Just joined the Vora waitlist — an app that saves your reels and social media posts so you never lose them again. Join me: https://vora.app`;
    const twitterIntent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>You're #${position} on the Vora waitlist</title>
      </head>
      <body style="background-color: #0A1208; color: #E8F0EC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 40px 20px; text-align: center;">
        <div style="max-w: 600px; margin: 0 auto; background-color: #0E1A12; border: 1px solid #1A3020; border-radius: 16px; padding: 40px; text-align: left;">
          
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 40px;">
            <div style="font-size: 24px; font-weight: bold; letter-spacing: 0.1em; color: #3D9970; margin-bottom: 4px;">VORA</div>
            <div style="font-size: 12px; color: #7A9482; text-transform: uppercase; letter-spacing: 0.08em;">Your social memory</div>
          </div>
          
          <!-- Body -->
          <div style="font-size: 16px; line-height: 1.6; color: #A8BFB0; margin-bottom: 32px;">
            <p style="color: #E8F0EC; font-size: 18px; font-weight: 500; margin-top: 0;">Hey ${cleanFirstName},</p>
            <p>You're officially on the Vora waitlist. We are preparing to open early access seats soon.</p>
          </div>
          
          <!-- Position Box -->
          <div style="background-color: #142B1A; border: 1px solid #2E6B3E; border-radius: 12px; padding: 32px; text-align: center; margin-bottom: 40px;">
            <div style="font-size: 72px; font-weight: 700; color: #3D9970; line-height: 1; margin-bottom: 8px;">#${position}</div>
            <div style="font-size: 14px; color: #7A9482; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 500;">Your position in queue</div>
          </div>
          
          <!-- Next Steps -->
          <div style="font-size: 15px; line-height: 1.6; color: #A8BFB0; margin-bottom: 40px;">
            <p>We're in final testing. You'll receive another email the moment your spot opens. We promise never to send you spam or advertisements.</p>
          </div>
          
          <!-- Twitter CTA Button -->
          <div style="text-align: center; margin-bottom: 40px;">
            <a href="${twitterIntent}" target="_blank" style="background-color: #3D9970; color: #FFFFFF; font-size: 15px; font-weight: 600; text-decoration: none; padding: 14px 28px; border-radius: 8px; display: inline-block; box-shadow: 0 4px 12px rgba(61, 153, 112, 0.3);">
              Tell a friend →
            </a>
          </div>
          
          <!-- Footer -->
          <div style="border-t: 1px solid #1A3020; pt: 20px; text-align: center; font-size: 12px; color: #7A9482;">
            <p style="margin: 0 0 8px 0;">Vora &middot; Your social memory</p>
            <p style="margin: 0;"><a href="#" style="color: #7A9482; text-decoration: underline;">Unsubscribe</a></p>
          </div>
          
        </div>
      </body>
      </html>
    `;

    // 5. Send confirmation email via Resend (fire-and-forget for ultra-low latency)
    if (isResendConfigured && resend) {
      resend.emails.send({
        from: "Vora <onboarding@resend.dev>",
        to: cleanEmail,
        subject: `You're #${position} on the Vora waitlist ✦`,
        html: emailHtml,
      }).catch((emailErr) => {
        console.error("Resend send email background error:", emailErr);
      });
    } else {
      console.log(`✉️ Resend API not configured. Simulated email for #${position} (${cleanFirstName} - ${cleanEmail}) logged to console.`);
      console.log("---- SIMULATED EMAIL CONTENT ----");
      console.log(`To: ${cleanEmail}`);
      console.log(`Subject: You're #${position} on the Vora waitlist ✦`);
      console.log("---------------------------------");
    }

    // 6. Return response
    return NextResponse.json({
      success: true,
      position,
      firstName: cleanFirstName,
      email: cleanEmail,
    });
  } catch (err) {
    console.error("Waitlist submission server error:", err);
    return NextResponse.json(
      { error: "server_error", message: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
