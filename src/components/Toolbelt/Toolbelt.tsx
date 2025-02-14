import React from "react";
import { useCurrentEditor } from "@tiptap/react";
import {
  getAndSetLink,
  getCurrentLink,
  isAttributeActive,
} from "../../utils/editorUtils";

export const Toolbelt: React.FC = () => {
  const { editor } = useCurrentEditor();
  const hasLink = getCurrentLink(editor);

  return (
    <div className="control-group">
      <div className="button-group">
        <button
          className={isAttributeActive(editor, "bold") ? "is-active" : ""}
          onClick={() => editor?.chain().focus().toggleBold().run()}
        >
          Bold
        </button>
        <button onClick={() => getAndSetLink(editor)}>
          {hasLink ? "Change Link" : "Add Link"}
        </button>
      </div>
    </div>
  );
};
