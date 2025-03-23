function AuthLayout({ children }) {
  return (
    <div className="my-20 flex items-center justify-center">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
export default AuthLayout;
