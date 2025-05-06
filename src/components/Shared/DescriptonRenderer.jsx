import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';

const DescriptionRenderer = ({ content }) => {
  // Initialize the editor with the content passed as a prop
  const editor = useEditor({
    extensions: [
      StarterKit, // Add basic extensions for text formatting
    ],
    content, // Set the initial content
    editable: false, // Make the editor read-only
  });

  return (
    <div className="rich-text-renderer">
      {/* Render the content using Tiptap Editor */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default DescriptionRenderer;