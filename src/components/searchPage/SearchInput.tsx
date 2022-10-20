import styled from 'styled-components';
import Image from 'next/image';
import { IInputEventProps } from '@interfaces/interface';
import { useSearchContext } from './SearchContext';

function SearchInput({ onChange, onReset }: IInputEventProps) {
  const { input } = useSearchContext();

  return (
    <Container>
      <FlexBox>
        <Image
          alt="search icon"
          src="/assets/search.svg"
          width={20}
          height={20}
        />
        <Input
          placeholder="Search for movie"
          value={input}
          onChange={onChange}
        />
      </FlexBox>
      <button type="button" onClick={onReset}>
        <Image
          alt="reset"
          src="/assets/search-reset.svg"
          width={15}
          height={15}
        />
      </button>
    </Container>
  );
}

export default SearchInput;

const Container = styled.div`
  background: #424242;
  color: #c4c4c4;

  width: 100%;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
`;

const Input = styled.input`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.21px;
  color: inherit;

  height: 31px;
  width: 240px;

  margin-left: 12px;
`;

const FlexBox = styled.div`
  display: flex;
`;
