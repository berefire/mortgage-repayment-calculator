function FormInput({
  id,
  label,
  symbol,
  symbolPosition = 'prefix',
  error,
  ...inputProps
}) {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-1 flex-col min-w-0 gap-3 items-start">
      <label htmlFor={id} className="font-body text-[1rem] leading-normal font-medium text-slate-700">
        {label}
      </label>

      <div
        className={`group flex w-full items-stretch rounded-md border overflow-hidden hover:border-slate-900 focus-within:border-lime ${
          error ? 'border-red' : 'border-slate-300'
        }`}
      >
        {symbol && symbolPosition === 'prefix' && (
          <span className={`flex items-center gap-2 px-4 py-3 font-bold text-[1.125rem] leading-tight group-focus-within:bg-lime ${ error ? 'bg-red text-white' : 'bg-slate-100 text-slate-700' }`}>
            {symbol}
          </span>
        )}

        <input
          id={id}
          type="text"
          inputMode="decimal"
          required
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className="flex-1 min-w-0 px-4 py-3 font-body font-bold text-slate-900 outline-none focus:bg-white"
          {...inputProps}
        />

        {symbol && symbolPosition === 'suffix' && (
          <span className={`flex items-center gap-2 px-4 py-3 font-bold text-[1.125rem] leading-tight group-focus-within:bg-lime ${ error ? 'bg-red text-white' : 'bg-slate-100 text-slate-700' }`}>
            {symbol}
          </span>
        )}
      </div>

      {error && (
        <p id={errorId} role="alert" className="text-sm text-red font-medium leading-normal">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormInput;