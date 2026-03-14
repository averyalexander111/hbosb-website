

## Update Investment Section Copy

Modify the "Investment" section of `/ai-lead-response-system` to improve clarity and value proposition. No structural or styling changes.

### Changes to `src/pages/AILeadResponseSystem.tsx`

**Line 236-244** — Add description paragraph after the heading:
```tsx
<h2 className="section-title text-foreground">Investment</h2>
<p className="section-subtitle mx-auto max-w-3xl">
  The AI Lead Response System is installed with a one-time setup investment and a simple monthly hosting plan. This system is designed to capture inquiries, respond instantly, and organize leads into a structured pipeline so your business can convert more opportunities into customers.
</p>
```

**Line 62-67** — Reorder `monthlyIncludes` array to match new copy:
```tsx
const monthlyIncludes = [
  "System monitoring",
  "Automation maintenance",
  "Workflow reliability",
  "Updates and improvements",
];
```

**Line 279 (after pricing cards)** — Add value statement section before closing the Investment section:
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  variants={fadeUp}
  className="mt-10 max-w-2xl mx-auto text-center"
>
  <p className="text-muted-foreground leading-relaxed">
    For many businesses, recovering just one additional customer per month can cover the cost of the system. By ensuring every inquiry receives an immediate response and structured follow-up, the AI Lead Response System helps businesses capture opportunities that would otherwise be lost.
  </p>
</motion.div>
```

All other sections remain unchanged.

