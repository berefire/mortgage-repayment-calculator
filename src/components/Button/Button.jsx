function Button({ children, onClick, type = "submit" }) {
    return (
        <button 
        type={type} 
        className="inline-flex justify-center items-center gap-3 py-4 px-10 w-full md:w-78.5 font-body text-[1.125rem] font-bold text-slate-900 leading-tight bg-lime rounded-full hover:bg-lime/50 focus-ring" 
        onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;