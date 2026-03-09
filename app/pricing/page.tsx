import { Accordion } from "@/components/accordion";
import { SectionTitle } from "@/components/section-title";
import { pricingFaq, pricingPlans } from "@/lib/site-data";

export default function PricingPage() {
  return (
    <div className="bg-white">
      <div className="container-standard section-spacing-sm">
        <header className="mb-12 border-b border-gray-200 pb-6">
          <h1 className="text-[28px] font-medium text-navy">料金</h1>
          <p className="mt-3 text-[15px] text-textsub">
            月額コアプランを学会規模に応じて3区分で提供しています。部分販売ではなく、運営実務を一体で支援します。
          </p>
        </header>

        <section className="mb-12">
          <SectionTitle title="月額コアプラン（規模別）" />
          <table>
            <thead>
              <tr>
                <th>プラン</th>
                <th>対象規模</th>
                <th>月額目安</th>
                <th>提供内容（コア一式）</th>
              </tr>
            </thead>
            <tbody>
              {pricingPlans.map((plan) => (
                <tr key={plan.name}>
                  <td>{plan.name}</td>
                  <td>{plan.members}</td>
                  <td>{plan.range}</td>
                  <td>{plan.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <SectionTitle title="料金FAQ" />
          <div className="max-w-[720px]">
            <Accordion items={pricingFaq} />
          </div>
        </section>
      </div>
    </div>
  );
}
