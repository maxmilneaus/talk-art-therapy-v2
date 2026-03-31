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
          <Link href="/how-i-work" className="nav-link">How I Work</Link>
          <Link href="/what-we-explore" className="nav-link">What We Explore</Link>
          <Link href="/working-together" className="nav-link">Working Together</Link>
          <Link href="/about" className="nav-link text-[#1a1816]">About</Link>
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

export default function AboutContent() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container-tat">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <Section>
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#9ca084]/20 to-[#c7938a]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-40 h-40 rounded-full bg-[#9ca084]/30 mx-auto mb-6" />
                  <p className="font-[family-name:var(--font-body)] text-[#5c5854] italic">
                    Photo placeholder
                  </p>
                </div>
              </div>
            </Section>

            <div>
              <Section delay={0.1}>
                <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] uppercase text-[#9ca084] mb-4">
                  About Max
                </p>
                <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-medium tracking-tight text-[#1a1816] mb-6">
                  From making images
                  <br />
                  <span className="text-[#5c5854]">to making sense.</span>
                </h1>
              </Section>

              <Section delay={0.2}>
                <p className="font-[family-name:var(--font-body)] text-lg text-[#5c5854] leading-relaxed">
                  Fifteen years helping people tell visual stories. Now helping
                  people tell a different kind — the ones they carry inside.
                </p>
              </Section>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-20 bg-[#9ca084]/5">
        <div className="container-tat">
          <div className="content-wide mx-auto">
            <Section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium text-[#1a1816] mb-12 text-center">
                The path here
              </h2>
            </Section>

            <div className="space-y-12 max-w-3xl mx-auto">
              <Section delay={0.1}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#9ca084]/20 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-display)] text-xl text-[#9ca084]">01</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#1a1816] mb-2">
                      Visual Storytelling (15 years)
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed">
                      Founded Studio Brunswick in 2015, serving clients including Kodak,
                      Google, and Universal Music Group. Learned to notice what lives in
                      the frame and what breathes just outside it. Discovered that the
                      most powerful stories are often the ones people almost don&apos;t tell.
                    </p>
                  </div>
                </div>
              </Section>

              <Section delay={0.2}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#e8a76e]/20 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-display)] text-xl text-[#e8a76e]">02</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#1a1816] mb-2">
                      Contemplative Practice (12 months)
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed">
                      Buddhist monasteries across Thailand, India, and Australia.
                      Intensive meditation practice. Social meditation facilitation training.
                      Contact Improvisation, 5Rhythms, performance art. Learned about
                      presence, awareness, and the interconnected nature of experience.
                    </p>
                  </div>
                </div>
              </Section>

              <Section delay={0.3}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#c7938a]/20 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-display)] text-xl text-[#c7938a]">03</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#1a1816] mb-2">
                      Clinical Training
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed">
                      Master of Counselling from Swinburne University. Advanced Diploma
                      in Transpersonal Art Therapy. Placement at Camcare providing
                      counselling to diverse clients. Currently completing supervised
                      practice toward full registration.
                    </p>
                  </div>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-20 lg:py-32">
        <div className="container-tat">
          <div className="content-narrow mx-auto">
            <Section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium text-[#1a1816] mb-8">
                Why I do this work
              </h2>
            </Section>

            <Section delay={0.1}>
              <p className="font-[family-name:var(--font-body)] text-lg text-[#5c5854] leading-relaxed mb-6">
                I have a deep personal history with twelve-step recovery. I know what
                it&apos;s like to feel stuck in patterns that seem impossible to break.
                To carry shame that feels permanent. To wonder if change is actually
                possible.
              </p>
            </Section>

            <Section delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-lg text-[#5c5854] leading-relaxed mb-6">
                What I&apos;ve learned — through my own work and now through supporting
                others — is that healing is possible. Not perfection. Not the erasure
                of difficulty. But the capacity to meet life&apos;s challenges with more
                awareness, more choice, more capacity to return to center.
              </p>
            </Section>

            <Section delay={0.3}>
              <p className="font-[family-name:var(--font-body)] text-lg text-[#1a1816] leading-relaxed mb-6">
                The measure isn&apos;t some idealised endpoint. It&apos;s the delta — the
                distance between what your life would have been if you kept going the
                way you were, and what it actually becomes because you chose to do the work.
              </p>
            </Section>

            <Section delay={0.4}>
              <p className="font-[family-name:var(--font-body)] text-lg text-[#5c5854] leading-relaxed italic">
                &quot;In comparison to what it could have been, it&apos;s probably a miracle.&quot;
              </p>
            </Section>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-[#9ca084]/5">
        <div className="container-tat">
          <div className="content-narrow mx-auto">
            <Section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#1a1816] mb-6 text-center">
                Credentials & Registration
              </h2>

              <div className="flex flex-wrap justify-center gap-3 text-sm font-[family-name:var(--font-display)]">
                <span className="px-4 py-2 bg-white rounded-full text-[#5c5854]">Master of Counselling (Swinburne)</span>
                <span className="px-4 py-2 bg-white rounded-full text-[#5c5854]">Advanced Diploma Transpersonal Art Therapy</span>
                <span className="px-4 py-2 bg-white rounded-full text-[#5c5854]">Registered Counsellor (in progress)</span>
                <span className="px-4 py-2 bg-white rounded-full text-[#5c5854]">Social Meditation Facilitator (Interbeing)</span>
                <span className="px-4 py-2 bg-white rounded-full text-[#5c5854]">Supervised Practice</span>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a1816]">
        <div className="container-tat text-center">
          <Section>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-medium text-[#F0EEE6] mb-6">
              Want to work together?
            </h2>
            <p className="font-[family-name:var(--font-body)] text-lg text-[#F0EEE6]/70 mb-8 max-w-xl mx-auto">
              I offer a free 15-minute call to explore what you&apos;re looking for
              and whether we might be a good match.
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
