import SingleBlog from '@/components/blog/BlogPage';
import Navbar from '@/components/navbar/Navbar';
import React from 'react'



const BlogPage= ({ params }:{params:{slug:string}}) => {

 const blogs = [
  {
    id: 1,
    title: 'Understanding JavaScript Closures',
    excerpt: 'A deep dive into closures, one of the most powerful concepts in JavaScript.',
    content: `
      Closures are an essential concept in JavaScript that every developer should master. A closure is created when a function is defined within another function, and it retains access to the outer function’s variables even after the outer function has returned. This unique behavior allows for private variables, function factories, and more advanced patterns in JavaScript.

      Closures shine in scenarios where you want to encapsulate logic and state. For example, when creating callback functions or implementing the module pattern, closures can help manage variables that would otherwise be in the global scope. They help avoid polluting the global namespace, ensuring cleaner and more maintainable code.

      One of the most common uses of closures is in event handlers and asynchronous code. When working with APIs like setTimeout or handling click events, closures help retain access to the necessary variables even when the code executes after a delay. This is particularly important in the modern, asynchronous world of JavaScript.

      Although closures are powerful, they can sometimes cause memory leaks if not handled correctly. Variables that are closed over are not released until the function has no more references, so it’s crucial to be mindful of the memory footprint. Understanding how garbage collection works in JavaScript will help mitigate these issues.
    `,
    image: 'https://via.placeholder.com/600x400?text=JavaScript+Closures',
    category: 'JavaScript',
  },
  {
    id: 2,
    title: 'Mastering React Hooks',
    excerpt: 'Learn how to leverage React Hooks to build better and more efficient components.',
    content: `
      React Hooks revolutionized the way we write functional components. Hooks allow us to use state, side effects, and other React features without needing class components. The two most commonly used hooks are useState and useEffect, but there are many others that can greatly enhance the capabilities of your React applications.

      The useState hook allows functional components to have local state. This was a game-changer when it was introduced, as before hooks, only class components could manage state. With useState, you can easily declare state variables and update them, while React ensures the UI stays in sync with state changes.

      useEffect, on the other hand, deals with side effects such as data fetching, subscriptions, or manually updating the DOM. This hook runs after every render by default but can be customized to run only when certain dependencies change. Learning how to effectively use and manage useEffect will significantly improve your component performance and data flow.

      There are also custom hooks, which allow you to encapsulate reusable logic into a function. This keeps your components cleaner and more focused on UI, while your custom hooks handle business logic. It’s a good practice to create custom hooks for any complex logic shared between multiple components.
    `,
    image: 'https://via.placeholder.com/600x400?text=React+Hooks',
    category: 'React',
  },
  {
    id: 3,
    title: 'CSS Grid vs. Flexbox: When to Use Which?',
    excerpt: 'Understand the differences between CSS Grid and Flexbox and when to use each for layout.',
    content: `
      Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes. Flexbox is designed for one-dimensional layouts, while CSS Grid is intended for two-dimensional layouts. Understanding these differences is crucial for creating efficient and responsive layouts.

      Flexbox excels in laying out items in a single direction — either horizontally or vertically. It’s perfect for situations where you need items to align, distribute space, and remain flexible across different screen sizes. Flexbox is often used for simple navigation bars, footer layouts, and small grid-like sections where items are aligned in a row or column.

      CSS Grid, on the other hand, is more powerful for creating complex grid layouts. It allows you to define both rows and columns and place items within this grid at specific locations. This makes it ideal for dashboard layouts, complex page structures, and when you need both horizontal and vertical control over the layout.

      While Flexbox is a simpler tool for single-axis alignment, CSS Grid provides unparalleled control for two-dimensional layouts. In many cases, you may even use both together — Flexbox inside a grid item to handle layout on one axis and Grid to manage the overall structure.
    `,
    image: 'https://via.placeholder.com/600x400?text=CSS+Grid+vs+Flexbox',
    category: 'CSS',
  },
  {
    id: 4,
    title: '10 Tips for Writing Cleaner Code',
    excerpt: 'Write clean, maintainable, and scalable code by following these 10 simple tips.',
    content: `
      Writing clean code is not just about aesthetics; it’s about creating maintainable, scalable, and efficient code that can be easily understood by others. Clean code can save hours of debugging and refactoring down the line, making it an essential skill for developers.

      One of the most important tips is to follow consistent naming conventions. Variables, functions, and classes should have meaningful names that describe their purpose clearly. This makes it easier for others to understand your code without needing to dive deep into the implementation.

      Another key practice is to keep functions small and focused on a single task. Large, multi-purpose functions are harder to test, debug, and reuse. A function should ideally do one thing and do it well. This makes the code more modular and easier to maintain in the long run.

      Avoid unnecessary comments. While comments are helpful, over-commenting can clutter your code. Instead of commenting every line, aim for self-explanatory code. When comments are necessary, make sure they explain the "why" behind a decision, not the "what."
    `,
    image: 'https://via.placeholder.com/600x400?text=Cleaner+Code+Tips',
    category: 'Programming',
  },
  {
    id: 5,
    title: 'Building RESTful APIs with Node.js',
    excerpt: 'Learn how to create scalable and efficient RESTful APIs using Node.js and Express.',
    content: `
      Node.js, together with Express.js, is one of the most popular choices for building RESTful APIs. It’s lightweight, efficient, and built for real-time applications. In this guide, we’ll cover the essentials for building a simple, scalable REST API using these tools.

      RESTful APIs follow a resource-based approach. Each endpoint in a RESTful API corresponds to a resource, such as users, posts, or comments. The HTTP methods (GET, POST, PUT, DELETE) map to the operations you can perform on those resources, providing a standardized way to interact with data.

      With Node.js, you can create non-blocking, event-driven applications. This is perfect for APIs, as it ensures the server can handle multiple requests at once without being bogged down by slow processes. Express.js adds a layer of abstraction, making it easier to manage routes, middleware, and responses.

      Authentication and security are critical when building APIs. You can integrate JWT (JSON Web Tokens) for stateless authentication and use middleware to protect routes that require user authorization. Additionally, consider using HTTPS, input validation, and rate-limiting to further secure your API.
    `,
    image: 'https://via.placeholder.com/600x400?text=Node+REST+APIs',
    category: 'Node.js',
  },
  {
    id: 6,
    title: 'Understanding TypeScript Generics',
    excerpt: 'Generics in TypeScript allow for creating reusable and type-safe functions and components.',
    content: `
      TypeScript generics provide a powerful way to define reusable components and functions with type safety. They allow you to write functions, classes, and interfaces that work with different types while ensuring that the types are respected throughout the codebase.

      Generics are particularly useful when working with collections of data. For example, a function that works with arrays might need to handle different types of elements (strings, numbers, objects). Instead of defining separate functions for each type, you can use generics to create a single function that works with any type.

      TypeScript’s generic system is flexible, allowing for constraints on the types passed in. You can specify that a generic type must extend a certain interface, ensuring that the type passed in has specific properties or methods. This adds another layer of type safety and makes your code more robust.

      By using generics, you not only write cleaner, reusable code but also reduce the likelihood of runtime errors, as the TypeScript compiler will catch any type mismatches early in the development process.
    `,
    image: 'https://via.placeholder.com/600x400?text=TypeScript+Generics',
    category: 'TypeScript',
  },
];





  return (

    <>
    
      <Navbar/>
    

          <SingleBlog slug={ params.slug}
        categoryBlogs={blogs} />
      
          </>



  )
}

export default BlogPage;