import { CHAIN } from "../../helpers/chains";
import { univ2Adapter2 } from "../../helpers/getUniSubgraphVolume";

const endpoints = {
  [CHAIN.LINEA]:
    "https://api.studio.thegraph.com/query/55804/linea-v2/version/latest",
  [CHAIN.SCROLL]:
    "https://api.studio.thegraph.com/query/55804/metavault-v2/version/latest",
};

export default univ2Adapter2(endpoints, {
  factoriesName: "factories",
  totalVolume: "volumeUSD",
  dayData: "factoryDaySnapshot",
  dailyVolume: "volumeUSD",
  dailyVolumeTimestampField: "timestamp",
});
