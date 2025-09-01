// aggregation.worker.js
import { createApiInstance } from "../config/api.js";
import { aggregateDirectoriesData } from "../utils/directoryAggregation.js";

self.onmessage = async (e) => {
  const { directoryNames, token   } = e.data;
  const api = createApiInstance(token);

  try {
    const result = await aggregateDirectoriesData(directoryNames, api);
    self.postMessage({ type: 'success', data: result });
  } catch (error) {
    self.postMessage({ type: 'error', message: error.message });
  }
};
