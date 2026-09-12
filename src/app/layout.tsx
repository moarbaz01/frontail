import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import Script from "next/script";
import { cn } from "@/lib/utils";

const fontSans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MVP, SaaS, AI & Mobile App Development Agency | Frontail Technologies",
    template: "%s | Frontail Technologies",
  },
  description:
    "Frontail Technologies helps founders and businesses build MVPs, SaaS platforms, AI tools, mobile apps, Web3 products, and custom internal software.",
  keywords: [
    "MVP development agency",
    "startup MVP development",
    "SaaS development agency",
    "AI development services",
    "mobile app development for startups",
    "custom software development",
    "custom tools development",
    "Web3 development agency",
    "Next.js development agency",
    "Frontail Technologies",
  ],
  authors: [{ name: "Mohammed Arbaz", url: "https://frontail.com" }],
  creator: "Frontail Technologies",
  publisher: "Frontail Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "MVP, SaaS, AI & Mobile App Development Agency | Frontail Technologies",
    description:
      "Build production-ready MVPs, SaaS platforms, AI tools, mobile apps, Web3 products, and custom software with Frontail Technologies.",
    url: "https://frontail.com",
    siteName: "Frontail Technologies",
    images: [
      {
        url: "https://frontail.com/seo/twitter-card.png",
        width: 1200,
        height: 630,
        alt: "Frontail Technologies — Product Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP, SaaS, AI & Mobile App Development Agency | Frontail Technologies",
    description:
      "Product development for founders: MVPs, SaaS, AI tools, mobile apps, Web3, and custom software.",
    images: ["https://frontail.com/seo/twitter-card.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  metadataBase: new URL("https://frontail.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", fontSans.variable, geistMono.variable)}
    >
      <head>
        <meta name="author" content="Frontail Team" />
        <meta name="email" content="arbazmr123@gmail.com" />
        <meta name="contact" content="+918741035190" />
        <meta name="brand" content="Frontail Technologies" />
        <meta name="company" content="Frontail Technologies" />
        <meta name="domain" content="frontail.com" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Frontail Technologies",
                alternateName: ["Frontail"],
                url: "https://frontail.com",
                logo: "https://frontail.com/favicon.png",
                description:
                  "Frontail Technologies builds MVPs, SaaS platforms, AI tools, mobile apps, Web3 products, and custom internal software for founders and businesses.",
                areaServed: "Worldwide",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "IN",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+918741035190",
                  email: "contact@frontail.com",
                  contactType: "customer service",
                  areaServed: "Worldwide",
                  availableLanguage: "English",
                },
                founder: {
                  "@type": "Person",
                  name: "Mohammed Arbaz",
                  jobTitle: "Founder",
                },
                sameAs: ["https://t.me/arbazmr123"],
                knowsAbout: [
                  "MVP Development",
                  "SaaS Development",
                  "AI Development",
                  "Mobile App Development",
                  "Web3 Development",
                  "Custom Software Development",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Frontail Technologies",
                url: "https://frontail.com",
                description:
                  "MVP, SaaS, AI & mobile app development for startups and growing businesses.",
              },
            ]).replace(/</g, "\\u003c"),
          }}
        />

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T3HH77B4');`}
        </Script>
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T3HH77B4"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
