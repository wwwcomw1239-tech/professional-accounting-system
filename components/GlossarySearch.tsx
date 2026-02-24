'use client';

import { useMemo, useState } from 'react';

type Term = { title: string; description: string };

export function GlossarySearch({ terms }: { terms: Term[] }) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () => terms.filter((t) => `${t.title} ${t.description}`.toLowerCase().includes(query.toLowerCase())),
    [query, terms]
  );

  return (
    <div className="space-y-4">
      <input
        aria-label="بحث في القاموس"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-lg border p-2"
        placeholder="ابحث عن مصطلح..."
      />
      <ul className="grid gap-3">
        {filtered.map((t) => (
          <li key={t.title} className="rounded-lg border bg-white p-3">
            <h3 className="font-semibold">{t.title}</h3>
            <p className="text-sm text-slate-600">{t.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
