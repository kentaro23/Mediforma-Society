import Link from "next/link";
import { sampleDeliverables } from "@/lib/site-data";

export default function SamplesPage() {
  return (
    <div className="bg-white">
      <div className="container-standard section-spacing-sm">
        <header className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="text-[28px] font-medium text-navy">成果物サンプル</h1>
          <p className="mt-3 text-[15px] text-textsub">
            実際の運用で提供する成果物フォーマットの例です。内容は学会ごとに調整します。
          </p>
        </header>

        <table>
          <thead>
            <tr>
              <th>成果物</th>
              <th>形式</th>
              <th>概要</th>
            </tr>
          </thead>
          <tbody>
            {sampleDeliverables.map((item) => (
              <tr key={item[0]}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-8 flex flex-wrap gap-4">
          <button type="button" className="rounded-sm border border-gray-200 bg-white px-5 py-3 text-[14px] text-navy shadow-sm">
            会員台帳サンプルDL（準備中）
          </button>
          <button type="button" className="rounded-sm border border-gray-200 bg-white px-5 py-3 text-[14px] text-navy shadow-sm">
            月次報告サンプルDL（準備中）
          </button>
          <Link href="/contact" className="rounded-sm bg-teal px-5 py-3 text-[14px] text-white transition-opacity hover:opacity-90">
            個別サンプルを相談する
          </Link>
        </div>
      </div>
    </div>
  );
}
