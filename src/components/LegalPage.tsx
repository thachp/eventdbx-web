import { type ReactNode } from 'react'

export function LegalPage({
  title,
  eyebrow = 'Legal',
  effectiveDate,
  children,
}: {
  title: string
  eyebrow?: string
  effectiveDate: string
  children: ReactNode
}) {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 text-sm leading-7 text-gray-300 sm:py-24 lg:py-28">
      <article className="space-y-6">
        <header className="space-y-2 text-white">
          <p className="text-xs uppercase tracking-[0.35em] text-sky-300/80">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
            Effective date: {effectiveDate}
          </p>
        </header>
        {children}
      </article>
    </main>
  )
}
