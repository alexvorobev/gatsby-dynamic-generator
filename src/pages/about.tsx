import { Link } from "gatsby";
import React from "react";

const AboutPage: React.FC = () => {
    return (
        <div>
            <h1>About</h1>
            <Link to="/about">back home</Link>
        </div>
    );
}

export default AboutPage;
