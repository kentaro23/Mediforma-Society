import { flowSteps } from "@/lib/site-data";

export default function FlowPage() {
  return (
    <div className="bg-offwhite">
      <div className="container-standard section-spacing-sm">
        <header className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="text-[28px] font-medium text-navy">導入の流れ</h1>
          <p className="mt-3 text-[15px] text-textsub">相談から運用開始までを5ステップで進めます。</p>
        </header>

        <div className="border-y border-gray-200 bg-white">
          {flowSteps.map((step, index) => (
            <div
              key={step.title}
              className="grid gap-4 border-b border-gray-200 px-6 py-6 last:border-b-0 md:grid-cols-[96px_1fr]"
            >
              <p className="font-[var(--font-inter)] text-[13px] text-teal">STEP {index + 1}</p>
              <div>
                <h2 className="text-[22px] font-medium text-navy">{step.title}</h2>
                <p className="mt-2 text-[15px] leading-8 text-text">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
