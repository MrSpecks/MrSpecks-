/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import SEO from "../components/SEO";
export default function ResumePage() {
    return (
        <>
      <Head>
      <title>Kagiso Mfusi | Resume</title>
      <meta name="description" content="View Kagiso Mfusi's resume, detailing experience in cloud building, cybersecurity, customer service, and digital innovation." />
      <meta property="og:title" content="Kagiso Mfusi | Resume" />
      <meta
       property="og:description"
       content="Kagiso Mfusi's Resume - Expertise in cloud building, digital innovation and scalable tech infrastructure. "/>
      <meta property="og:image" content="/images/backgrounds/homepage1.png" />
      <meta property="og:url" content="https://personal-portfolio-fyfepc1dn-mrspecks-projects.vercel.app" />
      <meta property="og:type" content="website" />
    </Head>
      <main>
      <section className="w-full min-h-[70vh] relative flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
              style={{
              backgroundImage: "url('/images/backgrounds/homepage2.png')",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-dark overlay for readability
       }}/>
      <div className="absolute inset-0 bg-gray-100/20 dark:bg-gray-900/40 z-10"/>
      <div  className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-indigo-100 dark:text-indigo-100 mb-4"
       style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}> Professional Summary
      </h1>
        <p className="text-indigo-100 dark:text-indigo-100 leading-relaxed"
        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)'}}>
          I'm an IT professional with over five years of experience in customer-facing roles and cloud environments.  
          I combine technical proficiency with clear communication, a growth-mindset, and a focus on delivering reliable, secure,  
          and sustainable solutions.  
        </p>
        </div>
      </section>
      <section className="mb-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100 mt-12 mb-12">
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
          <h3 className="text-lg font-medium text-gray-900 dark:text-white ">
            Client Services Representative 
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
      <section className="mb-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
  <h2 className="text-xl font-semibold mb-4text-slate-900 dark:text-slate-100 mb-4">
    Online Learning Achievements
  </h2>
  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
    In pursuit of continuous learning and excellence, I have independently completed a series of specialized online courses and certifications. This reflects my commitment to staying ahead in a rapidly evolving digital landscape and mastering modern technologies and methodologies.
  </p>
  <div className="space-y-4">
  <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
        Coursera
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Cloud Architecture Design Patterns (2025)
      </p>
    </div>
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
        Huawei ICT Academy
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        HCIA-5G V2.0 · 5G Basics: What It's All About · Next-Generation Cyber Security (2024–2025)
      </p>
    </div>
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
        IBM SkillsBuild
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Cybersecurity Fundamentals · Explore Emerging Tech · Fundamentals of Sustainability and Technology · Project Management Fundamentals (2024)
      </p>
    </div>
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
        Microsoft Learn
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Microsoft Certified: Azure Fundamentals (AZ-900) (2024)
      </p>
    </div>
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
        LinkedIn Learning
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Career Skills in Software Development · Cybersecurity Foundations · Cybersecurity Awareness: Terminology (2024)
      </p>
      </div>
    </div>
</section>
      <section className="mb-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100 mb-4">
          Education
        </h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
             CTU Training Solutions
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
          Higher Certificate in Information Technology: Software Development | 2019
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
             Richfield Graduate Institute of Technology
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
          Bachelor of Sciene in Information Technology | 2017 
          </p>
        </div>
      </section>
      <section className="mb-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
          Skills
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Cloud Computing · Systems Development · Cybersecurity ·  
          Project Management · Sustainable Technology · Web Development · Sales & Service 
        </p>
        <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
          Tools & Technologies
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
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