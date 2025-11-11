function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
      <div className="mb-2 text-neutral-400">{icon}</div>
      <div className="text-xs uppercase tracking-wider text-neutral-400">{label}</div>
  <div className="text-lg font-semibold leading-tight text-white">{value}</div>
    </div>
  );
}
export default Stat;