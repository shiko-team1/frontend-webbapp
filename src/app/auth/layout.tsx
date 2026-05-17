import type { ReactNode } from "react";

import { AuthShell } from "@/features/auth/components/AuthShell";
import { AuthProvider } from "@/features/auth/contexts/AuthContext";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <AuthShell>{children}</AuthShell>
    </AuthProvider>
  );
}