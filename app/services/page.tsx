import { SectionTitle } from "@/components/section-title";
import { responsibilityTable, serviceCategories, serviceSpotTasks } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="container-standard section-spacing-sm">
        <header className="mb-12 border-b border-gray-200 pb-6">
          <h1 className="text-[28px] font-medium text-navy">サービス詳細</h1>
          <p className="mt-3 text-[15px] text-textsub">
            学会運営の継続実務を、会員管理・会計・会議運営を軸に分担設計して提供します。
          </p>
        </header>

        <div className="space-y-12">
          {serviceCategories.map((category) => (
            <section key={category.title} className="border-b border-gray-200 pb-8">
              <h2 className="text-[22px] font-medium text-navy">{category.title}</h2>
              <p className="mt-3 leading-8 text-text">{category.description}</p>
              <div className="mt-4">
                <p className="mb-2 font-[var(--font-inter)] text-[13px] uppercase tracking-[0.08em] text-teal">成果物</p>
                <ul className="list-disc space-y-1 pl-6 text-[14px] text-textsub">
                  {category.outputs.map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-14">
          <SectionTitle title="単発スポット業務" />
          <ul className="list-disc space-y-2 pl-6 text-[15px] text-text">
            {serviceSpotTasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <SectionTitle title="責任分界" subtitle="意思決定と実務を切り分け、運営負荷と判断負荷を整理します。" />
          <table>
            <thead>
              <tr>
                <th>領域</th>
                <th>学会</th>
                <th>事務局（Mediforma Society）</th>
              </tr>
            </thead>
            <tbody>
              {responsibilityTable.map((row) => (
                <tr key={row.area}>
                  <td>{row.area}</td>
                  <td>{row.society}</td>
                  <td>{row.office}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
