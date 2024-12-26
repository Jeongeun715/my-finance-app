import styled from "styled-components";
import { useState } from "react";
import supabase from "../utils/supabase";

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

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  text-align: left;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  font-size: 14px;
`;

const SaveButton = styled.button`
  padding: 8px 20px;
  height: 34px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #0054ad;
  }
`;

const InputAlign = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
`;

const CreateExpense = ({ setExpenses, expenses }) => {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeItem = (e) => {
    setItem(e.target.value);
  };

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // 미리 체크 후 데이터 보내자
    const dateReg = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateReg.test(date)) {
      alert("날짜 형식이 올바르지 않습니다~!");
      return;
    }

    if (item === "") {
      alert("항목을 입력해주세요~!");
      return;
    }

    if (amount === "") {
      alert("금액을 입력해주세요~!");
      return;
    }

    if (description === "") {
      alert("내용을 입력해주세요~!");
      return;
    }

    const { data } = await supabase
      .from("expenses")
      .insert({
        date,
        item,
        amount,
        description,
      })
      .select();

    setExpenses([...expenses, ...data]);

    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
  };

  return (
    <WhiteBox>
      <form onSubmit={onSubmit}>
        <Form>
          <InputAlign>
            <Label htmlFor="date">날짜</Label>
            <Input
              type="text"
              id="date"
              value={date}
              onChange={onChangeDate}
              placeholder="YYYY-MM-DD"
            />
          </InputAlign>
          <InputAlign>
            <Label htmlFor="item">항목</Label>
            <Input
              type="text"
              id="item"
              value={item}
              onChange={onChangeItem}
              placeholder="지출 항목"
            />
          </InputAlign>
          <InputAlign>
            <Label htmlFor="amount">금액</Label>
            <Input
              type="number"
              id="amount"
              value={amount}
              onChange={onChangeAmount}
              placeholder="지출 금액"
            />
          </InputAlign>
          <InputAlign>
            <Label htmlFor="description">내용</Label>
            <Input
              type="text"
              id="description"
              value={description}
              onChange={onChangeDescription}
              placeholder="지출 내용"
            />
          </InputAlign>

          <SaveButton>저장</SaveButton>
        </Form>
      </form>
    </WhiteBox>
  );
};

export default CreateExpense;
