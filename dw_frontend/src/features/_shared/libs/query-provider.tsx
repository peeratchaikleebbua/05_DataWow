"use client";

import {
  isServer,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";

import { UnauthenticatedError } from "@/core/errors/auth";
import { signOut } from "next-auth/react";
import { ToastAlert } from "../utils/toast-alert";

// on production, react query devtool is excluded
// so, lazy load it for more perforamnce on loading
const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/build/modern/production.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        // cacheTime: 1000 * 60 * 30, // 30 minutes
      },
    },
    queryCache: new QueryCache({
      onError: (error, query) => {
        if (error instanceof UnauthenticatedError) {
          signOut();
          ToastAlert.error(error.message);
        }
        if (query?.meta?.errorMessage) {
          ToastAlert.error(query?.meta?.errorMessage as string);
        } else {
          ToastAlert.error(error.message);
        }
      },
    }),
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtoolsProduction />
      {children}
    </QueryClientProvider>
  );
}
