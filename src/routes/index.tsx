import { useState, useEffect, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  CreditCard,
  Boxes,
  PlayCircle,
  ScanLine,
  ShieldCheck,
  Users,
  UsersRound,
  Check,
  Building2,
  RefreshCw,
  Wallet,
  KeyRound,
  Code2,
  Github,
  Lock,
  GitBranch,
  Layers,
  X,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";

const pdvHero = { url: "/img/pdv-hero.png" };
const paymentsAsset = { url: "/img/payments.png" };
const salesTeamAsset = { url: "/img/sales-team.png" };
const analyticsAsset = { url: "/img/analytics-panel.png" };
const crmAsset = { url: "/img/customers.png" };
const productsAsset = { url: "/img/products.png" };

// Placeholder demo video — replace with the real VendaFácil demonstration URL
// (YouTube embed, Vimeo, or hosted mp4) when available.
const DEMO_VIDEO_URL =
  "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VendaFácil — Full-Stack SaaS Engineering Case Study" },
      {
        name: "description",
        content:
          "Engineering case study of VendaFácil: a multi-tenant retail management SaaS built with React, TypeScript, Supabase, PostgreSQL, RLS and Asaas payments.",
      },
      { property: "og:title", content: "VendaFácil — Full-Stack SaaS Engineering Case Study" },
      {
        property: "og:description",
        content:
          "Multi-tenant architecture, Row Level Security, real-time inventory, payment workflows and role-based access in a production SaaS platform.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudy,
});

const highlights = [
  {
    icon: Building2,
    title: "Multi-tenant architecture",
    text: "Company-level data isolation using Supabase and Row Level Security.",
  },
  {
    icon: RefreshCw,
    title: "Real-time inventory",
    text: "Automatic stock updates after each sale with validation rules and low-stock monitoring.",
  },
  {
    icon: Wallet,
    title: "Payment workflows",
    text: "Integrated payment management with Pix support and payment status synchronization.",
  },
  {
    icon: KeyRound,
    title: "Role-based access",
    text: "Different permission levels for administrators, managers, cashiers, and sales staff.",
  },
];

const features = [
  {
    icon: ScanLine,
    title: "Point of sale (POS)",
    text: "Fast checkout flow with barcode search, cart shortcuts and multiple payment methods.",
  },
  {
    icon: UsersRound,
    title: "Customer management (CRM)",
    text: "Centralized customer records, purchase history and segmentation for each store.",
  },
  {
    icon: Boxes,
    title: "Inventory and products",
    text: "Stock levels, categories, cost and price control with low-stock visibility.",
  },
  {
    icon: BarChart3,
    title: "Sales analytics dashboard",
    text: "Revenue, orders and performance metrics rendered from live PostgreSQL data.",
  },
  {
    icon: Users,
    title: "Team and commission management",
    text: "Seller accounts, goals and automatic commission calculation per sale.",
  },
  {
    icon: CreditCard,
    title: "Payment integration",
    text: "Subscription and billing workflow integrated through the Asaas payment API.",
  },
];

const gallery = [
  {
    title: "Sales analytics dashboard",
    text: "Revenue, orders, average ticket and profit analysis computed from live sales data.",
    src: analyticsAsset.url,
  },
  {
    title: "POS interface",
    text: "Checkout screen with product grid, cart sidebar and multiple payment method selection.",
    src: pdvHero.url,
  },
  {
    title: "Customer management",
    text: "Customer base with contact data, purchase totals, birthday alerts and marketing opt-in.",
    src: crmAsset.url,
  },
  {
    title: "Product and inventory management",
    text: "Product catalog with stock status, SKUs, categories, margin and cost control.",
    src: productsAsset.url,
  },
  {
    title: "Sales team dashboard",
    text: "Seller performance with commissions, tickets and monthly goal tracking.",
    src: salesTeamAsset.url,
  },
  {
    title: "Payment management",
    text: "Billing status, Pix generation and overdue alerts handled via the Asaas integration.",
    src: paymentsAsset.url,
  },
];

const stack = [
  { label: "Frontend", value: "React + TypeScript" },
  { label: "Backend", value: "Supabase" },
  { label: "Database", value: "PostgreSQL" },
  { label: "Authentication", value: "Supabase Auth" },
  { label: "Authorization", value: "Row Level Security (RLS)" },
  { label: "Payments", value: "Asaas API" },
  { label: "Hosting", value: "Vercel" },
];

