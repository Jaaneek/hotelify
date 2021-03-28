import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingScreen from "visuals/LoadingScreen/LoadingScreen";

const Routes: React.FC = () => {
  const homepage = lazy(() => import("pages/HotelList"));
  const checkout = lazy(() => import("pages/Checkout"));
  return (
    <Suspense fallback={<LoadingScreen></LoadingScreen>}>
      <Switch>
        <Route path="/payment" component={checkout} />
        <Route path="/" component={homepage} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
