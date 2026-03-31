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

export default function AddictionContent() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container-tat">
          <div className="content-narrow mx-auto text-center">
            <Section>
              <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] uppercase text-[#c7938a] mb-6">
                Compulsive Use & Addiction
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1a1816] mb-8">
                When something keeps pulling you back.
              </h1>
            </Section>

            <Section delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[#5c5854] leading-relaxed">
                If you&apos;re here, something might feel out of control. That takes
                courage to look at. There&apos;s a way through — not through willpower,
                but through understanding what drives the pattern.
              </p>
            </Section>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-[#c7938a]/10">
        <div className="container-tat">
          <div className="content-narrow mx-auto">
            <Section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium text-[#1a1816] mb-8">
                The struggle is real — and it&apos;s not just about willpower
              </h2>
            </Section>

            <Section delay={0.1}>
              <div className="space-y-6">
                <p className="font-[family-name:var(--font-body)] text-lg text-[#5c5854] leading-relaxed">
                  Compulsive use — of screens, substances, pornography, social media,
                  whatever it is — often sits on top of something deeper. Trauma. Anxiety.
                  The need to escape feelings that seem too big to hold. Willpower alone
                  rarely works because it&apos;s not addressing what&apos;s underneath.
                </p>

                <p className="font-[family-name:var(--font-body)] text-lg text-[#1a1816] leading-relaxed">
                  My approach is different. We look at what the behaviour is trying
                  to solve. What need it&apos;s meeting. What would need to be different
                  for the compulsion to loosen its grip.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* What I Work With */}
      <section className="py-20 lg:py-32">
        <div className="container-tat">
          <div className="content-narrow mx-auto">
            <Section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium text-[#1a1816] mb-8 text-center">
                Areas of focus
              </h2>
            </Section>

            <Section delay={0.1}>
              <div className="grid gap-6">
                <div className="tat-card">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#1a1816] mb-3">
                    Screen & Social Media Addiction
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed">
                    The endless scroll. The phantom phone checks. The hours lost that
                    you meant to spend differently. We explore what the screen is
                    providing — distraction, connection, escape — and build alternative
                    ways to meet those needs.
                  </p>
                </div>

                <div className="tat-card">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#1a1816] mb-3">
                    Pornography & Sexual Compulsivity
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed">
                    Often layered with shame that makes it harder to reach out. I bring
                    a non-judgmental stance and understanding of how these patterns
                    develop and how they can shift. No shame, no blame — just honest
                    exploration.
                  </p>
                </div>

                <div className="tat-card">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#1a1816] mb-3">
                    Streaming & Media Consumption
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed">
                    The &quot;just one more episode&quot; that turns into a whole night.
                    The content that leaves you feeling worse but you keep returning.
                    Understanding what need the stories are filling.
                  </p>
                </div>

                <div className="tat-card">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#1a1816] mb-3">
                    Process Addictions
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed">
                    Work, exercise, food, shopping — behaviours that look healthy on
                    the surface but have become compulsive, driven by anxiety or
                    avoidance rather than genuine choice.
                  </p>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-20 bg-[#9ca084]/5">
        <div className="container-tat">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium text-[#1a1816] mb-6">
                How I work with compulsive patterns
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[#1a1816] mb-2">
                    Understanding, not suppression
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed">
                    We explore what the behaviour is doing for you. What need it meets.
                    What feelings it helps you avoid. Understanding creates choice.
                  </p>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[#1a1816] mb-2">
                    Addressing underlying trauma
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed">
                    Often compulsive use is trauma-driven. I&apos;m trauma-informed and
                    can help you work through what&apos;s underneath, when you&apos;re ready.
                  </p>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[#1a1816] mb-2">
                    Building sustainable alternatives
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed">
                    We develop other ways to meet the same needs — connection, regulation,
                    escape, stimulation — that don&apos;t carry the same costs.
                  </p>
                </div>
              </div>
            </Section>

            <Section delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#1a1816] mb-4">
                  My perspective
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed mb-4">
                  I have personal experience with twelve-step recovery. I know what
                  it&apos;s like to be in the grip of something that feels bigger than
                  you — and I know that change is possible.
                </p>
                <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed">
                  This work isn&apos;t about judgment or making you feel worse about
                  something you already feel bad about. It&apos;s about understanding,
                  compassion, and building a different relationship with yourself and
                  your patterns.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* Language Note */}
      <section className="py-16">
        <div className="container-tat">
          <div className="content-narrow mx-auto text-center">
            <Section>
              <p className="font-[family-name:var(--font-body)] text-[#5c5854] italic">
                I use &quot;compulsive use&quot; rather than &quot;addiction&quot; — it&apos;s more accurate
                and less loaded. But I know people search for &quot;addiction&quot; when they&apos;re
                looking for help, so this page uses both. What matters is finding the
                support you need, whatever words you use.
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
              Ready to explore this together?
            </h2>
            <p className="font-[family-name:var(--font-body)] text-lg text-[#F0EEE6]/70 mb-8 max-w-xl mx-auto">
              I offer a free 15-minute call — no pressure, just a conversation about
              what you&apos;re experiencing and whether I might be able to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/working-together"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#F0EEE6] text-[#1a1816] font-[family-name:var(--font-display)] text-sm font-medium tracking-wide uppercase rounded-lg hover:bg-[#F0EEE6]/90 transition-colors"
              >
                Book a free call
              </Link>
              <Link
                href="/what-we-explore"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#F0EEE6]/30 text-[#F0EEE6] font-[family-name:var(--font-display)] text-sm font-medium tracking-wide uppercase rounded-lg hover:bg-[#F0EEE6]/10 transition-colors"
              >
                Explore other topics
              </Link>
            </div>
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
