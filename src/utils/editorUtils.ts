import { Editor } from "@tiptap/react";

export function getAndSetLink(editor: Editor | null) {
  const currentLink = getCurrentLink(editor);
  const link = window.prompt("Insert URL", currentLink);
  if (link) {
    editor?.chain().focus().setLink({ href: link }).run();
  }
}

export function getCurrentLink(editor: Editor | null): string | undefined {
  return editor?.getAttributes("link").href;
}

export function isAttributeActive(
  editor: Editor | null,
  attribute: string
): boolean {
  return editor?.isActive(attribute) || false;
}
