"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="apex-hero relative overflow-hidden bg-black text-white">
        {/* Background image + overlay */}
        <div className="apex-hero-bg">
          <Image
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80"
            alt="Athletes training"
            className="apex-hero-bg-img object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1600px"
          />
          <div className="apex-hero-overlay" />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="max-w-xl py-24 md:py-32">
              <h1 className="fade-up fade-up-1 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-[0.05em]">
                MAXIMIZE YOUR FULL
                <br />
                <span className="text-apex-gold">POTENTIAL.</span>
              </h1>
              <p className="fade-up fade-up-2 mt-6 max-w-md text-sm md:text-base text-white/80">
                Mental and performance training for athletes and coaches.
              </p>

              <div className="fade-up fade-up-3 mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center rounded-full bg-apex-gold px-8 py-3 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-black shadow-md hover:bg-[#ffd15c] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Book Now
                </Link>
                <Link
                  href="#about"
                  className="inline-flex items-center rounded-full border border-white/60 px-8 py-3 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-white/90 hover:bg-white/10 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT APEX */}
      <section id="about" className="apex-about-section">
        <div className="container py-16 md:py-24">
          <div className="apex-about-layout">
            {/* LEFT: Visual side */}
            <div className="apex-about-visual about-anim-img">
              <div className="apex-about-img-main">
                <Image
                  src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=1200&q=80"
                  alt="Athlete focusing before competition"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1600px"
                />
              </div>

              {/* small floating card like Wix accent */}
              <div className="apex-about-tag">
                <span className="apex-about-tag-label">Mindset</span>
                <p className="apex-about-tag-text">
                  Confidence, focus and resilience training for high-performing
                  athletes.
                </p>
              </div>
            </div>

            {/* RIGHT: Text panel */}
            <div className="apex-about-panel about-anim-card">
              <h2 className="apex-about-kicker">
                About Apex Sports Psychology
              </h2>
              <h3 className="apex-about-heading">
                Sports psychology for peak performance.
              </h3>
              <p className="apex-about-body">
                Apex Sports Psychology helps athletes, coaches and teams unlock
                their mental edge. Through evidence-based strategies, we work on
                confidence, focus and resilience so you can perform at your best
                when it matters most.
              </p>
              <p className="apex-about-body">
                Whether you&apos;re preparing for competition, returning from
                injury or striving for the next level, our individualized
                sessions and team workshops provide the tools you need to thrive
                on and off the field.
              </p>

              <ul className="apex-about-list">
                <li>1-on-1 sessions for athletes at every level</li>
                <li>Mental skills training for teams &amp; coaches</li>
                <li>Online programs and remote coaching options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-black text-white">
        <div className="container py-16 md:py-24">
          <div className="max-w-xl fade-up fade-up-1">
            <h2 className="text-xs md:text-sm font-semibold tracking-[0.32em] uppercase text-apex-gold/90">
              Services
            </h2>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold">
              Mental performance coaching for every level.
            </h3>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="apex-card fade-up fade-up-2">
              <h4 className="text-sm font-semibold tracking-[0.18em] uppercase">
                1-on-1 Athletes
              </h4>
              <p className="mt-3 text-sm text-white/80">
                Individual sessions tailored to your specific sport, role and
                performance goals.
              </p>
            </div>
            <div className="apex-card fade-up fade-up-3">
              <h4 className="text-sm font-semibold tracking-[0.18em] uppercase">
                Teams &amp; Coaches
              </h4>
              <p className="mt-3 text-sm text-white/80">
                Group workshops and coach support to build communication,
                cohesion and culture.
              </p>
            </div>
            <div className="apex-card fade-up fade-up-4">
              <h4 className="text-sm font-semibold tracking-[0.18em] uppercase">
                Workshops &amp; Clinics
              </h4>
              <p className="mt-3 text-sm text-white/80">
                Custom talks and multi-session programs for clubs, schools and
                academies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="bg-[#101010] text-white">
        <div className="container py-16 md:py-24">
          <div className="max-w-xl fade-up fade-up-1">
            <h2 className="text-xs md:text-sm font-semibold tracking-[0.32em] uppercase text-apex-gold/90">
              Plans
            </h2>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold">
              Flexible options to fit your season.
            </h3>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="apex-plan fade-up fade-up-2">
              <h4 className="text-sm font-semibold tracking-[0.18em] uppercase">
                Single Session
              </h4>
              <p className="mt-3 text-sm text-white/80">
                Ideal for a specific competition, challenge or performance
                moment.
              </p>
            </div>
            <div className="apex-plan apex-plan-featured fade-up fade-up-3">
              <h4 className="text-sm font-semibold tracking-[0.18em] uppercase">
                Monthly Package
              </h4>
              <p className="mt-3 text-sm text-white/85">
                Ongoing support across training cycles, competitions and
                recovery.
              </p>
            </div>
            <div className="apex-plan fade-up fade-up-4">
              <h4 className="text-sm font-semibold tracking-[0.18em] uppercase">
                Team Program
              </h4>
              <p className="mt-3 text-sm text-white/80">
                Season-long programs with workshops, coach consults and player
                check-ins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ONLINE PROGRAMS */}
      <section id="online-programs" className="bg-black text-white">
        <div className="container py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="fade-up fade-up-1">
              <h2 className="text-xs md:text-sm font-semibold tracking-[0.32em] uppercase text-apex-gold/90">
                Online Programs
              </h2>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold">
                Train your mindset from anywhere.
              </h3>
              <p className="mt-5 text-sm md:text-base text-white/80">
                Access structured video lessons, guided exercises and practice
                tools through our online platform. Work at your own pace while
                still having the option to book live sessions for additional
                support.
              </p>
            </div>
            <div className="fade-up fade-up-2 relative h-[260px] md:h-[320px] rounded-2xl overflow-hidden apex-img-zoom">
              <Image
                src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=1200&q=80"
                alt="Athlete with headphones training"
                className="h-full w-full object-cover"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1600px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / BOOKING */}
      <section id="contact" className="bg-[#111111] text-white">
        <div className="container py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="fade-up fade-up-1">
              <h2 className="text-xs md:text-sm font-semibold tracking-[0.32em] uppercase text-apex-gold/90">
                Contact
              </h2>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold">
                Ready to get started?
              </h3>
              <p className="mt-5 text-sm md:text-base text-white/80">
                Share a bit about yourself, your sport and what you&apos;re
                working toward. We&apos;ll get back to you with session options
                and next steps.
              </p>

              <div className="mt-6 space-y-2 text-sm text-white/80">
                <p>Email: info@apexsportpsychology.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Location: In-person and virtual sessions available</p>
              </div>
            </div>

            <form className="fade-up fade-up-2 space-y-4">
              <div>
                <label className="block text-xs font-semibold tracking-[0.16em] uppercase mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-apex-gold/80 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-[0.16em] uppercase mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-apex-gold/80 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-[0.16em] uppercase mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-apex-gold/80 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-apex-gold px-7 py-3 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-black shadow-md hover:bg-[#ffd15c] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
