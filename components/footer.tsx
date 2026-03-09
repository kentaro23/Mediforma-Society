import Link from "next/link";
import { familyLinks } from "@/lib/site-data";

const pageLinks = [
  { href: "/", label: "トップ" },
  { href: "/services", label: "サービス" },
  { href: "/pricing", label: "料金" },
  { href: "/flow", label: "導入の流れ" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "資料請求" },
  { href: "/privacy", label: "プライバシーポリシー" }
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-standard section-spacing-sm">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="block h-4 w-4 rounded-sm bg-white" />
              <span className="font-[var(--font-inter)] text-[15px] font-medium">Mediforma Society</span>
            </div>
            <p className="text-[14px] leading-7 text-slate-200">
              学会運営の継続性と透明性を高めるために、会員管理・会計・会議運営を中心とした事務局実務を支援します。
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-[var(--font-inter)] text-[14px]">ページリンク</h3>
            <ul className="space-y-2 text-[14px] text-slate-200">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-opacity hover:opacity-90">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-[var(--font-inter)] text-[14px]">連絡先</h3>
            <ul className="space-y-2 text-[14px] text-slate-200">
              <li>mediforma1@gmail.com</li>
              <li>080-9322-6024</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-600 pt-6">
          <div className="mb-4 flex flex-wrap items-center gap-5 text-[13px] text-slate-200">
            {familyLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-90">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-[12px] text-slate-300">© 2026 Mediforma Society</p>
        </div>
      </div>
    </footer>
  );
}
