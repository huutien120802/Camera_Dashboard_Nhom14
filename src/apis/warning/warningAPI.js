import axiosClient from 'utils/axios';

const endpoint = '/api/warnings';

export default {
  async getAllWarnings() {
    const response = await axiosClient.get(endpoint);

    return response.data;
  },
};
