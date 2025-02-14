import React from "react";
import { useCurrentEditor } from "@tiptap/react";
import { getAndSetLink, getCurrentLink } from "../../utils/editorUtils";

export const BubbleMenuHandler: React.FC = () => {
  const { editor } = useCurrentEditor();

  const link = getCurrentLink(editor);
  if (link) {
    return (
      <div className="bubble-menu">
        <div className="button-group">
          <button>
            <a href={link} target="_blank">
              Open
            </a>
          </button>
          <button onClick={() => editor?.chain().focus().unsetLink().run()}>
            Unlink
          </button>
          <button onClick={() => getAndSetLink(editor)}>Change</button>
        </div>
      </div>
    );
  }
  return null;
};
