import { IComponentProps } from '@interfaces/interface';
import styled, { css } from 'styled-components';
import { useListTitleContext } from '../../../pages/home';

function ListTitle({ children }: IComponentProps) {
  const { id } = useListTitleContext();
  return <Title value={id}>{children}</Title>;
}

export default ListTitle;

const Title = styled.div<{ value: number }>`
  font-weight: 700;
  font-size: 20.9212px;
  margin-left: 16px;
  margin-top: 22px;
  color: #ffffff;

  ${(props) =>
    props.value === 1 &&
    css`
      font-weight: 700;
      font-size: 26.7482px;
      margin-top: 28px;
    `};
`;
