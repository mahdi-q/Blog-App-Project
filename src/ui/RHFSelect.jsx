import { ChevronDownIcon } from "@heroicons/react/24/outline";

function RHFSelect({ label, name, register, isRequired, options }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>

      <div className="textField__input relative">
        <select
          className="w-full appearance-none bg-transparent"
          id={name}
          {...register(name)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute left-5 top-4">
          <ChevronDownIcon className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}
export default RHFSelect;
