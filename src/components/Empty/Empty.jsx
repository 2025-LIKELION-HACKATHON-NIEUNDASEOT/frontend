import * as S from "../../pages/Notification/NotificationEmptyStyle";

/**
 * 표시할 내용이 없다고 알리는 컴포넌트
 * @param {object} props
 * @param {string} props.text - 표시할 메시지 텍스트
 * @param {string} props.subText - 표시할 보조 메시지 텍스트
 */
export default function Empty({ text, subText }) {
  return (
    <S.EmptyContainer>
      <S.EmptyIcon />
      <S.EmptyText>{text}</S.EmptyText>
      <S.EmptySubText>{subText}</S.EmptySubText>
    </S.EmptyContainer>
  );
}
