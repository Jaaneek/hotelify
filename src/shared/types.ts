export interface Hotel {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  amount: number;
}

export interface IHotelContext {
  loading: boolean;
  deleteHotel: (id: string) => void;
  updateHotel: (hotel: Hotel) => void;
  hotelList: Hotel[];
}
