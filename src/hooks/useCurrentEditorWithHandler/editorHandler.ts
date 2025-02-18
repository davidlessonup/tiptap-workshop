import { Editor } from "@tiptap/react";

interface EditorHandler {
  link: {
    set: (url?: string) => void;
    unset: () => void;
    getCurrentUrl: () => string | undefined;
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createEditorHandler(editor: Editor | null): EditorHandler {
  return {
    link: {
      set: () => {},
      unset: () => {},
      getCurrentUrl: () => "",
    },
  };
}
