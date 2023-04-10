import axiosClient from 'utils/axios';

const endpoint = '/api/user/me';

export default {
  async getMyProfile() {
    const path = endpoint;

    const response = await axiosClient.get(path);

    return response.data;
  },
};
