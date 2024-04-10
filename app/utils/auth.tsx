"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const checkAuth = (token: string | null): boolean => {
  return token !== null && typeof token !== "undefined";
};

export const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Wrapper: React.FC<P> = (props) => {
    const router = useRouter();

    // Retrieve the token from localStorage
    const token: string | null = localStorage.getItem("token");
    useEffect(() => {
      if (!checkAuth(token)) {
        router.push("/login");
      }
    }, []);

    return <WrappedComponent {...(props as P)} />;
  };

  return Wrapper;
};
