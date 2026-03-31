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
          <Link href="/what-we-explore" className="nav-link text-[#1a1816]">What We Explore</Link>
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

const topics = [
  {
    title: "Stress & Overwhelm",
    description: "When everything feels like too much. When rest doesn't seem to restore you. When the demands keep coming and the well is dry.",
    color: "#9ca084",
  },
  {
    title: "Anxiety",
    description: "The racing mind. The tight chest. The scenarios that play on repeat, always catastrophic. The body that won't settle.",
    color: "#e8a76e",
  },
  {
    title: "Life Transitions",
    description: "Career changes. Relationship endings or beginnings. Becoming a parent. Losing a parent. The ground shifts beneath us.",
    color: "#c7938a",
  },
  {
    title: "Relational Strain",
    description: "The same fight on repeat. The distance that grows while you're both trying. The patterns that seem impossible to break.",
    color: "#9ca084",
  },
  {
    title: "Historical Wounds",
    description: "The past that won't stay past. Childhood experiences that shape adult reactions. Events that changed the trajectory.",
    color: "#e8a76e",
  },
  {
    title: "Compulsive Patterns",
    description: "When something keeps pulling you back. Screens, substances, behaviours that temporarily soothe but ultimately harm. See the dedicated page for more.",
    color: "#c7938a",
    link: "/addiction",
  },
  {
    title: "Grief & Loss",
    description: "Death of someone dear. The end of something important. The mourning that society expects to be brief but isn't.",
    color: "#9ca084",
  },
  {
    title: "Questions of Meaning",
    description: "Is this all there is? What's the point? The quiet dread of a life that doesn't feel like your own.",
    color: "#e8a76e",
  },
];

export default function WhatWeExploreContent() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container-tat">
          <div className="content-narrow mx-auto text-center">
            <Section>
              <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] uppercase text-[#9ca084] mb-6">
                What We Explore
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1a1816] mb-8">
                Some threads people bring.
              </h1>
            </Section>

            <Section delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[#5c5854] leading-relaxed">
                This is not a diagnosis list. It&apos;s an invitation to recognise
                yourself. Each of these represents something real that people
                work through — and find their way to the other side.
              </p>
            </Section>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-20 bg-[#9ca084]/5">
        <div className="container-tat">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {topics.map((topic, index) => (
              <Section key={topic.title} delay={index * 0.1}>
                <div className="tat-card h-full">
                  <div
                    className="w-3 h-3 rounded-full mb-4"
                    style={{ backgroundColor: topic.color }}
                  />
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#1a1816] mb-3">
                    {topic.title}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed mb-4">
                    {topic.description}
                  </p>
                  {topic.link && (
                    <Link
                      href={topic.link}
                      className="font-[family-name:var(--font-display)] text-sm text-[#9ca084] hover:text-[#7d8268] transition-colors"
                    >
                      Learn more →
                    </Link>
                  )}
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* What This Is Not */}
      <section className="py-20 lg:py-32">
        <div className="container-tat">
          <div className="content-narrow mx-auto">
            <Section>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium text-[#1a1816] mb-8">
                Who this is for — and who it isn&apos;t
              </h2>
            </Section>

            <Section delay={0.1}>
              <div className="space-y-6">
                <div className="p-6 bg-[#9ca084]/10 rounded-xl">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[#1a1816] mb-2">
                    This work might fit if you:
                  </h3>
                  <ul className="font-[family-name:var(--font-body)] text-[#5c5854] space-y-2">
                    <li>• Want to work deeper, not just manage symptoms</li>
                    <li>• Are curious about your own patterns</li>
                    <li>• Are willing to feel uncomfortable sometimes</li>
                    <li>• Value honest, direct communication</li>
                    <li>• Want to build sustainable change, not quick fixes</li>
                  </ul>
                </div>

                <div className="p-6 border border-[#c7938a]/30 rounded-xl">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[#1a1816] mb-2">
                    This isn&apos;t the right fit if you&apos;re in:
                  </h3>
                  <ul className="font-[family-name:var(--font-body)] text-[#5c5854] space-y-2">
                    <li>• Acute crisis (please contact emergency services or Lifeline on 13 11 14)</li>
                    <li>• Active addiction and not yet acknowledging the problem</li>
                    <li>• Looking for a quick fix or someone to &quot;sort it out&quot;</li>
                  </ul>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#5c5854] mt-4 italic">
                    I&apos;m happy to refer you to appropriate services if we&apos;re not the right match.
                  </p>
                </div>
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
              Recognise something?
            </h2>
            <p className="font-[family-name:var(--font-body)] text-lg text-[#F0EEE6]/70 mb-8 max-w-xl mx-auto">
              The first step is a conversation. No commitment, just exploration.
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
