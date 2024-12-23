import styled from "styled-components";

const WhiteBox = styled.section`
  background-color: white;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: normal;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Month = styled.button`
  text-align: center;
  font-family: Pretendard, serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  height: 60px;
  padding: 20px;
  width: 104px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: black;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: #f6f7fa;
  &:hover {
    background: #2ec4b6;
    color: white;
  }
`;

const MonthNavigation = () => {
  return (
    <WhiteBox>
      <Month>1월</Month>
      <Month>2월</Month>
      <Month>3월</Month>
      <Month>4월</Month>
      <Month>5월</Month>
      <Month>6월</Month>
      <Month>7월</Month>
      <Month>8월</Month>
      <Month>9월</Month>
      <Month>10월</Month>
      <Month>11월</Month>
      <Month>12월</Month>
    </WhiteBox>
  );
};

export default MonthNavigation;
