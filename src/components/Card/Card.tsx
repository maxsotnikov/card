import styled from "styled-components";
// import image from "../../assets/image.png";
import Buttons from "../Buttons.styled.tsx";
import Text from "../Text.styled.tsx";

type CardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export function Card (props: CardProps) {
  return (
    <CardStyled>
      <Photo src= {props.src} alt={props.alt}/>
      <DescriptionWrapper>
        <Text title={props.title} description={props.description} />
        <Buttons/>
      </DescriptionWrapper>
    </CardStyled>
  )
}

const CardStyled =styled.div`
  max-width: 300px;
  min-height: 350px;
  padding: 10px 10px 22px;
  border-radius: 15px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
`

const Photo = styled.img`
  max-height: 170px;
  object-fit: cover;
`
const DescriptionWrapper = styled.div`
  padding: 20px 10px 0;
  display: flex;
  flex-direction: column;
  gap: 20px
`