const responsibilities = [
  "React frontend implementation",
  "Supabase integration",
  "SQL and Row Level Security (RLS)",
  "Authentication and permissions",
  "Payment integration with Asaas",
  "Production deployment",
  "Feature iteration and system improvements",
];

const architectureDecisions = [
  {
    icon: Building2,
    title: "Multi-tenant design",
    text: "Implemented company-based data isolation so that each business has secure access only to its own products, customers, sales, and financial records.",
  },
  {
    icon: KeyRound,
    title: "Secure permissions",
    text: "Built a role-based permission system using Supabase Auth and Row Level Security policies to control access across different user roles.",
  },
  {
    icon: Layers,
    title: "POS and inventory synchronization",
    text: "Connected sales processing with automatic inventory updates, payment workflows, and financial reporting to maintain real-time operational data.",
  },
];

const process = [
  { stage: "Planning", items: ["Data modeling", "Multi-tenant structure", "User roles"] },
  { stage: "Implementation", items: ["React frontend", "Supabase integration", "POS workflows"] },
  { stage: "Security", items: ["Authentication", "RLS policies", "Permission validation"] },
  { stage: "Deployment", items: ["Vercel hosting", "Environment configuration", "Production testing"] },
];

const results = [
  {
    title: "6 production modules implemented",
    text: "Point of sale, inventory management, customer CRM, seller management, payment workflows, and analytics dashboards.",
  },
  {
    title: "Secure multi-tenant architecture",
    text: "Company-level data isolation implemented using Supabase Row Level Security (RLS) policies and role-based access control.",
  },
  {
    title: "Live payment integration",
    text: "Operational payment workflow connected to the Asaas API with Pix payment support and payment status management.",
  },
];

