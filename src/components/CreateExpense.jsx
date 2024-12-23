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

const CreateExpense = () => {
  return (
    <WhiteBox>
      <Form>
        <InputAlign>
          <Label for="date">날짜</Label>
          <Input
            type="text"
            id="date"
            placeholder="YYYY-MM-DD"
            value="2024-01-01"
          />
        </InputAlign>
        <InputAlign>
          <Label for="item">항목</Label>
          <Input type="text" id="item" placeholder="지출 항목" />
        </InputAlign>
        <InputAlign>
          <Label for="amount">금액</Label>
          <Input type="text" id="amount" placeholder="지출 금액" />
        </InputAlign>
        <InputAlign>
          <Label for="description">내용</Label>
          <Input type="text" id="description" placeholder="지출 내용" />
        </InputAlign>

        <SaveButton>저장</SaveButton>
      </Form>
    </WhiteBox>
  );
};

export default CreateExpense;
