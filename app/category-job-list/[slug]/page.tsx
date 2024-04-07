"use client";
import axios from "@/config/AxiosConfig";
import React, { useEffect, useState } from "react";

interface Props {
  params: {
    slug: string;
  };
}

interface userInfo {
  name: string;
  content: string;
  company: {
    name: string;
    description: string;
  };
  description: string;
  salary_from: string;
  salary_to: string;
  state: {
    name: string;
  };
  views: number;
}

const Slugs: React.FC<Props> = ({ params }: Props) => {
  const { slug } = params;
  const [detailsData, setDetailsData] = useState<userInfo | undefined>();
  const getUserData = async () => {
    const { data } = await axios.get(`/jobs/${slug}`);
    setDetailsData(data.data);
    console.log(data.data);
  };
  useEffect(() => {
    getUserData();
  }, [slug]);
  if (!detailsData)
    return (
      <div className="min-h-screen items-center justify-center bg-black text-white text-center font-semibold">
        loading . . .
      </div>
    );
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-700 text-slate-200 flex-col gap-20">
      <p>{detailsData.name}</p>
      <p>{detailsData.content}</p>
      <p>{detailsData.company.name}</p>
      <p>{detailsData.company.description}</p>
      <p>{detailsData.description}</p>
      <p>{detailsData.salary_from}</p>
      <p>{detailsData.salary_to}</p>
      <p>{detailsData.state.name}</p>
      <p>{detailsData.views}</p>
    </div>
  );
};

export default Slugs;
