import { Centrifuge } from "centrifuge";
import { WEB_SOCKET_API } from "./api-urls";

const centrifuge = new Centrifuge(WEB_SOCKET_API.TEST_NET);

// Set JWT token for authentication
const jwtToken = process.env.PRIVATE_JWT ?? "";

console.log("jwtToken=>", jwtToken);

centrifuge.setToken(jwtToken);

centrifuge.connect();

centrifuge.on("connected", function (context) {
  console.log("Connected to Centrifuge");
});

centrifuge.on("disconnected", function (context) {
  console.log("Disconnected from Centrifuge");
});

centrifuge.on("error", function (err) {
  console.error("Centrifuge error:", err);
});

export { centrifuge };
