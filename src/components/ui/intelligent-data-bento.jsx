import React, { useEffect, useState } from 'react';
import {
  Activity,
  ArrowRight,
  Brain,
  GraduationCap,
  Map as MapIcon,
  ShieldAlert,
  TriangleAlert,
} from 'lucide-react';
import DottedMap from 'dotted-map';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { cn } from '@/lib/utils';

/* ─────────── Pre-rendered dotted world map (computed once) ─────────── */
const dotted = new DottedMap({ height: 55, grid: 'diagonal' });
const points = dotted.getPoints();

const Map = () => (
  <svg viewBox="0 0 120 60" className="h-auto w-full text-primary/70">
    {points.map((p, i) => (
      <circle key={i} cx={p.x} cy={p.y} r={0.15} fill="currentColor" />
    ))}
  </svg>
);

/* ─────────── Predictive Intelligence: stacked alert messages ─────────── */
const PREDICTIVE_ALERTS = [
  { title: 'Retention Risk', time: '2m ago', body: '37 first-year students flagged for early intervention.', from: 'from-primary', to: 'to-accent' },
  { title: 'Enrollment Trend', time: '8m ago', body: 'CS major up 18% YoY — capacity model recalibrated.', from: 'from-accent', to: 'to-primary' },
  { title: 'Resource Demand', time: '14m ago', body: 'Library reservations exceed Q3 projection by 22%.', from: 'from-primary/80', to: 'to-accent/90' },
  { title: 'Advisor Coverage', time: '21m ago', body: 'Engineering caseload approaching 1:300 threshold.', from: 'from-accent/90', to: 'to-primary/80' },
];

