import { ReactNode } from "react";
import { useNavigation } from "./NavigationContext";

interface SmoothLinkProps {
  targetId: string;
  className?: string;
  children: ReactNode;
  test?: string;
}

function SmoothLink({ targetId, className = "", children }: SmoothLinkProps) {
  const { setActive } = useNavigation();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (setActive) {
      setActive(targetId);
    }
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}

export default SmoothLink;
