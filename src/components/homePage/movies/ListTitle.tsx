import { IComponentProps, IListTitleProps } from '@interfaces/interface';
import styled, { css } from 'styled-components';

function ListTitle({ children, top }: IListTitleProps) {
  return <Title value={top}>{children}</Title>;
}

export default ListTitle;

const Title = styled.div<{ value: boolean }>`
  font-weight: 700;
  font-size: 20.9212px;
  // 한 줄로 쓰기
  margin-left: 16px;
  margin-top: 22px;
  margin-bottom: 10px;
  color: #ffffff;

  ${(props) =>
    props.value === true &&
    css`
      padding-top: 30px;
      font-weight: 700;
      font-size: 26.7482px;
      margin-top: 28px;
    `};
`;
