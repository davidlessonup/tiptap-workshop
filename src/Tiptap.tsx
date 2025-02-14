// src/Tiptap.tsx
import { EditorProvider, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import { Link } from "./extensions/Link";
import { BubbleMenuHandler } from "./components/BubbleMenuHandler/BubbleMenuHandler";
import { Toolbelt } from "./components/Toolbelt/Toolbelt";

// define your extension array
const extensions = [StarterKit, Color, TextStyle, Link];

const content = `<p><span>Hello World!</span></p>`;

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
