import { useInView } from "../hooks/useInView";

interface WorkItemProps {
  company: string;
  period: string;
  title: string;
  body: string[];
  stats: string[];
  delay?: string;
}

function WorkItem({
  company,
  period,
  title,
  body,
  stats,
  delay = "0ms",
}: WorkItemProps) {
  const { ref, inView } = useInView(0.1);

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`mb-10 pb-10 border-b border-[#eceae4] last:border-b-0 last:mb-0 fade-up ${inView ? "in-view" : ""}`}
      style={{ animationDelay: delay }}
    >
      <div className="flex justify-between items-baseline mb-2.5 flex-wrap gap-1">
        <span className="font-mono text-[13px] font-normal tracking-[0.05em] text-[#6b6860] lowercase">
          {company}
        </span>
        <span className="font-mono text-[12px] font-light text-[#b0ada6] tracking-[0.04em]">
          {period}
        </span>
      </div>
      <h2 className="font-serif text-[1.3rem] font-medium text-[#1a1917] mb-3 leading-[1.35]">
        {title}
      </h2>
      <div className="text-[17px] text-[#6b6860] leading-[1.8]">
        {body.map((paragraph, i) => (
          <p key={i} className={i > 0 ? "mt-3" : ""}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-3">
        {stats.map((stat) => (
          <span
            key={stat}
            className="inline-block font-mono text-[12px] font-normal text-[#1a1917] bg-[#eceae4] border border-[#d8d5ce] px-2 py-0.5 rounded-[2px] mr-1 mt-3"
          >
            {stat}
          </span>
        ))}
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work">
      <WorkItem
        company="meetgeek · cerulean studio"
        period="mar 2024 — present"
        title="AI meeting notetaker, at scale"
        body={[
          "MeetGeek helps teams stop losing what was said in meetings. I joined as the sole mobile engineer and took full ownership of the React Native Expo app — from crash triage to the CI/CD pipeline to revenue infrastructure.",
          "The hardest part wasn't any single feature. It was keeping a 99.6% crash-free rate across two platforms while shipping 18 production releases and integrating a new subscription paywall. I built the RevenueCat integration that opened the company's first mobile revenue stream from scratch.",
          "When the product needed things React Native couldn't do cleanly — noise suppression for audio recording — I wrote the native modules in Swift.",
        ]}
        stats={[
          "50K+ MAU",
          "4.4★ Google Play",
          "99.6% crash-free",
          "18 releases",
        ]}
      />
      <WorkItem
        company="pt infomedia nusantara"
        period="dec 2022 — dec 2023"
        title="Internal tools that replaced manual chaos"
        body={[
          "Before the LMS, training was fragmented. I designed and built the entire system — from Figma mockups to Laravel backend — serving 9,300+ users with 6–11K monthly visits. Then I identified the adjacent problem: nobody could find documents or policies across divisions. The KMS I built became the single source of truth for multiple teams, cutting operational overhead by 30%.",
        ]}
        stats={["9,300+ users", "30% efficiency gain"]}
        delay="100ms"
      />
    </section>
  );
}
