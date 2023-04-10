import axiosClient from 'utils/axios';

const endpoint = '/api/users';

export default {
  async getUserInfo(id) {
    const path = `${endpoint}/${id}`;

    const response = await axiosClient.get(path);

    return response.data;
  },
};
