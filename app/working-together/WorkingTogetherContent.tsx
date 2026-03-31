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
          <Link href="/working-together" className="nav-link text-[#1a1816]">Working Together</Link>
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

export default function WorkingTogetherContent() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container-tat">
          <div className="content-narrow mx-auto text-center">
            <Section>
              <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] uppercase text-[#9ca084] mb-6">
                Working Together
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1a1816] mb-8">
                The practical stuff.
              </h1>
            </Section>

            <Section delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[#5c5854] leading-relaxed">
                No hidden costs, no surprise fees. Just clear information so you
                can make the right decision for you.
              </p>
            </Section>
          </div>
        </div>
      </section>

      {/* Pricing & Practical */}
      <section className="py-20 bg-[#9ca084]/5">
        <div className="container-tat">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Pricing Card */}
            <Section>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium text-[#1a1816] mb-6">
                  Pricing
                </h2>
                <div className="mb-6">
                  <p className="font-[family-name:var(--font-display)] text-5xl font-medium text-[#1a1816]">
                    $130
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-[#5c5854]">
                    per 60-minute session
                  </p>
                </div>

                <div className="space-y-4 text-[#5c5854]">
                  <p className="font-[family-name:var(--font-body)]">
                    • Medicare rebates may apply with a Mental Health Care Plan from your GP
                  </p>
                  <p className="font-[family-name:var(--font-body)]">
                    • Cancellation policy: 24 hours notice required
                  </p>
                  <p className="font-[family-name:var(--font-body)]">
                    • Sessions available weekly or fortnightly
                  </p>
                </div>
              </div>
            </Section>

            {/* Location Card */}
            <Section delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-medium text-[#1a1816] mb-6">
                  Location & Availability
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-sm font-medium uppercase tracking-wide text-[#9ca084] mb-2">
                      In-Person
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[#1a1816]">
                      Melbourne Integrated Therapies
                      <br />
                      815 High Street, Thornbury
                    </p>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-sm font-medium uppercase tracking-wide text-[#9ca084] mb-2">
                      Telehealth
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[#1a1816]">
                      Secure video sessions available for clients across Australia
                    </p>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-sm font-medium uppercase tracking-wide text-[#9ca084] mb-2">
                      Hours
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[#1a1816]">
                      Tuesday — Friday, 9am — 6pm
                      <br />
                      <span className="text-[#5c5854]">Some evening appointments available</span>
                    </p>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* First Session */}
      <section className="py-20 lg:py-32">
        <div className="container-tat">
          <div className="content-narrow mx-auto">
            <Section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium text-[#1a1816] mb-8">
                What to expect in a first session
              </h2>
            </Section>

            <Section delay={0.1}>
              <div className="space-y-6">
                <p className="font-[family-name:var(--font-body)] text-lg text-[#5c5854] leading-relaxed">
                  We&apos;ll start with what brings you here — in your own words, at your own pace.
                  There&apos;s no intake form to fill out, no diagnostic interview. Just a conversation
                  about what&apos;s happening and what you&apos;re hoping for.
                </p>

                <p className="font-[family-name:var(--font-body)] text-lg text-[#5c5854] leading-relaxed">
                  I&apos;ll share a bit about how I work and we&apos;ll explore whether we might be
                  a good fit. You&apos;re welcome to ask anything — about my background, my approach,
                  or what sessions might look like going forward.
                </p>

                <p className="font-[family-name:var(--font-body)] text-lg text-[#1a1816] leading-relaxed">
                  There&apos;s no pressure to commit. Sometimes people know immediately; sometimes
                  they need time to sit with it. Both are fine.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* Free Consult */}
      <section className="py-20 bg-[#1a1816]">
        <div className="container-tat">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <Section>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-medium text-[#F0EEE6] mb-6">
                Start with a free 15-minute call
              </h2>
              <p className="font-[family-name:var(--font-body)] text-lg text-[#F0EEE6]/70 mb-8">
                A brief conversation to explore what you&apos;re looking for and whether
                we might work well together. No cost, no obligation.
              </p>
            </Section>

            <Section delay={0.2}>
              <div className="bg-[#F0EEE6] rounded-2xl p-8">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#1a1816] mb-6">
                  How to book
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:hello@talkarttherapy.com.au?subject=Free%20consultation%20request"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#9ca084]/20 flex items-center justify-center">
                      <span className="text-[#9ca084] font-medium">@</span>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-display)] font-medium text-[#1a1816]">
                        Email
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-sm text-[#5c5854]">
                        hello@talkarttherapy.com.au
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-[#9ca084]/20 flex items-center justify-center">
                      <span className="text-[#9ca084] font-medium">T</span>
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-display)] font-medium text-[#1a1816]">
                        Online booking
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-sm text-[#5c5854]">
                        Coming soon
                      </p>
                    </div>
                  </div>
                </div>

                <p className="font-[family-name:var(--font-body)] text-sm text-[#5c5854] mt-6 text-center">
                  I aim to respond within 24 hours
                </p>
              </div>
            </Section>
          </div>
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
