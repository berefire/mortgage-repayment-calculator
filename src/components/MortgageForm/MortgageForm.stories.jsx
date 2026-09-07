import MortgageForm from "./MortgageForm";
import { fn, expect } from "storybook/test";

export default {
    title: 'Components/MortgageForm',
    component: MortgageForm,
    args: {
        onCalculate: fn(),
        onClear: fn(),
    }
}

export const Default = {
    play: async ({ args, canvas, userEvent }) => {
        const amountInput = canvas.getByLabelText('Mortgage Amount');
        const termInput = canvas.getByLabelText('Mortgage Term');
        const rateInput = canvas.getByLabelText('Interest Rate');
        const interestOnlyRadio = canvas.getByRole('radio', { name: '' });
        const submitButton = canvas.getByRole('button', { name: /calculate repayments/i });

        await userEvent.type(amountInput, '300000');
        await userEvent.type(termInput, '25');
        await userEvent.type(rateInput, '5.25');
        await userEvent.click(interestOnlyRadio);

        await userEvent.click(submitButton);

        await expect(args.onCalculate).toHaveBeenCalled();
    }
}

export const ClearAll = {
    play: async ({ args, canvas, userEvent }) => {
        const amountInput = canvas.getByLabelText('Mortgage Amount');
        const clearButton = canvas.getByRole('button', { name: /clear all/i });

        await userEvent.type(amountInput, '300000');
        await expect(amountInput).toHaveValue('300000');

        await userEvent.click(clearButton);

        await expect(amountInput).toHaveValue('');
        await expect(args.onClear).toHaveBeenCalled();
    }
}

export const ValidationErrors = {
    play: async ({ canvas, userEvent }) => {
        const submitButton = canvas.getByRole('button', { name: /calculate repayments/i });

        await userEvent.click(submitButton);

        await expect(canvas.getAllByText('This field is required')).toHaveLength(4);
        await expect(canvas.getByText('Results shown here')).toBeInTheDocument();
        await expect(canvas.queryByText('NaN')).not.toBeInTheDocument();
    }
}