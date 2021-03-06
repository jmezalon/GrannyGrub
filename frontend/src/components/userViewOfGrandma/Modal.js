import React from "react";

export const Modal = ({ children }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">{children}</div>
    </div>
  );
};
