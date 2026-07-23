import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with PikMe.",
};

export default function Support() {
  return (
    <LegalPage title="Support" pill="Help">
      <p>Need help with PikMe? We&apos;re here.</p>

      <h2>Contact us</h2>
      <p>
        Email <a href="mailto:support@pikme.app">support@pikme.app</a> and we&apos;ll get back to
        you as soon as we can.
      </p>

      <h2>Common questions</h2>
      <ul>
        <li>
          <strong>How do I change my preferences?</strong> Open the Profile tab and tap Edit Profile.
        </li>
        <li>
          <strong>Location isn&apos;t working.</strong> Enable location access for PikMe in your
          device Settings.
        </li>
        <li>
          <strong>How do I delete my account?</strong> See the{" "}
          <Link href="/legal/delete-account">Delete Account</Link> page.
        </li>
      </ul>
    </LegalPage>
  );
}
