import Button from "../components/ui/Button";
import Section from "../components/ui/Section";
import TextLink from "../components/ui/TextLink";
import ProjectGrid from "../components/ui/ProjectGrid";
import JsonLdOrganization from "../components/JsonLdOrganization";
import { allProjects } from "../content/portfolio";
import { usePageMeta } from "../hooks/usePageMeta";

const Home = () => {
  usePageMeta({
    title: "nuViz Studio | Visual Systems for Photography, Film & Design",
    description:
      "nuViz is a high-level alternative visual systems studio — built in the UK, now based in Paphos, Cyprus. Photography, film, music videos and design for artists, labels, theatres and brands.",
    canonicalPath: "/",
    ogType: "website",
    // ogImage: "/og.jpg",
  });

  return (
    <div>
      <JsonLdOrganization
        name="nuViz Studio"
        url="https://www.nuviz.studio"
        description="High-level alternative visual systems studio for photography, film, music videos and design. UK-built, now based in Paphos, Cyprus."
        location="Paphos, Cyprus"
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-[var(--bg)] ctx-grid">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-28 lg:py-36">
          <header className="max-w-4xl">
            <p
              className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] code-prefix code-prefix-sm"
              data-prefix="//"
            >
              Visual Systems Studio
            </p>

            <h1 className="font-mono text-[5.25rem] leading-tight text-[var(--accent-green)] lg:text-[6.5rem] matrix-glow">
              nuViz
            </h1>

            <p className="mt-4 text-lg text-[var(--text)] max-w-2xl code-prefix block" data-prefix=">">
              Visual systems for image, sound, and motion.
            </p>

            <p className="mt-3 text-sm text-[var(--muted)] max-w-2xl">
              Built in the UK. Now based in <span className="text-[var(--text)]">Paphos, Cyprus</span> — working across Cyprus, the UK
              and Europe with artists, labels, theatres and culture-facing brands.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/contact" className="shadow-soft">
                Book a project
              </Button>
              <Button variant="ghost" to="/work">
                View work
              </Button>
              <span className="text-xs text-[var(--muted)] font-mono code-prefix code-prefix-sm" data-prefix="+">
                Fast reply · clear scope · calm production
              </span>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-[var(--muted)]">
              <div className="matrix-panel rounded-2xl px-4 py-3">UK-built</div>
              <div className="matrix-panel rounded-2xl px-4 py-3">Paphos-based</div>
              <div className="matrix-panel rounded-2xl px-4 py-3">Small crews</div>
              <div className="matrix-panel rounded-2xl px-4 py-3">In-house post</div>
            </div>
          </header>
        </div>
      </section>

      {/* BELIEF / MANIFESTO */}
      <Section tone="borderTop">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Our belief</p>
            <h2 className="font-mono text-2xl text-[var(--text)] mt-2">
              Restraint is a competitive advantage.
            </h2>
            <p className="text-[var(--muted)] mt-4">
              We reduce until the image becomes inevitable — then we build the system around it. Less noise. More signal.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Direction",
                  text: "One clear idea carried through every frame, cut, and output.",
                },
                {
                  title: "Rhythm",
                  text: "Pacing and sound shape the image as much as light does.",
                },
                {
                  title: "Finish",
                  text: "Post stays close. The final work matches the original intent.",
                },
              ].map((item) => (
                <div key={item.title} className="matrix-panel rounded-2xl p-5">
                  <h3 className="font-mono text-base text-[var(--text)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SELECTED COLLABORATORS (authority + SEO) */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Selected collaborators</p>
            <h2 className="font-mono text-2xl text-[var(--text)] mt-2">
              Trusted in culture-facing rooms.
            </h2>
            <p className="text-[var(--muted)] mt-4">
              Past collaborations include <span className="text-[var(--text)]">MIF Manchester</span>,{" "}
              <span className="text-[var(--text)]">MC DRS</span>,{" "}
              <span className="text-[var(--text)]">Children of Zeus</span>,{" "}
              <span className="text-[var(--text)]">Manchester Royal Theatre</span> — plus more across music, performance and
              independent brand worlds.
            </p>
            <p className="text-xs text-[var(--muted)] mt-3">
              Need specific credits? <TextLink to="/contact">Request a project list</TextLink>.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-[var(--muted)]">
              {[
                "MIF Manchester",
                "MC DRS",
                "Children of Zeus",
                "Manchester Royal Theatre",
                "Artists & Labels",
                "Independent Studios",
              ].map((name) => (
                <div key={name} className="border border-[var(--accent-dim)] rounded-2xl px-4 py-3">
                  {name}
                </div>
              ))}
            </div>

            <div className="mt-6 matrix-panel rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Positioning</p>
              <p className="text-[var(--muted)] mt-3">
                nuViz is high-level and alternative by design — not a “content” pipeline. We build visual languages that hold up over
                time.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CAPABILITIES (keyword-rich, still premium) */}
      <Section tone="borderTop">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Capabilities</p>
            <h2 className="font-mono text-2xl text-[var(--text)]">What we build</h2>
            <p className="text-[var(--muted)] mt-2">
              Photography, film, music videos and design — engineered as one system you can deploy across releases, campaigns, tours
              and platforms.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 space-y-6">
            {[
              {
                n: "01",
                title: "Photography",
                desc: "Editorial portraits, brand photography and campaign stills designed for longevity.",
              },
              {
                n: "02",
                title: "Film",
                desc: "Brand films and short-form narratives shaped through pacing, light and sound.",
              },
              {
                n: "03",
                title: "Music Videos",
                desc: "Performance-led direction with cinematic cut — built around rhythm, not trends.",
              },
              {
                n: "04",
                title: "Design",
                desc: "Visual identity systems, artwork and layouts that stay calm under visual pressure.",
              },
            ].map((s) => (
              <div key={s.n} className="flex gap-6 items-start">
                <div className="w-14 flex-shrink-0">
                  <div className="font-mono text-lg text-[var(--accent-green)]">{s.n}</div>
                </div>
                <div className="matrix-panel rounded-2xl p-5 w-full">
                  <div className="font-mono text-xl text-[var(--text)]">{s.title}</div>
                  <div className="text-[var(--muted)] mt-1">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* WORK + APPROACH */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ProjectGrid projects={allProjects.slice(0, 6)} />
          </div>

          <aside className="lg:col-span-5 pt-2">
            <p className="font-mono text-xs uppercase tracking-wide text-[var(--muted)]">Approach</p>
            <h2 className="font-mono text-2xl text-[var(--text)] mt-2">
              We think in sequences, not deliverables.
            </h2>
            <p className="text-[var(--muted)] mt-3">
              Listen → define → structure → execute → refine. One strong idea carried cleanly from concept to final delivery.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                { k: "Discovery", v: "Short brief + references + timeline" },
                { k: "Direction", v: "System framing + shot logic + style rules" },
                { k: "Production", v: "Calm set, small crew, decisive execution" },
                { k: "Post", v: "Edit + finish aligned to intent" },
              ].map((row) => (
                <div key={row.k} className="border border-[var(--accent-dim)] rounded-2xl px-5 py-4">
                  <div className="font-mono text-sm text-[var(--text)]">{row.k}</div>
                  <div className="text-sm text-[var(--muted)] mt-1">{row.v}</div>
                </div>
              ))}
            </div>

            <p className="text-xs text-[var(--muted)] mt-6">
              Based in Paphos, Cyprus. UK roots. Available across Cyprus & Europe.{" "}
              <TextLink to="/contact">Start a project</TextLink>.
            </p>
          </aside>
        </div>
      </Section>

      {/* LOCAL SIGNAL + SEO (light, not spammy) */}
      <Section tone="borderTop">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Coverage</p>
            <h2 className="font-mono text-2xl text-[var(--text)] mt-2">
              Paphos-based. Built in the UK.
            </h2>
            <p className="text-[var(--muted)] mt-4">
              On-location production across Cyprus (including Paphos, Limassol, Nicosia and Larnaca), with UK and Europe availability
              for the right project.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="matrix-panel rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Typical asks</p>
              <div className="mt-4 grid md:grid-cols-2 gap-3 text-sm text-[var(--muted)]">
                <div className="border border-[var(--accent-dim)] rounded-2xl px-4 py-3">Artist press systems</div>
                <div className="border border-[var(--accent-dim)] rounded-2xl px-4 py-3">Campaign visuals</div>
                <div className="border border-[var(--accent-dim)] rounded-2xl px-4 py-3">Music video direction</div>
                <div className="border border-[var(--accent-dim)] rounded-2xl px-4 py-3">Brand films</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* QUIET CTA */}
      <Section tone="borderTop">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="font-mono text-xl text-[var(--text)]">Start with a reference and an intention.</h2>
            <p className="text-[var(--muted)] mt-2">
              We reply within one business day with a proposed direction, structure, and timeline.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button to="/contact">Begin a project</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
