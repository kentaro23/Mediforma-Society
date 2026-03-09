import { Accordion } from "@/components/accordion";
import { SectionTitle } from "@/components/section-title";
import { pricingCore, pricingEstimate, pricingFaq, pricingOption, pricingSpot, pricingUsage } from "@/lib/site-data";

function PricingTable({
  title,
  rows
}: {
  title: string;
  rows: string[][];
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-[22px] font-medium text-navy">{title}</h2>
      <table>
        <thead>
          <tr>
            <th>項目</th>
            <th>目安料金</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default function PricingPage() {
  return (
    <div className="bg-white">
      <div className="container-standard section-spacing-sm">
        <header className="mb-12 border-b border-gray-200 pb-6">
          <h1 className="text-[28px] font-medium text-navy">料金</h1>
          <p className="mt-3 text-[15px] text-textsub">
            学会規模・運用範囲・頻度に応じて見積します。以下は標準的な目安です。
          </p>
        </header>

        <PricingTable title="月額コア" rows={pricingCore} />
        <PricingTable title="月額オプション" rows={pricingOption} />
        <PricingTable title="スポット" rows={pricingSpot} />
        <PricingTable title="従量課金" rows={pricingUsage} />

        <section className="mb-12">
          <SectionTitle title="見積例" />
          <table>
            <thead>
              <tr>
                <th>ケース</th>
                <th>規模</th>
                <th>業務範囲</th>
                <th>月額目安</th>
              </tr>
            </thead>
            <tbody>
              {pricingEstimate.map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
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
