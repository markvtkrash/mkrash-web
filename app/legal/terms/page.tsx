import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Vectra Vibe.",
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" effective="Effective Date: October 17, 2026" bare>
      <p>By using Vectra Vibe, you agree to these Terms. Vectra Vibe is a product of Markvt Krash LLC.</p>

      <h2>1. Use License</h2>
      <p>
        A non-exclusive, non-transferable, revocable license for personal, non-commercial use. You
        agree not to reverse engineer, resell, scrape, or otherwise misuse the app.
      </p>

      <h2>2. User Responsibilities</h2>
      <p>Maintain account security, provide accurate information, and respect others&apos; rights.</p>

      <h2>3. Limitation of Liability</h2>
      <p>
        Vectra Vibe is provided &quot;as-is&quot; without warranties. We are not liable for indirect,
        incidental, or consequential damages, loss of data, or reliance on food suggestions. You
        use Vectra Vibe at your own risk.
      </p>

      <h2>4. Information Shown in the App</h2>
      <p>
        Restaurant details, opening hours, distances, menus, and nutrition information come from third
        parties and from AI estimates, and may be incomplete, out of date, or wrong. A menu that a
        restaurant has not confirmed is labeled as estimated, and a dish on it may not be offered.
        Coupons are offered by the restaurants, not by us, and are subject to their terms. Please read
        our <a href="/legal/food-disclaimer">Food Disclaimer</a>.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>All content, features, and functionality are owned by Markvt Krash LLC or its licensors.</p>

      <h2>6. Prohibited Activities</h2>
      <p>No harassment or abuse, no illegal or obscene content, no interference with functionality, no malware, and no fraud.</p>

      <h2>7. Termination</h2>
      <p>We may suspend or terminate accounts for violations, illegal activity, abuse, or inactivity.</p>

      <h2>8. Changes to Terms</h2>
      <p>We may update these Terms at any time. Continued use means you accept the changes.</p>

      <h2>9. Third-Party Services &amp; Data Sources</h2>
      <p>
        Vectra Vibe uses Google Maps Platform for place search and location lookup. Use of Google Maps
        features and content is subject to the then-current{" "}
        <a href="https://www.google.com/help/terms_maps/">Google Maps End User Additional Terms of Service</a>{" "}
        and the <a href="https://policies.google.com/privacy">Google Privacy Policy</a>.
      </p>
      <p>
        Vectra Vibe also uses SerpApi, which reads Google Maps listings to locate restaurant menu links; SerpApi
        receives place IDs only, not your personal data. Menu item names displayed in the app are sourced
        from restaurants&apos; own public websites and listings.
      </p>

      <h2>10. Contact</h2>
      <p>
        For questions or legal matters, contact <a href="mailto:support@markvtkrash.com">support@markvtkrash.com</a>.
      </p>
    </LegalPage>
  );
}
