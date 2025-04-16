import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Jahwon Grant",
  description: "Privacy policy for Jahwon Grant's data analytics portfolio website.",
}

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose dark:prose-invert">
        <p className="text-muted-foreground mb-4">Last updated: April 1, 2023</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p>
            This Privacy Policy describes how Jahwon Grant ("we," "us," or "our") collects, uses, and discloses your
            information when you visit jahwongrant.com (the "Website").
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us, such as when you fill out a contact form or
            subscribe to our newsletter.
          </p>
          <p>We also automatically collect certain information when you visit our Website, including:</p>
          <ul className="list-disc pl-6 my-4">
            <li>Log and usage data (such as IP address, browser type, pages visited)</li>
            <li>Device information (such as device type, operating system)</li>
            <li>Location information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 my-4">
            <li>Provide, maintain, and improve our Website</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Analyze how you use our Website</li>
            <li>Send you technical notices and updates</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our Website and hold certain
            information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
          <p>
            We may use third-party services such as Google Analytics that collect, monitor, and analyze user data. These
            third parties have their own privacy policies addressing how they use such information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Data Security</h2>
          <p>
            We have implemented measures to secure your personal information from accidental loss and unauthorized
            access, use, alteration, and disclosure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at contact@jahwongrant.com.</p>
        </section>
      </div>

      <div className="mt-12">
        <Link href="/" className="text-primary hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
