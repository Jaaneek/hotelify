import styled from "styled-components";
import colors from "shared/colors";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 40px 64px;
  background: transparent;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const InputContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  width: 180px;
  border: none;
  height: 48px;
  padding: 0 10px;
  font-size: 16px;
  line-height: 16px;
  position: relative;
  border-radius: 4px;
  transition: all 0.15s ease;
  border: 1px solid ${colors.primary};

  &:focus {
    outline: none;
    border-color: ${colors.secondary};
  }

  &::placeholder {
    color: ${colors.grey};
    transform: translateY(2px);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  font-size: 16px;
  color: white;
  cursor: pointer;
  padding-top: 4px;
  border-radius: 4px;
  background: ${colors.primary};
  transition: all 0.15s ease;
  margin-top: 16px;

  &:active {
    transform: translateY(1px) !important;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${colors.secondary};
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
  &:disabled {
    transform: none;
    box-shadow: none;
    background-color: ${colors.grey};
  }
`;

export const Error = styled.p`
  font-size: 14px;
  margin: 4px 0 4px 0;
  color: #f20f17;
`;

export const Label = styled.h4`
  margin-right: 8px;
`;
