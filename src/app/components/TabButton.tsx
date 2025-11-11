function TabButton({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-1 text-sm transition ${active ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:bg-neutral-900'}`}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}
export default TabButton;
