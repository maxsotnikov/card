import styled from "styled-components";

function Buttons () {
  return (
    <ButtonsWrapper>
      <SeemoreBtn>See More</SeemoreBtn>
      <SaveBtn>Save</SaveBtn>
    </ButtonsWrapper>
  )
}

export default Buttons;

const ButtonsWrapper = styled.div`
  display: flex;
  margin-left: 20px;
  gap: 12px;
`

const SeemoreBtn = styled.button`
  padding: 5px 20px;
  border-radius: 5px;
  border: 2px solid #4e71fe;
  font-weight: 700;
  font-size: 10px;
  line-height: 2;
  color: #4e71fe;
  
  &:hover {
    background-color: #4e71fe;
    color: #fff;
  }
`

const SaveBtn = styled(SeemoreBtn)`
  padding: 5px 30px;
`