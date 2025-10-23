
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Mail,
  HeartHandshake,
  CalendarDays,
  MapPin,
  ArrowRight,
  HandHeart,
  Users,
  Globe,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";

const DONATE_URL = "https://support.ewb-usa.org/checkout/donation?eid=83710"; // replace with SDSU’s real page later
const JOIN_FORM_URL = "https://forms.gle/your-google-form"; // replace with your join form
const NEWSLETTER_URL = "https://your-mailchimp-list.com"; // replace with your mailing list

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

export default function EWBSDSU() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Globe className="h-6 w-6" aria-hidden="true" />
            <span className="font-semibold tracking-tight">EWB @ SDSU</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:text-gray-700">Projects</a>
            <a href="#events" className="hover:text-gray-700">Events</a>
            <a href="#team" className="hover:text-gray-700">Team</a>
            <a href="#sponsors" className="hover:text-gray-700">Sponsors</a>
            <a href="#contact" className="hover:text-gray-700">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="rounded-2xl">
              <a href={DONATE_URL} target="_blank" rel="noreferrer">
                <HandHeart className="mr-2 h-4 w-4" /> Donate
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight"
              >
                Engineering change with community partners
              </motion.h1>
              <p className="mt-4 text-lg text-gray-600 max-w-xl">
                We are the San Diego State chapter of Engineers Without Borders USA.
                Students and professionals collaborating on sustainable, community-driven projects at home and abroad.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Please mention <strong>“SDSU Chapter”</strong> in the donation note so your gift is directed to our team.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href={DONATE_URL} target="_blank" rel="noreferrer">
                    <HeartHandshake className="mr-2 h-5 w-5" /> Donate
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl">
                  <a href={JOIN_FORM_URL} target="_blank" rel="noreferrer">
                    Join the Chapter <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
