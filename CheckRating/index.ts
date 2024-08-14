import { AzureFunction, Context } from "@azure/functions";
import axios from "axios";

const checkRating: AzureFunction = async (context: Context) => {
  try {
    const rating = await axios
      .get(
        "https://codeforces.com/api/user.info?handles=swseverance&checkHistoricHandles=false"
      )
      .then((response) => response.data.result[0].rating);
    context.log("Rating: ", rating);
  } catch (error) {
    context.log.error("Error: ", error);
  }
};

export default checkRating;
