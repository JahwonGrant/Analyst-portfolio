import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | Jahwon Grant",
  description: "Terms of service for Jahwon Grant's data analytics portfolio website.",
}

export default function TermsPage() {
  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

      <div className="prose dark:prose-invert">
        <p className="text-muted-foreground mb-4">Last updated: April 1, 2023</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p>
            These Terms of Service ("Terms") govern your access to and use of jahwongrant.com (the "Website"). Please
            read these Terms carefully before using our Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
          <p>
            By accessing or using our Website, you agree to be bound by these Terms. If you do not agree to these Terms,
            you may not access or use the Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Changes to Terms</h2>
          <p>
            We may revise these Terms at any time by updating this page. By using this Website after we post any
            changes, you agree to accept those changes, whether or not you have reviewed them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Intellectual Property Rights</h2>
          <p className="mb-4">
            The Website and its entire contents, features, and functionality (including but not limited to all
            information, software, text, displays, images, video, and audio, and the design, selection, and arrangement
            thereof), are owned by Jahwon Grant, its licensors, or other providers of such material and are protected by
            copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
            republish, download, store, or transmit any of the material on our Website without prior written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Prohibited Uses</h2>
          <p>You may use the Website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc pl-6 my-4">
            <li>Use the Website in any way that violates any applicable federal, state, local, or international law</li>
            <li>
              Use the Website to engage in any conduct that restricts or inhibits anyone's use or enjoyment of the
              Website
            </li>
            <li>Use the Website in any manner that could disable, overburden, damage, or impair the site</li>
            <li>
              Use any robot, spider, or other automatic device, process, or means to access the Website for any purpose
            </li>
            <li>Use the Website in any way that infringes upon the rights of others</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Disclaimer of Warranties</h2>
          <p>
            The Website is provided on an "as is" and "as available" basis, without any warranties of any kind, either
            express or implied. We disclaim all warranties, express or implied, including but not limited to implied
            warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
          <p>
            In no event will we, our affiliates, or their licensors, service providers, employees, agents, officers, or
            directors be liable for damages of any kind, under any legal theory, arising out of or in connection with
            your use, or inability to use, the Website, including any direct, indirect, special, incidental,
            consequential, or punitive damages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Governing Law</h2>
          <p>
            These Terms and any dispute or claim arising out of or related to them, their subject matter, or their
            formation shall be governed by and construed in accordance with the laws of the State of New York, without
            giving effect to any choice or conflict of law provisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p>Questions about the Terms of Service should be sent to us at contact@jahwongrant.com.</p>
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