function CaseStudy() {
  const [videoOpen, setVideoOpen] = useState(false);

  const closeModal = useCallback(() => setVideoOpen(false), []);

  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [videoOpen, closeModal]);

  return (
    <main className="relative overflow-x-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] hero-glow opacity-50" />

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 lg:pt-32">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              VendaFácil · Full-stack case study
            </span>
            <h1 className="mt-7 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              <span className="text-gradient">Full-stack retail management SaaS</span> built with
              React and Supabase
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Designed and implemented a production-ready SaaS platform for retail operations,
              including point of sale, inventory management, customer CRM, sales analytics,
              authentication, and secure multi-tenant permissions.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                <PlayCircle className="h-4.5 w-4.5" />
                Watch system demo
              </button>
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Explore architecture
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mx-auto mt-20 max-w-6xl">
            <div className="pointer-events-none absolute -inset-x-10 -top-10 h-64 hero-glow opacity-60 blur-2xl" />
            <div className="laptop-frame relative">
              <img
                src={pdvHero.url}
                alt="VendaFácil POS dashboard showing product grid, cart and payment panel"
                width={1816}
                height={866}
                className="w-full rounded-xl"
              />
            </div>
            <div className="mx-auto h-3 w-[72%] rounded-b-2xl border-x border-b border-border bg-secondary/60" />
            <div className="mx-auto h-1.5 w-[46%] rounded-b-full bg-border/60" />
          </div>
        </Reveal>
      </section>

      {/* Overview */}
      <section id="overview" className="relative mx-auto max-w-4xl px-6 py-28">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">A complete business management platform</h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            VendaFácil is a cloud-based retail management platform developed as a complete SaaS
            application. The project includes inventory management, customer records, point of sale,
            payment workflows, sales analytics, role-based authentication, and company-level data
            isolation.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The application was designed around a multi-tenant architecture where each business
            operates in an isolated environment with secure access control.
          </p>
        </Reveal>
      </section>

      {/* Engineering highlights */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Engineering highlights</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article className="surface-card group h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-accent/20 group-hover:text-accent">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Key features</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 70}>
              <article className="surface-card group h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-accent/20 group-hover:text-accent">
                  <feature.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="relative mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Real application screenshots</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The following screens are from the actual application running with a production database.
          </p>
        </Reveal>
        <div className="mt-16 space-y-28">
          {gallery.map((shot, i) => (
            <Reveal key={shot.title}>
              <figure>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold sm:text-2xl">{shot.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{shot.text}</p>
                  </div>
                  <span className="shrink-0 font-display text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="surface-card mt-8 overflow-hidden p-2.5">
                  <img
                    src={shot.src}
                    alt={`${shot.title} screen of the VendaFácil platform`}
                    loading="lazy"
                    width={1600}
                    height={1008}
                    className="w-full rounded-xl"
                  />
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="relative mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Technical architecture</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Request flow from the React client through Supabase authorization down to PostgreSQL and
            external payment services.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="relative mt-16 overflow-x-auto pb-4">
            <div className="pointer-events-none absolute left-0 right-0 top-[54px] hidden h-px flow-line lg:block" />
            <div className="relative flex min-w-max gap-4 lg:grid lg:min-w-0 lg:grid-cols-7">
              {stack.map((item, i) => (
                <div key={item.label} className="flex min-w-[190px] flex-col items-center lg:min-w-0">
                  <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background font-display text-xs font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="surface-card mt-6 w-full px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <p className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-3 font-mono text-sm font-semibold text-accent">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            The application uses a multi-tenant architecture where each company operates in an
            isolated environment. Authentication, authorization, and data access are enforced through
            Supabase Row Level Security (RLS), ensuring secure company-level data isolation.
          </p>
        </Reveal>
      </section>

      {/* Architecture decisions */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Architecture decisions</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {architectureDecisions.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="surface-card group h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-accent/20 group-hover:text-accent">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">Product development and implementation</h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              I led the implementation of this SaaS application, including frontend architecture,
              backend integration, database modeling, authentication, permission management, payment
              workflows, and production deployment.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The project was developed using modern AI-assisted software development workflows
              combined with real business requirements and iterative product development.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {responsibilities.map((item) => (
                <li
                  key={item}
                  className="surface-card flex items-center gap-3 px-5 py-4 font-mono text-xs font-medium transition-colors hover:border-primary/40"
                >
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Challenge */}
      <section className="relative mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <div className="surface-card relative overflow-hidden border-primary/30 p-10 sm:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Designing secure company-level permissions
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                The most technically demanding part of the project was designing a secure multi-tenant
                permission system using Supabase Row Level Security.
              </p>
              <p>
                Each authenticated user belongs to a specific company, and every database query must
                be automatically restricted to that company&rsquo;s data.
              </p>
              <p>
                This required custom SQL policies, authentication validation, role-based UI rendering,
                and careful coordination between the React frontend and Supabase authorization rules.
              </p>
              <p>
                The objective was to guarantee complete data isolation between companies while
                maintaining a smooth user experience.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Development process */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Development process</h2>
        </Reveal>
        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-4 hidden h-px flow-line lg:block" />
          <div className="grid gap-8 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.stage} delay={i * 90}>
                <div className="relative">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background font-mono text-xs font-semibold text-accent">
                    {i + 1}
                  </span>
                  <div className="surface-card mt-7 h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                    <h3 className="text-lg font-semibold">{step.stage}</h3>
                    <ul className="mt-4 space-y-2.5 font-mono text-xs text-muted-foreground">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Results</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {results.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="surface-card h-full p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Project repository */}
      <section className="relative mx-auto max-w-5xl px-6 py-28">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Project repository</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            This project is maintained in a private Git repository due to commercial and security
            considerations.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Additional technical details and implementation discussions are available upon request.
          </p>
          <div className="surface-card mt-10 flex max-w-xl items-center gap-4 p-6">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Github className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                <p className="font-mono text-sm font-semibold text-foreground">
                  vendafasil / platform
                </p>
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <GitBranch className="h-3 w-3" /> main
                </span>
                <span className="rounded-full border border-border px-2 py-0.5 uppercase tracking-wide">
                  Private
                </span>
                <span>Private repository available upon request</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-5xl px-6 pb-36 pt-16">
        <Reveal>
          <div className="surface-card relative overflow-hidden p-12 text-center sm:p-16">
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Available for SaaS and full-stack web projects
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                I build modern web applications with React, TypeScript, Supabase, PostgreSQL, and
                cloud-based architectures, with a strong focus on secure authentication, business
                workflows, and scalable SaaS applications.
              </p>
              <a
                href="mailto:hello@example.com"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                Contact me
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Demo video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 px-4 backdrop-blur-md sm:px-6"
          onClick={closeModal}
        >
          <div
            className="demo-modal relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close demo video"
              className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/80 text-muted-foreground transition-colors hover:text-foreground sm:-right-12 sm:top-0"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-[var(--shadow-elegant)]">
              <div className="aspect-video w-full">
                <iframe
                  src={DEMO_VIDEO_URL}
                  title="VendaFácil system demonstration"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
