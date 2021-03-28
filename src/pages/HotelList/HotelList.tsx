import React, { useEffect, useState } from "react";
import HotelCard from "visuals/HotelCard";
import * as SharedTypes from "shared/types";
import FlatList from "flatlist-react";
import useHotelContext from "context/useHotelContext";
import * as Styles from "./styles";
import { useHistory } from "react-router";
const HotelList: React.FC = () => {
  const { hotelList } = useHotelContext();
  const renderHotel = (Hotel: SharedTypes.Hotel) => (
    <HotelCard key={Hotel.id} {...Hotel}></HotelCard>
  );

  const [totalAmount, setTotalAmount] = useState(0);
  const history = useHistory();
  useEffect(() => {
    setTotalAmount(
      hotelList
        .map((x) => +x.price * (x.amount > 14 ? (x.amount % 14) + 1 : x.amount))
        .reduce((prev, next) => prev + next, 0)
    );
  }, [hotelList]);
  return (
    <Styles.Container>
      <Styles.InnerContainer>
        <Styles.HotelCardsContainer>
          <FlatList
            renderOnScroll
            list={hotelList}
            renderItem={renderHotel}
            renderWhenEmpty={() => (
              <HotelCard
                isSkeleton
                id={""}
                amount={1}
                name={"Loading..."}
                price={"0"}
                subtitle={"Loading..."}
              ></HotelCard>
            )}
            sortBy={["price"]}
          />
        </Styles.HotelCardsContainer>
        <Styles.ButtonContainer>
          {totalAmount}$
          <Styles.Button onClick={() => history.push("/payment")}>
            Checkout
          </Styles.Button>
        </Styles.ButtonContainer>
      </Styles.InnerContainer>
    </Styles.Container>
  );
};

export default HotelList;
