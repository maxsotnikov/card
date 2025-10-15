import './App.css'
import {Card} from "./components/Card/Card.tsx";
import styled from "styled-components";
import image from "./assets/image.png";

function App() {
  return (
    <CardWrapper>
      <Card src={image}
            alt="Card"
            title="Headline"
            description="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."
      />
    </CardWrapper>
  )
}

export default App

const CardWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`