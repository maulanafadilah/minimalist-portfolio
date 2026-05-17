import { useInView } from "../hooks/useInView";

export function Contact() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-up ${inView ? "in-view" : ""}`}
    >
      <div className="flex items-baseline gap-8 flex-wrap mt-3">
        {[
          {
            href: "mailto:maulanafadilah028@gmail.com",
            label: "maulanafadilah028@gmail.com",
          },
          { href: "https://linkedin.com/in/maulanafadilah", label: "linkedin" },
          { href: "https://github.com/maulanafadilah", label: "github" },
          {
            href: "https://s.id/maulanafadilah",
            label: "resume",
          },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="font-mono text-[14px] font-light text-[#1a1917] no-underline tracking-[0.03em] border-b border-[#b0ada6] pb-px hover:border-[#1a1917] transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
