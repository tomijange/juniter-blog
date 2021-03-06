import React from 'react';
import Prism from 'prismjs';

import MultiDecorator from 'draft-js-plugins-editor/lib/Editor/MultiDecorator';
import { CompositeDecorator, EditorState } from 'draft-js';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import createPrismPlugin from 'draft-js-prism-plugin';


export const toolbarPlugin = createToolbarPlugin();
export const linkifyPlugin = createLinkifyPlugin();
export const emojiPlugin = createEmojiPlugin();
export const prismPlugin = createPrismPlugin({
    prism: Prism,
   
});


const Workaround = emojiPlugin.decorators[1].component;
emojiPlugin.decorators[1].component = props => (
    <Workaround getEditorState={() => { }} setEditorState={() => { }} {...props} />
);
const decorators = [...emojiPlugin.decorators, ...linkifyPlugin.decorators];

export const decorator = new MultiDecorator([new CompositeDecorator(decorators)]);

export const createWithContent = (content) => {
    return EditorState.createWithContent(content, decorator);
}