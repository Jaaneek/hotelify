import { IHotelContext } from "./../shared/types";
import { createContext } from "react";
export const HotelContext = createContext<IHotelContext | null>(null);
