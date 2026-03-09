import { Accordion } from "@/components/accordion";
import { faqCategories } from "@/lib/site-data";

export default function FaqPage() {
  return (
    <div className="bg-white">
      <div className="container-standard section-spacing-sm">
        <header className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="text-[28px] font-medium text-navy">FAQ</h1>
          <p className="mt-3 text-[15px] text-textsub">導入前後でよくいただく質問をカテゴリ別にまとめています。</p>
        </header>

        <div className="mx-auto flex max-w-[720px] flex-col gap-10">
          {faqCategories.map((category) => (
            <section key={category.category}>
              <h2 className="mb-4 text-[22px] font-medium text-navy">{category.category}</h2>
              <Accordion items={category.items} />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
