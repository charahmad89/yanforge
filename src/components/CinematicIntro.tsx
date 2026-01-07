import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import yanforgeLogo from "@/assets/yanforge-logo.jpeg";

interface CinematicIntroProps {
  onComplete: () => void;
}

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [phase, setPhase] = useState<"logo" | "bar" | "exit">("logo");

  useEffect(() => {
    // Logo appears, then bar animates
    const barTimer = setTimeout(() => setPhase("bar"), 800);
    // Then slide up and exit
    const exitTimer = setTimeout(() => setPhase("exit"), 2500);
    // Complete callback
    const completeTimer = setTimeout(() => onComplete(), 3200);

    return () => {
      clearTimeout(barTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] bg-secondary flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        phase === "exit" && "-translate-y-full"
      )}
    >
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div
          className={cn(
            "transition-all duration-700",
            phase === "logo" ? "opacity-0 scale-95" : "opacity-100 scale-100"
          )}
        >
          <img 
            src={yanforgeLogo} 
            alt="Yanforge" 
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
          />
        </div>

        {/* White light bar */}
        <div
          className={cn(
            "mt-8 overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
            phase !== "logo" ? "w-64 md:w-80" : "w-0"
          )}
        >
          <div
            className="h-[2px] bg-white w-full"
            style={{
              boxShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
