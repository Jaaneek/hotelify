import RouterProvider from "router/RouterProvider";
import { Normalize } from "styled-normalize";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HotelContextProvider from "context/HotelContextProvider";
function App() {
  return (
    <HotelContextProvider>
      <Normalize></Normalize>
      <ToastContainer />
      <RouterProvider></RouterProvider>
    </HotelContextProvider>
  );
}

export default App;
