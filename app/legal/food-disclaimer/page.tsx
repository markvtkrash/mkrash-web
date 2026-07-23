import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Food Disclaimer",
  description: "Important information about nutrition, allergens, and AI recommendations in PikMe.",
};

export default function FoodDisclaimer() {
  return (
    <LegalPage title="Food Disclaimer" effective="Please read before using PikMe" pill="Important">
      <div className="callout">
        <strong>Nutritional information are approximations.</strong> Allergen and dietary restriction
        information could have changed. Verify important info before consuming.
      </div>

      <h2>Nutrition</h2>
      <p>
        Values vary by preparation method, portion size, and ingredients. Verify nutritional
        information with restaurants and check labels on packaged items.
      </p>

      <h2>Allergens</h2>
      <p>
        Cross-contamination may occur during food preparation. Always inform restaurant staff of
        allergies, ask about preparation methods, and request ingredient lists.
      </p>

      <h2>Health Conditions</h2>
      <p>
        If you have medical conditions or serious allergies, consult healthcare professionals and do
        not rely solely on PikMe.
      </p>

      <h2>AI Recommendations</h2>
      <p>
        Menu items and recommendations are AI-generated and may contain inaccuracies or may not
        reflect actual availability. Treat them as suggestions only.
      </p>

      <h2>Religious &amp; Cultural Requirements</h2>
      <p>Halal, kosher, vegan, and similar requirements should always be verified with restaurant staff.</p>

      <div className="callout">
        <strong>Emergency:</strong> Allergic reaction → call 911. Poison Control → 1-800-222-1222.
      </div>

      <p>
        PikMe provides information &quot;as-is&quot; without warranties of accuracy or completeness.
        By using PikMe you accept responsibility for verifying critical information and for your
        food-safety decisions.
      </p>
    </LegalPage>
  );
}
