import React from "react";
import { Chart } from "react-charts";

function MyChart(_products) {
  let products = _products.products;
  let product_countArr = [];
  for (var i = 0; i < products.length; i++) {
    //   console.log(products)
    product_countArr.push([0, products[i].no_of_products]);
  }

  var current_date = new Date("1-01-2020");
  let dateArray = [];
  for (var i = current_date.getDate(); i < 20; i++) {
    var createMonthsDate = new Date(current_date.getMonth() + "-" + i + "-" + current_date.getYear());
    console.log(createMonthsDate);
    dateArray.push([0, createMonthsDate.getDate()]);
  }

  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [product_countArr],
      },
      {
        label: "Series 2",
        data: [current_date],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
  return lineChart;
}

export default MyChart;
