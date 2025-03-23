import AuthProvider from "@/contexts/AuthContext";

function AppProviders({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
export default AppProviders;
