"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Thread SVG Component
function ThreadSVG({ progress }: { progress: number }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9ca084" />
          <stop offset="50%" stopColor="#c7938a" />
          <stop offset="100%" stopColor="#e8a76e" />
        </linearGradient>
      </defs>

      {/* Thread path that draws as user scrolls */}
      <motion.path
        d="M-50,600
           C100,600 200,500 300,450
           S400,300 500,350
           S600,500 650,400
           S700,200 750,300
           S850,450 900,350
           S1000,250 1100,300
           S1200,400 1250,350"
        fill="none"
        stroke="url(#threadGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: progress }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />

      {/* Frayed edges at rupture point (viewport 3) */}
      {progress > 0.4 && progress < 0.6 && (
        <>
          <motion.path
            d="M650,400 L640,380 M650,400 L660,420 M650,400 L645,425"
            fill="none"
            stroke="#c7938a"
            strokeWidth="1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </>
      )}

      {/* Patch at mending point (viewport 4) */}
      {progress > 0.55 && (
        <motion.ellipse
          cx="650"
          cy="400"
          rx="30"
          ry="20"
          fill="none"
          stroke="#9ca084"
          strokeWidth="2"
          strokeDasharray="5,3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: progress > 0.55 ? 0.6 : 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      )}
    </svg>
  );
}

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#F0EEE6]/90 backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
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
    </motion.nav>
  );
}

