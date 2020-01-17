import React from 'react';
import classNames from 'classnames';
import './StyleButton.scss';
import { Button, Radio } from 'antd';
import { FaHeading } from 'react-icons/fa';

const StyleButton = ({
    active,
    onToggle,
    style,
    label
}) => {
    const toggleActive = (e) => {
        e.preventDefault();
        onToggle(style);
    };

    return (
        <Button
            type={active ? "primary" : "default"}
            onMouseDown={toggleActive}>
            {label}
        </Button>
    );
};
export default StyleButton;