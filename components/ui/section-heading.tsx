type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-400 ${align === "center" ? "justify-center" : ""}`}>
        <span className="inline-block h-px w-7 bg-blue-400" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="text-balance font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">{description}</p>}
    </div>
  );
}
