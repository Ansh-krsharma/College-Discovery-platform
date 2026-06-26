import api from "./api";

export const getSaved = async () => {
  const res = await api.get("/saved");
  return res.data;
};

export const saveCollege = async (id: string) => {
  const res = await api.post(`/saved/${id}`);
  return res.data;
};

export const removeSavedCollege = async (id: string) => {
  await api.delete(`/saved/${id}`);
};
