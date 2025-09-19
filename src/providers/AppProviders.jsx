"use client";

import AuthProvider from "@/contexts/AuthContext";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <DarkModeProvider>
        <AuthProvider>{children}</AuthProvider>
      </DarkModeProvider>
    </QueryClientProvider>
  );
}
export default AppProviders;
