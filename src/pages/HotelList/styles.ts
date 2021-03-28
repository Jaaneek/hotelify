import colors from "shared/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InnerContainer = styled(Container)`
  width: 640px;
  align-items: flex-end;
`;

export const HotelCardsContainer = styled.div`
  max-height: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: ${colors.primary};
    color: white;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
