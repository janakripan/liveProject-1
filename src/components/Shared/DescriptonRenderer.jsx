import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import FontSize from '../../utils/FontSize'
import HorizontalRule from '@tiptap/extension-horizontal-rule';


// ✅ Import Link extension
import Link from '@tiptap/extension-link';

const DescriptionRenderer = ({ content, className }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
        listItem: false,
      }),
      BulletList,
      OrderedList,
      ListItem,
      TextStyle,
      Color,
      Underline,
      Highlight,
      FontSize,
     

      
      Link.configure({
       
        openOnClick: false,
        // Optional: You can customize default behavior here
      }),
    ],
    content,
    editable: false,
  });

  return (
    <div className={`prose prose-invert prose-sm ${className}`}>
      <EditorContent editor={editor} />
    </div>
  );
};

export default DescriptionRenderer;
