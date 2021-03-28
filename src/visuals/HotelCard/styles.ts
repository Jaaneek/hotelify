import colors from "shared/colors";
import { MEDIA_QUERIES } from "shared/mediaQueries";
import styled from "styled-components";
import { Trash } from "@styled-icons/boxicons-regular";

export const Container = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  ${MEDIA_QUERIES.md} {
    width: 280px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  ${MEDIA_QUERIES.md} {
    flex-direction: column;
    align-items: center;
    width: 280px;
  }
`;

export const Divider = styled.div`
  width: 90%;
  min-height: 2px;
  background: ${colors.grey};
  ${MEDIA_QUERIES.md} {
    width: 280px;
  }
`;

export const Logo = styled.img<{ IsLoaded: boolean }>`
  height: 100px;
  display: ${(props) => !props.IsLoaded && "none"};
  margin: 20px;
`;

export const Title = styled.p`
  font-size: 18px;
`;

export const Description = styled.p`
  font-size: 11px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 5px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

export const RightContainer = styled(LeftContainer)`
  align-items: center;
  justify-content: space-between;
  width: 250px;
`;

export const VerticalDivider = styled.div`
  height: 80%;
  width: 2px;
  background: ${colors.grey};
  margin-right: 10px;
  ${MEDIA_QUERIES.md} {
    margin: 0;
    min-height: 2px;
    width: 280px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: flex-start;
  ${MEDIA_QUERIES.md} {
    flex-direction: row;
    align-items: center;
  }
`;

export const Price = styled.div`
  ${MEDIA_QUERIES.md} {
    margin-left: 8px;
  }
`;

export const SelectQuantity = styled.select`
  padding: 4px;
`;

export const DeleteButton = styled(Trash)`
  height: 24px;
`;

export const IconButton = styled.button<{ isActive: boolean }>`
  appearance: none;
  opacity: 1;
  cursor: pointer;
  display: flex;
  height: 32px;
  width: 32px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  border: unset;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "white" : "#fcfcfc")};
  color: #222;
  transition: all 0.25s ease;
  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &:active {
    background-color: #f0f0f0;
  }
  &:focus {
    outline: 0;
  }
  ${MEDIA_QUERIES.md} {
    align-items: center;
  }
`;
