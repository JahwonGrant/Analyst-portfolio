import Link from "next/link"
import type { Metadata } from "next"
import { baseMetadata } from "../metadata"

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Privacy Policy",
  description: "Privacy policy for Jahwon Grant's data analytics portfolio website.",
}

export default function PrivacyPolicy() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-8 executive-text-gradient">
          Privacy Policy
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>Last updated: April 14, 2025</p>

          <h2>Introduction</h2>
          <p>
            Welcome to Jahwon Grant's portfolio website. I respect your privacy and am committed to protecting your
            personal data. This privacy policy will inform you about how I look after your personal data when you visit
            my website and tell you about your privacy rights.
          </p>

          <h2>The Data I Collect</h2>
          <p>When you visit my website, I may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Contact Information:</strong> If you use the contact form, I collect your name, email address, and
              any other information you provide in your message.
            </li>
            <li>
              <strong>Usage Data:</strong> I collect anonymous information about how you interact with my website,
              including pages visited, time spent on pages, and other analytical data.
            </li>
            <li>
              <strong>Technical Data:</strong> This includes your IP address, browser type and version, time zone
              setting, browser plug-in types and versions, operating system, and platform.
            </li>
          </ul>

          <h2>How I Use Your Data</h2>
          <p>I use the information I collect for the following purposes:</p>
          <ul>
            <li>To respond to your inquiries and provide you with the information you request</li>
            <li>To improve my website and ensure it is presented in the most effective manner for you</li>
            <li>To analyze how visitors use my website to improve the user experience</li>
            <li>To protect the security and integrity of my website</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            My website uses cookies to enhance your browsing experience. Cookies are small text files that are placed on
            your device when you visit a website. They help me provide you with a better website experience by enabling
            me to monitor which pages you find useful.
          </p>
          <p>
            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access
            cookies. If you disable or refuse cookies, please note that some parts of this website may become
            inaccessible or not function properly.
          </p>

          <h2>Analytics</h2>
          <p>
            I use Google Analytics to analyze the use of my website. Google Analytics gathers information about website
            use by means of cookies. The information gathered is used to create reports about the use of my website.
          </p>
          <p>
            Google's privacy policy is available at:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/privacy
            </a>
          </p>

          <h2>Data Security</h2>
          <p>
            I have implemented appropriate security measures to prevent your personal data from being accidentally lost,
            used, or accessed in an unauthorized way, altered, or disclosed. In addition, I limit access to your
            personal data to those who have a business need to know.
          </p>

          <h2>Data Retention</h2>
          <p>
            I will only retain your personal data for as long as necessary to fulfill the purposes I collected it for,
            including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>

          <h2>Your Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data,
            including the right to:
          </p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
            <li>Request transfer of your personal data</li>
            <li>Right to withdraw consent</li>
          </ul>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            I may update this privacy policy from time to time. I will notify you of any changes by posting the new
            privacy policy on this page.
          </p>

          <h2>Contact Me</h2>
          <p>If you have any questions about this privacy policy or my data practices, please contact me at:</p>
          <p>
            Email: <a href="mailto:jahwongrant@gmail.com">jahwongrant@gmail.com</a>
          </p>

          <div className="mt-12">
            <Link href="/" className="text-primary hover:underline">
              Return to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
