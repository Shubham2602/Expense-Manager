const openIdClient = require("openid-client");
require("dotenv-safe").config();
const axios = require("axios");
openIdClient.Issuer.defaultHttpOptions = { timeout: 20000 };
console.log(process.env.AUTHORIZATION_WELLKNOWN);
const discover = openIdClient.Issuer.discover(
  process.env.AUTHORIZATION_WELLKNOWN
);

discover
  .then(async issuer => {
    const client = new issuer.Client({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    });

    let token = await client.grant({
      grant_type: "client_credentials",
      scope: "openid"
    });

    console.log(token);
    const url =
      "https://api.fusionfabric.cloud/retail-banking/accounts/v1/accounts";

    console.log(url);

    const instance = axios.create({
      timeout: 8000,
      headers: { Authorization: "Bearer " + token.access_token },
      accountId: "0543123467001"
    });

    const response = await instance.get(url);

    console.log(response.data);
  })
  .catch(err => console.log(err));
