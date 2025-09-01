import React from "react";

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 100000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    background: "#fff",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "90%",
    padding: "2rem 1.5rem 1.5rem 1.5rem",
    boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#333",
  },
  title: {
    margin: 0,
    marginBottom: "1rem",
    fontSize: "1.25rem",
    fontWeight: 600,
  },
};

export function Modal({ isOpen, onRequestClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div
      style={modalStyles.overlay}
      role="dialog"
      aria-modal="true"
      onClick={onRequestClose}
    >
      <div
        style={modalStyles.modal}
        onClick={e => e.stopPropagation()}
      >
    
        {title && <h2 style={modalStyles.title}>{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
} 