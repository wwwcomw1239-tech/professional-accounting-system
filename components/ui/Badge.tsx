export function Badge({ text }: { text: string }) {
  return <span className="rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-700">{text}</span>;
}
