 export function ClientLogoCell({ label, src, className = "" }) {
  return (
    <div
      className={`group relative flex aspect-[4/3] min-h-[7.5rem] items-center justify-center overflow-hidden bg-white p-3 dark:bg-card sm:min-h-[8.5rem] sm:p-4 md:min-h-[9rem] ${className}`}
    >
      <img
        src={src}
        alt={label}
        title={label}
        loading="lazy"
        decoding="async"
        className="h-14 w-auto max-w-[85%] object-contain transition-transform duration-300 ease-out will-change-transform sm:h-16 md:h-[4.25rem] group-hover:scale-110 group-hover:sm:scale-[1.12] group-hover:md:max-w-[94%]"
      />

      <span className="sr-only">
        {label}
      </span>
    </div>
  );
}

export default ClientLogoCell;