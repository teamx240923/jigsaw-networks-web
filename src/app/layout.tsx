import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jigsaw Networks - AI-Powered Business Solutions | Automated Cloud Management & Analytics",
  description: "Jigsaw Networks builds intelligent AI-powered platforms for modern businesses. Our automated solutions include Tracksure (event tracking), NoahOps (cloud management), NimbleBiz (AI sales agent), and NimbleInsights (AI analytics). Founded by AI researcher Ritika Agarwal, we simplify complexity with machine learning and automation.",
  keywords: [
    // AI & Automation Keywords
    "AI-powered platforms", "artificial intelligence", "machine learning", "automated solutions", 
    "intelligent automation", "AI analytics", "automated workflows", "smart technology",
    "AI-driven insights", "automated business processes", "intelligent systems",
    
    // Product-specific Keywords  
    "event tracking", "real-time validation", "SDK instrumentation", "cloud management",
    "infrastructure automation", "AWS management", "GCP automation", "Azure operations",
    "AI sales agent", "lead generation", "prospect qualification", "WhatsApp automation",
    "Instagram marketing", "AI chatbot", "business analytics", "data insights",
    "plain English analytics", "instant reporting",
    
    // Founder & Company Keywords
    "Ritika Agarwal", "AI researcher", "Springer publication", "Cambridge AI conference",
    "computer science engineer", "MBA finance", "MSc artificial intelligence",
    "business consulting", "technology leadership",
    
    // Business Keywords
    "modern business solutions", "enterprise software", "SaaS platforms", 
    "business automation", "digital transformation", "operational efficiency",
    "scalable solutions", "cloud-native applications"
  ],
  authors: [{ name: "Ritika Agarwal" }],
  creator: "Jigsaw Networks",
  publisher: "Jigsaw Networks",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jigsawnetworks.com",
    siteName: "Jigsaw Networks",
    title: "Jigsaw Networks - AI-Powered Business Solutions | Automated Cloud Management & Analytics",
    description: "AI-powered platforms for modern businesses. Automated event tracking, cloud management, AI sales agents, and intelligent analytics. Founded by AI researcher Ritika Agarwal.",    
  },
  twitter: {
    card: "summary_large_image",
    title: "Jigsaw Networks - AI-Powered Business Solutions",
    description: "AI-powered platforms for modern businesses. Automated solutions for tracking, cloud management, sales, and analytics.",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://jigsawnetworks.com"
  },
  category: "Technology",
  classification: "Business Software, AI Technology, Cloud Services"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jigsaw Networks",
    "description": "AI-powered platforms for modern businesses including automated event tracking, cloud management, AI sales agents, and intelligent analytics.",
    "url": "https://jigsawnetworks.com",
    "logo": "https://jigsawnetworks.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/jigsaw-networks"
    ],
    "founder": {
      "@type": "Person",
      "name": "Ritika Agarwal",
      "jobTitle": "Founder & CEO",
      "description": "AI researcher, computer science engineer, MBA in Finance, and MSc in AI. Published researcher in AI (Springer, 2024) and speaker at AI-2024 SGAI International Conference, Cambridge, UK.",
      "sameAs": "https://www.linkedin.com/in/ritika-agarwal-2407ra/",
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Computer Science Engineering"
        },
        {
          "@type": "EducationalOrganization", 
          "name": "MBA in Finance"
        },
        {
          "@type": "EducationalOrganization",
          "name": "MSc in Artificial Intelligence"
        }
      ]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI-Powered Business Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Tracksure",
            "description": "Event tracking made reliable. Real-time validation, SDK-based instrumentation, and centralized dashboards for consistent, accurate event data.",
            "url": "https://tracksure.io",
            "applicationCategory": "Analytics Software",
            "operatingSystem": "Web-based"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "NoahOps",
            "description": "Cloud made simple. One-click infrastructure management across AWS, GCP, and Azure with role-based access and automated workflows.",
            "url": "https://noahops.com",
            "applicationCategory": "Cloud Management Software",
            "operatingSystem": "Web-based"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication", 
            "name": "NimbleBiz",
            "description": "Your 24/7 AI sales agent. AI-powered lead generation agent that captures, qualifies, and engages prospects across web, WhatsApp, and Instagram.",
            "url": "https://nimblebiz.ai",
            "applicationCategory": "Sales Automation Software",
            "operatingSystem": "Web-based"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "NimbleInsights", 
            "description": "Your 24/7 AI data analyst. AI-driven insights platform that answers business questions in plain English and delivers instant analytics without dashboards.",
            "url": "https://nimbleinsights.ai",
            "applicationCategory": "Business Intelligence Software",
            "operatingSystem": "Web-based"
          }
        }
      ]
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning", 
      "Business Automation",
      "Cloud Computing",
      "Data Analytics",
      "Sales Automation",
      "Event Tracking",
      "Infrastructure Management"
    ],
    "areaServed": "Worldwide",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "help.jigsawnetworks@gmail.com",
      "contactType": "Customer Service"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
