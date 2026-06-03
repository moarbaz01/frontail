import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Libre_Baskerville,
  Inter,
  Sora,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import Script from "next/script";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const plusJakarta = Space_Grotesk({
  preload: true,
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: {
    default: "Frontail Technology | MVP, SaaS, AI & Mobile App Development",
    template: "%s | Frontail Technology",
  },
  description:
    "Frontail Technology helps founders and businesses build MVPs, SaaS platforms, AI tools, mobile apps, Web3 products, and custom internal software.",
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
    "Frontail Technology",
  ],
  authors: [{ name: "Mohammed Arbaz", url: "https://frontail.com" }],
  creator: "Frontail Technology",
  publisher: "Frontail Technology",
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
    title: "Frontail Technology | MVP, SaaS, AI & Mobile App Development",
    description:
      "Build production-ready MVPs, SaaS platforms, AI tools, mobile apps, Web3 products, and custom software with Frontail Technology.",
    url: "https://frontail.com",
    siteName: "Frontail Technology",
    images: [
      {
        url: "https://frontail.com/seo/twitter-card.png",
        width: 1200,
        height: 630,
        alt: "Frontail Technology - Product Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontail Technology | MVP, SaaS, AI & Mobile App Development",
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
  alternates: {
    canonical: "https://frontail.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <head>
        <meta name="author" content="Frontail Team" />
        <meta name="email" content="arbazmr123@gmail.com" />
        <meta name="contact" content="+918741035190" />
        <meta name="brand" content="Frontail Technology" />
        <meta name="company" content="Frontail Technology" />
        <meta name="domain" content="frontail.com" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Frontail Technology",
              alternateName: ["Frontail"],
              url: "https://frontail.com",
              logo: "https://frontail.com/favicon.png",
              description:
                "Frontail Technology builds MVPs, SaaS platforms, AI tools, mobile apps, Web3 products, and custom internal software for founders and businesses.",
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
                name: "Mohammed Arbaz", // Optional
                jobTitle: "Founder", // Optional
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
              subjectOf: [
                {
                  "@type": "WebPage",
                  name: "Our Process",
                  description: "How Frontail Technology builds products.",
                  url: "https://frontail.com/#process",
                },
                {
                  "@type": "ContactPage",
                  name: "Contact Frontail Technology",
                  description: "Start your product development project.",
                  url: "https://frontail.com/contact",
                },
                {
                  "@type": "WorkPage",
                  name: "Projects",
                  description: "See product development case studies.",
                  url: "https://frontail.com/projects",
                },
              ],
            }),
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
      <body
        className={` ${plusJakarta.className} ${libreBaskerville.variable} antialiased   `}
      >
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
