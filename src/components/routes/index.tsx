import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
const CalculatorVOne = React.lazy(() => import("../calculator/v1"));

const Routes = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Switch>
        <Route exact path="/" component={CalculatorVOne} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
