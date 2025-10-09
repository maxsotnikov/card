import './App.css'
import {Card, CardWrapper} from "./components/Card.tsx";
import image from "./assets/image.png";
import Text from "./components/Text.styled.tsx";
import Buttons from "./components/Buttons.styled.tsx";
import {Photo} from "./components/Image.styled.tsx";

function App() {
  return (
    <CardWrapper>
      <Card>
        <Photo src={image} />
        <Text/>
        <Buttons/>
      </Card>
    </CardWrapper>

  )
}

export default App
