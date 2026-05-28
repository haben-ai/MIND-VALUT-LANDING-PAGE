"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-forest-border/20 py-4 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2 text-left transition-colors hover:text-forest-accent-light"
      >
        <span className="text-base md:text-lg font-medium text-forest-text-primary font-display-medium">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-forest-text-muted transition-transform duration-300",
            {
              "rotate-180 text-forest-accent": isOpen,
            }
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-4 pt-2 text-sm md:text-base text-forest-text-secondary leading-relaxed max-w-[720px]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: Array<AccordionItemProps>;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  return (
    <div className={cn("w-full flex flex-col", className)}>
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};
