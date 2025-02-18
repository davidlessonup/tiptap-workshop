import { useState } from "react";
import { EditorProvider, BubbleMenu } from "@tiptap/react";
import { content, extensions } from "./Tiptap.utils";
import { BubbleMenuHandler } from "../BubbleMenuHandler/BubbleMenuHandler";
import { Toolbelt } from "../Toolbelt/Toolbelt";
import { JSONContent } from "../JSONContent/JSONContent";

export const Tiptap = () => {
  const [showJSON, setShowJSON] = useState(false);

  return (
    <EditorProvider
      extensions={extensions}
      content={content}
      slotBefore={
        <Toolbelt toggleJSON={() => setShowJSON((showJSON) => !showJSON)} />
      }
      slotAfter={showJSON && <JSONContent />}
    >
      <BubbleMenu editor={null}>
        <BubbleMenuHandler />
      </BubbleMenu>
    </EditorProvider>
  );
};
