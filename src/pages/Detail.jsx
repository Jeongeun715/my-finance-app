import styled from "styled-components";

const WhiteBox = styled.section`
  max-width: 800px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  text-align: left;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  font-size: 14px;
`;

const InputAlign = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const ButtonAlign = styled.div`
  display: flex;
  gap: 10px;
`;

const ModifyButton = styled.button`
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

const DeleteButton = styled.button`
  padding: 8px 20px;
  height: 34px;
  margin-top: 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #c03737;
  }
`;

const BackButton = styled.button`
  padding: 8px 20px;
  height: 34px;
  margin-top: 10px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #4e545a;
  }
`;

const Detail = () => {
  return (
    <WhiteBox>
      <InputAlign>
        <Label htmlFor="date">날짜</Label>
        <Input
          type="text"
          id="date"
          placeholder="YYYY-MM-DD"
          value="2024-01-02"
        />
      </InputAlign>
      <InputAlign>
        <Label htmlFor="item">항목</Label>
        <Input type="text" id="item" placeholder="지출 항목" value="햄버거" />
      </InputAlign>
      <InputAlign>
        <Label htmlFor="amount">금액</Label>
        <Input type="text" id="amount" placeholder="지출 금액" value="2000" />
      </InputAlign>
      <InputAlign>
        <Label htmlFor="description">내용</Label>
        <Input
          type="text"
          id="description"
          placeholder="지출 내용"
          value="버거킹"
        />
      </InputAlign>
      <ButtonAlign>
        <ModifyButton>수정</ModifyButton>
        <DeleteButton>삭제</DeleteButton>
        <BackButton>뒤로가기</BackButton>
      </ButtonAlign>
    </WhiteBox>
  );
};

export default Detail;
