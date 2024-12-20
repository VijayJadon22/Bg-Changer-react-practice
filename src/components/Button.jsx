import React from "react";

function Button({onClick, value}) {
  return (
    <button onClick={onClick}
      className="outline-none px-4 py-1 rounded-full text-center "
      style={{ backgroundColor: value }}
    >
      {value}
    </button>
  );
}

export default Button;
