import React from "react";
import { JsonView, darkStyles } from "react-json-view-lite";
import { useCurrentEditor } from "@tiptap/react";

export const JSONContent: React.FC = () => {
  const { editor } = useCurrentEditor();

  return (
    <div className="json-viewer">
      <JsonView data={editor?.getJSON() ?? {}} style={darkStyles} />
    </div>
  );
};
