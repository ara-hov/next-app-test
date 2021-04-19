import PropTypes from 'prop-types';

export const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 14,
    },
};

export const tailLayout = {
    wrapperCol: {
        // offset: 5,
        // span: 14,
    }
};

export const labelProps = {
    colon: false,
    // labelAlign: 'left', // FIXME:
    // Types of property 'labelAlign' are incompatible.
    // Type 'string' is not assignable to type 'FormLabelAlign'.
}

export interface SelectItemInterface {
    label: string;
    value: string;
}

export function getOptions(objects) {
    return objects && objects.items ? objects.items.map((object) => {
        return {
            label: object.name,
            value: object.id,
        }
    }) : [];
}