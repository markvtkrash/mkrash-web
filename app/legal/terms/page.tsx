import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of PikMe.",
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" effective="Effective Date: June 17, 2026" bare>
      <p>By using PikMe, you agree to these Terms. PikMe is a product of Markvt Krash LLC.</p>

      <h2>1. Use License</h2>
      <p>
        A non-exclusive, non-transferable, revocable license for personal, non-commercial use. You
        agree not to reverse engineer, resell, scrape, or otherwise misuse the app.
      </p>

      <h2>2. User Responsibilities</h2>
      <p>Maintain account security, provide accurate information, and respect others&apos; rights.</p>

      <h2>3. Limitation of Liability</h2>
      <p>
        PikMe is provided &quot;as-is&quot; without warranties. We are not liable for indirect,
        incidental, or consequential damages, loss of data, or reliance on food recommendations. You
        use PikMe at your own risk.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>All content, features, and functionality are owned by Markvt Krash LLC or its licensors.</p>

      <h2>5. Prohibited Activities</h2>
      <p>No harassment or abuse, no illegal or obscene content, no interference with functionality, no malware, and no fraud.</p>

      <h2>6. Termination</h2>
      <p>We may suspend or terminate accounts for violations, illegal activity, abuse, or inactivity.</p>

      <h2>7. Changes to Terms</h2>
      <p>We may update these Terms at any time. Continued use means you accept the changes.</p>

      <h2>8. Contact</h2>
      <p>
        For legal matters, contact <a href="mailto:legal@pikme.app">legal@pikme.app</a>.
      </p>
    </LegalPage>
  );
}
