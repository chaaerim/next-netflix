import styled, { css } from 'styled-components';

const buttonItems = [
  { id: 1, src: 'plusButton.svg', text: 'My List', isPlay: false },
  { id: 2, src: 'playButton.svg', text: 'Play', isPlay: true },
  { id: 3, src: 'infoButton.svg', text: 'Info', isPlay: false },
];
function HomeButtons() {
  return (
    <ButtonContainer>
      {buttonItems.map((item) => (
        <Item key={item.id} isPlay={item.isPlay}>
          <Icon src={`/assets/homeButtons/${item.src}`} />
          <Text isPlay={item.isPlay}>{item.text}</Text>
        </Item>
      ))}
    </ButtonContainer>
  );
}

export default HomeButtons;

const ButtonContainer = styled.div`
  margin: auto;
  height: 45px;
  width: 65%;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div<{ isPlay: boolean }>`
  cursor: pointer;
  text-align: center;

  ${(props) =>
    props.isPlay &&
    css`
      display: flex;
      width: 110px;
      height: 45px;
      background-color: #c4c4c4;
      border-radius: 5.625px;
      //display: flex 일때 수평, 수직 정렬
      justify-content: center;
      align-items: center;
    `};
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const Text = styled.div<{ isPlay: boolean }>`
  font-weight: 400;
  font-size: 13.6416px;

  ${(props) =>
    props.isPlay &&
    css`
      font-weight: 600;
      font-size: 20.4624px;
      color: #000000;
      margin-left: 15px;
    `}
`;
