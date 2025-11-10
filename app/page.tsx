"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  HeartHandshake,
  CalendarDays,
  MapPin,
  ArrowRight,
  HandHeart,
  ExternalLink,
} from "lucide-react";

const DONATE_URL = "https://support.ewb-usa.org/checkout/donation?eid=83710"; // EWB USA donation page
const JOIN_FORM_URL = "https://groupme.com/join_group/109684480/Nn92mV0U"; // GroupMe join link

const projects = [
  {
    title: "Clean Water — Valle Verde, Guatemala",
    summary:
      "Designing a gravity-fed water distribution system for 120 households with community-owned maintenance.",
    impact: "120 households | 600+ residents",
  },
  {
    title: "Bridge to School — La Esperanza, Nicaragua",
    summary:
      "Pedestrian footbridge enabling year-round school access during the rainy season.",
    impact: "2 villages | 180 students",
  },
  {
    title: "Solar Microgrid — Baja California, MX",
    summary:
      "Off-grid solar + battery for a rural clinic; training local technicians for upkeep.",
    impact: "1 clinic | 1,500 patients/yr",
  },
];

const events = [
  { date: "Nov 5, 2025", title: "General Body Meeting", location: "SDSU Student Union 220" },
  { date: "Nov 12, 2025", title: "SolidWorks Workshop", location: "Engineering 201" },
  { date: "Dec 3, 2025", title: "Fundraiser Night", location: "Mission Valley" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/90 border-b backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Logo + Title */}
          <div className="flex items-center gap-2 shrink-0">
            <Image
              src="/clear-small-logo_1.png"
              alt="EWB SDSU logo"
              width={64}
              height={64}
              className="h-12 w-12 object-contain"
              priority
              sizes="48px"
            />
            <span className="text-lg font-semibold tracking-tight">EWB @ SDSU</span>
          </div>

          {/* Middle: Nav */}
          <nav className="flex-1 flex justify-center items-center gap-10 text-base font-medium">
            <a href="#projects" className="hover:text-gray-700">Projects</a>
            <a href="#events" className="hover:text-gray-700">Events</a>
            <a href="#team" className="hover:text-gray-700">Team</a>
            <a href="#sponsors" className="hover:text-gray-700">Sponsors</a>
            <a href="#contact" className="hover:text-gray-700">Contact</a>
          </nav>

          {/* Right: Donate */}
          <div className="flex items-center gap-2 shrink-0">
            <Button asChild className="rounded-2xl bg-blue-600 hover:bg-blue-700 text-white">
              <a href={DONATE_URL} target="_blank" rel="noreferrer">
                <HandHeart className="mr-2 h-4 w-4" />
                Donate
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-100 rounded-full opacity-30 blur-3xl z-[-1]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-blue-900 whitespace-nowrap"
              >
                BUILDING A BETTER WORLD.
              </motion.h1>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl">
                We are the San Diego State chapter of Engineers Without Borders USA. Students and professionals
                collaborating on sustainable, community-driven projects at home and abroad.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Please mention <strong>“SDSU Chapter”</strong> in the donation note so your gift is directed to our team.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl text-white">
                  <a href={DONATE_URL} target="_blank" rel="noreferrer" className="flex items-center">
                    <HeartHandshake className="mr-2 h-4 w-4 text-white" /> Donate
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl">
                  <a href={JOIN_FORM_URL} target="_blank" rel="noreferrer">
                    Join the Chapter
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div className="mt-10 flex justify-start">
                <a href="#projects" className="text-blue-600 hover:underline flex items-center gap-2">
                  See Our Projects <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">What We Do</h2>
          <p className="text-lg text-gray-700 mb-4">
            Engineers Without Borders at SDSU is committed to addressing real-world challenges through sustainable engineering.
            We work alongside communities to co-design water, energy, and infrastructure solutions that empower and uplift.
          </p>
          <p className="text-lg text-gray-700">
            From international water systems to local outreach and technical workshops, our members gain hands-on experience while making global impact.
          </p>
        </div>
      </section>

    {/* Projects Section */}
<section id="projects" className="py-16">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-blue-900 mb-4">Projects</h2>

    <p className="text-gray-700 mb-6">
      Our chapter is working with a village of 1,500 people called <strong>Mbaala, Uganda</strong>.
      The community has determined that water is their greatest need. Their current water source is
      exposed and shared with animals, resulting in unclean and contaminated water; the community has
      suffered multiple outbreaks of diseases such as typhoid in the past. Additionally, the water source
      is separated by an extensive field, leaving a difficult journey for the children and the elderly
      gathering the water. Due to this challenge, the children have experienced stunted growth, delayed
      education, and have experienced violent attacks such as rape.
    </p>

    <p className="text-gray-700 mb-6">
      Our solution is to develop a pump system within the boundaries of the community. We plan to carry
      out hydrogeological and community surveys to determine nearby groundwater sources, drill a borehole
      to access it, and design and install a pump to gather the water. A detailed breakdown for the funding
      of the project is shown in the table below. The total cost assumes the lowest cost for each step and
      does not account for our chapter’s potential travel fees and other variables that would increase cost.
    </p>

    {/* Project photos grid */}
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-blue-900 mb-3">Project Photos</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Photo 1 */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border">
          <Image
            src="/image1.jpg"
            alt="Mbaala project photo 1"
            fill
            sizes="(max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Photo 2 */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border">
          <Image
            src="/image5.jpg"
            alt="Mbaala project photo 2"
            fill
            sizes="(max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Photo 3 */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border">
          <Image
            src="/image3.jpg"
            alt="Mbaala project photo 3"
            fill
            sizes="(max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Photo 4 */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border">
          <Image
            src="/image6.jpg"
            alt="Mbaala project photo 4"
            fill
            sizes="(max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Photo 5 */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border">
          <Image
            src="/image9.jpg"
            alt="Mbaala project photo 3"
            fill
            sizes="(max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        {/* Photo 6 */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border">
          <Image
            src="/image10.jpg"
            alt="Mbaala project photo 3"
            fill
            sizes="(max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>


      </div>
    </div>
  </div>
</section>

      {/* Events anchor target */}
      <section id="events" className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-700">We’ll list your events here.</p>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Team</h2>
          <p className="text-gray-700 mb-6">
            Our student-led team brings together engineers and non-engineers to plan, design, and execute projects.
          </p>

          {/* Group Photo (optional) */}
<figure className="rounded-2xl overflow-hidden border w-full max-w-5xl mx-auto">
  <div className="relative w-full aspect-[16/9]">
    <Image
      src="/groupphoto.JPG"
      alt="EWB SDSU team group photo"
      fill
      sizes="(max-width: 1024px) 100vw, 1100px"
      className="object-cover"
      priority
    />
  </div>
  <figcaption className="text-sm text-gray-500 px-4 py-3 text-center">
    EWB @ SDSU — 2025 team
  </figcaption>
</figure>

          {/* (Optional) Headshots grid — keep this comment INSIDE JSX so it’s valid */}
          {/*
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Savian Perris", role: "President", img: "/team/savian.jpg" },
              { name: "Your Name", role: "VP Projects", img: "/team/you.jpg" },
            ].map((m) => (
              <div key={m.name} className="rounded-2xl border p-4">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3">
                  <p className="font-medium">{m.name}</p>
                  <p className="text-sm text-gray-600">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
          */}
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Sponsors &amp; Partners</h2>
          <p className="text-gray-700">Coming soon — sponsor tiers, logos, and how to support.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Contact</h2>
            <p className="text-gray-700">Join our channels to stay up to date on meetings, socials, and project work.</p>
            <div className="mt-3 space-y-2">
  <p className="text-gray-800 font-medium">To join the club, join our GroupMe:</p>
  <a
    href="https://groupme.com/join_group/109684480/Nn92mV0U"
    target="_blank"
    rel="noreferrer"
    className="text-blue-600 underline break-words"
  >
    https://groupme.com/join_group/109684480/Nn92mV0U
  </a>

  <p className="text-gray-800 font-medium mt-3">Follow our Instagram:</p>
  <a
    href="https://instagram.com/EWBSDSU"
    target="_blank"
    rel="noreferrer"
    className="text-blue-600 underline"
  >
    @EWBSDSU
  </a>

  <p className="mt-3 text-gray-700">
    To learn and stay updated on current events, meetings, and socials!
  </p>
</div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild>
                <a href="https://groupme.com/join_group/109684480/Nn92mV0U" target="_blank" rel="noreferrer" className="inline-flex items-center">
                  GroupMe <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://instagram.com/EWBSDSU" target="_blank" rel="noreferrer" className="inline-flex items-center">
                  Instagram <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold mb-2">Email Us</h3>
            <a
              className="inline-flex items-center gap-2 text-blue-700 hover:underline"
              href="mailto:president.ewbsdsu@gmail.com"
            >
              <Mail className="h-4 w-4" />
              president.ewbsdsu@gmail.com
            </a>
            <p className="text-sm text-gray-600 mt-3">
              Questions about meetings, joining, or the Mbaala project? We’d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600">
          © {new Date().getFullYear()} Engineers Without Borders — SDSU Chapter
        </div>
      </footer>
    </div>
  );
}