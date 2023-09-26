const { client } = require("../utils/client");

export const authUser = async (data) => {
  const response = await client.post('/authorization', data);

  return response;
};