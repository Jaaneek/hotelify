import { IHotelContext } from "shared/types";
import { HotelContext } from "./hotelContext";
import { useContext } from "react";

const useHotelContext = () => {
  const context = useContext(HotelContext) as IHotelContext;

  if (context === undefined) {
    throw new Error(
      "useHotelContext must be used within a HotelContextProvider"
    );
  }

  return context;
};

export default useHotelContext;
