import React from "react";
import clsx from "clsx";
import { useCurrentEditor } from "@tiptap/react";
import { getAndSetLink, getCurrentLink } from "../../utils/editorUtils";

export const Toolbelt: React.FC = () => {
  const { editor } = useCurrentEditor();
  const hasLink = getCurrentLink(editor);

  return (
    <div className="control-group">
      <div className="button-group">
        <button
          className={clsx({ "is-active": hasLink })}
          onClick={() => getAndSetLink(editor)}
        >
          {hasLink ? "Change Link" : "Add Link"}
        </button>
        <button
          onClick={() => editor?.chain().focus().undo().run()}
          disabled={!editor?.can().chain().focus().undo().run()}
        >
          Undo
        </button>
        <button
          onClick={() => editor?.chain().focus().redo().run()}
          disabled={!editor?.can().chain().focus().redo().run()}
        >
          Redo
        </button>
      </div>
    </div>
  );
};
