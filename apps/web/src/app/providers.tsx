"use client";

import { api } from "~/utils/api";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default api.withTRPC(Providers);
