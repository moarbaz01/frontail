import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SecondFooter from "@/components/ui/SecondFooter";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import Script from "next/script";

const plusJakarta = Plus_Jakarta_Sans({
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontail | Web Development for Local Businesses & Startups",
  description:
    "Frontail helps local businesses and startups grow online with affordable, high-converting websites. Custom web development that drives real results for small businesses.",
  keywords: [
    "Frontail",
    "frontail",
    "Frontail web development",
    "frontail agency",
    "local business websites",
    "startup web development",
    "small business web design",
    "affordable websites",
    "web development agency",
    "Next.js experts",
    "UI/UX design",
    "custom website development",
    "responsive web design",
    "e-commerce development",
    "modern websites",
    "responsive design",
    "web development company",
    "software development",
    "Website",
    "custom animations",
    "SEO optimization",
    "website development",
    "web design",
    "digital solutions",
  ],
  authors: [{ name: "Mohammed Arbaz", url: "https://frontail.com" }],
  creator: "Frontail Team",
  publisher: "Frontail",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Frontail | Web Development & Design Experts",
    description: "We craft blazing-fast, beautiful websites that drive results",
    url: "https://frontail.com",
    siteName: "Frontail",
    images: [
      {
        url: "https://frontail.com/twitter-card.png",
        width: 1200,
        height: 630,
        alt: "Frontail - Web Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontail | Web Development & Design Experts",
    description: "Your partner for high-performance websites",
    images: ["https://frontail.com/twitter-card.png"],
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
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}
        <meta name="author" content="Frontail Team" />
        <meta name="email" content="arbazmr123@gmail.com" />
        <meta name="contact" content="+918696136907" />
        <meta name="brand" content="Frontail" />
        <meta name="company" content="frontail" />
        <meta name="domain" content="frontail.com" />
        <meta
          property="og:title"
          content="Frontail | Web Development & Design Experts"
        />
        <meta
          property="og:description"
          content="We craft blazing-fast, beautiful websites that drive results"
        />
        <meta property="og:url" content="https://frontail.com" />
        <meta
          property="og:image"
          content="https://frontail.com/twitter-card.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Frontail" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://frontail.com" />
        {/* Enhanced Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Frontail",
              alternateName: ["frontail"],
              url: "https://frontail.com",
              logo: "https://frontail.com/frontail-logo.png",
              description:
                "Frontail helps local businesses and startups succeed online with affordable, conversion-focused websites that drive real growth and customer engagement.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN", // e.g., "US", "IN"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+918696136907",
                email: "arbazmr123@gmail.com",
                contactType: "customer service",
                areaServed: "Worldwide",
                availableLanguage: "English",
              },
              founder: {
                "@type": "Person",
                name: "Mohammed Arbaz", // Optional
                jobTitle: "Founder", // Optional
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0", // Update with actual ratings
                reviewCount: "20", // Update with actual count
              },
              subjectOf: [
                {
                  "@type": "WebPage",
                  name: "Our Process",
                  description: "How we build award-winning websites",
                  url: "https://frontail.com/#process",
                  lastReviewed: new Date().toISOString().split("T")[0],
                },

                {
                  "@type": "ContactPage",
                  name: "Get a Quote",
                  description: "Start your web project with Frontail",
                  url: "https://frontail.com/contact",
                  lastReviewed: new Date().toISOString().split("T")[0],
                },
                {
                  "@type": "WorkPage",
                  name: "Our Work",
                  description:
                    "See the success stories of our clients and projects.",
                  url: "https://frontail.com/work",
                  lastReviewed: new Date().toISOString().split("T")[0],
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
    })(window,document,'script','dataLayer','GTM-NXNQ4W4B');`}
        </Script>
      </head>
      <body
        className={` ${plusJakarta.className} antialiased bg-dot-black/20  `}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXNQ4W4B"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>
        <main className=" ">
          <ScrollProgress />
          <Navbar />
          {children}
          <SecondFooter />
          <Footer />
        </main>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
