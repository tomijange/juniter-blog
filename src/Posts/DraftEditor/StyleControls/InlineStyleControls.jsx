// @flow

import React from 'react';
import classNames from 'classnames';
import type { EditorState } from 'draft-js';

import StyleButton from './StyleButton';
import { FaCode, FaUnderline, FaItalic, FaBold } from 'react-icons/fa';

type Props = {
  /** DraftJS editor state */
  editorState: EditorState,
  /** Function to be called on toggle */
  onToggle: Function, 
  /** Array or string with CSS classes */
  classList: Array<string> | string
}

const INLINE_STYLES = [
    { label: <FaBold></FaBold>, style: 'BOLD' },
    { label: <FaItalic></FaItalic>, style: 'ITALIC' },
    { label: <FaUnderline></FaUnderline>, style: 'UNDERLINE' },
    { label: <FaCode></FaCode>, style: 'CODE' }
];

const InlineStyleControls = ({ editorState, onToggle, classList }: Props) => {
  const currentStyle = editorState.getCurrentInlineStyle();
  return (
    <div className={classNames(classList, "d-flex flex-nowrap")}>
      {INLINE_STYLES.map((type, index) => (
        <StyleButton
          active={currentStyle.has(type.style)}
          key={type.style}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export default InlineStyleControls;