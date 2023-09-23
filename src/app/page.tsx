"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const cardStyle =
    "flex h-full md:w-1/4 p-2 m-4 w-3/4 shadow-md  bg-bgcard  text-slate-300   flex-col gap-3 m-5 rounded-md ";
  const cardStyleCircle =
    "flex md:bg-[url('/sauravimg.jpg')] bg-[url('/sauravimg.jpg')]  shadow-md shadow-slate-400 bg-center bg-cover object-scale-down h-64 md:w-64 p-2 m-4 w-64 bg-white  text-slate-300   flex-col  rounded-full";

  const [showMenu, setMenu] = useState(false);
  const programmingLang = [
    "HTML/HTML5, CSS/CSS3, SAAS",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
  ];
  const frameWork = [
    "ReactJs",
    "NextJs(13)",
    "Redux",
    "Webpack",
    "NodeJs",
    "Express",
    "Numpy/Pandas/scikit-learn",
  ];
  const toolsAndTech = [
    "Git",
    "Jira",
    "Confluence",
    "Aws [CodeCommit, CodeBuild, CodeDeploy, Lambda]",
  ];

  return (
    <main
      className={`flex min-h-screen flex-col ${poppins.className} bg-primary-blue scroll-smooth`}
    >
      <div className="md:flex hidden flex-row-reverse h-26  py-4 md:gap-12 gap-5 md:pr-20 pr-10  ">
        <a
          href={`https://${process.env.VERCEL}/Saurav_Kitukale_CV.pdf`}
          target="_blank"
        >
          <h2 className="hover:text-[#C13948]">CV</h2>
        </a>
        <a href="#skills">
          <h2 className="hover:text-[#C13948] transition-all">Skills</h2>
        </a>
        <a href="#about">
          <h2 className="hover:text-[#C13948]">About Me</h2>
        </a>

        <a href="#about">
          <h2 className="hover:text-[#C13948]">Contact</h2>
        </a>

        <h2 className="hover:text-[#C13948]">Home</h2>
      </div>
      <div className="p-6 md:hidden">
        <button onClick={() => setMenu(!showMenu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-align-justify"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      <div
        className={`flex flex-col absolute shadow-md w-64 h-full bg-menu-color transition-all rounded-sm ${
          !showMenu ? `-translate-x-full` : `translate-x-50`
        }`}
      >
        <div className="p-6 flex flex-row-reverse">
          <button onClick={() => setMenu(!showMenu)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col pl-10">
          <div className="flex flex-row gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="White"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-home"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <h2 className="hover:text-[#C13948] transition-all ">Home</h2>
          </div>{" "}
          <div
            className="flex flex-row gap-2"
            onClick={() => setMenu(!showMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-2"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 1 0-16 0" />
            </svg>
            <a href="#about">
              <h2 className="hover:text-[#C13948] transition-all">About Me</h2>
            </a>
          </div>
          <div
            className="flex flex-row gap-2"
            onClick={() => setMenu(!showMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-graduation-cap"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <a href="#skills">
              <h2 className="hover:text-[#C13948] transition-all">Skills</h2>
            </a>{" "}
          </div>
          <div
            className="flex flex-row gap-2"
            onClick={() => setMenu(!showMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-graduation-cap"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <a href="#about">
              <h2 className="hover:text-[#C13948] transition-all">Contact</h2>
            </a>
          </div>
          <div
            className="flex flex-row gap-2"
            onClick={() => setMenu(!showMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-download"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>

            <a
              target="_blank"
              href={`https://${process.env.VERCEL}/Saurav_Kitukale_CV.pdf`}
              title="Downlaod CV"
            >
              <h2 className="hover:text-[#C13948] transition-all">CV</h2>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-scroll md:bg-[url('/sknew.png')] bg-bgcard  w-full aspect-auto bg-cover md:bg-no-repeat bg-repeat-y md:h-96 h-auto md:pl-28 pl-10 pt-32 flex flex-row">
        <div className="w-full md:w-[50%]  h-auto flex flex-col md:pb-0 pb-10">
          <p className="font-bold text-4xl">Hi, I&apos;m Saurav Kitukale</p>
          <p className="font-thin text-xl text-slate-400">
            Professional Front-end developer with long time experince and
            goal-oriented professional with extensive 5+ years of experience as
            a Frontend developer, developing and managing applications for
            leading clients in BFSI clients in the UK
          </p>
        </div>
        {/* <Image
          src="/removedimng.png"
          width={100}
          height={100}
          alt="img"
          quality={100}
        /> */}
      </div>
      <div
        className="flex flex-col items-center justify-center gap-4 pt-06 md:h-96 h-auto md:mb-14 mb-10"
        id="skills"
      >
        <p className="place-items-center font-bold text-2xl">My Expertise</p>
        {/* <p className="place-items-center text-slate-300 text-sm">
          Some Dummy text describing my skills
        </p> */}
        <hr className="w-20 h-0.5 bg-[#C13948] border-0 rounded" />
        <div className="flex md:flex-row flex-col flex-wrap md:gap-10 w-full items-center justify-center">
          <div className={cardStyle}>
            <div className="flex flex-row gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C13948"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-code"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <p className="font-bold text-l"> Programming languages</p>
            </div>
            <div className="flex flex-col pl-10">
              <ul className="list-disc">
                {programmingLang.map((item, key) => (
                  <li className="font-thin text-sm" key={key}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={cardStyle}>
            <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C13948"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-layout"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <line x1="3" x2="21" y1="9" y2="9" />
                <line x1="9" x2="9" y1="21" y2="9" />
              </svg>
              <p className="font-bold text-l">Frameworks & libraries</p>
            </div>

            <div className="flex flex-col pl-10">
              <ul className="list-disc">
                {frameWork.map((item, key) => (
                  <li className="font-thin text-sm" key={key}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={cardStyle}>
            <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C13948"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-brain-circuit"
              >
                <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
                <path d="M16 8V5c0-1.1.9-2 2-2" />
                <path d="M12 13h4" />
                <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                <path d="M12 8h8" />
                <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                <path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
              </svg>
              <p className="font-bold text-l">Tools and Technologies</p>
            </div>
            <div className="flex flex-col pl-10">
              <ul className="list-disc">
                {toolsAndTech.map((item, key) => (
                  <li className="font-thin text-sm" key={key}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center  pt-4 gap-4 bg-bgcard h-auto pb-20">
        <p className="place-items-center font-bold text-2xl" id="about">
          About Me{" "}
        </p>
        {/* <p className="place-items-center text-slate-300 text-sm">
          {"<AboutMe >"}
        </p> */}
        <hr className="w-20 h-0.5 bg-[#C13948] border-0 rounded" />
        <div className="flex md:flex-row flex-col w-full items-center gap-10 md:pl-[25%]">
          <div className="h-full ">
            <div className={cardStyleCircle}></div>
          </div>
          <div className="h-full md:w-1/2 w-[90%]">
            <p className="text-xl">Hi Folks</p>
            <p>
              I&apos;m Senior software developer with expertise in front-end and
              back-end development, experienced in leading cross-functional
              teams. Proven track record of delivering high-quality software
              solutions that meet and exceed client expectations.
            </p>
            <div className="flex flex-row gap-5 justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-[#C13948] place-items-center">Name</p>
                <p className=" place-items-center">Saurav Kitukale</p>
                <p className="text-[#C13948] place-items-center">Email</p>
                <a
                  className=" place-items-center underline-offset-2 underline"
                  href="mailto:unisaurav@gmail.com"
                >
                  unisaurav@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#C13948] place-items-center">Phone No</p>
                <p className=" place-items-center">07442775523 </p>
                <p className="text-[#C13948] place-items-center">Github</p>
                <a
                  className=" place-items-center underline-offset-2 underline"
                  id="here"
                  target="_blank"
                  href="https://github.com/unisaurav"
                >
                  unisaurav
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// FF4A57
