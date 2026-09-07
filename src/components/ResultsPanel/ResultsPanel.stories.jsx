import ResultsPanel from "./ResultsPanel";
import { expect } from "storybook/test";

export default {
    title: 'Components/ResultsPanel',
    component: ResultsPanel,
}

export const Empty = {
    args: {
        results: null,
    },
    play: async ({ canvas }) => {
        await expect(canvas.getByText('Results shown here')).toBeInTheDocument();
    }
}

export const WithResults = {
    args: {
        results: {
            monthlyRepayment: 1797.74,
            totalRepayment: 539322.94,
        },
    },
    play: async ({ canvas }) => {
        await expect(canvas.getByText('Your results')).toBeInTheDocument();
        await expect(canvas.getByText('£1,797.74')).toBeInTheDocument();
        await expect(canvas.getByText('£539,322.94')).toBeInTheDocument();
    }
}