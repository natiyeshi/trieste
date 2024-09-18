"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";

const ClientSessionProvider = ({ children }: any) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <Toaster />
    </>
  );
};

export default ClientSessionProvider;
