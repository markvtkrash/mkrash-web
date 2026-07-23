import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description: "How to permanently delete your PikMe account and data.",
};

export default function DeleteAccount() {
  return (
    <LegalPage title="Delete Your Account" pill="Account">
      <p>You can permanently delete your PikMe account and all associated data at any time.</p>

      <h2>In the app</h2>
      <ul>
        <li>Open the <strong>Profile</strong> tab.</li>
        <li>Scroll down and tap <strong>Delete Account</strong>.</li>
        <li>
          Confirm. This permanently removes your profile, saved items, and chat history, and cannot
          be undone.
        </li>
      </ul>

      <h2>Need help?</h2>
      <p>
        If you can&apos;t access the app, email <a href="mailto:support@pikme.app">support@pikme.app</a>{" "}
        from the address associated with your account and we&apos;ll delete it for you.
      </p>
    </LegalPage>
  );
}
