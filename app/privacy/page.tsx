export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="container-standard section-spacing-sm">
        <header className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="text-[28px] font-medium text-navy">プライバシーポリシー</h1>
          <p className="mt-3 text-[15px] text-textsub">Mediforma Societyにおける個人情報の取扱い方針です。</p>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-[22px] font-medium text-navy">1. 取得する情報</h2>
            <p className="mt-3 leading-8 text-text">
              お問い合わせ・資料請求時に、氏名、所属、連絡先、相談内容など業務上必要な情報を取得します。
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-medium text-navy">2. 利用目的</h2>
            <p className="mt-3 leading-8 text-text">
              取得した情報は、お問い合わせ対応、見積作成、契約検討、サービス提供、品質改善のために利用します。
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-medium text-navy">3. 第三者提供</h2>
            <p className="mt-3 leading-8 text-text">
              法令に基づく場合を除き、本人の同意なく第三者へ個人情報を提供しません。
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-medium text-navy">4. 安全管理</h2>
            <p className="mt-3 leading-8 text-text">
              不正アクセス、漏えい、滅失、毀損を防止するため、アクセス制御、バックアップ、運用ルール整備を実施します。
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-medium text-navy">5. 開示・訂正等</h2>
            <p className="mt-3 leading-8 text-text">
              個人情報の開示、訂正、利用停止等の請求には、合理的な範囲で速やかに対応します。
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-medium text-navy">6. お問い合わせ窓口</h2>
            <p className="mt-3 leading-8 text-text">mediforma1@gmail.com / 080-9322-6024</p>
          </section>

          <p className="border-t border-gray-200 pt-6 text-[13px] text-textlight">制定日: 2026年3月9日</p>
        </div>
      </div>
    </div>
  );
}
