interface VisualPlaceholderProps {
  title: string;
  description?: string;
  height?: string;
}

export default function VisualPlaceholder({
  title,
  description = "Interactive visualization coming soon",
  height = "h-64",
}: VisualPlaceholderProps) {
  return (
    <div className={`${height} bg-gradient-to-br from-[#00FFF0]/5 to-[#8A2BE2]/5 rounded-xl border-2 border-dashed border-[#00FFF0]/30 flex flex-col items-center justify-center my-8 relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#00FFF0 1px, transparent 1px), linear-gradient(90deg, #00FFF0 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>
      <div className="relative">
        <svg className="w-12 h-12 text-[#00FFF0]/50 mb-3 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-[#00FFF0] font-medium text-center">{title}</p>
        <p className="text-[#8A2BE2]/70 text-sm text-center">{description}</p>
      </div>
    </div>
  );
}
