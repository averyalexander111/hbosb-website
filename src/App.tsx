import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";

// Lazy load pages for code splitting.
// If a stale build is cached, chunk URLs 404 - reload once to pick up the new build.
const lazyWithReload = <T extends { default: React.ComponentType<any> }>(
  factory: () => Promise<T>
) =>
  lazy(() =>
    factory().catch((error) => {
      const key = "chunk-reload";
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        window.location.reload();
        return new Promise<T>(() => {});
      }
      throw error;
    })
  );

const Index = lazyWithReload(() => import("./pages/Index"));
const AboutUs = lazyWithReload(() => import("./pages/AboutUs"));
const Blog = lazyWithReload(() => import("./pages/Blog"));
const BlogPost = lazyWithReload(() => import("./pages/BlogPost"));
const BlogAdmin = lazyWithReload(() => import("./pages/BlogAdmin"));
const Auth = lazyWithReload(() => import("./pages/Auth"));
const TermsAndConditions = lazyWithReload(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazyWithReload(() => import("./pages/PrivacyPolicy"));
const Contact = lazyWithReload(() => import("./pages/Contact"));
const ROICalculatorPage = lazyWithReload(() => import("./pages/ROICalculatorPage"));
const AILeadResponseSystem = lazyWithReload(() => import("./pages/AILeadResponseSystem"));
const Audit = lazyWithReload(() => import("./pages/Audit"));
const NotFound = lazyWithReload(() => import("./pages/NotFound"));

// Import AdminGuard (not lazy loaded)
import AdminGuard from "./components/AdminGuard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <img 
      src="/lovable-uploads/761ad773-d059-47f2-a526-d397fba4f668.png" 
      alt="Loading site content" 
      className="w-16 h-16 animate-pulse"
    />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/auth" element={<Auth />} />
              <Route 
                path="/admin/blog" 
                element={
                  <AdminGuard>
                    <BlogAdmin />
                  </AdminGuard>
                } 
              />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
              <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/leads" element={<AILeadResponseSystem />} />
              <Route path="/roi" element={<ROICalculatorPage />} />
              <Route path="/assessment" element={<Audit />} />
              <Route path="/audit" element={<Navigate to="/assessment" replace />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
