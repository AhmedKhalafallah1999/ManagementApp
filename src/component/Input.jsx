import { forwardRef } from "react";
const Input = forwardRef(function Input({ textarea, label, ...props }, ref) {
  const style =
    "w-full p-1 rounded-sm border-b-2 border-stone-300 bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} {...props} className={style} />
      ) : (
        <input ref={ref} {...props} className={style} />
      )}
    </p>
  );
});
export default Input;
