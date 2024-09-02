"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from 'js-cookie';

export const checkAuth = (token: string | undefined): boolean => {
  return token !== null && typeof token !== "undefined";
};

export const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Wrapper: React.FC<P> = (props) => {
    const router = useRouter();

    // Retrieve the token from cookies
    const token: string | undefined = Cookies.get("token");

    useEffect(() => {
      if (!checkAuth(token)) {
        router.push("/login");
      }
    }, [token]); // Include token in the dependency array to rerun effect when token changes

    return <WrappedComponent {...(props as P)} />;
  };

  return Wrapper;
};


export const headersWithToken = () => {
  const token = Cookies.get("token") || null;
  return {
    Authorization: `Bearer ${token}`,
    "Api-Version": "v1",
    Accept: "application/json",
  };
}
