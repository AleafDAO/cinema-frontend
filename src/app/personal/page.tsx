// /app/Providers.tsx

"use client";

import {
  isServer,
  QueryClient,
  QueryClientProvider,
  useQuery,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { gql, request } from "graphql-request";
import NftItem from "@/components/nft-item";

const query = gql`{
  eawardTokens(first: 5) {
    id
    param0
    param1
    param2
  }
}`;
const url = "https://api.studio.thegraph.com/query/83697/leafyseat/version/latest";

export default function Data() {
  // the data is already pre-fetched on the server and immediately available here,
  // without an additional network call
  const { data }:any = useQuery({
    queryKey: ["data"],
    async queryFn() {
      const res = await request(url, query);
      console.log("看下结果", res);
      return res;
    },
  });
  return (
    <div className="flex-1 px-6 md:px-10 flex">
      {
      ((data && data.eawardTokens) || [1, 2, 3, 4]).map((e, i) => (
        <NftItem item={e} key={i} />
      ))
    }
    </div>
  );
}
