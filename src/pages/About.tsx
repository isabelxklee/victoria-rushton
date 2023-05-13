import React, { FunctionComponent } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";



const ProfilePic = styled.img`
  border-radius: 100%;
  width: 280px;
  height: 280px;
  object-fit: cover;
  border: 2px solid ${COLORS.BLACK};
  margin: 40px 80px 20px 0;

  @media (max-width: 900px) {
    margin: 0;
    width: 200px;
    height: 200px;
  }
`;

// const IntroContainer = styled(HeroContainer)`
//   display: flex;
//   border-bottom: none;

//   @media (max-width: 900px) {
//     display: block;
//     padding: 60px 0;
//     text-align: center;
//   }
// `

const PressContainer = styled.div`
  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  width: calc(100vw - 160px);
  margin-left: calc(50% - 50vw);
  padding: 80px;

  @media (max-width: 900px) {
    padding: 40px;
    width: calc(100vw - 80px);
  }
`;

const PressArticleTitle = styled.a`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  color: ${COLORS.WHITE};
`;

const PressArticleContainer = styled.div`
  margin: 48px 0;
`;

const Container = styled.div`
  border-left: 2px solid ${COLORS.WHITE};
  padding-left: 50px;

  @media (max-width: 900px) {
    padding-left: 0;
    border-left: none;
  }
`;

const About: FunctionComponent = () => {
  // const data = useStaticQuery(pageQuery);
  // const fonts = data.allContentfulFont.nodes;

  // console.log(fonts);

  return (
    <>
      <IntroContainer>
        {/* <ProfilePic
    src="https://storage.googleapis.com/victoria-rushton-bucket/victoria_profile_pic_ds7twb.png"
    rel="no_link referrer"
    alt="A black and white portrait of a woman wearing glasses."
  />
  <div>
    <H2>{about.greeting}</H2>
    <BlockContent blocks={about.bio} />
    <Button style={{margin: '26px 0'}}>
      <TextLink href={about.buttonLink} inputWeight="300" $light={true} target="_blank">
        {about.buttonText}
      </TextLink>
    </Button>
  </div> */}
      </IntroContainer>

      {/* 
<PressContainer>
<Container>
  <H2>Speaking and Writing</H2>
  {press &&
    press.map((object) => (
      <PressArticleContainer key={object._id}>
        <PressArticleTitle
          href={object.link}
          target="_blank"
          rel="no_referrer"
          $linkStyle={object.link && 'on'}
        >
          {object.title}
        </PressArticleTitle>
        <P>{object.description}</P>
      </PressArticleContainer>
    ))}
</Container>
</PressContainer> */}
    </>
  );
};

export default About;

// const pageQuery = graphql`
//   query HomePageQuery {
//     allContentfulFont {
//       nodes {
//         name
//         slug
//         description {
//           description
//         }
//         heroCopy {
//           heroCopy
//         }
//         weights {
//           name
//           value
//         }
//       }
//     }
//   }
// `;
