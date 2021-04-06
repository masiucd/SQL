import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingSpinner from "../loading-spinner";
const CalculatorVOne = React.lazy(() => import("../calculator/v1"));

const Routes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route exact path="/" component={CalculatorVOne} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
