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

const MonthButton = styled.button`
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

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function MonthNavigation({ setSelectedMonth, selectedMonth }) {
  return (
    <WhiteBox>
      {MONTHS.map((element) => {
        return (
          <MonthButton
            key={element}
            selected={selectedMonth === element}
            onClick={() => {
              setSelectedMonth(element);
            }}
          >{`${element}월`}</MonthButton>
        );
      })}
    </WhiteBox>
  );
}
