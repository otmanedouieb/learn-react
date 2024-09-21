import { useState } from "react";

export default function Notice({ children }) {
  const [hide, setHide] = useState(false);
  return (
    <div className={`box box-notice ${hide === true ? "hide" : ""}`}>
      <span className="close" onClick={() => setHide(true)}>
        &#10006;
      </span>
      {children}
    </div>
  );
}
