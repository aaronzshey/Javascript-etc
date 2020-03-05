var a = {
  "Meta Data": {
    "1. Information": "Intraday (5min) open, high, low, close prices and volume",
    "2. Symbol": "MSFT",
    "3. Last Refreshed": "2020-02-28 16:00:00",
    "4. Interval": "5min",
    "5. Output Size": "Compact",
    "6. Time Zone": "US/Eastern"
  },
  "Time Series (5min)": {
    "2020-02-28 16:00:00": {
      "1. open": "160.5900",
      "2. high": "162.2700",
      "3. low": "160.2900",
      "4. close": "162.1200",
      "5. volume": "3203525"
    },
    "2020-02-28 15:55:00": {
      "1. open": "159.4900",
      "2. high": "160.5600",
      "3. low": "159.0050",
      "4. close": "160.5600",
      "5. volume": "1744157"
    }}}
//access all the key/value pairs
for (prop in a["Time Series (5min)"]) {
for (const prop2 in a["Time Series (5min)"][prop]) {
console.log(`${prop2}: ${a["Time Series (5min)"][prop][prop2]}`)
}}
//get open prices
for (prop in a["Time Series (5min)"]) {
console.log(a["Time Series (5min)"][prop]["1. open"])
}
//fetch data --- replace `a` with `data`
fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=VA3RZ8B9PPYWKQKN')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))
//log each individual timestamp
fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=VA3RZ8B9PPYWKQKN')
.then(response => response.json())
.then(data => {
var prices = data["Time Series (5min)"]
console.log(prices)})
.catch(error => console.error(error))
