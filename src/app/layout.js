import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

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
      <body>
        <Navbar />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
