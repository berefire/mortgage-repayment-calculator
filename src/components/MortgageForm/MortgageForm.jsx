import { useState } from "react";
import RadioOption from "@/components/RadioOption/RadioOption";
import FormInput from "@/components/FormInput/FormInput";
import Button from "@/components/Button/Button";

const calculatorIconSrc = `${import.meta.env.BASE_URL}assets/images/icon-calculator.svg`;

function MortgageForm({ onCalculate, onClear }) {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");
  const [errors, setErrors] = useState({});

  const parseField = (value) => {
    const trimmed = String(value).trim();
    if (trimmed === "") return { value: null, error: "This field is required" };

    const number = Number(trimmed);
    if (!Number.isFinite(number))
      return { value: null, error: "Enter a valid number" };
    if (number <= 0) return { value: null, error: "Must be greater than 0" };

    return { value: number, error: null };
  };

  const validate = () => {
    const newErrors = {};

    const amountResult = parseField(amount);
    if (amountResult.error) newErrors.amount = amountResult.error;

    const termResult = parseField(term);
    if (termResult.error) newErrors.term = termResult.error;
    else if (!Number.isInteger(termResult.value) || termResult.value > 40) {
      newErrors.term = "Enter a whole number of years (1–40)";
    }

    const rateResult = parseField(rate);
    if (rateResult.error) newErrors.rate = rateResult.error;
    else if (rateResult.value > 100) {
      newErrors.rate = "Enter a realistic interest rate";
    }

    if (!mortgageType) newErrors.mortgageType = "This field is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onCalculate({ amount, term, rate, mortgageType });
  };

  const handleClear = () => {
    setAmount("");
    setTerm("");
    setRate("");
    setMortgageType("");
    setErrors({});
    onClear();
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full flex flex-col gap-6 md:gap-10 py-8 px-6 md:p-10 bg-white md:rounded-t-3xl font-body"
    >
      <div className="flex flex-col gap-2 items-start md:flex-row md:items-center md:justify-between">
        <h2 className="font-body text-xl font-bold text-slate-900">
          Mortgage Calculator
        </h2>
        <button
          type="button"
          onClick={handleClear}
          className="font-body text-sm text-slate-700 underline hover:text-slate-900 focus-ring focus-ring-slave"
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-col gap-6">
        <FormInput
          id="amount"
          label="Mortgage Amount"
          symbol="£"
          symbolPosition="prefix"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          error={errors.amount}
        />

        <div className="flex flex-col gap-6 md:flex-row">
          <FormInput
            id="term"
            label="Mortgage Term"
            symbol="years"
            symbolPosition="suffix"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            error={errors.term}
          />

          <FormInput
            id="rate"
            label="Interest Rate"
            symbol="%"
            symbolPosition="suffix"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            error={errors.rate}
          />
        </div>

        <fieldset aria-describedby={ errors.mortgageType ? "mortgageType-error" : undefined } className="flex flex-col gap-3">
          <legend className="font-body text-sm text-slate-700 mb-2">
            Mortgage Type
          </legend>

          <RadioOption
            id="repayment"
            name="mortgageType"
            value="repayment"
            label="Repayment"
            checked={mortgageType === "repayment"}
            onChange={(e) => setMortgageType(e.target.value)}
          />

          <RadioOption
            id="interest-only"
            name="mortgageType"
            value="interestOnly"
            label="Interest Only"
            checked={mortgageType === "interestOnly"}
            onChange={(e) => setMortgageType(e.target.value)}
          />

          {errors.mortgageType && (
            <p
              id="mortgageType-error"
              role="alert"
              className="text-sm text-red font-medium leading-normal"
            >
              {errors.mortgageType}
            </p>
          )}
        </fieldset>
      </div>

      <Button>
        <img src={calculatorIconSrc} alt="" className="size-5" />
        Calculate Repayments
      </Button>
    </form>
  );
}

export default MortgageForm;
