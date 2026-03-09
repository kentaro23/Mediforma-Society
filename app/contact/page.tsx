export default function ContactPage() {
  return (
    <div className="bg-offwhite">
      <div className="container-standard section-spacing-sm">
        <header className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="text-[28px] font-medium text-navy">資料請求</h1>
          <p className="mt-3 text-[15px] text-textsub">以下フォームからご相談ください。1〜2営業日以内にご連絡します。</p>
        </header>

        <form className="mx-auto max-w-[560px] space-y-5 border border-gray-200 bg-white p-6 shadow-sm">
          <div>
            <label htmlFor="society" className="mb-2 block text-[14px] text-navy">
              学会名
            </label>
            <input id="society" name="society" type="text" className="w-full rounded-sm border border-gray-200 px-3 py-2 text-[15px]" />
          </div>

          <div>
            <label htmlFor="person" className="mb-2 block text-[14px] text-navy">
              担当者名
            </label>
            <input id="person" name="person" type="text" className="w-full rounded-sm border border-gray-200 px-3 py-2 text-[15px]" />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-[14px] text-navy">
              メール
            </label>
            <input id="email" name="email" type="email" className="w-full rounded-sm border border-gray-200 px-3 py-2 text-[15px]" />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-[14px] text-navy">
              電話
            </label>
            <input id="phone" name="phone" type="tel" className="w-full rounded-sm border border-gray-200 px-3 py-2 text-[15px]" />
          </div>

          <div>
            <label htmlFor="members" className="mb-2 block text-[14px] text-navy">
              会員数
            </label>
            <input id="members" name="members" type="text" className="w-full rounded-sm border border-gray-200 px-3 py-2 text-[15px]" />
          </div>

          <div>
            <label htmlFor="type" className="mb-2 block text-[14px] text-navy">
              種別
            </label>
            <select id="type" name="type" className="w-full rounded-sm border border-gray-200 px-3 py-2 text-[15px]">
              <option>新規導入の相談</option>
              <option>見積依頼</option>
              <option>一部業務の委託相談</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-[14px] text-navy">
              内容
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full rounded-sm border border-gray-200 px-3 py-2 text-[15px]"
            />
          </div>

          <button type="submit" className="rounded-sm bg-teal px-6 py-3 text-[14px] text-white transition-opacity hover:opacity-90">
            送信する
          </button>
        </form>
      </div>
    </div>
  );
}
