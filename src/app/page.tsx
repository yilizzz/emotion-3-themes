'use client'

import styles from "./page.module.css";
import styled from '@emotion/styled';
import { useThemeStore } from "./store";


export default function Home() {
  const MyDiv = styled.div(({ theme }) => ({
    width: "100%",
    height: 50,
    marginBottom: 50,
    backgroundColor: theme.background,
    color: theme.text,
  }))
  const { setToRed, setToBlue, setToBlack } = useThemeStore();
  return (
    <main>
      <div>
        <MyDiv>TEXT</MyDiv>
        <button onClick={setToRed}>to red</button>
        <button onClick={setToBlue}>to blue</button>
        <button onClick={setToBlack}>to black</button>
      </div>
    </main>
  );
}
