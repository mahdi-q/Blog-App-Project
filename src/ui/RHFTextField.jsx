function RHFTextField({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  isRequired,
  validationSchema = {},
  ...rest
}) {
  const inputError = errors?.[name];
  const hasError = !!(errors && inputError);

  return (
    <div className="textField relative">
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>

      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        className={`textField__input ${dir === "ltr" ? "text-left" : "text-right"} ${hasError ? "textField--invalid" : ""}`}
        {...register(name, validationSchema)}
        {...rest}
      />

      {hasError && (
        <span className="mt-2 block text-xs text-red-600">
          {inputError?.message}
        </span>
      )}
    </div>
  );
}
export default RHFTextField;
