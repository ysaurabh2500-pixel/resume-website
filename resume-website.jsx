import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Github, Linkedin, ExternalLink, BadgeCheck, BookOpen, Library, GraduationCap, Briefcase, Languages, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// === CONFIG: Edit these to update your resume ===
const PROFILE = {
  name: "Saurab Yadav",
  role: "Library & Information Science Professional",
  location: "Jaunpur, Uttar Pradesh, India",
  email: "ysaurabh2500@gmail.com",
  phone: "+91 90442 56550",
  summary:
    "Detail-oriented librarian with experience in academic and school environments. Skilled in classification, cataloguing (AACR2/RDA), OPAC, SOUL 3.0, and digital library operations. Focused on improving discoverability, user experience, and service quality.",
  links: [
    { label: "GitHub", href: "https://github.com/", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  ],
};

const SKILLS = [
  "SOUL 3.0",
  "INDCAT",
  "KOHA (basic)",
  "DDC",
  "AACR2",
  "RDA",
  "OPAC",
  "MS Office",
];

const EXPERIENCE = [
  {
    org: "St. Xavier’s Inter College",
    role: "Librarian",
    period: "2024 – Present",
    points: [
      "Managed circulation, reference services, and collection development for school users.",
      "Implemented basic KOHA modules and improved OPAC accessibility.",
      "Conducted user orientation and reading programs to increase footfall.",
    ],
  },
  {
    org: "Veer Bahadur Singh Purvanchal University (VBSPU)",
    role: "Library Trainee",
    period: "2023 – 2024",
    points: [
      "Processed and catalogued resources using AACR2/RDA; applied DDC classification.",
      "Maintained serials and e-resources records; assisted with repository workflows.",
      "Supported SOUL 3.0 operations and metadata cleanup.",
    ],
  },
];

const EDUCATION = [
  { degree: "M.Lib.", org: "2024", detail: "Master of Library & Information Science" },
  { degree: "B.Lib.", org: "2022", detail: "Bachelor of Library & Information Science" },
  { degree: "B.Com", org: "2020", detail: "Bachelor of Commerce" },
];

const CERTS = ["CCC", "DCM", "Pre-Service Training"];

const LANGUAGES = ["Hindi", "English"];

const PROJECTS = [
  {
    title: "OPAC Revamp & User Guide",
    tagline: "Simplified OPAC search experience with step-by-step Hindi/English guide.",
    href: "#",
  },
  {
    title: "Metadata Cleanup Script (Excel)",
    tagline: "Standardized author/title fields for 1,500+ records.",
    href: "#",
  },
];

// === UI Helpers ===
const Section = ({ icon: Icon, title, children }) => (
  <section className="scroll-mt-24" id={title.toLowerCase()}>
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5 text-emerald-700" />
      <h2 className="text-xl font-semibold tracking-tight text-emerald-900">{title}</h2>
    </div>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="px-3 py-1 rounded-2xl border text-sm bg-amber-50 border-amber-200 text-emerald-900">
    {children}
  </span>
);

export default function ResumeSite() {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1600')] bg-fixed bg-cover bg-center text-slate-900">
      <div className="backdrop-brightness-95 min-h-screen">
        {/* Navbar */}
        <nav className="sticky top-0 z-30 backdrop-blur border-b bg-amber-50/80">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight text-emerald-900">SY</a>
            <div className="hidden md:flex items-center gap-6 text-sm text-emerald-800">
              <a href="#about" className="hover:underline">About</a>
              <a href="#skills" className="hover:underline">Skills</a>
              <a href="#experience" className="hover:underline">Experience</a>
              <a href="#education" className="hover:underline">Education</a>
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
            <div className="flex gap-2">
              <Button asChild className="rounded-2xl bg-emerald-700 hover:bg-emerald-800">
                <a href={`mailto:${PROFILE.email}`}>
                  <Mail className="w-4 h-4 mr-2" /> Email
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl border-emerald-700 text-emerald-700">
                <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
                  <Phone className="w-4 h-4 mr-2" /> Call
                </a>
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header id="home" className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-[1.4fr,1fr] gap-8 items-center"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-emerald-900">
                {PROFILE.name}
              </h1>
              <p className="mt-2 text-lg text-emerald-800">
                {PROFILE.role}
              </p>
              <p className="mt-4 text-emerald-900 bg-amber-50/70 p-3 rounded-xl shadow">
                {PROFILE.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Pill><MapPin className="inline w-4 h-4 mr-1" /> {PROFILE.location}</Pill>
                <Pill><Mail className="inline w-4 h-4 mr-1" /> {PROFILE.email}</Pill>
                <Pill><Phone className="inline w-4 h-4 mr-1" /> {PROFILE.phone}</Pill>
              </div>
              <div className="mt-6 flex gap-3">
                {PROFILE.links.map((l) => (
                  <Button key={l.label} variant="outline" asChild className="rounded-2xl border-emerald-700 text-emerald-700">
                    <a href={l.href} target="_blank" rel="noreferrer">
                      <l.icon className="w-4 h-4 mr-2" /> {l.label}
                    </a>
                  </Button>
                ))}
                <Button variant="secondary" className="rounded-2xl bg-emerald-700 text-white" onClick={() => window.print()}>
                  <Download className="w-4 h-4 mr-2" /> Print / Save PDF
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-40 h-40 rounded-3xl bg-amber-100 grid place-items-center shadow-inner border-4 border-emerald-700">
                <Library className="w-16 h-16 text-emerald-800" />
              </div>
            </div>
          </motion.div>
        </header>

        <main className="max-w-5xl mx-auto px-4 pb-16 space-y-12">
          {/* About */}
          <Section icon={BookOpen} title="About" id="about">
            <Card className="rounded-2xl bg-amber-50/90">
              <CardContent className="p-6 leading-relaxed text-emerald-900">
                <p>
                  I specialize in library operations, classification (DDC), and cataloguing (AACR2/RDA). I enjoy building clean metadata, improving search and discovery, and guiding patrons. I aim to contribute to academic/research library growth with structured processes and service quality.
                </p>
              </CardContent>
            </Card>
          </Section>

          {/* Skills */}
          <Section icon={Wrench} title="Skills" id="skills">
            <Card className="rounded-2xl bg-amber-50/90">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-2xl border text-sm bg-white text-emerald-900 border-emerald-200">
                      {s}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Section>

          {/* Experience */}
          <Section icon={Briefcase} title="Experience" id="experience">
            <div className="space-y-4">
              {EXPERIENCE.map((job) => (
                <Card key={job.org} className="rounded-2xl bg-amber-50/90">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-lg text-emerald-900">{job.role}</h3>
                        <p className="text-emerald-800">{job.org}</p>
                      </div>
                      <p className="text-sm text-emerald-700">{job.period}</p>
                    </div>
                    <ul className="mt-3 list-disc pl-5 space-y-1 text-emerald-900">
                      {job.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section icon={GraduationCap} title="Education" id="education">
            <Card className="rounded-2xl bg-amber-50/90">
              <CardContent className="p-6 grid md:grid-cols-3 gap-4">
                {EDUCATION.map((e, i) => (
                  <div key={i} className="p-4 rounded-xl border border-emerald-200 bg-white">
                    <div className="font-semibold text-emerald-900">{e.degree}</div>
                    <div className="text-emerald-800">{e.detail}</div>
                    <div className="text-sm text-emerald-700">{e.org}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Section>

          {/* Certifications & Languages */}
          <div className="grid md:grid-cols-2 gap-6">
            <Section icon={BadgeCheck} title="Certifications">
              <Card className="rounded-2xl bg-amber-50/90">
                <CardContent className="p-6 flex flex-wrap gap-2">
                  {CERTS.map((c) => (
                    <Pill key={c}>{c}</Pill>
                  ))}
                </CardContent>
              </Card>
            </Section>
            <Section icon={Languages} title="Languages">
              <Card className="rounded-2xl bg-amber-50/90">
                <CardContent className="p-6 flex flex-wrap gap-2">
                  {LANGUAGES.map((l) => (
                    <Pill key={l}>{l}</Pill>
                  ))}
                </CardContent>
              </Card>
            </Section>
          </div>

          {/* Projects */}
          <Section icon={Library} title="Projects" id="projects">
            <div className="grid md:grid-cols-2 gap-6">
              {PROJECTS.map((p) => (
                <Card key={p.title} className="rounded-2xl bg-amber-50/90">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-emerald-900">{p.title}</h3>
                      <a href={p.href} className="text-sm inline-flex items-center gap-1 text-emerald-700 hover:underline">
                        View <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="mt-2 text-emerald-800">{p.tagline}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          {/* Contact */}
          <Section icon={Mail} title="Contact" id="contact">
            <Card className="rounded-2xl bg-amber-50/90">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 text-emerald-900">
                    <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> {PROFILE.email}</div>
                    <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {PROFILE.phone}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {PROFILE.location}</div>
                  </div>
                  <form className="space-y-3" action={`mailto:${PROFILE.email}`} method="post" encType="text/plain">
                    <input className="w-full border rounded-xl p-3 border-emerald-300" placeholder="Your Name" name="name" required />
                    <input className="w-full border rounded-xl p-3 border-emerald-300" placeholder="Your Email" name="email" type="email" required />
                    <textarea className="w-full border rounded-xl p-3 border-emerald-300" placeholder="Message" name="message" rows={4} required />
                    <Button type="submit" className="rounded-2xl bg-emerald-700 hover:bg-emerald-800">Send</Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </Section>
        </main>

        {/* Footer */}
        <footer className="border-t py-10 text-center text-sm text-emerald-900 bg-amber-50/80">
          <p>“Libraries store the energy that fuels the imagination.”</p>
          <p className="mt-2">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        </footer>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          nav, footer, #projects, #contact { display: none !important; }
          body { background: white; }
          main, header { padding: 0 !important; }
        }
      `}</style>
    </div>
  );
}
