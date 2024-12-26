import styled from "styled-components";
import { Link } from "react-router-dom";

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

const BreakdownAlign = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const ExpenseItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transform: scale(1.02);
  }
  span {
    font-size: 16px;
    color: #333;
  }
  span:last-child {
    font-weight: bold;
    color: #007bff;
    flex-shrink: 0;
  }
`;

const ExpenseDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    &:first-child {
      margin-bottom: 5px;
      color: #666;
      font-size: 14px;
    }
    &:last-child {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  }
`;

const ExpenseList = ({ expenses }) => {
  return (
    <WhiteBox>
      <BreakdownAlign>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            as={Link}
            to={`/expenses/${expense.id}`}
          >
            <ExpenseDetails>
              <span>{expense.date}</span>
              <span>
                {expense.item} - {expense.description}
              </span>
            </ExpenseDetails>
            <span>{expense.amount} 원</span>
          </ExpenseItem>
        ))}
      </BreakdownAlign>
    </WhiteBox>
  );
};

export default ExpenseList;
