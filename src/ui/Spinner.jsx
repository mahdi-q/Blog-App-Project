function Spinner({ size = "large" }) {
  const spinnerSize = {
    large: "spinner",
    small: "spinner-mini",
  };

  return <div className={spinnerSize[size]}></div>;
}
export default Spinner;
