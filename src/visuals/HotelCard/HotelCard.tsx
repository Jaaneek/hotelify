import useHotelContext from "context/useHotelContext";
import React, { useMemo, useState } from "react";
import * as Types from "./HotelCard.props";
import * as Styles from "./styles";

const HotelCard: React.FC<Types.Props> = ({
  name,
  price,
  subtitle,
  amount,
  id,
  isSkeleton = false,
}) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const { deleteHotel, updateHotel } = useHotelContext();

  const updateAmountOfNights = (nights: number) => {
    updateHotel({ name, price, subtitle, amount: nights, id });
  };

  const nightsNumber = useMemo(
    () => (amount > 14 ? (amount % 14) + 1 : amount),
    [amount]
  );

  return (
    <Styles.Container>
      <Styles.ContentContainer>
        <Styles.LeftContainer>
          <Styles.Logo
            src={"https://loremflickr.com/150/100/building, " + name[0]}
            IsLoaded={isImgLoaded}
            onLoad={() => setIsImgLoaded(true && !isSkeleton)}
          ></Styles.Logo>
          <Styles.Logo
            IsLoaded={!isImgLoaded}
            src={
              "http://oliclinic.pl/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
            }
          ></Styles.Logo>
          <Styles.TitleContainer>
            <Styles.Title> {name}</Styles.Title>
            <Styles.Description> {subtitle}</Styles.Description>
          </Styles.TitleContainer>
        </Styles.LeftContainer>
        <Styles.VerticalDivider></Styles.VerticalDivider>

        <Styles.RightContainer>
          <Styles.PriceContainer>
            <Styles.SelectQuantity
              disabled={isSkeleton}
              value={nightsNumber}
              onChange={(event) => {
                updateAmountOfNights(+event.target.value);
              }}
            >
              {[...Array(14)].map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1} {index !== 0 ? "nights" : "night"}
                </option>
              ))}
            </Styles.SelectQuantity>
            <Styles.Price> {nightsNumber * +price + " $"}</Styles.Price>
          </Styles.PriceContainer>
          <Styles.IconButton
            isActive={true}
            onClick={() => deleteHotel(id)}
            disabled={isSkeleton}
          >
            <Styles.DeleteButton></Styles.DeleteButton>
          </Styles.IconButton>
        </Styles.RightContainer>
      </Styles.ContentContainer>
      <Styles.Divider></Styles.Divider>
    </Styles.Container>
  );
};

export default HotelCard;
