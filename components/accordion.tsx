"use client";

import { useState } from "react";

type Item = {
  q: string;
  a: string;
};

type AccordionProps = {
  items: Item[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-[15px] text-navy">{item.q}</span>
              <span className="font-[var(--font-inter)] text-[18px] text-teal">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-200"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-4 text-[14px] leading-7 text-textsub">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
