"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollAnimate } from "../ui/ScrollAnimate";
import { Badge } from "../ui/Badge";
import { WaitlistForm } from "../ui/WaitlistForm";
import { SuccessState } from "../ui/SuccessState";

export const Waitlist: React.FC = () => {
  const [submission, setSubmission] = useState<{
    firstName: string;
    email: string;
    position: number;
  } | null>(null);

  const handleSuccess = (data: { firstName: string; email: string; position: number }) => {
    setSubmission(data);
  };

  return (
    <section
      id="waitlist"
      className="py-28 md:py-36 bg-forest-surface relative overflow-hidden z-10 border-y border-forest-border/10"
    >
      {/* Background Visual Effects */}
      {/* Strong radial glow from center */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(61,153,112,0.18)_0%,transparent_65%)] pointer-events-none" />

      {/* Grid Pattern (Same as Hero) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='1' cy='1' r='0.8' fill='%233D9970' fill-opacity='0.05'/%3E%3C/svg%3E")`,
          maskImage: "radial-gradient(circle at center, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-12">
        <div className="max-w-[640px] mx-auto flex flex-col items-center">
          <AnimatePresence mode="wait">
            {!submission ? (
              <motion.div
                key="form-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col items-center text-center"
              >
                {/* Badge */}
                <Badge variant="outline" className="border-forest-accent/30 text-forest-accent-light mb-6">
                  ✦ Limited early access
                </Badge>

                {/* Heading */}
                <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold tracking-tight leading-[1.0] text-forest-text-primary mb-6">
                  Be first to get <br />
                  <span className="bg-gradient-to-r from-forest-accent via-forest-accent-light to-forest-highlight bg-clip-text text-transparent">
                    your social memory.
                  </span>
                </h2>

                {/* Subtext */}
                <p className="text-base sm:text-lg md:text-xl font-normal text-forest-text-secondary leading-relaxed max-w-[500px] mb-10">
                  Join the waitlist. We&apos;ll email you the moment Vora is ready. Free during beta. No
                  spam ever.
                </p>

                {/* Form Wrapper */}
                <div className="w-full">
                  <WaitlistForm onSuccess={handleSuccess} />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="w-full"
              >
                <SuccessState
                  firstName={submission.firstName}
                  email={submission.email}
                  position={submission.position}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
