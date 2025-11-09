import clsx from 'clsx'

export function Logo(props: React.ComponentPropsWithoutRef<'span'>) {
  const { className, ...rest } = props
  return (
    <span
      {...rest}
      className={clsx(
        'inline-flex items-center gap-3 font-semibold tracking-[0.35em] uppercase',
        className,
      )}
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-9 w-9 text-white drop-shadow-[0_6px_12px_rgba(14,39,76,0.45)]"
      >
        <path
          d="M16 2 28 8v16l-12 6-12-6V8z"
          fill="currentColor"
          opacity={0.25}
        />
        <path
          d="M6 9.2 16 4l10 5.2v13.6L16 28 6 22.8z"
          fill="currentColor"
          opacity={0.55}
        />
        <circle cx={13} cy={13} r={2} fill="#fff" />
        <path
          d="M17 10a6 6 0 0 1 0 12"
          fill="none"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          opacity={0.85}
        />
        <path
          d="M17 13a3 3 0 0 1 0 6"
          fill="none"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
      <span className="tracking-[0.4em] text-white/80">EventDBX</span>
    </span>
  )
}
