import { securityControls } from "@/lib/site-data";

export default function SecurityPage() {
  return (
    <div className="bg-offwhite">
      <div className="container-standard section-spacing-sm">
        <header className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="text-[28px] font-medium text-navy">情報管理</h1>
          <p className="mt-3 text-[15px] text-textsub">
            会員情報・会計情報を扱う前提で、運用ルールとアクセス統制を明文化して管理します。
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-10">
          <section className="space-y-4 md:col-span-6">
            <h2 className="text-[22px] font-medium text-navy">管理体制</h2>
            <p className="leading-8 text-text">
              学会データは、業務上必要な担当者のみがアクセスできるように管理し、引継ぎ時に権限棚卸しを実施します。個人情報を含む資料は利用目的を定義した上で保管し、運用記録を残します。
            </p>
            <p className="leading-8 text-text">
              重要情報の外部送信時は宛先確認と暗号化手段の使用を徹底。誤送信防止のため、送信前チェック項目を標準化しています。
            </p>
            <p className="leading-8 text-text">
              万一の障害や事故に備え、バックアップと復旧手順を整備し、関係者への報告フローを事前に定めています。
            </p>
          </section>

          <section className="md:col-span-4">
            <table>
              <thead>
                <tr>
                  <th>統制項目</th>
                  <th>内容</th>
                </tr>
              </thead>
              <tbody>
                {securityControls.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}
