import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PikMe collects, uses, and protects your information.",
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" effective="Effective Date: June 17, 2026">
      <p>
        PikMe is committed to protecting your privacy. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you use our mobile application. PikMe is a
        product of Markvt Krash LLC.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>
          <strong>Location:</strong> Precise location to find nearby restaurants (with your
          permission). Not permanently stored; used for the current session only.
        </li>
        <li>
          <strong>Profile:</strong> Dietary preferences, health goals, allergens, cuisine
          preferences, and display name.
        </li>
        <li>
          <strong>Usage:</strong> Menu items viewed, items saved, chat interactions, and timestamps.
        </li>
        <li>
          <strong>Technical:</strong> Device type, OS version, app version, IP address (via API logs).
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>Personalize food recommendations and filter restaurants to your dietary needs.</li>
        <li>Improve the service and fix bugs (anonymized data only for algorithms).</li>
        <li>Send critical notifications and respond to support. We do not send marketing emails without consent.</li>
        <li>Comply with legal obligations and protect against fraud or abuse.</li>
      </ul>

      <h2>Third-Party Services</h2>
      <ul>
        <li>Google Places API — restaurant &amp; location data — <a href="https://policies.google.com/privacy">privacy policy</a></li>
        <li>Supabase — user data storage — <a href="https://supabase.com/privacy">privacy policy</a></li>
        <li>Anthropic (Claude AI) — menu recommendations — <a href="https://www.anthropic.com/legal/privacy">privacy policy</a></li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement industry-standard encryption and security measures. However, no method of
        transmission over the internet is 100% secure.
      </p>

      <h2>Your Rights</h2>
      <p>
        Where applicable (GDPR/CCPA): access, delete, opt-out of certain processing, and data
        portability. Contact <a href="mailto:support@pikme.app">support@pikme.app</a> to exercise
        these rights.
      </p>

      <h2>Data Retention</h2>
      <p>
        Profile data is kept until account deletion. Usage data is kept up to 12 months for
        analytics. Chat history is kept until you delete it.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href="mailto:support@pikme.app">support@pikme.app</a>.
      </p>
    </LegalPage>
  );
}
