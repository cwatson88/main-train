/* 
 --- This api service uses https://developer.transportapi.com/  ---
    docuemntation can be found at:
         https://developer.transportapi.com/docs?raml=https://transportapi.com/v3/raml/transportapi.raml##uk_train_station_station_code_live_json
 */

import axios from "axios";

//huxley.apphb.com/service/dVa4Unn2fgeKxlVQ_4OfrA?accessToken=de3373f2-54fc-4e1a-9ffc-ebc14108b1a3
const getTrainServices = async (to, from) => {
  const accessToken = "accessToken=de3373f2-54fc-4e1a-9ffc-ebc14108b1a3";
  const apiUrl = `https://huxley.apphb.com/departures/${from}/to/${to}?${accessToken}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
//huxley.apphb.com/service/dVa4Unn2fgeKxlVQ_4OfrA?accessToken=de3373f2-54fc-4e1a-9ffc-ebc14108b1a3
const getQuickestTrainServices = async (to, from) => {
  const accessToken = "accessToken=de3373f2-54fc-4e1a-9ffc-ebc14108b1a3";
  const apiUrl = `https://huxley.apphb.com/fastest/${from}/to/${to}?${accessToken}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// https://huxley.apphb.com/service/dVa4Unn2fgeKxlVQ_4OfrA?accessToken=de3373f2-54fc-4e1a-9ffc-ebc14108b1a3
const getServiceDetails = async serviceID => {
  const accessToken = "accessToken=de3373f2-54fc-4e1a-9ffc-ebc14108b1a3";
  const apiUrl = `https://huxley.apphb.com/service/${serviceID}?${accessToken}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getTrainServices, getServiceDetails, getQuickestTrainServices };