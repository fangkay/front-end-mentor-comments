import styled from "styled-components";

const SingleReply = styled.div`
  border: 1px solid red;
`;

const AllReplies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Reply = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 4px 4px 8px -4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  width: 80%;
`;

export { AllReplies, SingleReply, Reply };
