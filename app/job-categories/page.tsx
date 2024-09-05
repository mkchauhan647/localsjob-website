import JobCategories from "@/components/job-categories/JobCategories";
import Navbar from "@/components/navbar/Navbar";

export default function Page() {
    return (
        <>
        
            <Navbar/>
            <JobCategories viewAll={true}/>
        
        </>
    )
}