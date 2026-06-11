import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Global3DBackground from '@/components/Global3DBackground/Global3DBackground';

export const metadata = {
  title: 'ClickRevenue — Click that Converts and Revenue that Grows',
  description: 'ClickRevenue is a growth-focused marketing and commerce partner helping brands scale customer acquisition, revenue, and digital distribution across Ads, Marketplaces, and Quick Commerce.',
  keywords: 'performance marketing, marketplace growth, quick commerce, SEO, digital marketing, Amazon, Flipkart, Blinkit, Instamart, Google Ads, Meta Ads',
  openGraph: {
    title: 'ClickRevenue — Growth-Focused Marketing Partner',
    description: 'Scale your brand across Ads, Marketplaces and Quick Commerce with ClickRevenue.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.clickrevenue.in/#organization",
                  "name": "ClickRevenue",
                  "url": "https://www.clickrevenue.in/",
                  "logo": "https://www.clickrevenue.in/logo.png",
                  "sameAs": [
                    "https://www.linkedin.com/company/clickrevenue",
                    "https://twitter.com/clickrevenue"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9999999999",
                    "contactType": "customer service"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.clickrevenue.in/#website",
                  "url": "https://www.clickrevenue.in/",
                  "name": "ClickRevenue",
                  "publisher": {
                    "@id": "https://www.clickrevenue.in/#organization"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <Global3DBackground />
        <Navbar />
        <main style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
