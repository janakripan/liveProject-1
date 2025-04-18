import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Code from '@tiptap/extension-code'

const MenuBar = ({ editor }) => {
  if (!editor) return null

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'font-bold text-blue-600' : ''}>
        Bold
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'italic text-blue-600' : ''}>
        Italic
      </button>
      <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={editor.isActive('underline') ? 'underline text-blue-600' : ''}>
        Underline
      </button>
      <button onClick={() => {
        const url = prompt('Enter URL');
        if (url) {
          editor.chain().focus().setLink({ href: url }).run()
        }
      }}>
        Link
      </button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'text-blue-600' : ''}>
        • Bullet List
      </button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'text-blue-600' : ''}>
        1. Ordered List
      </button>
      <button onClick={() => editor.chain().focus().toggleCode().run()} className={editor.isActive('code') ? 'text-blue-600' : ''}>
        ` Code
      </button>
    </div>
  )
}

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: { keepMarks: true, keepAttributes: false },
        orderedList: { keepMarks: true, keepAttributes: false },
      }),
      Underline,
      Link.configure({ openOnClick: false }),
      Code,
    ],
    content: '',
  })

  return (
    <div className="border p-4 rounded-md shadow-md max-w-2xl mx-auto">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="min-h-[150px] border p-2 rounded bg-white" />
    </div>
  )
}

export default Editor
