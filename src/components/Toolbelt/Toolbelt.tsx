import React from "react";
import clsx from "clsx";

interface ToolbeltProps {
  toggleJSON: () => void;
}

export const Toolbelt: React.FC<ToolbeltProps> = ({ toggleJSON }) => {
  const hasLink = false;

  return (
    <div className="control-group">
      <div className="button-group">
        <button className={clsx({ "is-active": hasLink })}>
          {hasLink ? "Change Link" : "Add Link"}
        </button>
        <button onClick={toggleJSON}>Toggle JSON</button>
      </div>
    </div>
  );
};
