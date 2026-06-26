import api from "./api";
import type { AuthResponse } from "@/types/auth";

export const signup = async (data: { name: string; email: string; password: string }) => {
  const res = await api.post<AuthResponse>("/auth/register", data);
  return res.data;
};

export const login = async (data: { email: string; password: string }) => {
  const res = await api.post<AuthResponse>("/auth/login", data);
  return res.data;
};
