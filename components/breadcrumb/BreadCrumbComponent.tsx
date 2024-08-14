
const BreadCrumbComponent = () => {

    return (
        <div className=" bg-gray-100 flex  flex-wrap justify-between items-center py-6 w-auto px-4 md:px-[100px] xl:px-[300px]">
            <h2 className="text-[18px] leading-[28px]  font-mediu text-[#18191C]">
                Jobs Details
            </h2>
            <div className="text-gray-500 flex gap-2 flex-wrap">
                <span className="">
                    <a href="/" className="mr-2">
                        Home
                    </a>{" "}
                    /
                </span>
                <span>
                    <a href="/" className="mr-2">
                        Find Job
                    </a>{" "}
                    /
                </span>
                <span>
                    <a href="/" className="mr-2">
                        Graphics & Design
                    </a>{" "}
                    /
                </span>
                <span>
                    <a href="#" className="mr-2 text-black">
                        Job Details
                    </a>{" "}
                </span>
            </div>
        </div>
    )
}

export default BreadCrumbComponent;