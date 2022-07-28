import styled from "styled-components";

const Comment = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 4px 4px 8px -4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  margin: 1rem;
`;

const CommentScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f6fd;
  border-radius: 4px;
  margin: 1rem;
  padding: 0.5rem;
`;

const CommentCurrentScore = styled.div`
  color: #5358b6;
  font-weight: 600;
`;

const CommentCounter = styled.div`
  font-weight: 400;
  color: #bfbbe0;
  margin: 0.5rem 0;
`;

const CommentContent = styled.div``;

const CommentProfile = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const MainComment = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileName = styled.h4`
  font-weight: 600;
  color: #313842;
  margin: 0 0.5rem;
`;

const Divider = styled.div`
  border: 1px solid orange;
`;

export {
  Comment,
  CommentCounter,
  CommentCurrentScore,
  CommentScore,
  CommentContent,
  CommentProfile,
  Divider,
  MainComment,
  ProfileName,
};
