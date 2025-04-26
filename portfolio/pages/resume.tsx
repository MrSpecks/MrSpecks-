/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SEO from "../components/SEO";
export default function ResumePage() {
    return (
        <>
      <main>
      <section className="w-full min-h-[70vh] relative bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center"
              style={{
              backgroundImage: "url('/images/backgrounds/your-image.jpg')",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-dark overlay for readability
       }}>
      <div  className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
      Professional Summary
      </h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm an IT professional with over five years of experience in customer-facing roles and cloud environments.  
          I combine technical proficiency with clear communication, a growth-mindset, and a focus on delivering reliable, secure,  
          and sustainable solutions.  
        </p>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 mb-6">
          Experience
        </h2>
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Cloud & Web Solutions Engineer 
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
             2025 | Johannesburg, South Africa
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            I architect and deploy modern, scalable cloud infrastructureon Azure, while crafting responsive web applications that seamlessly intergrate serverless backends and enhance user experiences.
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            <li>
              Design and implement secure, scalable cloud infrastructure on Azure using best practices.
            </li>
            <li>
              Building responsive web applications and automate systems to streamline operations and reliability.
            </li>
            <li>
              Automate system deployments and maintenance workflows to improve operational effeciency and reduce downtime.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Systems Administrator Trainee 
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
           2024 | Johannesburg, South Africa
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Honed hands-on skills in Azure Fundamentals — earning my AZ-900 certification while supporrting cloud resource configuration and basic infrastructure management.
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            <li>
              Design and implement secure, scalable cloud infrastructure on Azure using best practices.
            </li>
            <li>
              Building responsive web applications and automate systems to streamline operations and reliability.
            </li>
            <li>
              Automate system deployments and maintenance workflows to improve operational effeciency and reduce downtime.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Call Centre Agent 
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
           2019 | Johannesburg, South Africa
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Provided front-line support and problem resolution for banking customers,  
            balancing efficiency with empathy in a high-volume environment.
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            <li>
              Handled billing inquiries, digital banking assistance, and product guidance.
            </li>
            <li>
              Achieved a 95% customer satisfaction rating by de-escalating issues and educating users.
            </li>
            <li>
              Collaborated with IT teams to report recurring system issues and improve processes.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Java Developer Intern 
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
           2018 | Johannesburg, South Africa
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Collaborated in a structured team environment to design, build, and debug
             internal tools and training systems using Java SE and contributed to UI/UX
              improvements through responsive interface components.
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            <li>
              Developed a foundational understanding of full-stack development principles and
              software lifecycle best practices.
            </li>
            <li>
              Assisted with writing clean, maintainable code while learning agile development
               cycles and real-world software delivery practices.
            </li>
            <li>
              Enhanced proficiency in version control with Git, task tracking using Jira 
              and Confluence for documentation as part of the Atlassian toolset.
            </li>
          </ul>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Education
        </h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Higher Certificate in Information Technology: Software Development
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            CTU Training Solutions | 2018
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Bachelor of Sciene in Information Technology
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Richfield Graduate Institute of Technology | 2017 
          </p>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Cloud Computing · Systems Development · Cybersecurity ·  
          Project Management · Sustainable Technology · Web Development · Sales & Service 
        </p>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Tools & Technologies
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Microsoft Azure · Google Workspace · GitHub · Next.js · React ·  
          Windows Server · AWS · HOGAN · Fusion · Java · Python · Jira · 
          Confluence · Spring Boot · InteliJ · Ubuntu · Kali Linux · 
          Google Cloud · 365 · Varcel · Docker · Oracle
        </p>
      </section>
      </main>
    </>
  );
}