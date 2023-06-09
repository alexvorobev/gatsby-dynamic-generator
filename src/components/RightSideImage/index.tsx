import React from "react";
import Container from "../Container";

type Props = {
    title?: string;
    description?: string;
    image?: string;
}

const sectionStyle = {
    width: "100%",
    padding: "64px 0",
}

const sectionContentStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}

const sectionTitleStyle = {
    width: 340,
    fontSize: 32,
}

const sectionImageStyle = {
    width: 320,
    height: 240,
    objectPosition: 'center',
    objectFit: 'cover',
} as React.CSSProperties;

const RightSideImage:React.FC<Props> = ({
    title,
    description,
    image,
}) => {
    return (
        <div style={sectionStyle}>
            <Container>
                <div style={sectionContentStyle}>
                    <div>
                        <h2 style={sectionTitleStyle}>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <img src={image} alt="" style={sectionImageStyle} />
                </div>
            </Container>
        </div>
    )
};

export default RightSideImage;