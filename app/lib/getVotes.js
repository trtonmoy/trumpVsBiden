import { unstable_cache } from "next/cache";

export const getVotes = async () => {
  const url = ` ${process.env.NEXT_PUBLIC_BASE_URL}/api/getVoteDetails`;
  const res = await fetch(url, {
    cache: "no-store",
    next: { tags: ["votes"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getCatchData = async () => {
  cache;
};
