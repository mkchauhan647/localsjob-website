import React from 'react';



const SingleBlog = ({ slug, categoryBlogs }: { slug: any, categoryBlogs: any }) => {

    console.log("slug", slug);
    
    const blog = categoryBlogs.find((b: any) => b.title.toLowerCase().replace(/[^a-zA-Z0-9- ]/g,'').split(" ").join('-') == slug);


    console.log("blog", blog);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row">
        {/* Blog Content */}
        <div className="w-full lg:w-3/4">
          <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg" />
          <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>
          <p className="text-gray-600 mt-4">{blog.content}</p>
        </div>

        {/* Related Blogs */}
        <div className="w-full lg:w-1/4 lg:ml-8 mt-8 lg:mt-0">
          <h2 className="text-2xl font-bold mb-4">Related Blogs</h2>
          <ul>
            {categoryBlogs.filter((b:any) => b.id !== blog.id).map((relatedBlog:any) => (
              <li key={relatedBlog.id} className="mb-4">
                <a href={`/blog/${relatedBlog.title.toLowerCase().replace(/[^a-zA-Z0-9- ]/g,'').split(" ").join('-')}`} className="text-blue-500 hover:underline">
                  {relatedBlog.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
