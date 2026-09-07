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

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({ amount, term, rate, mortgageType });
  };

  const handleClear = () => {
    setAmount("");
    setTerm("");
    setRate("");
    setMortgageType("");
    onClear();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 md:gap-10 py-8 px-6 md:p-10 bg-white rounded-2xl font-body"
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
        />

        <div className="flex flex-col gap-6 md:flex-row">
          <FormInput
            id="term"
            label="Mortgage Term"
            symbol="years"
            symbolPosition="suffix"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />

          <FormInput
            id="rate"
            label="Interest Rate"
            symbol="%"
            symbolPosition="suffix"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <fieldset className="flex flex-col gap-3">
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
