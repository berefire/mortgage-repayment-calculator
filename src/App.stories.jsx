import App from "./App";
import { expect } from "storybook/test";

export default {
    title: 'App',
    component: App,
}

export const Default = {
    play: async ({ canvas }) => {
        await expect(canvas.getByText('Results shown here')).toBeInTheDocument();
    }
}

export const CalculateFlow = {
    play: async ({ canvas, userEvent }) => {
        const amountInput = canvas.getByLabelText('Mortgage Amount');
        const termInput = canvas.getByLabelText('Mortgage Term');
        const rateInput = canvas.getByLabelText('Interest Rate');
        const submitButton = canvas.getByRole('button', { name: /calculate repayments/i });

        await userEvent.type(amountInput, '300000');
        await userEvent.type(termInput, '25');
        await userEvent.type(rateInput, '5.25');
        await userEvent.click(submitButton);

        await expect(canvas.getByText('Your results')).toBeInTheDocument();
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