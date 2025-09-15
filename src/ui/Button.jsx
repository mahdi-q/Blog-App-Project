const btnType = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

function Button({
  children,
  onClick,
  loading = false,
  variant = "primary",
  className,
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`btn ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
export default Button;
