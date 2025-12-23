import Button from "../components/ui/Button";
import ProjectGrid from "../components/ui/ProjectGrid";
import { allProjects } from "../content/portfolio";
import { usePageMeta } from "../hooks/usePageMeta";
import JsonLdOrganization from "../components/JsonLdOrganization";

const Home = () => {
  usePageMeta({
    title: "nuViz Studio | Visual Systems for Photography, Film & Design",
    description:
      "nuViz is a visual systems studio — UK-built, now based in Paphos, Cyprus. Photography, film, music videos and design for artists, brands, labels and stages.",
    canonicalPath: "/",
    ogType: "website",
    // ogImage: "/og.jpg", // add later when you have one
  });

  return (
    <div>
      <JsonLdOrganization
        name="nuViz Studio"
        url="https://www.nuviz.studio"
        description="Visual systems studio for photography, film, music videos and design."
        location="Paphos, Cyprus"
        foundedIn="United Kingdom"
        basedIn="Paphos, Cyprus"
        areaServed={["Cyprus", "United Kingdom", "Europe"]}
        services={[
          "Photography",
          "Brand photography",
          "Editorial portraiture",
          "Film production",
          "Brand films",
          "Music videos",
          "Creative direction",
          "Graphic design",
          "Visual identity systems",
        ]}
        // sameAs={["https://instagram.com/...", "https://vimeo.com/..."]}
      />

      {/* Hero */}
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

            <h1 className="font-mono text-[5.25rem] leading-tight text-[var(--accent-green)] lg:text-[6.5rem]">
              nuViz
            </h1>

            <p className="mt-4 text-lg text-[var(--text)] max-w-2xl code-prefix block" data-prefix=">">
              Visual systems for image, sound, and motion.
            </p>

            <p className="mt-3 text-sm text-[var(--muted)] max-w-2xl">
              Built in the UK. Now based in Paphos, Cyprus — working across Europe with artists, brands, labels and stages.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Button to="/contact" className="shadow-soft">
                Book a project
              </Button>
              <Button variant="ghost" to="/work">
                View work
              </Button>
            </div>
          </header>
        </div>
      </section>

      {/* Belief */}
      <section className="mx-auto max-w-4xl px-6 lg:py-16 py-12">
        <div className="prose prose-invert text-[var(--muted)]">
          <p className="font-mono text-sm uppercase tracking-wider">Our belief</p>
          <h2 className="font-mono text-3xl text-[var(--text)]">Restraint is a competitive advantage.</h2>
          <p>We reduce until the image becomes inevitable — then we build the system around it.</p>
          <p>
            The result translates across mediums: stage, campaign, print, screen. One idea, carried cleanly from concept to
            final delivery.
          </p>
        </div>
      </section>

      {/* Selected collaborators (authority + SEO) */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Selected collaborators</p>
            <h2 className="font-mono text-2xl text-[var(--text)]">Work trusted in culture-facing rooms.</h2>
            <p className="text-[var(--muted)] mt-2 max-w-3xl">
              Past collaborations include MIF Manchester, MC DRS, Children of Zeus, Manchester Royal Theatre — and more
              across music, performance, and independent brand worlds.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-[var(--muted)]">
            <div className="border border-[var(--accent-dim)] rounded-xl px-4 py-3">MIF Manchester</div>
            <div className="border border-[var(--accent-dim)] rounded-xl px-4 py-3">MC DRS</div>
            <div className="border border-[var(--accent-dim)] rounded-xl px-4 py-3">Children of Zeus</div>
            <div className="border border-[var(--accent-dim)] rounded-xl px-4 py-3">Manchester Royal Theatre</div>
          </div>

          <p className="text-xs text-[var(--muted)]">
            *Names listed as prior collaborations. Specific deliverables available on request.
          </p>
        </div>
      </section>

      {/* Capabilities (keyword-rich but premium) */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Capabilities</p>
            <h2 className="font-mono text-2xl text-[var(--text)]">What we build</h2>
            <p className="text-[var(--muted)] mt-2">
              Not a menu — a set of systems you can deploy across campaigns, releases, tours and platforms.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-14 flex-shrink-0">
                <div className="font-mono text-lg text-[var(--accent-green)]">01</div>
              </div>
              <div>
                <div className="font-mono text-xl text-[var(--text)]">Photography</div>
                <div className="text-[var(--muted)] mt-1">
                  Editorial portraits, brand photography and campaign stills designed for longevity.
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 flex-shrink-0">
                <div className="font-mono text-lg text-[var(--accent-green)]">02</div>
              </div>
              <div>
                <div className="font-mono text-xl text-[var(--text)]">Film</div>
                <div className="text-[var(--muted)] mt-1">
                  Brand films and short-form narratives shaped through pacing, light and sound.
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 flex-shrink-0">
                <div className="font-mono text-lg text-[var(--accent-green)]">03</div>
              </div>
              <div>
                <div className="font-mono text-xl text-[var(--text)]">Music Videos</div>
                <div className="text-[var(--muted)] mt-1">
                  Performance-led direction with cinematic cut — built around rhythm, not trends.
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 flex-shrink-0">
                <div className="font-mono text-lg text-[var(--accent-green)]">04</div>
              </div>
              <div>
                <div className="font-mono text-xl text-[var(--text)]">Design</div>
                <div className="text-[var(--muted)] mt-1">
                  Visual identity systems, artwork and layouts that stay calm under visual pressure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work / Approach */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ProjectGrid projects={allProjects.slice(0, 6)} />
          </div>
          <aside className="lg:col-span-5 pt-6">
            <p className="font-mono text-xs uppercase tracking-wide text-[var(--muted)]">Approach</p>
            <h2 className="font-mono text-2xl text-[var(--text)]">We think in sequences, not deliverables.</h2>
            <p className="text-[var(--muted)] mt-3">
              Listen → define → structure → execute → refine. One strong idea, carried through every frame, cut, and output.
            </p>
            <p className="text-[var(--muted)] mt-3">
              Based in Paphos, Cyprus with UK roots — available on-location across Cyprus and for projects in the UK and Europe.
            </p>
          </aside>
        </div>
      </section>

      {/* FAQ (trust + long-tail SEO) */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">FAQ</p>
        <h2 className="font-mono text-2xl text-[var(--text)] mt-2">Quick answers</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="border border-[var(--accent-dim)] rounded-2xl p-6">
            <div className="font-mono text-[var(--text)]">Where are you based?</div>
            <div className="text-[var(--muted)] mt-2">
              nuViz is based in Paphos, Cyprus — originally built in the UK. We work locally and travel for the right project.
            </div>
          </div>

          <div className="border border-[var(--accent-dim)] rounded-2xl p-6">
            <div className="font-mono text-[var(--text)]">What kinds of clients do you work with?</div>
            <div className="text-[var(--muted)] mt-2">
              Artists, labels, theatres, studios and brands that want a distinct visual language — high level, alternative, not generic.
            </div>
          </div>

          <div className="border border-[var(--accent-dim)] rounded-2xl p-6">
            <div className="font-mono text-[var(--text)]">What’s the usual process?</div>
            <div className="text-[var(--muted)] mt-2">
              A short discovery call, a clear direction, then production and delivery. You get a focused system, not 200 random options.
            </div>
          </div>

          <div className="border border-[var(--accent-dim)] rounded-2xl p-6">
            <div className="font-mono text-[var(--text)]">How fast do you reply?</div>
            <div className="text-[var(--muted)] mt-2">
              Within one business day. We’ll respond with a proposed direction, structure, and timeline.
            </div>
          </div>
        </div>
      </section>

      {/* Quiet CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-[var(--accent-dim)]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="font-mono text-xl text-[var(--text)]">Start with a reference and an intention.</h2>
            <p className="text-[var(--muted)] mt-2">
              We respond within one business day with a proposed direction, structure, and timeline.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button to="/contact">Begin a project</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
