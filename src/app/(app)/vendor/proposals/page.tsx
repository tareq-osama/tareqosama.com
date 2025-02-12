"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ProposalsTable } from "./components/proposals-table";
import { fetchProposals } from "@/lib/api/proposals";
import type { Proposal } from "./components/columns";

export default function ProposalsPage() {
  const [data, setData] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getProposals = async () => {
      try {
        const proposals = await fetchProposals();
        setData(proposals);
      } catch (error: any) {
        if (error.message === "Unauthorized") {
          router.push("/login");
          return;
        }
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProposals();
  }, [router]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return <ProposalsTable data={data} />;
}