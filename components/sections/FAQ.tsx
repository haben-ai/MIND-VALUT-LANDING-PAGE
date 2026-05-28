"use client";

import React from "react";
import { ScrollAnimate } from "../ui/ScrollAnimate";
import { Accordion } from "../ui/Accordion";

const FAQ_ITEMS = [
  {
    question: "Which platforms does Vora support?",
    answer:
      "Vora currently supports Instagram (Reels, Posts, Carousels), TikTok, YouTube and YouTube Shorts, Reddit, X/Twitter, and LinkedIn. More platforms are added regularly.",
  },
  {
    question: "Is Vora free?",
    answer:
      "Vora is completely free during the beta period. When we launch publicly, there will be a generous free tier and a Pro plan at $12/month.",
  },
  {
    question: "How does saving work?",
    answer:
      "On Android and iOS, Vora appears in your phone's share sheet. When you tap Share in any app and select Vora, the content is saved instantly with its thumbnail, title, and metadata.",
  },
  {
    question: "What about Pocket shutting down?",
    answer:
      "We know the pain. Pocket's shutdown left millions of users without a home for their saved content. Vora is built for the way people consume content in 2026 — social media first, with AI intelligence coming in V2.",
  },
  {
    question: "Is my data private?",
    answer:
      "Completely. Your library is private to you. We never sell data, never show ads, and never use your saves to train AI models without explicit consent.",
  },
  {
    question: "When will it launch?",
    answer:
      "We're in final testing now. Waitlist members will get access first — you'll receive an email the moment your spot opens.",
  },
  {
    question: "What is V2 AI layer?",
    answer:
      "V2 will add automatic summaries, video transcription, smart tags, and 'Ask your library' — where you can ask questions and get answers synthesised from your saved content.",
  },
  {
    question: "Will there be a web version?",
    answer:
      "A browser extension is in development for desktop saving. The core experience is mobile-first.",
  },
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-forest-base relative z-10 overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12">
        <ScrollAnimate className="flex flex-col items-center text-center mb-12 md:mb-16">
          <span className="font-label text-forest-text-muted mb-4 block">FAQ</span>
          <h2 className="text-[34px] sm:text-[40px] md:text-[48px] font-bold tracking-tight text-forest-text-primary">
            Common questions.
          </h2>
        </ScrollAnimate>

        {/* Accordion Component */}
        <ScrollAnimate delay={0.1} className="max-w-2xl mx-auto">
          <Accordion items={FAQ_ITEMS} />
        </ScrollAnimate>
      </div>
    </section>
  );
};
