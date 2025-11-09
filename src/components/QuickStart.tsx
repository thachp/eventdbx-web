'use client'
import clsx from 'clsx'
import { useState } from 'react'

const tabs = [
  {
    id: 'node',
    label: 'NPM CLI',
    description:
      'Use the EventDBX CLI directly from npm when you want a zero-container setup.',
    commands: [
      'npm install eventdbx -g',
      'dbx start --foreground',
      'dbx token generate --group admin --user admin --action "*.*"',
    ],
    note: 'Omit --foreground to run as a background service. Use the EventDBX Client SDK in your preferred language to develop your application.',
  },
  {
    id: 'docker',
    label: 'Docker',
    description:
      'Use the prebuilt container to keep EventDBX isolated while persisting data on your host.',
    commands: [
      'docker pull thachp/eventdbx:latest',
      `docker run --name eventdbx --detach \\
  --publish 7070:7070 --publish 6363:6363 \\
  --volume "$PWD/data:/var/lib/eventdbx" \\
  thachp/eventdbx:latest`,
      `docker exec eventdbx sh -c 'cat /var/lib/eventdbx/.eventdbx/cli.token'`,
    ],
    note: 'Remove the 7070 mapping if you only need the ingestion API on 6363. Use the EventDBX Client SDK in your preferred language to develop your application.',
  },
] as const

type Tab = (typeof tabs)[number]['id']

export function QuickStart() {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0].id)
  const currentTab = tabs.find((tab) => tab.id === activeTab)!

  return (
    <section className="mt-8 rounded-2xl border border-white/15 bg-white/2.5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-6">
      <div className="flex items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={clsx(
              'rounded-lg px-3 py-1.5 text-[0.8125rem]/6 font-medium transition',
              tab.id === activeTab
                ? 'bg-white text-gray-900 shadow'
                : 'text-gray-400 hover:bg-white/10 hover:text-white',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm/6 text-gray-300">{currentTab.description}</p>

      <pre className="mt-4 overflow-x-auto rounded-xl bg-gray-950/60 px-4 py-3 font-mono text-[0.8125rem]/6 text-sky-100 ring-1 ring-white/10">
        <code>
          {currentTab.commands.map((command) => `$ ${command}`).join('\n')}
        </code>
      </pre>

      <p className="mt-3 text-[0.75rem]/5 text-gray-400">{currentTab.note}</p>
    </section>
  )
}
