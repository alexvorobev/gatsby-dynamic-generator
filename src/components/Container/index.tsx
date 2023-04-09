import React from "react";

const containerStyles = {
    margin: "0 auto",
    maxWidth: 960,
    padding: "0px 1.0875rem 1.45rem",
    width: "100%",
}

type Props = {
    children: React.ReactNode;
}

const Container:React.FC<Props> = ({ children }) => (
    <div style={containerStyles}>
        {children}
    </div>
);

export default Container;