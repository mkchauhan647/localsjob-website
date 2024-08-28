import Navbar from "@/components/navbar/Navbar";

export default function Page(props: any) {
    
    console.log("props", props);
    return (
        <>
        <Navbar/>
        <div className="h-screen flex justify-center items-center">
            <h1>Companies Page</h1>
        </div>
        </>
    )
}