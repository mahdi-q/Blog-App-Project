function RHFTextarea({
  label,
  name,
  dir = "rtl",
  register,
  errors,
  isRequired,
  validationSchema = {},
  className = "",
  rows = 4,
  ...rest
}) {
  const inputError = errors?.[name];
  const hasError = !!(errors && inputError);

  return (
    <div className={`textField relative ${className}`}>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>

      <textarea
        id={name}
        dir={dir}
        rows={rows}
        className={`textField__input resize-none ${dir === "ltr" ? "text-left" : "text-right"} ${hasError ? "textField--invalid" : ""}`}
        {...register(name, validationSchema)}
        {...rest}
      />

      {hasError && (
        <span className="block text-xs text-red-600">
          {inputError?.message}
        </span>
      )}
    </div>
  );
}
export default RHFTextarea;
