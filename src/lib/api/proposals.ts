import axios from "axios";
import { getCookie } from 'cookies-next';
import type { Proposal } from "@/app/(app)/vendor/proposals/components/columns";

export async function fetchProposals(): Promise<Proposal[]> {
  const token = getCookie('token');
  if (!token) {
    throw new Error("No authentication token found");
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error("API URL is not configured");
  }

  try {
    const response = await axios.get(`${apiUrl}/api/proposals`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data.map((item: any) => ({
      id: item.id,
      ...(item.attributes ? {
        slug: item.attributes.slug,
        title: item.attributes.title,
        createdAt: item.attributes.createdAt,
        updatedAt: item.attributes.updatedAt,
      } : item)
    }));
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error("Unauthorized");
    }
    throw new Error(error.response?.data?.message || "Failed to fetch proposals");
  }
}