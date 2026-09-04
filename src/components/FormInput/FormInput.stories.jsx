import FormInput from "./FormInput";
import { fn, expect } from "storybook/test";

export default {
    title: 'Components/FormInput',
    component: FormInput,
    args: {
        onChange: fn(),
    }
}

export const MortgageAmount = {
    args: {
        id: 'amount',
        label: 'Mortgage Amount',
        symbol: '£',
        symbolPosition: 'prefix',
        value: '300000',
    },
    play: async ({ args, canvas, userEvent }) => {
        const input = canvas.getByLabelText('Mortgage Amount');

        await expect(input).toBeInTheDocument();

        await userEvent.type(input, '5');

        await expect(args.onChange).toHaveBeenCalled();
    }
}

export const MortgageTerm = {
    args: {
        id: 'term',
        label: 'Mortgage Term',
        symbol: 'years',
        symbolPosition: 'suffix',
        value: '25',
    }
}

export const InterestRate = {
    args: {
        id: 'rate',
        label: 'Interest Rate',
        symbol: '%',
        symbolPosition: 'suffix',
        value: '5.25',
    }
}

export const WithError = {
    args: {
        id: 'amount-error',
        label: 'Mortgage Amount',
        symbol: '£',
        symbolPosition: 'prefix',
        value: '',
        error: 'This field is required',
    },
    play: async ({ canvas }) => {
        const input = canvas.getByLabelText('Mortgage Amount');
        const errorMessage = canvas.getByRole('alert');

        await expect(input).toHaveAttribute('aria-invalid', 'true');
        await expect(errorMessage).toBeInTheDocument();
        await expect(errorMessage).toHaveTextContent('This field is required');
    }
}