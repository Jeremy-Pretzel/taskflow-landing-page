import { useState, type FormEvent, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Check,
  CheckCircle2,
  Circle,
  Clock3,
  FolderKanban,
  Layers3,
  LayoutDashboard,
  ListChecks,
  Plus,
  Users,
} from 'lucide-react';
import {
  Link,
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="taskflow-page grain min-h-[100dvh] text-foreground">
      <header
        className="site-nav fixed inset-x-0 top-0 z-30 border-b border-border/50"
        data-testid="site-header"
      >
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            data-testid="link-logo"
            aria-label="TaskFlow home"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-[11px] bg-primary text-background shadow-[4px_4px_0_hsl(var(--secondary)/.85)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[5px_5px_0_hsl(var(--secondary)/.85)]">
              <Check className="h-[19px] w-[19px] stroke-[3]" />
            </span>
            <span className="text-[17px] font-extrabold tracking-[-0.04em]">TaskFlow</span>
          </a>
          <Link
            href="/signup"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-[12px] font-bold text-background transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            data-testid="link-nav-trial"
          >
            Start Your Free Trial
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </header>

      <main id="top">
        <section className="relative mx-auto max-w-[1240px] px-5 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-44 lg:pt-48" aria-labelledby="hero-heading">
          <div className="pointer-events-none absolute right-[-6rem] top-24 h-[28rem] w-[28rem] rounded-full border border-secondary/20 sm:right-[-4rem]">
            <div className="absolute inset-8 rounded-full border border-secondary/10" />
            <div className="absolute inset-20 rounded-full bg-secondary/10 blur-3xl" />
          </div>
          <div className="relative max-w-[760px]">
            <div>
              <p className="eyebrow-line reveal mono-font mb-7 text-[10px] font-bold uppercase tracking-[0.22em] text-secondary" data-testid="text-hero-eyebrow">A clearer week starts here</p>
              <h1 id="hero-heading" className="display-font reveal reveal-delay-1 max-w-[720px] text-[3.7rem] font-semibold leading-[0.94] text-primary sm:text-[5.4rem] lg:text-[6.25rem]" data-testid="text-hero-heading">
                Project management <span className="relative inline-block text-accent">made simple<span className="absolute -bottom-1 left-0 h-2 w-full -rotate-2 rounded-[50%] border-b-2 border-accent/60 sm:bottom-1" /></span>
              </h1>
              <p className="reveal reveal-delay-2 mt-7 max-w-[480px] text-[15px] leading-7 text-muted-foreground sm:text-[17px]" data-testid="text-hero-description">
                Plan, organise and track your team's projects from one simple workspace. TaskFlow helps small teams stay organised and get more done.
              </p>
              <div className="reveal reveal-delay-3 mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/signup"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-extrabold text-primary shadow-[0_8px_0_hsl(var(--accent)/.25)] transition-all hover:-translate-y-1 hover:shadow-[0_11px_0_hsl(var(--accent)/.25)] active:translate-y-0 active:shadow-[0_4px_0_hsl(var(--accent)/.25)]"
                  data-testid="link-hero-trial"
                >
                  Start Your Free Trial
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
              <div className="reveal reveal-delay-4 mt-9 flex items-center gap-3 text-[11px] font-semibold text-muted-foreground" data-testid="text-trial-note">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary/20 text-secondary"><Check className="h-3 w-3 stroke-[3]" /></span>
                No credit card needed
                <span className="h-1 w-1 rounded-full bg-border" />
                Set up in a few minutes
              </div>
            </div>
          </div>
        </section>

        <section id="product-preview" className="border-y border-border/80 bg-card/40" aria-labelledby="product-preview-heading">
          <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow-line mono-font text-[10px] font-bold uppercase tracking-[0.22em] text-accent">See TaskFlow in action</p>
                <h2 id="product-preview-heading" className="display-font mt-4 max-w-[520px] text-[2.65rem] font-semibold leading-[0.98] text-primary sm:text-[4rem]" data-testid="text-product-preview-heading">A calm place for the work ahead.</h2>
              </div>
            </div>
            <div className="relative">
              <div className="hero-orb absolute -right-1 top-[-2rem] z-10 flex h-[74px] w-[74px] rotate-12 items-center justify-center rounded-[22px] bg-accent text-center shadow-[8px_8px_0_hsl(var(--primary)/.12)] sm:right-2 sm:top-[-2.5rem]" data-testid="badge-product-focus">
                <span className="display-font text-[15px] font-semibold leading-[0.95]">less<br />noise</span>
              </div>
              <div className="dashboard-shell relative overflow-hidden rounded-[22px] border border-primary/20 bg-card">
                <div className="flex h-10 items-center justify-between border-b border-border bg-muted/55 px-4 sm:h-12 sm:px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-[10px] font-extrabold tracking-[-0.02em] sm:text-[11px]">Northstar launch</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                    <span className="text-[9px] font-bold text-muted-foreground">On track</span>
                  </div>
                </div>
                <div className="grid min-h-[365px] grid-cols-[52px_1fr] sm:grid-cols-[142px_1fr]">
                  <aside className="border-r border-border bg-primary px-2 py-4 sm:px-3.5">
                    <div className="mb-6 flex items-center justify-center gap-2 sm:justify-start">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-secondary text-primary"><Check className="h-3.5 w-3.5 stroke-[3]" /></span>
                      <span className="hidden text-[11px] font-extrabold text-background sm:block">TaskFlow</span>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        { icon: LayoutDashboard, label: 'Overview', active: true },
                        { icon: ListChecks, label: 'My tasks', active: false },
                        { icon: CalendarDays, label: 'Calendar', active: false },
                        { icon: Users, label: 'Team', active: false },
                      ].map(({ icon: Icon, label, active }, index) => (
                        <div key={label} className={`flex items-center justify-center gap-2 rounded-lg px-1.5 py-2 sm:justify-start sm:px-2.5 ${active ? 'bg-background/10 text-secondary' : 'text-background/50'}`} data-testid={`dashboard-nav-${index}`}>
                          <Icon className="h-3.5 w-3.5 shrink-0" />
                          <span className="hidden text-[9px] font-semibold sm:block">{label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-9 hidden rounded-xl border border-background/10 p-2.5 sm:block">
                      <div className="mb-2 flex items-center justify-between text-[8px] text-background/55"><span>Weekly focus</span><span>72%</span></div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-background/10"><div className="h-full w-[72%] rounded-full bg-secondary" /></div>
                    </div>
                  </aside>
                  <div className="bg-background/65 p-4 sm:p-6">
                    <div className="mb-5 flex items-end justify-between">
                      <div><p className="mono-font mb-1 text-[8px] font-bold uppercase tracking-[0.13em] text-muted-foreground">Monday, 14 October</p><h2 className="display-font text-[24px] font-semibold text-primary sm:text-[29px]">Good morning, team.</h2></div>
                      <div className="hidden items-center gap-1 rounded-lg bg-primary px-2.5 py-2 text-[9px] font-bold text-background sm:flex" data-testid="dashboard-new-task"><Plus className="h-3 w-3" /> New task</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {[
                        ['In progress', '08', secondaryColor()],
                        ['Due this week', '14', accentColor()],
                        ['Completed', '31', primaryColor()],
                      ].map(([label, value, color], index) => (
                        <div key={String(label)} className="rounded-xl border border-border bg-card p-2.5 sm:p-3.5" data-testid={`dashboard-stat-${index}`}>
                          <div className="mb-2 h-1 w-5 rounded-full" style={{ backgroundColor: color }} />
                          <p className="text-[8px] font-semibold text-muted-foreground sm:text-[9px]">{label}</p>
                          <p className="display-font mt-0.5 text-[23px] font-semibold text-primary sm:text-[27px]">{value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 rounded-xl border border-border bg-card p-3.5 sm:p-4">
                      <div className="mb-3"><span className="text-[10px] font-extrabold text-primary">This week's tasks</span></div>
                      <div className="space-y-1">
                        {[
                          ['Review launch notes', 'Today', 'done'],
                          ['Prepare team check-in', 'Tomorrow', 'active'],
                          ['Share project timeline', 'Thu, 17 Oct', 'upcoming'],
                        ].map(([task, due, status], index) => (
                          <div key={task} className="flex items-center gap-2.5 border-t border-border/70 py-2.5 first:border-t-0" data-testid={`dashboard-task-${index}`}>
                            {status === 'done' ? <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-secondary" /> : <Circle className={`h-3.5 w-3.5 shrink-0 ${status === 'active' ? 'text-accent' : 'text-border'}`} />}
                            <span className={`min-w-0 flex-1 truncate text-[9px] font-semibold ${status === 'done' ? 'text-muted-foreground line-through' : 'text-primary'}`}>{task}</span>
                            <span className="flex shrink-0 items-center gap-1 text-[8px] font-semibold text-muted-foreground"><Clock3 className="h-2.5 w-2.5" />{due}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="features-heading">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow-line mono-font text-[10px] font-bold uppercase tracking-[0.22em] text-secondary">Everything in its place</p>
              <h2 id="features-heading" className="display-font mt-5 text-[2.8rem] font-semibold leading-none text-primary sm:text-[4.25rem]" data-testid="text-features-heading">A simple rhythm for<br /><span className="text-accent">good work.</span></h2>
            </div>
            <p className="max-w-[280px] text-sm leading-6 text-muted-foreground sm:pb-1">The essentials for a focused team, thoughtfully kept in one workspace.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: FolderKanban, number: '01', title: 'Plan Projects', text: 'Organise projects, tasks and deadlines in one place.', tone: 'bg-secondary/13 text-secondary' },
              { icon: BarChart3, number: '02', title: 'Track Progress', text: 'See what your team is working on and keep projects moving.', tone: 'bg-accent/20 text-accent-foreground' },
              { icon: Users, number: '03', title: 'Work Together', text: 'Keep your small team organised and working toward the same goals.', tone: 'bg-primary/10 text-primary' },
            ].map(({ icon: Icon, number, title, text, tone }) => (
              <article key={number} className="feature-card group rounded-[20px] border border-border bg-background/45 p-6 sm:p-7" data-testid={`feature-card-${number}`}>
                <div className="mb-12 flex items-start justify-between">
                  <span className={`feature-icon flex h-12 w-12 items-center justify-center rounded-[15px] ${tone}`}><Icon className="h-5 w-5" /></span>
                  <span className="mono-font text-[10px] font-bold text-muted-foreground">{number}</span>
                </div>
                <h3 className="display-font text-[2rem] font-semibold text-primary">{title}</h3>
                <p className="mt-3 max-w-[260px] text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="closing-heading">
          <div className="cta-panel relative overflow-hidden rounded-[26px] px-6 py-14 text-background sm:px-14 sm:py-20 lg:px-20">
            <div className="relative z-10 max-w-[650px]">
              <p className="eyebrow-line mono-font text-[10px] font-bold uppercase tracking-[0.22em] text-secondary">Your next good week</p>
              <h2 id="closing-heading" className="display-font mt-5 text-[3rem] font-semibold leading-[0.94] sm:text-[5rem]" data-testid="text-closing-heading">Put the plan<br />in motion.</h2>
              <p className="mt-6 max-w-[430px] text-sm leading-6 text-background/65 sm:text-base">TaskFlow — Project management for small teams</p>
              <Link href="/signup" className="group mt-9 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-extrabold text-primary transition-all hover:-translate-y-1 hover:shadow-[0_10px_0_hsl(var(--secondary)/.2)]" data-testid="link-closing-trial">Start Your Free Trial <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            </div>
            <div className="absolute bottom-8 right-8 hidden rotate-[-9deg] rounded-2xl border border-background/15 bg-background/10 p-4 backdrop-blur-md lg:block">
              <div className="mb-3 flex items-center gap-2 text-secondary"><Layers3 className="h-4 w-4" /><span className="mono-font text-[9px] font-bold uppercase tracking-wider">In sync</span></div>
              <div className="flex -space-x-2">
                {['ML', 'JR', 'AK'].map((initials, index) => <span key={initials} className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary text-[9px] font-extrabold ${index === 0 ? 'bg-secondary text-primary' : index === 1 ? 'bg-accent text-primary' : 'bg-background text-background'}`}>{initials}</span>)}
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

function Signup() {
  const [, setLocation] = useLocation();
  const [formError, setFormError] = useState('');

  const submitSignup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();

    if (!name || !email) {
      setFormError('Please enter your name and email address.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setLocation('/thank-you');
  };

  return (
    <div className="taskflow-page grain min-h-[100dvh] text-foreground">
      <header className="site-nav fixed inset-x-0 top-0 z-30 border-b border-border/50" data-testid="signup-header">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center px-5 sm:px-8">
          <Link href="/" className="group flex items-center gap-2.5" data-testid="link-signup-logo" aria-label="Return to TaskFlow home">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-[11px] bg-primary text-background shadow-[4px_4px_0_hsl(var(--secondary)/.85)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[5px_5px_0_hsl(var(--secondary)/.85)]">
              <Check className="h-[19px] w-[19px] stroke-[3]" />
            </span>
            <span className="text-[17px] font-extrabold tracking-[-0.04em]">TaskFlow</span>
          </Link>
        </div>
      </header>

      <main className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-5 pb-16 pt-32 sm:px-8">
        <div className="pointer-events-none absolute right-[-9rem] top-[8rem] h-[30rem] w-[30rem] rounded-full border border-secondary/20 sm:right-[-5rem]">
          <div className="absolute inset-8 rounded-full border border-secondary/10" />
          <div className="absolute inset-20 rounded-full bg-secondary/10 blur-3xl" />
        </div>
        <section className="relative w-full max-w-[620px]" aria-labelledby="signup-heading">
          <div className="mb-8 text-center">
            <p className="eyebrow-line mono-font reveal text-[10px] font-bold uppercase tracking-[0.22em] text-secondary" data-testid="text-signup-eyebrow">TaskFlow / Start your trial</p>
            <h1 id="signup-heading" className="display-font reveal reveal-delay-1 mt-6 text-[3.5rem] font-semibold leading-[0.94] text-primary sm:text-[5.5rem]" data-testid="text-signup-heading">Start your free trial.</h1>
            <p className="reveal reveal-delay-2 mx-auto mt-5 max-w-[430px] text-[16px] leading-7 text-muted-foreground sm:text-[18px]" data-testid="text-signup-description">Bring your team's next project into one simple workspace.</p>
          </div>

          <form
            onSubmit={submitSignup}
            noValidate
            className="reveal reveal-delay-3 rounded-[24px] border border-border bg-card p-6 shadow-[0_18px_60px_hsl(var(--primary)/.08)] sm:p-8"
            data-testid="signup-form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[11px] font-bold text-primary">Name</span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-primary outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  data-testid="input-signup-name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[11px] font-bold text-primary">Email address</span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@yourteam.com"
                  className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-primary outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                  data-testid="input-signup-email"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-[11px] font-bold text-primary">Company name <span className="font-medium text-muted-foreground">(optional)</span></span>
              <input
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Your company"
                className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-primary outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                data-testid="input-signup-company"
              />
            </label>
            {formError && <p className="mt-4 text-sm font-semibold text-accent-foreground" role="alert" data-testid="signup-error">{formError}</p>}
            <button type="submit" className="group mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent text-sm font-extrabold text-primary transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_0_hsl(var(--accent)/.25)] active:translate-y-0" data-testid="button-submit-signup">
              Start Free Trial
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <p className="mt-4 text-center text-[11px] font-semibold text-muted-foreground">No credit card needed.</p>
          </form>
        </section>
      </main>
    </div>
  );
}

function ThankYou() {
  return (
    <div className="taskflow-page grain min-h-[100dvh] text-foreground">
      <header className="site-nav fixed inset-x-0 top-0 z-30 border-b border-border/50" data-testid="thank-you-header">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center px-5 sm:px-8">
          <Link href="/" className="group flex items-center gap-2.5" data-testid="link-thank-you-logo" aria-label="Return to TaskFlow home">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-[11px] bg-primary text-background shadow-[4px_4px_0_hsl(var(--secondary)/.85)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[5px_5px_0_hsl(var(--secondary)/.85)]">
              <Check className="h-[19px] w-[19px] stroke-[3]" />
            </span>
            <span className="text-[17px] font-extrabold tracking-[-0.04em]">TaskFlow</span>
          </Link>
        </div>
      </header>

      <main className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-5 pb-16 pt-32 sm:px-8">
        <div className="pointer-events-none absolute right-[-9rem] top-[8rem] h-[30rem] w-[30rem] rounded-full border border-secondary/20 sm:right-[-5rem]">
          <div className="absolute inset-8 rounded-full border border-secondary/10" />
          <div className="absolute inset-20 rounded-full bg-secondary/10 blur-3xl" />
        </div>
        <section className="relative w-full max-w-[720px] text-center" aria-labelledby="thank-you-heading">
          <p className="eyebrow-line mono-font reveal text-[10px] font-bold uppercase tracking-[0.22em] text-secondary" data-testid="text-thank-you-eyebrow">TaskFlow / Free trial confirmed</p>
          <h1 id="thank-you-heading" className="display-font reveal reveal-delay-1 mt-7 text-[4rem] font-semibold leading-[0.94] text-primary sm:text-[6rem]" data-testid="text-thank-you-heading">You're all set.</h1>
          <p className="reveal reveal-delay-2 mx-auto mt-7 max-w-[480px] text-[17px] leading-7 text-muted-foreground sm:text-[19px]" data-testid="text-thank-you-registered">Your TaskFlow free trial has been registered.</p>
          <p className="reveal reveal-delay-3 mx-auto mt-2 max-w-[480px] text-[17px] leading-7 text-muted-foreground sm:text-[19px]" data-testid="text-thank-you-next-step">Start planning your next project with TaskFlow.</p>
          <Link href="/" className="reveal reveal-delay-4 group mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-extrabold text-primary shadow-[0_8px_0_hsl(var(--accent)/.25)] transition-all hover:-translate-y-1 hover:shadow-[0_11px_0_hsl(var(--accent)/.25)] active:translate-y-0 active:shadow-[0_4px_0_hsl(var(--accent)/.25)]" data-testid="link-return-to-taskflow">
            Return to TaskFlow
            <ArrowUpRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
          </Link>
        </section>
      </main>
    </div>
  );
}

function secondaryColor() {
  return 'hsl(159 49% 47%)';
}

function accentColor() {
  return 'hsl(14 70% 63%)';
}

function primaryColor() {
  return 'hsl(177 27% 17%)';
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/thank-you" component={ThankYou} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
