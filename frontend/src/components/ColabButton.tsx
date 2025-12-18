import { getColabUrl } from "@/lib/workshop-data";
import { Play } from "lucide-react";

interface ColabButtonProps {
  notebookName: string;
  label?: string;
}

export default function ColabButton({ notebookName, label = "Open in Google Colab" }: ColabButtonProps) {
  const url = getColabUrl(notebookName);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00FFF0] to-[#8A2BE2] text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,240,0.5)] hover:scale-105"
    >
      <Play className="w-5 h-5" />
      {label}
    </a>
  );
}
