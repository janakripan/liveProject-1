import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import FontSize from "../../utils/FontSize";


// ✅ Import Link extension
import Link from "@tiptap/extension-link";

const CopyField = ({ heading, content }) => {
  const [copied, setCopied] = useState(false);
  const [isError, setError] = useState("");

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

      // ✅ Add Link extension here
      Link.configure({
        openOnClick: false, // Optional: disable click for readonly
      }),
    ],
    content,
    editable: false,
  });

  const handleCopy = async () => {
    setError("");
    try {
      const plainText = editor?.getText() || "";
      await navigator.clipboard.writeText(plainText);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      setError("Failed to copy");
    }
  };

  return (
    <div className="w-full h-fit rounded-md bg-Bgprimary shadow-sm">
      <div className="flex justify-between rounded-t-md py-3 px-5 bg-[#2B2D33] items-center">
        <h3 className="font-satoshi text-heading font-bold capitalize text-base">
          {heading}
        </h3>
        <button
          onClick={handleCopy}
          className="text-commontext active:bg-Bghilight hover:underline text-sm flex items-center gap-1"
        >
          {copied ? (
            <IoCheckmarkDone className="text-[#BFC1C4] text-base" />
          ) : (
            <MdOutlineContentCopy className="text-[#BFC1C4] text-base" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="prose prose-invert prose-sm p-5 bg-Bghilight rounded-b-md font-satoshi text-base font-normal text-heading">
        <EditorContent editor={editor} />
      </div>

      {isError && <p className="text-sm text-red-500 px-5 pb-3">{isError}</p>}
    </div>
  );
};

export default CopyField;
