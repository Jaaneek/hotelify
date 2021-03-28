interface Endpoints {
  getHotels: string;
  deleteHotel: string;
  updateHotel: string;
}

const basicUrl = "https://605f809ce96e5c0017408bae.mockapi.io/";
export const endpoints: Endpoints = {
  getHotels: basicUrl + "Hotels",
  deleteHotel: basicUrl + "Hotels/",
  updateHotel: basicUrl + "Hotels/",
};
