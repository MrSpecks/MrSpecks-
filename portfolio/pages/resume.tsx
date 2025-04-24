import React from 'react';
import SEO from "../components/SEO";
export default function ResumePage() {
    return (
        <>
        <SEO title="Kagiso Mfusi | Resume" description="View and download my resume showcasing skills, experience, and certifications." />
      <main className="p-6">
         {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Resume
      </h1>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Professional Summary
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I’m an IT professional with over five years of experience in customer-facing roles and cloud environments.  
          I combine technical proficiency with clear communication, a growth-mindset, and a focus on delivering reliable, secure,  
          and sustainable solutions.  
        </p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Experience
        </h2>

        {/* Cloud & Web Solutions Engineer */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Cloud & Web Solutions Engineer — Independent
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Oct 2024 - Present | Johannesburg, South Africa
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

        {/* Systems Administrator Trainee */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Systems Administrator Trainee — Afrika Tikkun Services (ATS)
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Jul 2024 - Sep 2024 | Johannesburg, South Africa
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

        {/* Call Centre Agent */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Call Centre Agent — First National Bank (FNB)
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Oct 2018 - Nov 2023 | Johannesburg, South Africa
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
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Education
        </h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Higher Certificate in Information Technology: Software Development
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            CTU Training Solutions | Sep 2018 - Aug 2019
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Bachelor of Sciene in Information Technology
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Richfield Graduate Institute of Technology | Feb 2017 - Feb 2018
          </p>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Cloud Computing · Systems Development · Cybersecurity · Customer Service ·  
          Project Management · Sustainable Technology · Web Deveelopment ·
        </p>

        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Tools & Technologies
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Microsoft Azure · Google Workspace · GitHub · Next.js · React · Linux ·  
          Windows Server · AWS · HOGAN · Fusion · Java · Python · Tailwind
        </p>
      </section>
      </main>
    </>
  )
}