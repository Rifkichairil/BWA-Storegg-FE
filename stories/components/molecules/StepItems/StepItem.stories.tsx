import { Meta } from "@storybook/react";
import StepItem, { StepItemsProps } from "../../../../components/molecules/StepItems";

export default {
    title: 'Components/Molecules/StepItems',
    component: StepItem,
} as Meta;

const Template = (args: StepItemsProps) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: '1. Start',
    icon: 'step1',
    desc1: 'Pilih salah satu game',
    desc2: 'yang ingin kamu topup',
}