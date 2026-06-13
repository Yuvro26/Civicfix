import { Link } from "@tanstack/react-router";
import logo from "@/assets/Logo.png";

export function Logo({
  className = "",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg">
        <img
          src={logo}
          alt="Logo"
          className="h-full w-full object-contain p-1"
        />
      </span>

      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-tight">
            Your<span className="text-gradient">CivicFix</span>
          </span>

          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Smart Citizen Platform
          </span>
        </span>
      )}
    </div>
  );
}