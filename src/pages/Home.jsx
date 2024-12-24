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
  const [breakdowns, setBreakdowns] = useState([]); //데이터 저장할 스테이트

  useEffect(() => {
    //데이터베이스에서 expenses 테이블 조회
    const fetchData = async () => {
      const { data, error } = await supabase.from("expenses").select("*");
      if (error) {
        console.log("error =>", error);
      } else {
        console.log("data =>", data);
      }
      setBreakdowns(data);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <div>
        {breakdowns.map((breakdown) => {
          return (
            <div key={breakdown.id}>
              <h5>날짜: {breakdown.date}</h5>
              <h5>아이템: {breakdown.item}</h5>
              <h5>가격: {breakdown.amount}</h5>
              <h5>상세: {breakdown.description}</h5>
            </div>
          );
        })}
      </div>
      <MonthNavigation setBreakdowns={setBreakdowns} breakdowns={breakdowns} />
      <CreateExpense />
      <ExpenseList />
    </Container>
  );
};

export default Home;
