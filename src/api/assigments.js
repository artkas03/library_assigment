const { client } = require("../utils/client");

export const getAssigmentsByUserId = async (userId) => {
  const response = await client.get(`/assigments?userId=${userId}`);

  return response;
}

export const sendAssigmentAnswer = async (userId, testId, data) => {
  const response = await client.post(`/assigmentcheck?userId=${userId}&testId=${testId}`, data);

  return response;
}