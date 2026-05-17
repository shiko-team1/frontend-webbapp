'use client';

import { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  email: string;
  setEmail: (email: string) => void;
  verificationCode: string;
  setVerificationCode: (code: string) => void;
  isEmailVerified: boolean;
  setIsEmailVerified: (verified: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        verificationCode,
        setVerificationCode,
        isEmailVerified,
        setIsEmailVerified,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
