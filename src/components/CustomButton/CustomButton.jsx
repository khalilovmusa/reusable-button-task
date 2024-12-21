import { useState } from "react";
import "./CustomButton.css";

const CustomButton = ({ text, warnMessage, hint }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <button className={`btn ${warnMessage ? "warn" : ''}`.trim()}
                onMouseEnter={(e) => {
                    const hintElement = e.currentTarget.nextSibling;
                    if (hintElement) hintElement.style.display = 'block';
                }}
                onMouseLeave={(e) => {
                    const hintElement = e.currentTarget.nextSibling;
                    if (hintElement) hintElement.style.display = 'none';
                }} >
                {warnMessage ? warnMessage : text ? text : "Button"}
            </button>
            {hint && (
                <div className="hint">
                    {hint}
                </div>
            )}
        </div>
    )
}

export default CustomButton;