"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

function Navigation() {
  return (
    <nav className="bg-[#F0EEE6]/90 backdrop-blur-sm py-4 sticky top-0 z-50">
      <div className="container-tat flex items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-display)] text-lg font-medium tracking-tight text-[#1a1816]">
          Talk. Art. Therapy.
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/how-i-work" className="nav-link text-[#1a1816]">How I Work</Link>
          <Link href="/what-we-explore" className="nav-link">What We Explore</Link>
          <Link href="/working-together" className="nav-link">Working Together</Link>
          <Link href="/about" className="nav-link">About</Link>
        </div>

        <Link href="/working-together" className="cta-primary text-sm py-3 px-6">
          Book a Call
        </Link>
      </div>
    </nav>
  );
}

function Section({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HowIWorkContent() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container-tat">
          <div className="content-narrow mx-auto">
            <Section>
              <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] uppercase text-[#9ca084] mb-6">
                How I Work
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1a1816] mb-8">
                I&apos;m not here with answers.
                <br />
                <span className="text-[#5c5854]">I&apos;m here with you.</span>
              </h1>
            </Section>

            <Section delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[#5c5854] leading-relaxed">
                My responsibility is to help you work through things. Your responsibility
                is to show up, be respectful, and be led by your own curiosity.
                I&apos;m not here to rescue you or tell you what to do. I&apos;m here to offer
                a process — and you can choose whether to engage.
              </p>
            </Section>
          </div>
        </div>
      </section>

      {/* Three Modalities */}
      <section className="py-20 bg-[#9ca084]/5">
        <div className="container-tat">
          <div className="max-w-4xl mx-auto">
            <Section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium text-[#1a1816] mb-12 text-center">
                Three ways we might work together
              </h2>
            </Section>

            <div className="space-y-12">
              <Section delay={0.1}>
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-1">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#9ca084] mb-2">
                      Talk
                    </h3>
                    <p className="font-[family-name:var(--font-display)] text-sm text-[#5c5854] uppercase tracking-wide">
                      Finding your language
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-[family-name:var(--font-body)] text-lg text-[#1a1816] leading-relaxed">
                      We create space for what&apos;s already inside you to emerge.
                      Perhaps in the past, there wasn&apos;t much opportunity to be
                      honest with yourself or others — to explore new ideas, try different
                      possibilities, or experiment with being kind to yourself.
                      Talk therapy is about finding and owning your language.
                    </p>
                  </div>
                </div>
              </Section>

              <div className="border-t border-[#9ca084]/20" />

              <Section delay={0.2}>
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-1">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#e8a76e] mb-2">
                      Art
                    </h3>
                    <p className="font-[family-name:var(--font-display)] text-sm text-[#5c5854] uppercase tracking-wide">
                      Making the invisible visible
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-[family-name:var(--font-body)] text-lg text-[#1a1816] leading-relaxed">
                      People often use art to represent something inside that&apos;s too
                      hard to talk about. We get things out of our heads and into something
                      tangible and physical — marks on paper, objects, images. This creates
                      a third thing in the room we can both look at and point to. It
                      provides distance, and it provides agency. The whiteboard is my
                      constant companion in sessions.
                    </p>
                  </div>
                </div>
              </Section>

              <div className="border-t border-[#9ca084]/20" />

              <Section delay={0.3}>
                <div className="grid md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-1">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#c7938a] mb-2">
                      Therapy
                    </h3>
                    <p className="font-[family-name:var(--font-display)] text-sm text-[#5c5854] uppercase tracking-wide">
                      The relational container
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-[family-name:var(--font-body)] text-lg text-[#1a1816] leading-relaxed">
                      Two sit together. One holds the fabric steady. The other chooses
                      the stitch. I see clients with hope and potential — whatever arises
                      is no problem. My stance is invitational, never prescriptive.
                      I offer experiments you can try between sessions. You lead; I accompany.
                    </p>
                  </div>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 lg:py-32">
        <div className="container-tat">
          <div className="content-narrow mx-auto">
            <Section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium text-[#1a1816] mb-8">
                What to expect in a session
              </h2>
            </Section>

            <Section delay={0.1}>
              <p className="font-[family-name:var(--font-body)] text-lg text-[#5c5854] leading-relaxed mb-6">
                Sessions are 60 minutes. We might talk the whole time. We might draw.
                We might sit with silence. There&apos;s no formula — it depends on what
                you bring and what feels alive in the room.
              </p>
            </Section>

            <Section delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-lg text-[#5c5854] leading-relaxed mb-6">
                I come from a contemplative background — Buddhist practice, social
                meditation facilitation, conscious dance. This informs how I listen:
                with presence, with patience, with genuine curiosity about your
                experience.
              </p>
            </Section>

            <Section delay={0.3}>
              <p className="font-[family-name:var(--font-body)] text-lg text-[#1a1816] leading-relaxed">
                You don&apos;t need to prepare. You don&apos;t need to know what to say.
                We start exactly where you are.
              </p>
            </Section>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a1816]">
        <div className="container-tat text-center">
          <Section>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-medium text-[#F0EEE6] mb-6">
              Curious if this might fit?
            </h2>
            <p className="font-[family-name:var(--font-body)] text-lg text-[#F0EEE6]/70 mb-8 max-w-xl mx-auto">
              I offer a free 15-minute call to explore what you&apos;re looking for
              and whether we might be a good match. No pressure, no obligation.
            </p>
            <Link
              href="/working-together"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F0EEE6] text-[#1a1816] font-[family-name:var(--font-display)] text-sm font-medium tracking-wide uppercase rounded-lg hover:bg-[#F0EEE6]/90 transition-colors"
            >
              Book a free call
            </Link>
          </Section>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#9ca084]/20">
        <div className="container-tat">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-[family-name:var(--font-display)] text-sm text-[#5c5854]">
              Talk. Art. Therapy. · Max Milne
            </p>

            <div className="flex gap-6">
              <Link href="/how-i-work" className="nav-link">How I Work</Link>
              <Link href="/what-we-explore" className="nav-link">What We Explore</Link>
              <Link href="/working-together" className="nav-link">Working Together</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/addiction" className="nav-link">Compulsive Use</Link>
            </div>

            <p className="font-[family-name:var(--font-display)] text-xs text-[#5c5854]">
              Registered Counsellor · Medicare rebates available
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
