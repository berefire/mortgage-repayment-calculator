import EmptyState from "./EmptyState";

const currencyFormatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
});

function ResultsPanel({ results }) {
    return (
        <div
            className="flex flex-col gap-4 py-8 px-6 md:p-10 bg-slate-900 md:rounded-b-3xl lg:rounded-tr-3xl lg:rounded-bl-[5rem]"
            aria-live="polite"
            aria-atomic="true"
        >
            {results ? (
                <>
                    <h2 className="font-body text-2xl leading-tight font-bold text-white">Your results</h2>
                    <p className="font-body text-slate-300 leading-normal font-medium">
                        Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.
                    </p>

                    <div className="flex flex-col gap-4 p-6 bg-black/25 border-t-4 border-lime rounded-lg mt-2">
                        <div className="flex flex-col gap-1">
                            <p className="font-body text-[1rem] text-slate-300 leading-normal">Your monthly repayments</p>
                            <p className="font-body text-[2.5rem] font-bold text-lime truncate">
                                {currencyFormatter.format(results.monthlyRepayment)}
                            </p>
                        </div>

                        <hr className="border-slate-700" />

                        <div className="flex flex-col gap-1">
                            <p className="font-body text-[1rem] leading-normal text-slate-300">Total you'll repay over the term</p>
                            <p className="font-body text-xl font-bold text-white truncate">
                                {currencyFormatter.format(results.totalRepayment)}
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <EmptyState />
            )}
        </div>
    );
}

export default ResultsPanel;