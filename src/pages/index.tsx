import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import HeroSection from "../components/HeroSection";
import data from "../../data";
import RightSideImage from "../components/RightSideImage";
import ContactForm from "../components/ContactForm";
import LeftSideImage from "../components/LeftSideImage";

type Inputs = {
  example: string,
  exampleRequired: string,
};

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

type ImageType = {
  url?: string,
  alt?: string,
}

const IndexPage: React.FC<PageProps> = () => {

  const renderHero = React.useCallback(({title, images}: {title?: string, images?: ImageType[]}) => (
    <HeroSection
      title={title}
      image={images?.[0].url}
    />
  ), []);

  const renderRightSide = React.useCallback(({title, description, images}: {title?: string, description?: string, images?: ImageType[]}) => (
    <RightSideImage
        title={title}
        description={description}
        image={images?.[0].url}
      />
  ), []);

  const renderLeftSide = React.useCallback(({title, description, images}: {title?: string, description?: string, images?: ImageType[]}) => (
    <LeftSideImage
        title={title}
        description={description}
        image={images?.[0].url}
      />
  ), []);

  const renderContactForm = React.useCallback(({title, description}: {title?: string, description?: string}) => (
    <ContactForm
        title={title}
        description={description}
      />
  ), []);

  return (
    <main style={pageStyles}>
      {
        data.map((item, index) => {
          switch (item.type) {
            case 'hero':
              return renderHero(item);
            case 'text-image-right-side':
              return renderRightSide(item);
            case 'text-image-left-side':
              return renderLeftSide(item);
            case 'contact-form':
              return renderContactForm(item);
            default:
              return null;
          }
        }
        )
      }
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
