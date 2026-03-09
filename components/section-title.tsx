type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h2 className="text-[24px] font-medium leading-[1.5] text-navy">{title}</h2>
      {subtitle ? <p className="mt-2 text-[15px] text-textsub">{subtitle}</p> : null}
    </div>
  );
}
