"use client";

import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-9">
      <Link href="/" className="mb-5">
        <Image src="/images/auth/logo.svg" alt="Logo" width={50} height={50} className="mx-auto" />
      </Link>
      {children}
    </div>
  );
};

export default AuthLayout;
