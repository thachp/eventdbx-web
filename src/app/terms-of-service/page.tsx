import { LegalPage } from '@/components/LegalPage'

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service" effectiveDate="January 1, 2025">
      <p>
        Welcome to EventDBX. These Terms of Service (“Terms”) govern your access
        to and use of the EventDBX software, hosted services, documentation, and
        related support. By installing, accessing, or using EventDBX, you agree
        to these Terms. If you act on behalf of an organization, you represent
        that you have authority to bind that organization.
      </p>

      <section className="space-y-2">
        <h2 className="text-base font-semibold text-white">
          1. Accounts & eligibility
        </h2>
        <ul className="list-disc space-y-1 pl-6 text-gray-300">
          <li>You must provide accurate registration information.</li>
          <li>
            Accounts may not be shared; each user authenticates with their own
            credentials or SSO identity.
          </li>
          <li>
            You must be at least 16 years old unless a parent or guardian
            provides consent and supervision.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-semibold text-white">2. Licenses</h2>
        <ul className="list-disc space-y-1 pl-6 text-gray-300">
          <li>
            <strong>Self-hosted software.</strong> EventDBX OSS components are
            licensed under the Elastic License 2.0. You may run the binaries,
            modify the source, and build derivative works subject to that
            license.
          </li>
          <li>
            <strong>Hosted services.</strong> When using EventDBX Cloud, we
            grant you a limited, non-exclusive, non-transferable right to access
            the managed control plane for the duration of your subscription.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-semibold text-white">
          3. Acceptable use
        </h2>
        <p>You agree not to:</p>
        <ol className="list-decimal space-y-1 pl-6 text-gray-300">
          <li>
            Reverse engineer or probe our hosted infrastructure except through
            approved APIs.
          </li>
          <li>
            Use EventDBX to transmit spam, malware, or content that violates
            applicable laws.
          </li>
          <li>
            Attempt to access data that does not belong to you or your
            organization.
          </li>
          <li>
            Circumvent rate limits, resource quotas, or authentication
            requirements.
          </li>
        </ol>
        <p>
          We may suspend or terminate accounts that violate these rules or pose
          security risks.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-semibold text-white">
          4. Fees & payment
        </h2>
        <ul className="list-disc space-y-1 pl-6 text-gray-300">
          <li>
            Cloud subscriptions are billed in advance according to the plan you
            select.
          </li>
          <li>
            Usage-based overages (storage, bandwidth, plugin capacity) are
            invoiced monthly in arrears.
          </li>
          <li>
            All fees are non-refundable unless required by law. Failure to pay
            may result in service suspension.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-semibold text-white">
          5. Intellectual property
        </h2>
        <p>
          EventDBX retains all rights, title, and interest in the platform,
          tooling, branding, and documentation. You retain ownership of the data
          you store in EventDBX as well as any custom plugins or integrations
          you build.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-semibold text-white">
          6. Confidentiality
        </h2>
        <p>
          Each party agrees to protect the other’s confidential information with
          reasonable care and to use it only for fulfilling obligations under
          these Terms. This obligation survives termination for three years.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-semibold text-white">
          7. Term & termination
        </h2>
        <ul className="list-disc space-y-1 pl-6 text-gray-300">
          <li>
            These Terms remain in effect until terminated by either party.
          </li>
          <li>
            You may terminate at any time by closing your account or
            uninstalling the software.
          </li>
          <li>
            We may terminate or suspend access if you breach these Terms or
            create risk for other users. We will make reasonable efforts to
            notify you in advance.
          </li>
        </ul>
        <p>
          Upon termination, you may request an export of your data for up to 30
          days, after which it may be deleted.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-semibold text-white">
          8. Warranties & disclaimers
        </h2>
        <p>
          EventDBX is provided “as is” without warranties of any kind. We
          disclaim all implied warranties of merchantability, fitness for a
          particular purpose, and non-infringement. We do not guarantee that the
          services will be uninterrupted or error-free.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-semibold text-white">
          9. Limitation of liability
        </h2>
        <p>
          To the maximum extent permitted by law, EventDBX’s aggregate liability
          for all claims related to the services will not exceed the amount you
          paid us in the 12 months preceding the claim. Neither party will be
          liable for indirect, incidental, special, or consequential damages.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-semibold text-white">
          10. Governing law & disputes
        </h2>
        <p>
          These Terms are governed by the laws of the State of California,
          excluding conflict-of-law rules. Any disputes will be resolved in the
          state or federal courts located in San Francisco County, California,
          and each party consents to that jurisdiction.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-semibold text-white">11. Changes</h2>
        <p>
          We may update these Terms from time to time. Material changes will be
          announced via email and in-product notifications at least 30 days
          before they take effect. Continued use of EventDBX after the effective
          date constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-base font-semibold text-white">12. Contact</h2>
        <p>
          Questions about these Terms? Contact{' '}
          <strong>legal@eventdbx.com</strong> or send a letter to OM.Network,LLC
          dba EventDBX, 5428 S Regal St, Spokane, WA 99223-9998, USA.
        </p>
      </section>
    </LegalPage>
  )
}
