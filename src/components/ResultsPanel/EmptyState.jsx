const emptyStateIconSrc = `${import.meta.env.BASE_URL}assets/images/illustration-empty.svg`;

function EmptyState() {
    return (
        <div className="flex flex-col items-center text-center gap-4">
            <img src={emptyStateIconSrc} alt="" className="w-48" />
            <h2 className="font-body text-2xl leading-tight font-bold text-white">Results shown here</h2>
            <p className="font-body text-[1rem] font-medium text-slate-300 leading-normal">
                Complete the form and click "calculate repayments" to see what your monthly repayments would be.
            </p>
        </div>
    );
}

export default EmptyState;