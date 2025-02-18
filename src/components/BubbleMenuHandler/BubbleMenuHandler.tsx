import React from "react";

export const BubbleMenuHandler: React.FC = () => {
  const hasLink = false;

  if (hasLink) {
    return null;
  }

  return (
    <div className="bubble-menu">
      <div className="button-group">
        <button>
          <a href={""} target="_blank">
            Open
          </a>
        </button>
        <button>Unlink</button>
        <button>Change</button>
      </div>
    </div>
  );
};
