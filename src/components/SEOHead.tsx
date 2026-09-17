import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
  ogType?: "website" | "article";
}

const SITE_ORIGIN = "https://heartbeatofsouthbay.com";
const SOCIAL_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/qU9oinv2BSUqDshs9rlmSWAX37j1/social-images/social-1777348117573-HBOSB_Hyperlink.webp";

const SEOHead = ({
  title = "AI Lead Conversion Systems | Heartbeat of South Bay",
  description = "Heartbeat of South Bay builds and manages practical lead-response and business systems for service businesses, with structured intake, approved follow-up workflows, and CRM visibility.",
  ogTitle,
  ogDescription,
  canonicalUrl,
  ogType = "website"
}: SEOHeadProps) => {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const currentUrl = `${SITE_ORIGIN}${pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Favicon - consistent across all pages */}
      <link rel="icon" href="/brand/favicon.png" type="image/png" />
      
      {/* OpenGraph tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={SOCIAL_IMAGE} />
      <meta property="og:url" content={currentUrl} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={SOCIAL_IMAGE} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || currentUrl} />
    </Helmet>
  );
};

export default SEOHead;