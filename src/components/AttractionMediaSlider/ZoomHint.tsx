export default function ZoomHint() {
  return (
    <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-black/60 px-3 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition-opacity hover:opacity-100">
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
        />
      </svg>
      Kliknij aby powiększyć
    </div>
  );
}
