import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import TextLink from "../components/ui/TextLink";
import { usePageMeta } from "../hooks/usePageMeta";

const About = () => {
  usePageMeta({
    title: "About nuViz | UK-built, Cyprus-based Visual Systems Studio",
    description:
      "nuViz is a high-level alternative visual systems studio — built in the UK, now based in Paphos, Cyprus. Photography, film, music videos and design for artists, labels, theatres and brands.",
    canonicalPath: "/about",
  });

  return (
    <div>
      {/* Intro */}
      <Section className="pt-16">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] code-prefix code-prefix-sm" data-prefix="//">
          About
        </p>

        <h1 className="font-mono text-4xl md:text-5xl text-[var(--text)] matrix-glow">
          We build visual systems.
        </h1>

        <p className="text-[var(--muted)] mt-4 max-w-3xl">
          nuViz is a high-level alternative studio built in the UK and now based in Paphos, Cyprus. We work across photography, film,
          music videos and design — not as separate services, but as one continuous language.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button to="/contact">Work with nuViz</Button>
          <Button variant="ghost" to="/work">
            View work
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-[var(--muted)]">
          <div className="matrix-panel rounded-2xl px-4 py-3">UK-built</div>
          <div className="matrix-panel rounded-2xl px-4 py-3">Paphos-based</div>
          <div className="matrix-panel rounded-2xl px-4 py-3">Small crews</div>
          <div className="matrix-panel rounded-2xl px-4 py-3">In-house post</div>
        </div>
      </Section>

      {/* Manifesto */}
      <Section tone="borderTop">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Manifesto</p>
            <h2 className="font-mono text-2xl text-[var(--text)] mt-2">
              Restraint, rhythm, and signal.
            </h2>
            <p className="text-[var(--muted)] mt-4">
              We reduce until the image becomes inevitable — then we build the system around it. No filler. No generic templates.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Values",
                  text: "Precision, patience, and calm direction. Space for experimentation — with a clear finish line.",
                },
                {
                  title: "Approach",
                  text: "Define the idea → structure the system → execute cleanly. Less noise, more signal.",
                },
                {
                  title: "Collaboration",
                  text: "We work well with artists, labels, theatres, agencies, and in-house teams. Credits stay clear.",
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

      {/* Credibility / Clients */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Selected collaborators</p>
            <h2 className="font-mono text-2xl text-[var(--text)] mt-2">
              Work that lives in culture-facing rooms.
            </h2>
            <p className="text-[var(--muted)] mt-4">
              Past collaborations include MIF Manchester, MC DRS, Children of Zeus, Manchester Royal Theatre — and more across music,
              performance and independent brand worlds.
            </p>
            <p className="text-xs text-[var(--muted)] mt-3">
              For detailed credits and roles,{" "}
              <TextLink to="/contact">request a project list</TextLink>.
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
                nuViz is not a “content” studio. We’re built for high-level projects that need a distinct visual language — alternative,
                intentional, and engineered to hold up over time.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Story / Locations */}
      <Section tone="borderTop">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-mono text-2xl text-[var(--text)]">Studio story</h2>
            <p className="text-[var(--muted)] mt-4">
              nuViz was built in the UK — shaped by late nights, small crews, and an obsession with rhythm: frames, typography, cuts,
              and light.
            </p>
            <p className="text-[var(--muted)] mt-3">
              Now based in Paphos, Cyprus, we work locally and travel for the right project. Pre-production stays structured, shoot days
              stay calm, and post stays close.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact">Book a call</Button>
              <Button variant="ghost" to="/work">
                Browse projects
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="matrix-panel rounded-2xl p-6">
              <h3 className="font-mono text-lg text-[var(--text)]">Base & coverage</h3>
              <p className="text-sm text-[var(--muted)] mt-3">
                <span className="text-[var(--text)]">Based:</span> Paphos, Cyprus
              </p>
              <p className="text-sm text-[var(--muted)] mt-2">
                <span className="text-[var(--text)]">Origin:</span> United Kingdom
              </p>
              <p className="text-sm text-[var(--muted)] mt-2">
                <span className="text-[var(--text)]">Area served:</span> Cyprus · UK · Europe
              </p>

              <div className="mt-5 border-t border-[var(--accent-dim)] pt-5">
                <p className="text-sm text-[var(--muted)]">
                  For quick-turn edits, remote direction, or on-location production,{" "}
                  <TextLink to="/contact">send a short brief</TextLink>.
                </p>
              </div>
            </div>

            <div className="mt-4 border border-[var(--accent-dim)] rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">Typical projects</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                <li>• Editorial portraits & press systems</li>
                <li>• Campaign stills & brand photography</li>
                <li>• Music video direction & post</li>
                <li>• Identity systems & artwork</li>
                <li>• Short films & performance visuals</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Light FAQ (SEO) */}
      <Section>
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">FAQ</p>
        <h2 className="font-mono text-2xl text-[var(--text)] mt-2">How we work</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="matrix-panel rounded-2xl p-6">
            <div className="font-mono text-[var(--text)]">Do you work in the UK and Cyprus?</div>
            <div className="text-[var(--muted)] mt-2">
              Yes. We’re based in Paphos, Cyprus with UK roots and regular UK availability — plus travel across Europe when it fits.
            </div>
          </div>

          <div className="matrix-panel rounded-2xl p-6">
            <div className="font-mono text-[var(--text)]">What makes nuViz “alternative”?</div>
            <div className="text-[var(--muted)] mt-2">
              We don’t chase trends. We build a visual language that holds — restrained, deliberate, and recognisable.
            </div>
          </div>

          <div className="matrix-panel rounded-2xl p-6">
            <div className="font-mono text-[var(--text)]">Do you keep post in-house?</div>
            <div className="text-[var(--muted)] mt-2">
              Yes. Editing and finishing stay close to the original intent. We collaborate with specialists when the system needs it.
            </div>
          </div>

          <div className="matrix-panel rounded-2xl p-6">
            <div className="font-mono text-[var(--text)]">How do we start?</div>
            <div className="text-[var(--muted)] mt-2">
              Send a brief, a reference, and your timeline. We’ll reply with direction, scope, and next steps.
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
