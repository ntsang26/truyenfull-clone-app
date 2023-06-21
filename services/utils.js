import NetInfo from "@react-native-community/netinfo";

let utils = {}
utils.isNetworkAvailable = async () => {
  const response = await NetInfo.fetch();
  return response.isConnected;
}

export default utils