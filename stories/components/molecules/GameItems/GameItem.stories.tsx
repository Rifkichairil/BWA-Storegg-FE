import { Meta } from "@storybook/react";
import GameItem, { GameItemsProps } from "../../../../components/molecules/GameItems";

export default {
    title: 'Components/Molecules/GameItems',
    component: GameItem,
} as Meta;

const Template = (args: GameItemsProps) => <GameItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Super Mechs',
    category: 'Mobile',
    thumbnail:'/img/Thumbnail-1.png'

}