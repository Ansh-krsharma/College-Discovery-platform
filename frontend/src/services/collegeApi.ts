import api from "./api";
import type { College } from "@/types/college";

interface CollegesResponse {
  colleges: College[];
  nextPage: number | null;
}

export const getColleges = async (params: Record<string, string | number | undefined>): Promise<CollegesResponse> => {
  const res = await api.get<CollegesResponse>("/colleges", { params });
  return res.data;
};

export const getCollegeById = async (id: string): Promise<College> => {
  const res = await api.get<College>(`/colleges/${id}`);
  return res.data;
};
