import React from "react";
import Container from "../Container";
import { useForm } from "react-hook-form";

type Props = {
    title?: string;
    description?: string;
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

const sectionFormStyle = {
    display: "flex",
    flexDirection: "column",
    width: 340,
    gap: 16,
} as React.CSSProperties;

const ContactForm:React.FC<Props> = ({
    title,
    description,
}) => {
    const { register, handleSubmit, watch } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div style={sectionStyle}>
            <Container>
                <div style={sectionContentStyle}>
                    <div>
                        <h2 style={sectionTitleStyle}>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <form style={sectionFormStyle} onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">email</label>
                        <input type="email" {...register('email')} />
                        <label htmlFor="message">message</label>
                        <input type="text" {...register('email')} />
                        <input type="submit" />
                    </form>
                </div>
            </Container>
        </div>
    )
};

export default ContactForm;