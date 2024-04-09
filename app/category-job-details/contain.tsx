import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useSearchParams } from "next/navigation";
import axios from "@/config/AxiosConfig";
import Loader from "@/components/loader/Loader";
import { UserJobDetails } from "@/config/dataProps";

const contain = () => {
  const searchParams = useSearchParams();
  const [userDetail, setUserDetail] = useState<UserJobDetails>();
  const [isLoading, setIsLoading] = useState(false);
  const slug = searchParams.get("slug");

  const fetchCategorySingleDetails = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/jobs/${slug}`);
      setUserDetail(data?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCategorySingleDetails();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div className="custom-card border p-2">
        <p className="font-[800] ">About Company</p>
        <p>{userDetail?.company.description} </p>
        <div className=" border mt-2 hover:border"></div>

        <div>
          <div className=" lg:flex md:flex  sm:grid justify-between">
            <p className="font-[800] mt-2 pt-2">
              {userDetail?.name} (Position){" "}
            </p>

            <div className="button flex   gap-4 ">
              <p className="profilebtn text-xs  items-center justify-start  mt-2 w-[100%] mb-2">
                <Button className=" text-white w-[100%]">Save Job</Button>
              </p>

              <p className="profilebtn  items-center justify-start w-[100%]  mt-2  mb-2">
                <Button className=" text-white  w-[100%] ">Apply Now</Button>
              </p>
            </div>
          </div>

          <div className="lg:flex   md:grid justify-between">
            <p className="font-[800] ">Job Status :</p>

            <div className=" text ">
              <p className=" text-xs font-bold flex items-center justify-start  mt-2 w-[100%] mb-2">
                Views: 2514 | Apply Before: 1 week, 4 days from now
              </p>
            </div>
          </div>
        </div>
        <p className="font-[800] mt-2 pt-2 ">Basic Job Information</p>
        <div className="border mt-2  mx-auto w-full "></div>
        <div className="grid grid-cols-2  mx-auto w-full ">
          <div className="mt-2 pt-2">
            <p>Job Level:</p>
            <div className="border mt-2  mx-auto w-full "></div>
            <div className="mt-2 pt-2">
              <p>No. of Vacancy/s:</p>
            </div>
            <div className="border mt-2  mx-auto w-full "></div>
            <div className="mt-2 pt-2">
              <p>Employment Type:</p>
            </div>
            <div className="border mt-2  mx-auto w-full "></div>
            <div className="mt-2 pt-2">
              <p>Job Location:</p>
            </div>
            <div className="border mt-2  mx-auto w-full "></div>
            <div className="mt-2 pt-2">
              <p>Offered Salary:</p>
            </div>
            <div className="border mt-2  mx-auto w-full "></div>

            <div className="mt-2 pt-2">
              <p>Apply Before (Deadline):</p>
            </div>
            <div className="border mt-2  mx-auto w-full "></div>
          </div>
          <div className="mt-2 pt-2">
            <p>Senior</p>
            <div className="border mt-2  mx-auto w-full "></div>
            <div className="mt-2 pt-2">
              <p>{userDetail?.number_of_positions}</p>
            </div>
            <div className="border mt-2  mx-auto w-full "></div>
            <div className="mt-2 pt-2">
              <p>Part/Full Time</p>
            </div>
            <div className="border mt-2  mx-auto w-full "></div>
            <div className="mt-2 pt-2">
              <p>{userDetail?.city.name}</p>
            </div>
            <div className="border mt-2  mx-auto w-full "></div>
            <div className="mt-2 pt-2">
              <p>
                NRS ({userDetail?.salary_from && +userDetail?.salary_from * 6} -{" "}
                {userDetail?.salary_to && +userDetail?.salary_to * 6})
              </p>
            </div>
            <div className="border mt-2  mx-auto w-full "></div>

            <div className="mt-2 pt-2">
              <p>
                {userDetail?.expire_date &&
                  new Date(userDetail?.expire_date).toLocaleDateString(
                    "en-US",
                    {
                      timeZone: "UTC",
                    }
                  )}
              </p>
            </div>
            <div className="border mt-2  mx-auto w-full "></div>
          </div>
        </div>

        <p className="font-[800] mt-2 pt-2 ">Basic Job Information</p>
        <div className="border mt-2  mx-auto w-full "></div>
        <div className="grid grid-cols-2  mx-auto w-full ">
          <div className="mt-2 pt-2">
            <p>Education Level:</p>
            <div className="border mt-2  mx-auto w-full "></div>
            <div className="mt-2 pt-2">
              <p>Experience Required:</p>
            </div>
            <div className="border mt-2  mx-auto w-full "></div>
            <div className="mt-2 pt-2">
              <p>Professional Skill Required:</p>
            </div>

            <div className="border mt-2  mx-auto w-full "></div>
          </div>
          <div className="mt-2 pt-2">
            <p>Bachelor's Degree</p>
            <div className="border mt-2  mx-auto w-full "></div>
            <div className="mt-2 pt-2">
              <p>2 years</p>
            </div>
            <div className="border mt-2  mx-auto w-full "></div>
            <div className="mt-2 pt-2">
              <p>Good Communication Skill</p>
            </div>
            <div className="border mt-2  mx-auto w-full "></div>
          </div>
        </div>
      </div>
      <div className="pl-[12px]">
        <p className="font-[800] mt-2 pt-2 ">Other Specification</p>

        <ul>
          <li className=" list-disc p-1">
            Background and/or Academic Qualifications in the field of Accounting
          </li>
          <li className=" list-disc p-1">
            Good Oral and Written English skills
          </li>
          <li className=" list-disc p-1">Good Working Computer</li>
          <li className=" list-disc p-1">Reliable Internet Connection</li>
          <li className=" list-disc p-1">
            Team player with good verbal communication skills
          </li>
        </ul>

        <p className="font-[800] mt-2 pt-2 ">Note</p>
        <ul>
          <li className="list-disc p-1">
            Offered Salary: based on qualifications, experience, and performance
            during the paid probationary period.
          </li>
          <li className="list-disc p-1">
            {" "}
            Virtual Assistant Vacancy in Accounts available, Part-Time with
            scope for Full-Time.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default contain;
