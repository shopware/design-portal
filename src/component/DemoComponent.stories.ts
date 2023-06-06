import type {Meta, StoryObj} from '@storybook/vue3';

import DemoComponent from './DemoComponent.vue';
import {DarkVariation, render} from "../../node_modules/vitepress-shopware-docs/src/shopware/stories/helpers";

const meta = {
    title: 'Swag/DemoComponent',
    render: render(DemoComponent),
} satisfies Meta<typeof DemoComponent>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {};

export const Dark: Story = DarkVariation(Default)