import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
  ogType?: "website" | "article";
}

const SEOHead = ({
  title = "AI Revenue Systems for Lead Conversion | Heartbeat of South Bay",
  description = "We build AI revenue systems, CRM, and high-converting websites for local brands. Get more leads, reviews, and repeat customers—done for you. Start your AI Revenue System Assessment.",
  ogTitle,
  ogDescription,
  canonicalUrl,
  ogType = "website"
}: SEOHeadProps) => {
  const currentUrl = window.location.origin + window.location.pathname;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Favicon - consistent across all pages */}
      <link rel="icon" href="/lovable-uploads/8a3ccb7e-983a-4e89-8910-236ab612f1c3.png" type="image/png" />
      
      {/* OpenGraph tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content="/lovable-uploads/72f8c969-3149-4fbe-b2f1-104ba80febd2.png" />
      <meta property="og:url" content={currentUrl} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content="/lovable-uploads/72f8c969-3149-4fbe-b2f1-104ba80febd2.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl || currentUrl} />
    </Helmet>
  );
};

export default SEOHead;