export interface StockData {
    "Meta Data": MetaData
    "Time Series (5min)": TimeSeries5min
    symbol: string;
    price: number; 
    function: string;  
  }
  
  export interface MetaData {
    "1. Information": string
    "2. Symbol": string
    "3. Last Refreshed": string
    "4. Interval": string
    "5. Output Size": string
    "6. Time Zone": string
  }
  
  export interface TimeSeries5min {
    "2024-03-27 19:55:00": N20240327195500
    "2024-03-27 19:50:00": N20240327195000
    "2024-03-27 19:45:00": N20240327194500
    "2024-03-27 19:40:00": N20240327194000
    "2024-03-27 19:35:00": N20240327193500
    "2024-03-27 19:30:00": N20240327193000
    "2024-03-27 19:25:00": N20240327192500
    "2024-03-27 19:20:00": N20240327192000
    "2024-03-27 19:15:00": N20240327191500
    "2024-03-27 19:10:00": N20240327191000
    "2024-03-27 19:05:00": N20240327190500
    "2024-03-27 19:00:00": N20240327190000
    "2024-03-27 18:55:00": N20240327185500
    "2024-03-27 18:50:00": N20240327185000
    "2024-03-27 18:45:00": N20240327184500
    "2024-03-27 18:40:00": N20240327184000
    "2024-03-27 18:35:00": N20240327183500
    "2024-03-27 18:30:00": N20240327183000
    "2024-03-27 18:25:00": N20240327182500
    "2024-03-27 18:20:00": N20240327182000
    "2024-03-27 18:15:00": N20240327181500
    "2024-03-27 18:10:00": N20240327181000
    "2024-03-27 18:05:00": N20240327180500
    "2024-03-27 18:00:00": N20240327180000
    "2024-03-27 17:55:00": N20240327175500
    "2024-03-27 17:50:00": N20240327175000
    "2024-03-27 17:45:00": N20240327174500
    "2024-03-27 17:40:00": N20240327174000
    "2024-03-27 17:35:00": N20240327173500
    "2024-03-27 17:30:00": N20240327173000
    "2024-03-27 17:25:00": N20240327172500
    "2024-03-27 17:20:00": N20240327172000
    "2024-03-27 17:15:00": N20240327171500
    "2024-03-27 17:10:00": N20240327171000
    "2024-03-27 17:05:00": N20240327170500
    "2024-03-27 17:00:00": N20240327170000
    "2024-03-27 16:55:00": N20240327165500
    "2024-03-27 16:50:00": N20240327165000
    "2024-03-27 16:45:00": N20240327164500
    "2024-03-27 16:40:00": N20240327164000
    "2024-03-27 16:35:00": N20240327163500
    "2024-03-27 16:30:00": N20240327163000
    "2024-03-27 16:25:00": N20240327162500
    "2024-03-27 16:20:00": N20240327162000
    "2024-03-27 16:15:00": N20240327161500
    "2024-03-27 16:10:00": N20240327161000
    "2024-03-27 16:05:00": N20240327160500
    "2024-03-27 16:00:00": N20240327160000
    "2024-03-27 15:55:00": N20240327155500
    "2024-03-27 15:50:00": N20240327155000
    "2024-03-27 15:45:00": N20240327154500
    "2024-03-27 15:40:00": N20240327154000
    "2024-03-27 15:35:00": N20240327153500
    "2024-03-27 15:30:00": N20240327153000
    "2024-03-27 15:25:00": N20240327152500
    "2024-03-27 15:20:00": N20240327152000
    "2024-03-27 15:15:00": N20240327151500
    "2024-03-27 15:10:00": N20240327151000
    "2024-03-27 15:05:00": N20240327150500
    "2024-03-27 15:00:00": N20240327150000
    "2024-03-27 14:55:00": N20240327145500
    "2024-03-27 14:50:00": N20240327145000
    "2024-03-27 14:45:00": N20240327144500
    "2024-03-27 14:40:00": N20240327144000
    "2024-03-27 14:35:00": N20240327143500
    "2024-03-27 14:30:00": N20240327143000
    "2024-03-27 14:25:00": N20240327142500
    "2024-03-27 14:20:00": N20240327142000
    "2024-03-27 14:15:00": N20240327141500
    "2024-03-27 14:10:00": N20240327141000
    "2024-03-27 14:05:00": N20240327140500
    "2024-03-27 14:00:00": N20240327140000
    "2024-03-27 13:55:00": N20240327135500
    "2024-03-27 13:50:00": N20240327135000
    "2024-03-27 13:45:00": N20240327134500
    "2024-03-27 13:40:00": N20240327134000
    "2024-03-27 13:35:00": N20240327133500
    "2024-03-27 13:30:00": N20240327133000
    "2024-03-27 13:25:00": N20240327132500
    "2024-03-27 13:20:00": N20240327132000
    "2024-03-27 13:15:00": N20240327131500
    "2024-03-27 13:10:00": N20240327131000
    "2024-03-27 13:05:00": N20240327130500
    "2024-03-27 13:00:00": N20240327130000
    "2024-03-27 12:55:00": N20240327125500
    "2024-03-27 12:50:00": N20240327125000
    "2024-03-27 12:45:00": N20240327124500
    "2024-03-27 12:40:00": N20240327124000
    "2024-03-27 12:35:00": N20240327123500
    "2024-03-27 12:30:00": N20240327123000
    "2024-03-27 12:25:00": N20240327122500
    "2024-03-27 12:20:00": N20240327122000
    "2024-03-27 12:15:00": N20240327121500
    "2024-03-27 12:10:00": N20240327121000
    "2024-03-27 12:05:00": N20240327120500
    "2024-03-27 12:00:00": N20240327120000
    "2024-03-27 11:55:00": N20240327115500
    "2024-03-27 11:50:00": N20240327115000
    "2024-03-27 11:45:00": N20240327114500
    "2024-03-27 11:40:00": N20240327114000
  }
  
  export interface N20240327195500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327195000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327194500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327194000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327193500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327193000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327192500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327192000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327191500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327191000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327190500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327190000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327185500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327185000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327184500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327184000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327183500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327183000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327182500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327182000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327181500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327181000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327180500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327180000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327175500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327175000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327174500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327174000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327173500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327173000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327172500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327172000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327171500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327171000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327170500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327170000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327165500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327165000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327164500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327164000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327163500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327163000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327162500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327162000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327161500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327161000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327160500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327160000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327155500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327155000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327154500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327154000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327153500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327153000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327152500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327152000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327151500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327151000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327150500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327150000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327145500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327145000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327144500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327144000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327143500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327143000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327142500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327142000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327141500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327141000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327140500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327140000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327135500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327135000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327134500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327134000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327133500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327133000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327132500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327132000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327131500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327131000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327130500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327130000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327125500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327125000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327124500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327124000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327123500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327123000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327122500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327122000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327121500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327121000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327120500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327120000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327115500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327115000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327114500 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  
  export interface N20240327114000 {
    "1. open": string
    "2. high": string
    "3. low": string
    "4. close": string
    "5. volume": string
  }
  