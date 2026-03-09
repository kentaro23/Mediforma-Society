import Link from "next/link";
import { Accordion } from "@/components/accordion";
import { SectionTitle } from "@/components/section-title";
import {
  commonFaq,
  flowSteps,
  homeChallenges,
  homeServices,
  monthlyCycle,
  pricingPlans,
  voices
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="section-spacing-lg bg-white">
        <div className="container-standard">
          <div className="grid gap-12 md:grid-cols-10">
            <div className="md:col-span-6">
              <p className="mb-4 font-[var(--font-inter)] text-[12px] uppercase tracking-[0.12em] text-teal">
                学会事務局代行
              </p>
              <h1 className="max-w-[640px] text-[28px] font-medium leading-[1.5] text-navy">
                学会事務局代行を、品質で選べる状態へ。
              </h1>
              <p className="mt-6 max-w-[640px] text-[15px] leading-8 text-text">
                会員管理・会費徴収/督促を中心に、役員会運営を含む学会運営実務を継続支援します。先生方は意思決定と学術活動に集中し、運営負荷を平準化できます。
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-sm bg-teal px-5 py-3 text-[14px] text-white transition-opacity hover:opacity-90"
                >
                  資料請求・見積依頼
                </Link>
                <Link href="/services" className="text-[14px] text-navy underline-offset-4 hover:underline">
                  サービス詳細を見る →
                </Link>
              </div>
            </div>
            <div className="md:col-span-4" />
          </div>
        </div>
      </section>

      <section className="section-spacing-md bg-offwhite">
        <div className="container-standard">
          <SectionTitle title="学会運営の実務が、先生方の時間を圧迫していませんか" />
          <ol className="space-y-3">
            {homeChallenges.map((item, index) => (
              <li key={item} className="border-b border-gray-200 pb-3 text-[15px] text-text">
                <span className="mr-4 font-[var(--font-inter)] text-[13px] text-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-spacing-sm bg-white">
        <div className="container-standard">
          <SectionTitle title="意思決定は学会、実務は事務局で分担" />
          <div className="grid gap-10 md:grid-cols-10">
            <div className="space-y-5 md:col-span-6">
              <p className="leading-8 text-text">
                Mediforma Societyは、学会運営を「方針判断」と「実務執行」に整理し、実務側を継続的に支えることで運営品質を安定させます。
              </p>
              <p className="leading-8 text-text">
                先生方は意思決定と学術活動に集中し、日常運営に必要なタスクは事務局が責任を持って遂行。引継ぎ時の混乱や担当者依存を抑えます。
              </p>
              <p className="leading-8 text-text">
                月次報告で進捗と課題を共有し、実務の透明性を担保。運営体制が変わっても、品質を落とさず継続できる仕組みを提供します。
              </p>
            </div>
            <div className="md:col-span-4">
              <table>
                <thead>
                  <tr>
                    <th>区分</th>
                    <th>主担当</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>方針・優先順位の決定</td>
                    <td>学会</td>
                  </tr>
                  <tr>
                    <td>会員管理と請求運用</td>
                    <td>事務局</td>
                  </tr>
                  <tr>
                    <td>会計処理と報告作成</td>
                    <td>事務局</td>
                  </tr>
                  <tr>
                    <td>役員会での最終判断</td>
                    <td>学会</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing-md bg-offwhite">
        <div className="container-standard">
          <SectionTitle title="提供業務" />
          <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
            {homeServices.map((item) => (
              <div key={item.title} className="border-b border-gray-200 pb-4">
                <h3 className="mb-1 text-[18px] font-medium text-navy">{item.title}</h3>
                <p className="text-[14px] leading-7 text-textsub">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing-sm bg-white">
        <div className="container-standard">
          <SectionTitle title="月次運用サイクル" />
          <table>
            <thead>
              <tr>
                <th>週</th>
                <th>運用内容</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              {monthlyCycle.map((row) => (
                <tr key={row.week}>
                  <td>{row.week}</td>
                  <td>{row.task}</td>
                  <td>{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-spacing-md bg-offwhite">
        <div className="container-standard">
          <SectionTitle title="導入の流れ" />
          <div className="border-y border-gray-200">
            {flowSteps.map((step, index) => (
              <div key={step.title} className="grid gap-4 border-b border-gray-200 py-5 last:border-b-0 md:grid-cols-[80px_1fr]">
                <p className="font-[var(--font-inter)] text-[13px] text-teal">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <p className="mb-1 text-[18px] text-navy">{step.title}</p>
                  <p className="text-[14px] text-textsub">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing-sm bg-white">
        <div className="container-standard">
          <SectionTitle title="料金概要" />
          <div className="grid gap-5 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="border border-gray-200 bg-white">
                <div className="h-[2px] w-full bg-teal" />
                <div className="p-5">
                  <h3 className="text-[18px] font-medium text-navy">{plan.name}</h3>
                  <p className="mt-3 font-[var(--font-inter)] text-[22px] text-navy">{plan.range}</p>
                  <p className="mt-2 text-[14px] text-textsub">{plan.members}</p>
                  <p className="mt-3 text-[14px] text-textsub">{plan.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/pricing" className="mt-5 inline-block text-[14px] text-navy underline-offset-4 hover:underline">
            料金の詳細を見る →
          </Link>
        </div>
      </section>

      <section className="section-spacing-md bg-offwhite">
        <div className="container-standard">
          <SectionTitle title="FAQ" />
          <div className="mx-auto max-w-[680px]">
            <Accordion items={commonFaq} />
          </div>
        </div>
      </section>

      <section className="section-spacing-sm bg-white">
        <div className="container-standard">
          <SectionTitle title="お客様の声" />
          <div className="grid gap-8 md:grid-cols-2">
            {voices.map((item) => (
              <blockquote key={item.source} className="border-t border-gray-200 pt-4">
                <p className="text-[15px] leading-8 text-text">{item.quote}</p>
                <cite className="mt-4 block text-[13px] not-italic text-textsub">{item.source}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-[60px]">
        <div className="container-standard text-center">
          <h2 className="text-[20px] font-medium text-white">まずは現在の運営課題を整理しませんか？</h2>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-sm bg-white px-6 py-3 text-[14px] text-navy transition-opacity hover:opacity-90"
          >
            資料請求・見積依頼
          </Link>
        </div>
      </section>

      <section className="bg-offwhite py-8">
        <div className="container-standard">
          <div className="flex flex-wrap items-center gap-6 text-[13px] text-textsub">
            <span className="font-[var(--font-inter)] text-[12px] uppercase tracking-[0.1em]">Mediforma Family</span>
            <Link href="#">Society</Link>
            <Link href="#">DX</Link>
            <Link href="#">Education</Link>
            <Link href="#">Consulting</Link>
          </div>
        </div>
      </section>
    </>
  );
}
