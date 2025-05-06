import React, {  useEffect, useState } from "react";
import { useField, useFormikContext } from "formik";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import { ImBold, ImItalic } from "react-icons/im";
import { FaCode, FaStrikethrough, FaUnderline } from "react-icons/fa6";
import { LuList, LuListOrdered } from "react-icons/lu";
import { ColorPickerDropdown } from "./ColorPickerDropdown ";
import FontSize from "../../utils/Fontsize";
import { CgArrowsBreakeV } from "react-icons/cg";
import { FaLink } from "react-icons/fa6";

const MenuBar = React.memo(({ editor }) => {
  const [, setEditorState] = useState(0);

  useEffect(() => {
    if (!editor) return;

    const updateHandler = () => setEditorState((s) => s + 1);

    editor.on("update", updateHandler);
    editor.on("selectionUpdate", updateHandler);

    return () => {
      editor.off("update", updateHandler);
      editor.off("selectionUpdate", updateHandler);
    };
  }, [editor]);

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
    <div className="flex flex-wrap items-center  gap-4 mb-2 w-full bg-Bghilight px-5 py-2 rounded-md">
      <select
        onChange={handleChange}
        defaultValue=""
        className="px-2 py-1 rounded border border-heading bg-Bghilight text-sm text-heading focus:outline-none focus:ring-1 focus:ring-buttonBlue"
      >
        <option value="paragraph">Paragraph</option>
        <option value="h1">H1</option>
        <option value="h2">H2</option>
        <option value="h3">H3</option>
        <option value="highlight">Highlight</option>
        <option value="left">Left Align</option>
        <option value="center">Center Align</option>
        <option value="right">Right Align</option>
      </select>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded-lg transition-all duration-50 text-2xl ${
          editor.isActive("bold")
            ? "font-bold border border-heading shadow-inner shadow-heading text-blue-600 "
            : "font-bold text-heading"
        }`}
      >
        <ImBold />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-2 rounded-lg transition-all duration-50 text-2xl ${
          editor.isActive("strike")
            ? "font-bold  shadow-inner shadow-heading text-blue-600 "
            : "font-bold text-heading"
        }`}
      >
        <FaStrikethrough />
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded-lg transition-all duration-50 text-2xl ${
          editor.isActive("italic")
            ? "font-bold  shadow-inner shadow-heading text-blue-600 "
            : "font-bold text-heading"
        }`}
      >
        <ImItalic />
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-2 rounded-lg transition-all duration-50 text-2xl ${
          editor.isActive("underline")
            ? "font-bold  shadow-inner shadow-heading text-blue-600 "
            : "font-bold text-heading"
        }`}
      >
        <FaUnderline />
      </button>

      <select
        onChange={(e) => {
          const value = e.target.value;
          if (value) {
            editor.chain().focus().setFontSize(value).run();
          }
        }}
        value={editor.getAttributes("fontSize").fontSize || ""}
        className="px-2 py-1 rounded border border-heading bg-Bghilight text-sm text-heading focus:outline-none focus:ring-1 focus:ring-buttonBlue"
      >
        <option value="">Font Size</option>
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
        <option value="18">18</option>
        <option value="20">20</option>
        <option value="24">24</option>
        <option value="28">28</option>
      </select>

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
        <FaLink />
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded-lg transition-all duration-50 text-2xl ${
          editor.isActive("orderedList")
            ? "font-bold  shadow-inner shadow-heading text-blue-600 "
            : "font-bold text-heading"
        }`}
      >
        <LuListOrdered />
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded-lg transition-all duration-50 text-2xl ${
          editor.isActive("bulletList")
            ? "font-bold  shadow-inner shadow-heading text-blue-600 "
            : "font-bold text-heading"
        }`}
      >
        <LuList />
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="p-2 rounded-lg transition-all duration-50 text-2xl font-bold text-heading hover:text-blue-600"
      >
        <CgArrowsBreakeV />
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`p-2 rounded-lg transition-all duration-50 text-2xl ${
          editor.isActive("code")
            ? "font-bold  shadow-inner shadow-heading text-blue-600 "
            : "font-bold text-heading"
        }`}
      >
        <FaCode />
      </button>

      <ColorPickerDropdown editor={editor} />
    </div>
  );
});

const RichTextField = ({ name, label ,editorRef}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  // Debounced update to reduce render overhead
  const setEditorValue = (val) => {
    setFieldValue(name, val);
  };
  const editor = useEditor({
    key: field.value,
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
      Underline,
      Link,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "Type your description..." }),
      TextStyle,
      Color,
      FontSize,
    ],
    content:
      field.value &&
      typeof field.value === "object" &&
      field.value.type === "doc"
        ? field.value
        : { type: "doc", content: [] },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      setEditorValue(json);
    },
  });
  
  // ✅ Separate useEffect to assign ref
  useEffect(() => {
    if (editorRef && editor) {
      editorRef.current = editor;
    }
  }, [editor, editorRef]);

  return (
    <div className="mb-4">
      {label && (
        <label className="block font-semibold w-full h-fit mb-1">{label}</label>
      )}

      <MenuBar editor={editor} />

      <div
        onClick={() => editor?.chain().focus().run()}
        className="editor-wrapper border rounded bg-Bgprimary border-Bghilight min-h-[150px] p-2 prose prose-sm max-w-none list-outside text-commontext focus:outline-none focus:ring-1 focus:ring-buttonBlue"
      >
        {editor ? (
          <EditorContent key={field.value} editor={editor} />
        ) : (
          <div>Loading editor...</div>
        )}
      </div>

      {meta.touched && meta.error && (
        <div
          tabIndex={0}
          onBlur={() => {
            if (editor) {
              const json = editor.getJSON();
              setFieldValue(name, json); // force update on blur
            }
          }}
          className="text-red-500 text-sm mt-1"
        >
          {meta.error}
        </div>
      )}
    </div>
  );
};

export default RichTextField;
