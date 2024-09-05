'use client'
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";

const FAQs = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What is LocalsJob.com?",
          answer:
            "LocalsJob.com is a platform that connects local job seekers with employers. It features job postings, a social community for sharing work experiences, and a Skill Zone for finding and requesting specific services and Professionals.",
        },
        {
          question: "How do I create an account on LocalsJob.com?",
          answer:
            'To create an account, click on the "Sign Up" button on the homepage, fill in your details, and follow the instructions to complete the registration process.',
        },
      ],
    },
    {
      category: "Login Issues",
      questions: [
        {
          question: "I forgot my password. How can I reset it?",
          answer:
            'Click on the "Forgot Password?" link on the login page, enter your registered email address, and follow the instructions to reset your password.',
        },
        {
          question: "Why can’t I log in to my account?",
          answer:
            "Ensure you are using the correct email address and password. If you continue to experience issues, try resetting your password or contact our support team at support@localsjob.com.",
        },
      ],
    },
    {
      category: "Payment and Subscriptions",
      questions: [
        {
          question: "What are the subscription plans available on LocalsJob.com?",
          answer:
            "LocalsJob.com offers various subscription plans, including basic and premium options. LocalsJob is free to use for users only, subscriptions are available for companies who want to post jobs.",
        },
        {
          question: "How do I update my payment information?",
          answer:
            'Log in to your account, go to the "Account Settings" page, and update your payment information under the "Billing" section.',
        },
        {
          question: "Can I cancel my subscription?",
          answer:
            'Yes, you can cancel your subscription at any time by going to the "Account Settings" page and selecting "Cancel Subscription." Subscription fees are non-refundable.',
        },
      ],
    },
    {
      category: "Job Applications",
      questions: [
        {
          question: "How do I apply for a job on LocalsJob.com?",
          answer:
            'To apply for a job, browse the job listings, select the job you are interested in, and click on the "Apply" button. Follow the instructions to submit your application.',
        },
        {
          question: "Can I track my job applications?",
          answer:
            'Yes, you can track your job applications by going to the "My Applications" section in your account dashboard.',
        },
        {
          question: "How will I know if my application is successful?",
          answer:
            'Employers will contact you directly if they are interested in your application. You can also check the status of your applications in the "My Applications" section.',
        },
      ],
    },
    {
      category: "Skill Zone",
      questions: [
        {
          question: "What is the Skill Zone?",
          answer:
            "The Skill Zone is a section of LocalsJob.com where users can search for specific skills and services Providers, like drivers, painters, electricians, etc., view profiles, and make requests.",
        },
        {
          question: "How do I request a service in the Skill Zone?",
          answer:
            'To request a service, go to the Skill Zone, search for the skill you need, view the profiles, and click on the "Request Service or Call Request" button for the provider you choose.',
        },
        {
          question: "How are service providers verified?",
          answer:
            "Service providers are verified through our reward and award system, which includes factors such as the number of jobs received and their contributions to the community.",
        },
      ],
    },
    {
      category: "Service Providers and Professionals",
      questions: [
        {
          question: "How do I register as a service provider on LocalsJob.com?",
          answer:
            'To register as a service provider, create an account and fill out the service provider form available on the "Register as a Service Provider" page.',
        },
        {
          question: "What is a LocalsPro?",
          answer:
            'LocalsPro is a tag given to verified and highly rated service providers on LocalsJob.com, indicating their expertise and reliability.',
        },
        {
          question: "How do I receive payments for my services?",
          answer:
            "LocalsJob.com is not liable for payments between service providers and customers. It is recommended to examine services and securely transact after completion.",
        },
      ],
    },
    {
      category: "Support and Assistance",
      questions: [
        {
          question: "How can I contact LocalsJob.com support?",
          answer:
            'You can contact our support team by emailing support@localsjob.com or by using the contact form available on the "Contact Us" page.',
        },
        {
          question: "Where can I find more information about using LocalsJob.com?",
          answer:
            'For more information, visit our "Help Center" page, where you will find guides, tutorials, and FAQs about using LocalsJob.com.',
        },
      ],
    },
  ];

    return (
      <>
      
            <Navbar/>
      
    <div className="sm:px-[96px] px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">FAQs</h1>
      {faqs.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
          {section.questions.map((faq, idx) => (
            <div key={idx}>
              <button
                onClick={() => toggleFAQ(index * 100 + idx)}
                className="text-lg font-medium text-left w-full focus:outline-none"
              >
                <div className="flex justify-between items-center bg-gray-200 p-4 rounded">
                  <span>{faq.question}</span>
                  <span>{open === index * 100 + idx ? "-" : "+"}</span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === index * 100 + idx ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="p-4 bg-gray-50 text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
            </div>
      </>
            
  );
};

export default FAQs;
