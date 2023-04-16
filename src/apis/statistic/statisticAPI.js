import axiosClient from 'utils/axios';

const endpoint = '/api/statistics';

export default {
  async getAllStatistics() {
    const response = await axiosClient.get(endpoint);

    return response.data;
  },
};
