import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Hero = styled.div`
  background-color: ${props => props.theme.colors.lightGreen};
  background-image: url('https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80');
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    height: 331px;
  }
`;

const HeroDiv = styled.div`
  background: rgba(47, 72, 88, 0.76);
  width: 100%;
  max-width: 400px;
  margin: 0 2rem;
  padding: 1rem;
  text-align: center;

  p {
    color: ${props => props.theme.colors.white};
    font-size: 1.1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 0;
  }
`

const HeroTitle = styled.h1`
  color: ${props => props.theme.colors.lightGreen};
  font-size: 5rem;
  line-height: 1;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const BodyContainer = styled(Container)`
  text-align: center;
  padding: 2rem 20%;
`;

const BodyParagraph = styled.p`
  font-size: 1.1rem;
  text-align: center;
  max-width: 600px;
  margin: 2rem auto;
`;

const GetStartedButton = styled(Button)`
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  margin: 0 auto 1.25rem auto;
  background-color: ${props => props.theme.colors.lightGreen};
  color: ${props => props.theme.colors.darkBlue};
  font-weight: bold;
  border: none;
  padding: 1rem 2rem;
  width: 20rem;
  max-width: 90%;

  &:hover {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.darkBlue};
    border: 1px solid ${props => props.theme.colors.lightGreen};
  }

  &:active {
    background-color: ${props => props.theme.colors.lightGreen};
    color: ${props => props.theme.colors.darkBlue};
  }
`;

const RightCirBG = styled.div`
  position: absolute;
  right: 0;
  height: 34%;
  width: 50%;
  background-color: #C0E862;
  clip-path: ellipse(40% 40% at right center);
`
const LeftCirBG = styled(RightCirBG)`
  left: 0;
  clip-path: ellipse(40% 40% at left center);
`

function Landing() {
  return (
    <>
      <Hero>
        <HeroDiv>
          <HeroTitle>PetPals</HeroTitle>
          <p>Pet Life &#x2022; Enjoy &#x2022; Connect</p>
        </HeroDiv>
      </Hero>
      <BodyContainer>
        <RightCirBG></RightCirBG>
        <LeftCirBG></LeftCirBG>
        <BodyParagraph>
          Welcome to PetPals, the ultimate social media platform for pet lovers! 
          Connect, share, and celebrate the joy of your furry friends. Join us 
          today to embark on a pet-inspired journey with PetPals!
        </BodyParagraph>
      </BodyContainer>
      <GetStartedButton href="/signup" variant="secondary">
        Get Started
      </GetStartedButton>
    </>
  );
}

export default Landing;