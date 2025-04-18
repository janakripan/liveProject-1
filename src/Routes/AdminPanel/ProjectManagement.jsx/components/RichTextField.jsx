import React from "react";
import { useField, useFormikContext } from "formik";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Code from "@tiptap/extension-code";
import Strike from "@tiptap/extension-strike";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { ImBold, ImItalic } from "react-icons/im";
import { FaCode, FaUnderline } from "react-icons/fa6";
import { LuListOrdered } from "react-icons/lu";
import { IoLink } from "react-icons/io5";

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  const handleChange = (e) => {
    const value = e.target.value;

    switch (value) {
      case "paragraph":
        editor.chain().focus().setParagraph().run();
        break;
      case "h1":
      case "h2":
      case "h3":
        editor
          .chain()
          .focus()
          .toggleHeading({ level: parseInt(value[1]) })
          .run();
        break;
      case "strike":
        editor.chain().focus().toggleStrike().run();
        break;
      case "highlight":
        editor.chain().focus().toggleHighlight().run();
        break;
      case "left":
        editor.chain().focus().setTextAlign("left").run();
        break;
      case "center":
        editor.chain().focus().setTextAlign("center").run();
        break;
      case "right":
        editor.chain().focus().setTextAlign("right").run();
        break;
    }
  };

  return (
    <div className="flex flex-wrap gap-4 mb-2 w-full bg-Bghilight px-5 py-2 rounded-md  ">
      <select
        onChange={handleChange}
        defaultValue=""
        className="px-2 py-1 rounded border border-heading bg-Bghilight text-sm text-heading focus:outline-none focus:ring-1 focus:ring-buttonBlue"
      >
        <option value="" disabled>
          Select...
        </option>
        <option value="paragraph">Paragraph</option>
        <option value="h1">H1</option>
        <option value="h2">H2</option>
        <option value="h3">H3</option>
        <option value="strike">Strike</option>
        <option value="highlight">Highlight</option>
        <option value="left">Left Align</option>
        <option value="center">Center Align</option>
        <option value="right">Right Align</option>
      </select>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "font-bold text-blue-600 text-2xl"
            : " text-2xl text-heading"
        }
      >
        <ImBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "italic text-blue-600 text-2xl"
            : "text-2xl text-heading"
        }
      >
        <ImItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={
          editor.isActive("underline")
            ? "underline text-blue-600 text-2xl"
            : "text-2xl text-heading"
        }
      >
        <FaUnderline />
      </button>
      <button
        className="text-heading text-2xl"
        type="button"
        onClick={() => {
          const url = prompt("Enter URL");
          if (url && /^(https?:\/\/[^\s]+)/.test(url)) {
            editor.chain().focus().setLink({ href: url }).run();
          } else {
            alert("Please enter a valid URL");
          }
        }}
      >
        <IoLink />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList")
            ? "text-blue-600 text-2xl"
            : "text-2xl text-heading"
        }
      >
        <LuListOrdered />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={
          editor.isActive("code")
            ? "text-blue-600 text-2xl"
            : "text-2xl text-heading"
        }
      >
        <FaCode />
      </button>
    </div>
  );
};

const RichTextField = ({ name, label }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Underline,
      Link,
      Code,
      Strike,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: field.value || "",
    onUpdate: ({ editor }) => {
      setFieldValue(name, editor.getHTML());
    },
  });

  return (
    <div className="mb-4">
      {label && (
        <label className="block font-semibold w-full h-fit mb-1">{label}</label>
      )}
      <MenuBar editor={editor} />
      <div
        onClick={() => editor?.chain().focus().run()}
        className="border rounded bg-Bgprimary border-Bghilight min-h-[150px] p-2  prose prose-sm max-w-none list-outside text-commontext focus:outline-none focus:ring-0"
      >
        {editor ? (
          <EditorContent editor={editor} />
        ) : (
          <div>Loading editor...</div>
        )}
      </div>
      {meta.touched && meta.error && (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      )}
    </div>
  );
};

export default RichTextField;
