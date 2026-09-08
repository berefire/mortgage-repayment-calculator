import { useState } from "react";
import MortgageForm from "@/components/MortgageForm/MortgageForm";
import ResultsPanel from "@/components/ResultsPanel/ResultsPanel";
import Attribution from "@/components/Attribution/Attribution";
import { calculateMortgage } from "@/utils/calculateMortgage";

function App() {
  const [results, setResults] = useState(null);

  const handleCalculate = (formData) => {
    setResults(calculateMortgage(formData));
  };

  const handleClear = () => {
    setResults(null);
  };

  return (
    <div className="min-h-dvh flex flex-col bg-slate-100">
      <main className="flex-1  grid place-items-center my-auto md:p-10">
        <div className="grid lg:grid-cols-2 max-w-252 overflow-hidden bg-white md:rounded-3xl shadow-lg">
          <h1 className="sr-only">Mortgage Repayment Calculator</h1>
          <MortgageForm onCalculate={handleCalculate} onClear={handleClear} />
          <ResultsPanel results={results} />
        </div>
      </main>
      <Attribution />
    </div>
  );
}

export default App;
