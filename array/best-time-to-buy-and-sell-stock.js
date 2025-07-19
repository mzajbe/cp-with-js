// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {

    if(buy>prices[i]){
        buy = prices[i];
    }else if(prices[i]-buy > profit){
        profit = prices[i]-buy;
    }

  }

  return profit;
};

let prices = [7,6,4,3,1];
let result = maxProfit(prices);
console.log(result);
