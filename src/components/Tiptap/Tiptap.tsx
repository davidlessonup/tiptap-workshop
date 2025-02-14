// src/Tiptap.tsx
import { EditorProvider, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import { Link } from "../../extensions/Link";
import { BubbleMenuHandler } from "../BubbleMenuHandler/BubbleMenuHandler";
import { Toolbelt } from "../Toolbelt/Toolbelt";
import { content } from "./Tiptap.utils";

// define your extension array
const extensions = [StarterKit, Color, TextStyle, Link];

export const Tiptap = () => {
  return (
    <EditorProvider
      extensions={extensions}
      content={content}
      slotBefore={<Toolbelt />}
    >
      {/* <FloatingMenu editor={null}>This is the floating menu</FloatingMenu> */}
      <BubbleMenu editor={null}>
        <BubbleMenuHandler />
      </BubbleMenu>
    </EditorProvider>
  );
};
