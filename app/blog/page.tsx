import BlogsGrid from "@/components/blog/BlogCard"
import Navbar from "@/components/navbar/Navbar";

const Blogs = () => {


  return (
    <>
      <Navbar/>
    
      <BlogsGrid viewAll={true} />
    
    </>
  )


}

export default Blogs;