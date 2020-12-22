import React from "react";
const Header = () => {
  return (
    <header>
      <h1 className="center white-text" style={headerStyle}>
        Todo's React way
      </h1>
    </header>
  );
};

const headerStyle = {
  background: "#2196f3",
  padding: "1rem",
};
export default Header;
