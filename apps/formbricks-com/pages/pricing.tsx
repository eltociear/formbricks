import HeroTitle from "@/components/shared/HeroTitle";
import Layout from "@/components/shared/Layout";
import { PricingTable } from "../components/shared/PricingTable";
import { PricingCalculator } from "../components/shared/PricingCalculator";
import { GetStartedWithPricing } from "@/components/shared/PricingGetStarted";
import { OpenSourceInfo } from "@/components/shared/OpenSourceInfo";

const inProductSurveys = {
  leadRow: {
    title: "In-Product Surveys",
    free: (
      <div>
        <span>5000 tracked users</span> <span className="text-slate-400">/mo</span>{" "}
      </div>
    ),
    paid: "Unlimited",
  },
  features: [
    { name: "Unlimited Surveys", free: true, paid: true },
    { name: "Granular Targeting", free: true, paid: true },
    { name: "30+ Templates", free: true, paid: true },
    { name: "API Access", free: true, paid: true },
    { name: "Third-Party Integrations", free: true, paid: true },
    { name: "Unlimited Team Members", free: true, paid: true },
    { name: "Unlimited Responses per Survey", free: true, paid: true },
    { name: "Advanced User Targeting", free: false, paid: true },
    { name: "Multi Language", free: false, paid: true },

    {
      name: "Custom URL for Link Surveys",
      free: "10$/mo",
      paid: "10$/mo",
      addOnText: "Free if you self-host",
    },
    {
      name: "Remove Formbricks Branding",
      free: "10$/mo",
      paid: "10$/mo",
      addOnText: "Free if you self-host",
    },
  ],
  endRow: {
    title: "In-Product Surveys Pricing",
    free: "Free",
    paid: (
      <div>
        <span>Free</span> <span className="text-slate-400">up to 5000 tracked users/mo, then </span>
        <span>$0.005</span>
        <span className="text-slate-400"> / tracked user</span>
      </div>
    ),
  },
};

const linkSurveys = {
  leadRow: {
    title: "Link Surveys",
    free: <span>Unlimited</span>,
    paid: "Unlimited",
  },

  features: [
    { name: "Unlimited Surveys", free: true, paid: true },
    { name: "Unlimited Responses", free: true, paid: true },
    { name: "Partial Submissions", free: true, paid: true },
    { name: "⚙️ URL Shortener", free: true, paid: true },
    { name: "⚙️ Recall Information", free: true, paid: true },
    { name: "⚙️ Hidden Field Questions", free: true, paid: true },
    { name: "⚙️ Time to Complete Metadata", free: true, paid: true },
    { name: "⚙️ File Upload", free: true, paid: true },
    { name: "⚙️ Signature Question", free: true, paid: true },
    { name: "⚙️ Question Grouping", free: true, paid: true },
    { name: "⚙️ Add Media to Questions", free: true, paid: true },
  ],

  endRow: {
    title: "Link Surveys Pricing",
    free: "Free",
    paid: "Free",
  },
};

const integrations = {
  leadRow: {
    title: "Integrations",
    free: <span>Unlimited</span>,
    paid: "Unlimited",
  },
  features: [
    { name: "Webhooks", free: true, paid: true },
    { name: "Zapier", free: true, paid: true },
    { name: "Google Sheets", free: true, paid: true },
    { name: "n8n", free: true, paid: true },
    { name: "Make", free: true, paid: true },
  ],
  endRow: {
    title: "Integrations Pricing",
    free: "Free",
    paid: "Free",
  },
};

const PricingPage = () => {
  return (
    <Layout
      title="Pricing | Formbricks Open Source Experience Management"
      description="Choose what's best for you! All our plans start free.">
      <HeroTitle
        headingPt1=""
        headingTeal="Pricing"
        subheading="Choose what's best for you! All our plans start free."
      />

      <GetStartedWithPricing showDetailed={true} />

      <PricingTable
        leadRow={inProductSurveys.leadRow}
        pricing={inProductSurveys.features}
        endRow={inProductSurveys.endRow}
      />
      <div className="my-12 md:my-20"></div>
      <PricingTable
        leadRow={linkSurveys.leadRow}
        pricing={linkSurveys.features}
        endRow={linkSurveys.endRow}
      />

      <div className="my-12 md:my-20"></div>

      <PricingTable
        leadRow={integrations.leadRow}
        pricing={integrations.features}
        endRow={integrations.endRow}
      />

      <div className="my-4"></div>

      <GetStartedWithPricing showDetailed={false} />

      <PricingCalculator />

      <OpenSourceInfo />
    </Layout>
  );
};

export default PricingPage;
