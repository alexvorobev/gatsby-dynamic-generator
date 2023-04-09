import React from "react";
import Container from "../Container";

type Props = {
    title: string;
    image?: string;
}

const sectionStyle = {
    width: "100%",
    padding: "64px 0",
    background: "#f5f5f5",
}

const sectionContentStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

const sectionTitleStyle = {
    width: 340,
    fontSize: 48,
}

const sectionImageStyle = {
    width: 320,
    height: 580,
    objectPosition: 'center',
    objectFit: 'cover',
} as React.CSSProperties;

const HeroSection:React.FC<Props> = ({
    title,
    image,
}) => {
    return (
        <div style={sectionStyle}>
            <Container>
                <div style={sectionContentStyle}>
                    <h1 style={sectionTitleStyle}>{title}</h1>
                    <img src={image} alt="" style={sectionImageStyle} />
                </div>
            </Container>
        </div>
    )
};

export default HeroSection;