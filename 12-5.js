const vendingMachineChange = (change) => {
  let coins = "";

  while (change > 0.01) {
    if (change >= 2) {
      change -= 2;
      coins += "2 leva, ";
    } else if (change < 2 && change >= 1) {
      change -= 1;
      coins += "1 lev, ";
    } else if (change < 1 && change >= 0.5) {
      change -= 0.5;
      coins += "50 stotinki, ";
    } else if (change < 0.5 && change >= 0.2) {
      change -= 0.2;
      coins += "20 stotinki, ";
    } else if (change < 0.2 && change >= 0.1) {
      change -= 0.1;
      coins += "10 stotinki, ";
    } else if (change < 0.1 && change >= 0.05) {
      change -= 0.05;
      coins += "5 stotinki, ";
    } else if (change < 0.05 && change >= 0.02) {
      change -= 0.02;
      coins += "2 stotinki, ";
    } else if (change < 0.02 && change > 0) {
      change -= 0.01;
      coins += "1 stotinka.";
    }
  }
  console.log(coins);
};
vendingMachineChange(0.28);
