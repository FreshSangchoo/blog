// 한국어 날짜 포맷: "2025년 5월 24일"
export const formatKoreanDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
};

// 수정 여부 포함 포맷
export const formatDateWithUpdated = (
  dateStr: string,
  isUpdated: boolean
): string => {
  return `${formatKoreanDate(dateStr)}${isUpdated ? " (수정)" : ""}`;
};
