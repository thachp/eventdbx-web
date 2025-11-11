'use client'
import Link from 'next/link'

import { IconLink } from '@/components/IconLink'
import { Logo } from '@/components/Logo'
import { QuickStart } from '@/components/QuickStart'
import { SignedIn, SignedOut, SignUpButton, useUser } from '@clerk/nextjs'

function BookIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
    </svg>
  )
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function FeedIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
      />
    </svg>
  )
}

export function Intro() {
  const user = useUser()

  return (
    <>
      <div>
        <Link href="/">
          <Logo className="inline-block h-8 w-auto" />
        </Link>
      </div>
      <h1 className="mt-4 font-display text-4xl/tight font-light text-white">
        Immutable{' '}
        <span className="text-sky-300">write-side database system</span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
        EventDBX is extremely fast, and it lets you spend less time designing
        schemas and more time writing the code that drives your application.
      </p>
      <QuickStart />
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink
          href="https://docs.eventdbx.com"
          icon={BookIcon}
          className="flex-none"
        >
          Docs
        </IconLink>
        <IconLink
          href="https://github.com/thachp/eventdbx"
          icon={GitHubIcon}
          className="flex-none"
        >
          GitHub
        </IconLink>
        <IconLink
          href="https://accounts.eventdbx.com"
          icon={FeedIcon}
          className="flex-none"
        >
          <SignedOut>
            <SignUpButton>
              <span className="cursor-pointer">Sign In or Register</span>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <span className="text-sm text-white">
              {(
                user.user?.fullName ??
                user.user?.username ??
                user.user?.primaryEmailAddress?.emailAddress ??
                ''
              ).trim()}
            </span>
          </SignedIn>
        </IconLink>
      </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.8125rem]/6 text-gray-500">
      <p className="flex items-baseline gap-x-2">
        <span>© {new Date().getFullYear()} Patrick Thach</span>
        <span aria-hidden="true" className="text-gray-700">
          •
        </span>
        <Link
          href="/privacy-policy"
          className="transition hover:text-white hover:underline"
        >
          Privacy Policy
        </Link>
        <span aria-hidden="true" className="text-gray-700">
          •
        </span>
        <Link
          href="/terms-of-service"
          className="transition hover:text-white hover:underline"
        >
          Terms of Service
        </Link>
      </p>
    </div>
  )
}
