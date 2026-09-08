export function calculateMortgage({ amount, term, rate, mortgageType }) {
    const principal = Number(amount);
    const numberOfPayments = Number(term) * 12;
    const monthlyRate = Number(rate) / 100 / 12;

    if (mortgageType === 'interestOnly') {
        const monthlyRepayment = principal * monthlyRate;
        const totalRepayment = monthlyRepayment * numberOfPayments;

        return { monthlyRepayment, totalRepayment };
    }

    if (monthlyRate === 0) {
        const monthlyRepayment = principal / numberOfPayments;
        return { monthlyRepayment, totalRepayment: principal };
    }

    const growthFactor = Math.pow(1 + monthlyRate, numberOfPayments);
    const monthlyRepayment =
        (principal * monthlyRate * growthFactor) / (growthFactor - 1);
    const totalRepayment = monthlyRepayment * numberOfPayments;

    return { monthlyRepayment, totalRepayment };
}