const PredictiveAlerts = () => (
  <div className="relative h-[180px] w-full max-w-sm overflow-hidden font-sans">
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-card to-transparent" />
    <div className="relative z-0 space-y-1.5">
      {PREDICTIVE_ALERTS.map((m, i) => (
        <div
          key={m.title}
          className="animate-scaleUp flex cursor-default items-start gap-2.5 rounded-lg border border-border bg-background p-2"
          style={{
            animationDelay: `${i * 220}ms`,
            animationFillMode: 'forwards',
            opacity: 0,
          }}
        >
          <div
            className={cn(
              'min-h-[1.5rem] min-w-[1.5rem] rounded-md bg-gradient-to-br',
              m.from,
              m.to
            )}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-foreground">
              {m.title}
              <span className="text-[10px] text-muted-foreground before:mr-1 before:content-['•']">
                {m.time}
              </span>
            </div>
            <p className="line-clamp-1 text-[10px] text-muted-foreground">{m.body}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ─────────── Campus Flow chart: brand-tokenized area chart ─────────── */
const CHART_DATA = [
  { week: 'W1', students: 4200, facilities: 1800 },
  { week: 'W2', students: 5100, facilities: 2400 },
  { week: 'W3', students: 4800, facilities: 2100 },
  { week: 'W4', students: 6300, facilities: 3200 },
  { week: 'W5', students: 5900, facilities: 2800 },
  { week: 'W6', students: 7400, facilities: 3600 },
];

const FlowChart = () => (
  <div className="h-32 w-full md:h-40">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={CHART_DATA}>
        <defs>
          <linearGradient id="aas-students" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.7} />
            <stop offset="80%" stopColor="hsl(var(--primary))" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="aas-facilities" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.7} />
            <stop offset="80%" stopColor="hsl(var(--accent))" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <XAxis dataKey="week" hide />
        <YAxis hide />
        <CartesianGrid vertical={false} horizontal={false} />
        <Tooltip
          contentStyle={{
            background: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: 8,
            fontSize: 12,
          }}
          labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 600 }}
          itemStyle={{ color: 'hsl(var(--muted-foreground))' }}
        />
        <Area type="monotone" dataKey="facilities" name="Facility utilization" stroke="hsl(var(--accent))" strokeWidth={2} fill="url(#aas-facilities)" />
        <Area type="monotone" dataKey="students" name="Student movement" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#aas-students)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

/* ─────────── BR Safety & Risk: live dashboard tiles ─────────── */

const SafetyPanel = ({ icon: Icon, kicker, children }) => (
  <div className="relative flex min-h-[170px] flex-col gap-3 border border-border bg-background p-4 transition">
    <span className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
      <Icon className="h-3.5 w-3.5" />
      {kicker}
    </span>
    <div className="flex-1">{children}</div>
    <div className="absolute bottom-2.5 right-2.5 z-10 inline-flex items-center justify-center rounded-full border border-border bg-background p-2 transition-transform hover:-rotate-45">
      <ArrowRight className="h-3.5 w-3.5 text-primary" />
    </div>
  </div>
);

const SENSORS = [
  { label: 'Doors',     status: 'nominal' },
  { label: 'Lighting',  status: 'nominal' },
  { label: 'Network',   status: 'nominal' },
  { label: 'Occupancy', status: 'active'  },
  { label: 'Cameras',   status: 'nominal' },
  { label: 'HVAC',      status: 'nominal' },
  { label: 'Fire',      status: 'nominal' },
  { label: 'Access',    status: 'alert'   },
];

const STATUS_DOT = {
  nominal: 'bg-emerald-400',
  active:  'bg-amber-400',
  alert:   'bg-red-500',
};

const STATUS_LINES = [
  { text: 'ALL SYSTEMS NOMINAL', tone: 'text-emerald-500' },
  { text: '1 ALERT · DOOR 2C OPEN', tone: 'text-amber-500' },
];

const LiveAlertGrid = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % STATUS_LINES.length), 3200);
    return () => clearInterval(id);
  }, []);
  const line = STATUS_LINES[idx];
  return (
    <div className="flex h-full flex-col gap-2">
      <div className={`text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${line.tone}`}>
        ● {line.text}
      </div>
      <div className="grid grid-cols-2 gap-1">
        {SENSORS.map((s, i) => (
          <div
            key={s.label}
            className="flex items-center gap-1.5 rounded-md border border-border/60 bg-card/50 px-2 py-1"
          >
            <span
              className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${STATUS_DOT[s.status]} animate-pulse`}
              style={{ animationDelay: `${i * 140}ms` }}
            />
            <span className="text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const RING_SIZE = 80;
const RING_STROKE = 7;
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const ResponseRing = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setValue(98), 250);
    return () => clearTimeout(id);
  }, []);
  const offset = RING_CIRCUMFERENCE * (1 - value / 100);
  return (
    <div className="flex h-full flex-col items-center gap-2">
      <div className="relative" style={{ width: RING_SIZE, height: RING_SIZE }}>
        <svg width={RING_SIZE} height={RING_SIZE} className="-rotate-90">
          <circle cx={RING_SIZE / 2} cy={RING_SIZE / 2} r={RING_RADIUS} fill="none" stroke="hsl(var(--foreground) / 0.1)" strokeWidth={RING_STROKE} />
          <circle
            cx={RING_SIZE / 2}
            cy={RING_SIZE / 2}
            r={RING_RADIUS}
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth={RING_STROKE}
            strokeLinecap="round"
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.32,0.72,0,1)' }}
          />
        </svg>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold leading-none text-foreground">{value}%</span>
          <span className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Documented
          </span>
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-1.5 text-[9px] uppercase tracking-wider text-muted-foreground">
        <div className="rounded-md border border-border/60 bg-card/50 px-1.5 py-1 text-center">
          Avg <span className="font-bold text-foreground">1.3m</span>
        </div>
        <div className="rounded-md border border-border/60 bg-card/50 px-1.5 py-1 text-center">
          Audit <span className="font-bold text-foreground">100%</span>
        </div>
      </div>
    </div>
  );
};

/* ─────────── Main 2x2 bento ─────────── */
const QuadrantHeader = ({ icon: Icon, kicker, title, sub }) => (
  <div>
    <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
      <Icon className="h-3.5 w-3.5" />
      {kicker}
    </div>
    <h3 className="mt-2 text-sm font-semibold leading-snug text-foreground md:text-base">
      {title}{' '}
      <span className="font-normal text-muted-foreground">{sub}</span>
    </h3>
  </div>
);

const IntelligentDataBento = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2">
      {/* TL — Campus Digital Twin (map) */}
      <div className="relative overflow-hidden border border-border bg-muted p-4 md:p-5">
        <QuadrantHeader
          icon={MapIcon}
          kicker="Campus Digital Twin"
          title="A living digital replica of your campus."
          sub="Track every student, facility, and signal in real time."
        />
        <div className="relative mt-3">
          <div className="absolute left-1/2 top-8 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-card px-2.5 py-0.5 text-[10px] font-medium text-foreground shadow ring-1 ring-border">
            🎓 12,847 active sessions
          </div>
          <div className="mx-auto max-h-[140px] overflow-hidden">
            <Map />
          </div>
        </div>
      </div>

      {/* TR — Predictive Intelligence */}
      <div className="flex flex-col justify-between gap-3 border border-border bg-card p-4 md:p-5">
        <QuadrantHeader
          icon={Brain}
          kicker="Predictive Intelligence"
          title="Surfaced before they become problems."
          sub="Retention risk, enrollment, and resource demand visible while still actionable."
        />
        <div className="flex w-full items-start justify-center">
          <PredictiveAlerts />
        </div>
      </div>

      {/* BL — Campus Flow & Mapping (chart) */}
      <div className="space-y-3 border border-border bg-muted p-4 md:p-5">
        <QuadrantHeader
          icon={Activity}
          kicker="Campus Flow & Mapping"
          title="Movement and utilization, in real time."
          sub="Optimize spaces and staffing with curves you can act on."
        />
        <FlowChart />
      </div>

      {/* BR — Safety & Risk Monitoring (live tiles) */}
      <div className="grid border border-border bg-card sm:grid-cols-2">
        <SafetyPanel icon={ShieldAlert} kicker="Real-time alerts">
          <LiveAlertGrid />
        </SafetyPanel>
        <SafetyPanel icon={TriangleAlert} kicker="Liability reduction">
          <ResponseRing />
        </SafetyPanel>
      </div>
    </div>
  );
};

export { IntelligentDataBento };
export default IntelligentDataBento;
