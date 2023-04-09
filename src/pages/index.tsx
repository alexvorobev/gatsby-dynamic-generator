import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import HeroSection from "../components/HeroSection";
import data from "../../data";
import RightSideImage from "../components/RightSideImage";
import ContactForm from "../components/ContactForm";

type Inputs = {
  example: string,
  exampleRequired: string,
};

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = () => {

  return (
    <main style={pageStyles}>
      <HeroSection
        title={data[0].title}
        image={data[0]?.images?.[0].url}
      />
      <RightSideImage
        title={data[1].title}
        description={data[1].description}
        image={data[1]?.images?.[0].url}
      />
      <ContactForm
        title={data[3].title}
        description={data[3].description}
      />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
