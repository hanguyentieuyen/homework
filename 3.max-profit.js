// Find the largest profit margin: buy on the day with the smallest prices and sell on the day with the highest prices
// input [7, 2, 1, 4, 5]
// expectation result: 4 (5-1)

const prices = [7, 2, 1, 4, 5];

function maxProfit(prices) {
  let buy = prices[0];
  let maxProfitValue = 0;

  for (let i = 0; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    } else if (maxProfitValue < prices[i] - buy) {
      maxProfitValue = prices[i] - buy;
    }
  }
  return maxProfitValue
}

// explain
// i = 1 --> buy = 7 > prices[1] = 2 --> buy = 2, maxProfitValue = 0
// i = 2 --> buy = 2 > prices[2] = 1 --> buy = 1, maxProfitValue = 0
// i = 3 --> buy = 1 < prices[3] = 4 => maxProfitValue < prices[3] - buy = 4-1 => maxProfitValue = 3
// i = 4 --> buy = 1 < prices[4] = 5 => maxProfitValue = 3 < prices[4] - buy = 5-1 => maxProfitValue = 4

console.log(maxProfit(prices))
