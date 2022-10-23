import React, { memo } from "react";

function Todo({ text, isDone, id, onChange }) {
    console.log("render");
    return (
        <div>
            <span className={isDone && "deleted-text"}>{text}</span>
            <input type="checkbox" checked={isDone} onChange={() => onChange(id)} />
        </div>
    );
}

export default memo(Todo);
