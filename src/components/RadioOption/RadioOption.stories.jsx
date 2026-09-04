import RadioOption from "./RadioOption";
import { fn, expect } from "storybook/test";

export default {
    title: 'Components/RadioOption',
    component: RadioOption,
    args: {
        name: 'mortgageType',
        onChange: fn(),
    }
}

export const Repayment = {
    args: {
        id: 'repayment',
        value: 'repayment',
        label: 'Repayment',
        checked: true,
    },
    play: async ({ canvas }) => {
        const radio = canvas.getByRole('radio', { name: 'Repayment' });

        await expect(radio).toBeInTheDocument();
        await expect(radio).toBeChecked();
    }
}

export const InterestOnly = {
    args: {
        id: 'interest-only',
        value: 'interestOnly',
        label: 'Interest Only',
        checked: false,
    },
    play: async ({ args, canvas, userEvent }) => {
        const radio = canvas.getByRole('radio', { name: 'Interest Only' });

        await expect(radio).not.toBeChecked();

        await userEvent.click(radio);

        await expect(args.onChange).toHaveBeenCalled();
    }
}