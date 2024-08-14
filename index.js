const axios = require("axios");

axios
  .get(
    "https://codeforces.com/api/user.info?handles=swseverance&checkHistoricHandles=false"
  )
  .then((response) => response.data.result[0].rating)
  .then(rating => console.log(rating));