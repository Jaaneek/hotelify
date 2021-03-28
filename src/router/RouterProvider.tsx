import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
