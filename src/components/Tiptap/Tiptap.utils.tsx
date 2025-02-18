import loremIpsum from "../../templates/loremIpsum.html?raw";
import StarterKit from "@tiptap/starter-kit";
import { Link } from "../../extensions/Link";

export const content = loremIpsum;

export const extensions = [StarterKit, Link];
