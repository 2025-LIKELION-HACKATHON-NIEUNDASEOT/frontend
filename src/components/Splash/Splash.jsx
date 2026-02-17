import * as S from "./SplashStyle";
import homeIcon from "../../assets/homeIcon.svg";
import { useEffect, useState } from "react";

export default function Splash({ children }) {
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (!isMounted) return;

    const timerToFade = setTimeout(() => {
      setIsFading(true);
    }, 1000);

    const timerToRemove = setTimeout(() => {
      setIsMounted(false);
    }, 1000 + 400);

    return () => {
      clearTimeout(timerToFade);
      clearTimeout(timerToRemove);
    };
  }, [isMounted]);

  if (!isMounted) {
    return children;
  }
  return (
    <S.Container $isfading={isFading}>
      <img src={homeIcon} alt='Villit Icon' />
    </S.Container>
  );
}
