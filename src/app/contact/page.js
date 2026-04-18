import TeslaForm from "@/components/TeslaForm";
import Maplock from "@/components/Maplock";
import AboutFAQ from "@/components/AboutFAQ";

/* ✅ SEO METADATA (App Router) */
export const metadata = {
  title: "Contact Kerala Pest Solutions | Request a Quote",
  description:
    "Contact our expert pest control team in Trivandrum today. Get a fast quote, book a service, or ask us about our safe and effective pest treatments.",
  keywords: [
    "contact pest control Trivandrum",
    "budget friendly pest control",
    "affordable termite control Trivandrum",
    "quality pest control services Kerala",
    "sanitization services Trivandrum",
    "disinfection services Kerala",
    "pest control quote Trivandrum",
    "eco friendly pest control",
  ],
  authors: [{ name: "Your Pest Control Company" }],
  metadataBase: new URL("https://keralapestsolutions.com"),

  openGraph: {
    title: "Contact Kerala Pest Solutions | Request a Quote",
    description:
      "Contact our expert pest control team in Trivandrum today. Get a fast quote, book a service, or ask us about our safe and effective pest treatments.",
    url: "https://keralapestsolutions.com/contact",
    siteName: "Kerala Pest Solutions",
    images: [
      {
        url: "https://keralapestsolutions.com/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Pest Control Services in Trivandrum",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Kerala Pest Solutions | Request a Quote",
    description:
      "Contact our expert pest control team in Trivandrum today.",
    images: [
      "https://keralapestsolutions.com/assets/images/contact-og-image.jpg",
    ],
  },

  alternates: {
    canonical: "https://keralapestsolutions.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <TeslaForm />
      <Maplock />
      <AboutFAQ />
    </main>
  );
}