import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

function FileInput({
  label,
  name,
  value,
  dir = "rtl",
  onChange,
  className,
  ...rest
}) {
  return (
    <label
      htmlFor="file-upload"
      className={`relative flex h-fit cursor-pointer items-center justify-center gap-x-2 rounded-lg border-2 border-primary-900 py-3 text-primary-900 ${className}`}
    >
      {label}

      <ArrowUpTrayIcon className="h-5 w-5" />

      <input
        id="file-upload"
        type="file"
        className="sr-only"
        name={name}
        dir={dir}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </label>
  );
}
export default FileInput;
