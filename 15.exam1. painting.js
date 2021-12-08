const painting = (input) => {
  const paintBucketsCount = Number(input[0]);
  const wallpapersCount = Number(input[1]);
  const glovesPrice = Number(input[2]);
  const brushPrice = Number(input[3]);
  const paintBucketPrice = Number(21.5);
  const wallpaperPrice = Number(5.2);
  const glovesNeeded = Math.ceil(0.35 * wallpapersCount);
  const brushesNeeded = Math.floor(0.48 * paintBucketsCount);
  const totalCost = Number(
    paintBucketsCount * paintBucketPrice +
      wallpapersCount * wallpaperPrice +
      glovesNeeded * glovesPrice +
      brushesNeeded * brushPrice
  );
  const deliveryPrice = Number((totalCost * 0.066666667).toFixed(2));

  console.log(`This delivery will cost ${deliveryPrice.toFixed(2)} lv.`);
};

painting([10, 8, 2.2, 5]);
