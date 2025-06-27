import { useState } from "react";
import { TooltipProps } from "../types";
import "./Tooltip.css";

function Tooltip({ children, tooltipText }: TooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="tooltip-trigger"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="tooltip-box">
          {tooltipText}
        </div>
      )}
    </span>
  );
}

export default Tooltip;