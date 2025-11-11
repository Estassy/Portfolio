function IconLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="rounded-full p-2 text-neutral-300 ring-1 ring-neutral-800 hover:bg-neutral-900 hover:text-white"
    >
      {icon}
    </a>
  );
}

export default IconLink;