import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Vectra Vibe collects, uses, and protects your information.",
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" effective="Effective Date: October 17, 2026" bare>
      <p>
        Vectra Vibe is committed to protecting your privacy. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you use our mobile application. Vectra Vibe is a
        product of Markvt Krash LLC.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>
          <strong>Account:</strong> Your email address and password (the password is stored securely
          and we cannot read it). We use your email to sign you in and to reset your password.
        </li>
        <li>
          <strong>Location:</strong> Precise location to find nearby restaurants (with your
          permission). We send your coordinates to Google to find restaurants and to work out which
          state you are in. We do not keep a history of where you have been. To avoid repeating searches,
          our servers keep the results of recent searches for an area, and the state of an area, for up
          to 30 days. These are kept by area and are not linked to your account.
        </li>
        <li>
          <strong>Profile:</strong> Dietary preferences, health goals, cuisine preferences, the kinds of
          places and ways of getting food you like, allergens if you provide them, and a display name.
        </li>
        <li>
          <strong>Usage:</strong> Menu items viewed, items saved, Quick Find questions and answers, and
          timestamps.
        </li>
        <li>
          <strong>Waitlist:</strong> If you ask to be told when Vectra Vibe opens in your state, we store
          your email address and that state.
        </li>
        <li>
          <strong>App activity counts:</strong> We count anonymous events in the app, such as opening
          the app, searching, viewing a restaurant or menu, saving, sharing, and signing up. These use a
          random ID created on your phone. They are not linked to your account, email, name, location, or
          what you type in a search.
        </li>
        <li>
          <strong>Technical:</strong> Device type, OS version, app version, IP address (via API logs).
        </li>
        <li>
          <strong>On your device only:</strong> Some settings, such as the restaurant filters you last
          used, are saved on your phone and are not sent to us.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>Personalize food suggestions and restaurant filters to your preferences.</li>
        <li>Improve the service and fix bugs (anonymized data only for algorithms).</li>
        <li>Send critical notifications and respond to support. We do not send marketing emails without consent.</li>
        <li>Comply with legal obligations and protect against fraud or abuse.</li>
      </ul>

      <h2>Third-Party Services &amp; Data Sources</h2>
      <ul>
        <li>
          Google Maps Platform (Places and Geocoding) — restaurant search and location lookup —{" "}
          <a href="https://policies.google.com/privacy">Google Privacy Policy</a>.
          Use of Google Maps features and content is subject to the then-current{" "}
          <a href="https://www.google.com/help/terms_maps/">Google Maps End User Additional Terms of Service</a> and the Google Privacy Policy.
        </li>
        <li>
          SerpApi — reads Google Maps listings to locate restaurant menu links. SerpApi receives place IDs only; it
          does not receive any personal information about you.
        </li>
        <li>Supabase — account and user data storage — <a href="https://supabase.com/privacy">privacy policy</a></li>
        <li>
          AI service providers — Quick Find, Quick take, and estimated menu items. These are Anthropic (Claude) —{" "}
          <a href="https://www.anthropic.com/legal/privacy">privacy policy</a> — and Quicksilver
          (quicksilverpro.io), which provides access to other AI models. Which one handles a request
          depends on our settings.
        </li>
      </ul>
      <p>
        <strong>What we send to AI providers:</strong> your Quick Find questions, the names of nearby
        restaurants and dishes, dish nutrition estimates, and the profile choices that help tailor an
        answer (such as dietary preferences, health goals, cuisine preferences and allergens you have
        provided). If you describe your preferences in your own words during setup, that text is sent too.
        We do not send your name or email address. Quick Find uses only menu items we have confirmed.
      </p>
      <p>
        Menu item names are sourced from restaurants&apos; own public websites and listings. Where a menu
        has not been confirmed by the restaurant, the items shown are AI estimates and are labeled as such.
      </p>

      <h2>Data Security</h2>
      <p>
        We implement industry-standard encryption and security measures. However, no method of
        transmission over the internet is 100% secure.
      </p>

      <h2>Children</h2>
      <p>
        Vectra Vibe is not intended for children under 13, and we do not knowingly collect personal
        information from them. If you believe a child has given us information, contact{" "}
        <a href="mailto:support@markvtkrash.com">support@markvtkrash.com</a> and we will delete it.
      </p>

      <h2>Your Rights</h2>
      <p>
        Where applicable (GDPR/CCPA): access, delete, opt-out of certain processing, and data
        portability. Contact <a href="mailto:support@markvtkrash.com">support@markvtkrash.com</a> to exercise
        these rights. You can also delete your account in the app (Profile, then Delete Account).
      </p>

      <h2>Data Retention</h2>
      <p>
        Profile data is kept until account deletion. Usage data is kept up to 12 months for
        analytics. Anonymous app activity counts are deleted after 180 days. Chat history is kept until
        you delete it. Waitlist emails are kept until the state opens or you ask us to remove them.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this policy as Vectra Vibe changes. The effective date above shows when it was last
        updated.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href="mailto:support@markvtkrash.com">support@markvtkrash.com</a>.
      </p>
    </LegalPage>
  );
}
