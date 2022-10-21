# next-netflix-16th

### 커밋 템플릿 설정하기

`git config --global commit.template .github/.gitmessage`

### bash에서 커밋 수정하기

1. 템플릿 파일을 설정해놓으면, git commit 명령을 실행할 때 지정한 템플릿 메시지를 편집기에서 매번 사용할 수 있다.
2. `i` 키를 한 번 누르고 수정 가능 (# 가 없는 부분만 커밋 메세지로 등록).
3. ESC를 한 번 누르고 `:wq + Enter` 를 입력하여 편집기에서 나오면 커밋 완료!!!

### git pull로 로컬 덮어쓰기 (삭제하고 clone받지 말자 ..^^!!!)

```
$ git fetch --all

$ git reset --hard origin/<branch>
```

### 반응형 UI 적용하기

**반응형 UI 선언**

```css
// global.css
body {
  ...

  height: 100vh;
  display: flex;
  justify-content: center;

  background: #000000;
  color: #ffffff;
}

@media (max-width: 400px) {
  main,
  footer {
    width: 100vw;
  }
}
@media (min-width: 400px) {
  main,
  footer {
    width: 400px;
  }
}
```

- view width가 400px 이상이면 main tag와 footer tag의 width가 400px로 설정
- view width가 400px 이하면 main tag와 footer tag의 width가 100vw로 설정

**컴포넌트에 반응형 UI 적용**

```tsx
function Component({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.main`
  margin: 50px;
`;
```

- 페이지의 가장 상위 컴포넌트를 main으로 지정해줘야 해당 페이지 하위 컴포넌트들이 width를 반응형으로 인식

### footer 적용하기

footer가 필요한 페이지에서 footer 컴포넌트 선언해서 사용!

```tsx
function SearchPage() {
  const { input, handleInputChange, handleInputReset } = useSearch('');

  return (
    <Search value={{ input }}>
      <Search.Input onChange={handleInputChange} onReset={handleInputReset} />
      <Search.Title>Top Searches</Search.Title>
      <Search.Result />
      <Footer />
    </Search>
  );
}
```
