
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OurStory from "./pages/OurStory";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Enterprise from "./pages/Enterprise";
import SmallBusiness from "./pages/SmallBusiness";
import SupportingResearch from "./pages/SupportingResearch";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ConsumerHealthDataPrivacyPolicy from "./pages/ConsumerHealthDataPrivacyPolicy";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/small-business" element={<SmallBusiness />} />
          <Route path="/supporting-research" element={<SupportingResearch />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/consumer-health-data-privacy-policy" element={<ConsumerHealthDataPrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
