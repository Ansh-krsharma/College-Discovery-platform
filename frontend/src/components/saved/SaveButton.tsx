import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSavedStore } from "@/store/savedStore";

interface Props {
  collegeId: string;
  className?: string;
}

export default function SaveButton({ collegeId, className = "" }: Props) {
  const isSaved = useSavedStore((state) => state.isSaved);
  const toggleSaved = useSavedStore((state) => state.toggleSaved);
  const saved = isSaved(collegeId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleSaved(collegeId);
      }}
      aria-label={saved ? "Remove from saved" : "Save college"}
      className={cn(
        "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md",
        saved ? "bg-red-500/90 text-white scale-105" : "bg-white/80 text-slate-700 hover:bg-white",
        className
      )}
    >
      <Heart className={cn("w-4 h-4", saved && "fill-current")} />
    </button>
  );
}