import styled from 'styled-components';

function PlayButton() {
  return (
    <Item>
      <Icon src="/assets/homeButtons/playButton.svg" />
      <Text>Play</Text>
    </Item>
  );
}
export default PlayButton;

const Item = styled.div`
  cursor: pointer;
  text-align: center;
  display: flex;
  width: 80%;
  height: 45px;
  background-color: #c4c4c4;
  border-radius: 5.625px;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 13.6416px;

  font-weight: 600;
  font-size: 20.4624px;
  color: #000000;
  margin-left: 15px;
`;
