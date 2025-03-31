function TextArea({
  label,
  name,
  value,
  onChange,
  isRequired = false,
  dir = "rtl",
}) {
  return (
    <div className="textField relative">
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>

      <textarea
        autoComplete="off"
        name={name}
        id={name}
        dir={dir}
        value={value}
        onChange={onChange}
        className={`textField__input min-h-[150px] leading-8 ${dir === "ltr" ? "text-left" : "text-right"}`}
      ></textarea>
    </div>
  );
}
export default TextArea;
