const courierExpress = (shipmentWeight, deliveryType, distance) => {
  let pricePerKmStandard;
  let pricePerKmExpress;
  let priceTotal;

  if (shipmentWeight < 1) {
    pricePerKmStandard = 0.03;
    pricePerKmExpress = pricePerKmStandard * 0.8;
  } else if (shipmentWeight >= 1 && shipmentWeight < 10) {
    pricePerKmStandard = 0.05;
    pricePerKmExpress = pricePerKmStandard * 0.4;
  } else if (shipmentWeight >= 10 && shipmentWeight < 40) {
    pricePerKmStandard = 0.1;
    pricePerKmExpress = pricePerKmStandard * 0.05;
  } else if (shipmentWeight >= 40 && shipmentWeight < 90) {
    pricePerKmStandard = 0.15;
    pricePerKmExpress = pricePerKmStandard * 0.02;
  } else if (shipmentWeight >= 90 && shipmentWeight < 150) {
    pricePerKmStandard = 0.2;
    pricePerKmExpress = pricePerKmStandard * 0.01;
  }

  if (deliveryType === "standard") {
    priceTotal = distance * pricePerKmStandard;
  } else if (deliveryType === "express") {
    const priceStandard = distance * pricePerKmStandard;
    priceTotal = priceStandard + shipmentWeight * pricePerKmExpress * distance;
  }

  console.log(
    `The delivery of your shipment with weight of ${shipmentWeight.toFixed(
      3
    )} kg. would cost ${priceTotal.toFixed(2)} lv.`
  );
};

courierExpress(87, "express", 130);
