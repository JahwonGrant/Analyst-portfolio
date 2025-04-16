"use client"

import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { Suspense, useEffect } from "react"

// This component uses the search params and must be wrapped in Suspense
function AnalyticsContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && window.gtag) {
      window.gtag("config", "G-MEASUREMENT_ID", {
        page_path: pathname,
      })
    }
  }, [pathname, searchParams])

  return null
}

export function Analytics() {
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MEASUREMENT_ID');
          `,
        }}
      />
      <Suspense fallback={null}>
        <AnalyticsContent />
      </Suspense>
    </>
  )
}
