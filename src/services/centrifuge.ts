import Centrifuge from "@centrifuge/centrifuge-js";

export const centrifuge = new Centrifuge({
  centrifugeWsUrl: "wss://api.testnet.rabbitx.io/ws",
});
