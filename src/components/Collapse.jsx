import React, { useState, useRef } from "react";
import arrow_down from "../assets/arrow_down.png";
import './collapse.scss';

export default function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const handleToggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div
                onClick={handleToggleCollapse}
                className={`collapse ${isOpen ? "open" : ""}`}
            >
                <p>{title}</p>
                <img
                    className="collapse-icon"
                    src={isOpen ? arrow_down : arrow_down}
                    alt={isOpen ? "fermer" : "ouvrir"}
                />
            </div>
            {isOpen && (
                <div
                    ref={contentRef}
                    className={`collapsible-content ${isOpen ? "open" : ""}`}
                >
                    <ul>{content}</ul>
                </div>
            )}
        </div>
    );
}
