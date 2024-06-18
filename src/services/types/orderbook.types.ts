export interface Orderbook {
  asks: Array<Array<string>>;
  bids: Array<Array<string>>;
  market_id: string;
  sequence: number;
  timestamp: number;
}
