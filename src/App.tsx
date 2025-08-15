import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Get the base path for routing - this handles both local development and GitHub Pages
const getBasePath = () => {
  // Check if we're running on GitHub Pages
  if (window.location.hostname === 'kirtig7.github.io') {
    return '/kirti-gupta-folio';
  }
  // Check if we're running in a subdirectory (for other deployments)
  const pathSegments = window.location.pathname.split('/');
  if (pathSegments.length > 1 && pathSegments[1] === 'kirti-gupta-folio') {
    return '/kirti-gupta-folio';
  }
  // Local development
  return '';
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={getBasePath()}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
