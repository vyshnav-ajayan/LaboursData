import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export function getLabourList() {
  const response = apiClient.get(ApiConfig.LABOUR_LIST);

  return response;
}

export function getLabourDetails() {
  const response = apiClient.get(ApiConfig.LABOUR_DETAILS);

  return response;
}
