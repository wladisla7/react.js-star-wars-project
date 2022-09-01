import UiLoading from './UiButton';

export default {
    title: 'Ui-Kit/UiButton',
    component: UiLoading
}

const Template = (args) => <UiLoading {...args} />;

const props = {
    theme: "black",
    classes: '',

}

export const Black = Template.bind({});

Black.args = {
    ...props,
    theme: 'black'
};

export const Blue = Template.bind({});

Blue.args = {
    ...props,
    theme: 'blue'
};

export const While = Template.bind({});

While.args = {
    ...props,
    theme: 'while'
};

