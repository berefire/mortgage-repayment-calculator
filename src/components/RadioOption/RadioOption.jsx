function RadioOption({ id, name, value, label, checked, onChange }) {
    return (
        <label
        htmlFor={id} 
        className={`flex items-center gap-4 px-4 py-3 rounded-md border cursor-pointer hover:border-lime ${ checked ? 'border-lime bg-lime/15' : 'border-slate-300'}`}
        >
        <input
            type="radio"
            id={id}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            required
            className="peer sr-only"
        />

        <span
          aria-hidden="true"
          className={`flex items-center justify-center size-5 rounded-full border-2 peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 ${ checked ? 'border-lime peer-focus-visible:ring-lime ' : 'border-slate-700 peer-focus-visible:ring-slate-700' }`}
          >
            {checked && <span className="size-3 rounded-full bg-lime" />}
          </span>

          <span className="font-body font-bold text-slate-900 text-[1.125rem] leading-tight">{label}</span>

        </label>
    ); 
}

export default RadioOption;