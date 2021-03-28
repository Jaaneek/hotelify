import axios from "axios";
import useAxios from "axios-hooks";
import React, { useEffect } from "react";
import { endpoints } from "shared/endpoints";
import * as SharedTypes from "shared/types";
import { HotelContext } from "./hotelContext";
import { toast } from "react-toastify";
export const HotelContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [{ data, loading, error }, refetch] = useAxios<SharedTypes.Hotel[]>(
    endpoints.getHotels
  );
  const showErrorToast = () => {
    toast.error("Something went wrong, please try again later", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showSuccessToast = (message: string) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    error && showErrorToast();
  }, [error]);

  const deleteHotel = async (id: string) => {
    return axios
      .delete<SharedTypes.Hotel>(endpoints.deleteHotel + id)
      .then((res) => {
        showSuccessToast("Hotel reservation was deleted successfully.");
        refetch();
      })
      .catch((err) => {
        showErrorToast();
      });
  };

  const updateHotel = async (hotel: SharedTypes.Hotel) => {
    return axios
      .put<SharedTypes.Hotel>(endpoints.updateHotel + hotel.id, hotel)
      .then((res) => {
        refetch();
      })
      .catch((err) => {
        showErrorToast();
      });
  };
  return (
    <HotelContext.Provider
      value={{ deleteHotel, updateHotel, loading, hotelList: data || [] }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export default HotelContextProvider;
