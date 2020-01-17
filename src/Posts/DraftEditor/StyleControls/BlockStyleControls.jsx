import React from 'react';
import classNames from 'classnames';
import type { EditorState } from 'draft-js';
import StyleButton from './StyleButton';
import ButtonGroup from 'antd/lib/button/button-group';
import { Radio, Icon } from 'antd';
import { FaHeading, FaListUl, FaQuoteRight, FaListOl, FaCode } from 'react-icons/fa';

type Props = {
    /** DraftJS editor state */
    editorState: EditorState,
    /** Function to be called on toggle */
    onToggle: Function,
    /** Array or string with CSS classes */
    classList: Array<string> | string
};

const BLOCK_TYPES = [
    {
        label: (
            <>             
                <FaHeading></FaHeading>    
                <strong>
                    1
                </strong>
            </>
        ),
        style: 'header-one'
    },
    {
        label: (
            <>
                <FaHeading></FaHeading>
                <strong>
                    <sub>2</sub>
                </strong>
            </>
        ),
        style: 'header-two'
    },
    {
        label: (
            <>
                <FaHeading></FaHeading>
                <strong>
                    <sub>3</sub>
                </strong>
            </>
        ),
        style: 'header-three'
    },
    {
        label: (
            <>
                <FaHeading ></FaHeading>
                <strong>
                    <sub>4</sub>
                </strong>
            </>
        ),
        style: 'header-four'
    },
    { label: <FaQuoteRight></FaQuoteRight>, style: 'blockquote' },
    { label: <FaListUl></FaListUl>, style: 'unordered-list-item' },
    { label: <FaListOl></FaListOl>, style: 'ordered-list-item' },
    { label: <FaCode></FaCode>, style: 'code-block' }
];

const BlockStyleControls = ({ editorState, onToggle, classList }: Props) => {
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <ButtonGroup buttonStyle="solid" className={classNames(classList)}>
            {BLOCK_TYPES.map((type) => (
                <StyleButton
                    key={type.style}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={onToggle}
                    style={type.style}
                />
            ))}
        </ButtonGroup>
    );
};

export default BlockStyleControls;
