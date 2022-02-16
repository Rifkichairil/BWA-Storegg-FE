import { Meta } from "@storybook/react";
import Input, { inputProps } from "../../../../components/atoms/Input";

export default {
    title: 'Components/Atoms/Input',
    component: Input,
} as Meta;

const Template = (args: inputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Nama Lengkap'
}