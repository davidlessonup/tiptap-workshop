import { useMemo } from "react";
import { useCurrentEditor } from "@tiptap/react";
import { createEditorHandler } from "./editorHandler.ts";

export function useCurrentEditorWithHandler() {
  const { editor } = useCurrentEditor();
  const editorHandler = useMemo(() => createEditorHandler(editor), [editor]);

  return { editor, editorHandler };
}
