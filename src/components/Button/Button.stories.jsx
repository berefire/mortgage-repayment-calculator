import Button from "./Button";
import { fn, expect } from "storybook/test";

const calculatorIconSrc = `${import.meta.env.BASE_URL}assets/images/icon-calculator.svg`; 

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        onClick: fn(),
    }
}

export const CalculateRepayments = {
    args: {
        children: (
            <>
                <img src={calculatorIconSrc} alt="" /> Calculate Repayments
            </>
        )
    },
    play: async({ args, canvas, userEvent}) => {
        const button = canvas.getByRole('button', { name: /calculate repayments/i });
        const icon = canvas.getByRole('presentation');

        await expect(button).toBeInTheDocument();
        await expect(icon).toBeInTheDocument();

        await userEvent.click(button);

        await expect(args.onClick).toHaveBeenCalledOnce();
    }
}

