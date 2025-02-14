import { Link as LinkExtension } from "@tiptap/extension-link";

export const Link = LinkExtension.extend({
  addCommands() {
    const commands = this.parent?.() ?? {};
    return {
      ...commands,
      setLink: commands.setLink,
    };
  },
}).configure({
  defaultProtocol: "https",
});
