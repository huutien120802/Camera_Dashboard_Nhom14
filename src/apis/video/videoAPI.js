import axiosClient from 'utils/axios';

const endpoint = '/api/videos';

export default {
  async getAllVideos() {
    const response = await axiosClient.get(endpoint);

    return response.data;
  },
};
