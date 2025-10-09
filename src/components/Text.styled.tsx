import styled from "styled-components";

function Text () {
  return (
    <TextWrapper>
      <Title>Headline</Title>
      <Description>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Description>
    </TextWrapper>
  )
}

export default Text;

const TextWrapper = styled.div`
  margin: 20px 20px;
`

const Title = styled.h1`
  margin-bottom: 20px;
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