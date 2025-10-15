import styled from "styled-components";

type TextProps = {
  title: string;
  description: string;
}

function Text (props: TextProps) {
  return (
    <TextWrapper>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </TextWrapper>
  )
}

export default Text;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 16px;
  color: #000;
`

const Description = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.6;
  color: #abb3ba;
`