import styled from "styled-components";
import MonthNavigation from "../components/MonthNavigation";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

const Container = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px auto;
`;

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(1); //1월 기준

  useEffect(() => {
    //데이터베이스에서 expenses 테이블 조회
    const fetchExpenses = async () => {
      const { data } = await supabase.from("expenses").select("*");
      setExpenses(data);
    };

    fetchExpenses();
  }, []);

  const filteredExpenses = expenses.filter((expenses) => {
    const month = new Date(expenses.date).getMonth() + 1;
    return month === selectedMonth;
  });
  console.log(filteredExpenses);
  return (
    <Container>
      <MonthNavigation
        setExpenses={setExpenses}
        setSelectedMonth={setSelectedMonth}
      />
      <CreateExpense />
      <ExpenseList />
    </Container>
  );
};

export default Home;
