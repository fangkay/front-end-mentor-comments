import styled from "styled-components";

const Submit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 4px 8px -4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: #fff;
  padding: 1rem;
  margin: 1rem;
  height: 5rem;
`;

const SubmitCommentField = styled.form`
  height: 100%;
  width: auto;
`;

const CommentFieldInput = styled.input`
  height: 80%;
  border-radius: 4px;
  border: 1px solid #f5f5f5;
  padding: 0.5rem;
`;

export { CommentFieldInput, Submit, SubmitCommentField };
