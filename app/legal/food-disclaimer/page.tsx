import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Food Disclaimer",
  description: "Important information about nutrition, allergens, diets, and AI suggestions in VektraVibe.",
};

export default function FoodDisclaimer() {
  return (
    <LegalPage title="Food Disclaimer" effective="Please read before using VektraVibe" pill="Important" bare>
      <div className="callout">
        <strong>Nutritional information are approximations.</strong> Allergen and dietary information
        could have changed. Verify important info with the restaurant before consuming.
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

      <h2>Dietary Preferences and Dish Names</h2>
      <p>
        Dietary preferences you set, and filters such as &quot;Matches my diet&quot;, use the words in a
        dish&apos;s name. A name does not show every ingredient or how a dish is made, so a dish that
        stays in a list may not fit your diet, and a dish that is hidden might have. Always confirm with
        the restaurant staff before you order.
      </p>

      <h2>Health Conditions</h2>
      <p>
        If you have medical conditions or serious allergies, consult healthcare professionals and do
        not rely solely on VektraVibe.
      </p>

      <h2>Estimated Menus and AI Suggestions</h2>
      <p>
        Where a restaurant has not confirmed its menu, the items shown are AI estimates and are labeled
        &quot;estimated&quot;. A dish may not be offered, and its details may be wrong. Quick Find and Quick
        take are AI-generated suggestions that may contain inaccuracies. Treat them as suggestions
        only.
      </p>

      <h2>Hours, Distances, and Availability</h2>
      <p>
        Opening hours, distances, and other restaurant details come from third parties and can be out of
        date. Check with the restaurant before you go.
      </p>

      <h2>Religious &amp; Cultural Requirements</h2>
      <p>
        Halal, kosher, vegetarian, vegan, gluten-free, and similar requirements should always be
        verified with restaurant staff.
      </p>

      <div className="callout">
        <strong>Emergency:</strong> Allergic reaction → call 911. Poison Control → 1-800-222-1222.
      </div>

      <p>
        VektraVibe provides information &quot;as-is&quot; without warranties of accuracy or completeness.
        By using VektraVibe you accept responsibility for verifying critical information and for your
        food-safety decisions.
      </p>
    </LegalPage>
  );
}