// Section Component with fade in
function Section({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
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

export default function HomeContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to thread animation
  const threadProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return threadProgress.on("change", (latest) => {
      setProgress(latest);
    });
  }, [threadProgress]);

  return (
    <div ref={containerRef} className="relative">
      <Navigation />

      {/* Background Thread */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ThreadSVG progress={progress} />
      </div>

      {/* Viewport 1: Arrival */}
      <section className="min-h-[100dvh] flex items-center justify-center relative z-10">
        <div className="container-tat text-center">
          <Section delay={0.2}>
            <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] uppercase text-[#5c5854] mb-6">
              Melbourne Counsellor & Art Therapist
            </p>
          </Section>

          <Section delay={0.4}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#1a1816] mb-8">
              Talk. Art. Therapy.
            </h1>
          </Section>

          <Section delay={0.6}>
            <p className="font-[family-name:var(--font-body)] text-xl md:text-2xl text-[#5c5854] max-w-xl mx-auto leading-relaxed">
              Stories to live by
            </p>
          </Section>

          <Section delay={0.8}>
            <div className="mt-12">
              <Link href="#about" className="cta-secondary">
                When you&apos;re ready
              </Link>
            </div>
          </Section>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-[#9ca084] rounded-full flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1 h-2 bg-[#9ca084] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Viewport 2: Something brought you here */}
      <section id="about" className="min-h-[80dvh] flex items-center relative z-10">
        <div className="container-tat py-20">
          <div className="content-narrow mx-auto">
            <Section>
              <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[#5c5854] leading-relaxed mb-8">
                Something brought you here. Maybe a conversation that keeps replaying.
                A loop you can&apos;t seem to exit. Or the quiet sense that something
                needs attention, even if you can&apos;t name it yet.
              </p>
            </Section>

            <Section delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[#1a1816] leading-relaxed">
                You&apos;re not alone in this. And there is a way through.
              </p>
            </Section>
          </div>
        </div>
      </section>

      {/* Viewport 3: The rupture / shame */}
      <section className="min-h-[80dvh] flex items-center relative z-10">
        <div className="container-tat py-20">
          <div className="content-narrow mx-auto text-center">
            <Section>
              <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] uppercase text-[#c7938a] mb-6">
                The wound that won&apos;t close alone
              </p>
            </Section>

            <Section delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[#1a1816] leading-relaxed">
                Shame thrives in isolation. It tells us we&apos;re the only one.
                That if people really knew, they&apos;d turn away. But the truth is:
                struggle is part of being human. And reaching out is its own kind of courage.
              </p>
            </Section>
          </div>
        </div>
      </section>

      {/* Viewport 4: The mending — Three Pillars */}
      <section className="min-h-[100dvh] flex items-center relative z-10">
        <div className="container-tat py-20">
          <div className="text-center mb-16">
            <Section>
              <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] uppercase text-[#9ca084] mb-4">
                How we work together
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-medium text-[#1a1816]">
                You already have what you need.
                <br />
                <span className="text-[#5c5854]">We&apos;re here to help you find it.</span>
              </h2>
            </Section>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <Section delay={0.1}>
              <div className="tat-card text-center h-full">
                <div className="w-12 h-12 rounded-full bg-[#9ca084]/10 flex items-center justify-center mx-auto mb-6">
                  <span className="font-[family-name:var(--font-display)] text-xl text-[#9ca084]">1</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#1a1816] mb-4">
                  Talk
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed">
                  Finding and owning your language. We create space for what&apos;s
                  already inside you to emerge — honesty, new ideas, trying different possibilities.
                </p>
              </div>
            </Section>

            <Section delay={0.2}>
              <div className="tat-card text-center h-full">
                <div className="w-12 h-12 rounded-full bg-[#e8a76e]/10 flex items-center justify-center mx-auto mb-6">
                  <span className="font-[family-name:var(--font-display)] text-xl text-[#e8a76e]">2</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#1a1816] mb-4">
                  Art
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed">
                  Making the invisible visible. When words aren&apos;t enough,
                  we use images, objects, and the whiteboard to externalise what&apos;s hard to say.
                </p>
              </div>
            </Section>

            <Section delay={0.3}>
              <div className="tat-card text-center h-full">
                <div className="w-12 h-12 rounded-full bg-[#c7938a]/10 flex items-center justify-center mx-auto mb-6">
                  <span className="font-[family-name:var(--font-display)] text-xl text-[#c7938a]">3</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-[#1a1816] mb-4">
                  Therapy
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[#5c5854] leading-relaxed">
                  The relational container where both happen. Two sit together.
                  One holds the fabric steady. The other chooses the stitch.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* Viewport 5: About Max / Reweaving */}
      <section className="min-h-[80dvh] flex items-center relative z-10">
        <div className="container-tat py-20">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <Section>
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#9ca084]/20 to-[#c7938a]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-[#9ca084]/30 mx-auto mb-6" />
                  <p className="font-[family-name:var(--font-body)] text-[#5c5854] italic">
                    Photo of Max
                  </p>
                </div>
              </div>
            </Section>

            <div>
              <Section delay={0.1}>
                <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] uppercase text-[#9ca084] mb-4">
                  About Max
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-medium text-[#1a1816] mb-6">
                  From making images
                  <br />
                  to making sense.
                </h2>
              </Section>

              <Section delay={0.2}>
                <p className="font-[family-name:var(--font-body)] text-lg text-[#5c5854] leading-relaxed mb-6">
                  Fifteen years as a professional photographer taught me to notice
                  what lives in the frame and what breathes just outside it.
                  Twelve months in Buddhist monasteries across Thailand, India, and Australia
                  taught me about awareness, presence, and the interconnected nature of experience.
                </p>
              </Section>

              <Section delay={0.3}>
                <p className="font-[family-name:var(--font-body)] text-lg text-[#1a1816] leading-relaxed mb-8">
                  Now I help people tell a different kind of story — the ones they carry
                  inside about who they are, what happened, and what matters.
                </p>
              </Section>

              <Section delay={0.4}>
                <div className="flex flex-wrap gap-4 text-sm font-[family-name:var(--font-display)] text-[#5c5854]">
                  <span className="px-4 py-2 bg-[#9ca084]/10 rounded-full">Master of Counselling</span>
                  <span className="px-4 py-2 bg-[#9ca084]/10 rounded-full">Advanced Diploma Art Therapy</span>
                  <span className="px-4 py-2 bg-[#9ca084]/10 rounded-full">Social Meditation Facilitator</span>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </section>

      {/* Viewport 6: The Invitation / CTA */}
      <section className="min-h-[80dvh] flex items-center relative z-10">
        <div className="container-tat py-20">
          <div className="content-narrow mx-auto text-center">
            <Section>
              <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] uppercase text-[#9ca084] mb-6">
                Working Together
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-medium text-[#1a1816] mb-8">
                When you&apos;re ready.
              </h2>
            </Section>

            <Section delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[#5c5854] leading-relaxed mb-4">
                $130 per session · 60 minutes
              </p>
              <p className="font-[family-name:var(--font-body)] text-lg text-[#5c5854] leading-relaxed mb-8">
                Melbourne Integrated Therapies, Thornbury
                <br />
                In-person and telehealth available
              </p>
            </Section>

            <Section delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="mailto:hello@talkarttherapy.com.au" className="cta-primary">
                  Book a free 15-minute call
                </Link>
                <Link href="/working-together" className="cta-secondary">
                  Learn more
                </Link>
              </div>
            </Section>

            <Section delay={0.4}>
              <div className="mt-16 pt-8 border-t border-[#9ca084]/20">
                <p className="font-[family-name:var(--font-body)] text-[#5c5854]">
                  Or reach out directly:
                  <br />
                  <a href="mailto:hello@talkarttherapy.com.au" className="text-[#9ca084] hover:text-[#7d8268] transition-colors underline underline-offset-4">
                    hello@talkarttherapy.com.au
                  </a>
                </p>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-[#9ca084]/20">
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
              Registered Counsellor · Medicare rebates available · Supervised practice
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
