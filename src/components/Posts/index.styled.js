import styled from "styled-components";

export const Button = styled.button`
  background-color: #00baba;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${(params) => params.type === "secondary" && `background-color: #ba00ba;`}
`;

export const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostsWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
