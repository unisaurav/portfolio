// import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const cardStyle =
    "flex h-full md:w-1/5 p-2 m-4 w-64 shadow-md  bg-bgcard  text-slate-300   flex-col gap-3 m-5 rounded-md ";
  const cardStyleCircle =
    "flex md:bg-[url('/sauravimg.jpg')] shadow-md shadow-slate-400 bg-center bg-cover object-scale-down h-64 md:w-64 p-2 m-4 w-64 bg-white  text-slate-300   flex-col  rounded-full";

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
  const toolsAndTech = ["Git", "Jira", "Confluence", "Aws"];

  return (
    <main
      className={`flex min-h-screen flex-col ${poppins.className} bg-primary-blue`}
    >
      <div className="flex flex-row-reverse h-26  py-4 md:gap-12 gap-5 md:pr-20 pr-10">
        <h2 className="hover:text-[#C13948]">Home</h2>
        <h2 className="hover:text-[#C13948]">About Me</h2>
        <a href="#skills">
          <h2 className="hover:text-[#C13948]">Skills</h2>
        </a>
        <h2 className="hover:text-[#C13948]">Contact</h2>
        <a href="#about">
          <h2 className="hover:text-[#C13948]">CV</h2>
        </a>
      </div>
      <div className="bg-scroll md:bg-[url('/sknew.png')] bg-bgcard  w-full aspect-auto bg-cover md:bg-no-repeat bg-repeat-y md:h-96 h-auto md:pl-28 pl-10 pt-32 flex flex-row">
        <div className="w-full md:w-[35%]  h-auto flex flex-col md:pb-0 pb-10">
          <p className="font-bold text-4xl">Saurav Kitukale</p>
          <p className="font-thin text-xl text-slate-400">
            I am Saurav, professional web developer with long time experince and goal-oriented professional with extensive 4+ years of experience as a Frontend developer, developing and managing applications for leading clients in BFSI clients in the UK
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
        className="flex flex-col items-center justify-center gap-4 pt-10 md:h-96 h-auto md:mb-14 mb-10"
        id="skills"
      >
        {/* <p className="text-[#C13948] place-items-center">Skills</p> */}
        <p className="place-items-center font-bold text-2xl">My Skills</p>
        <p className="place-items-center text-slate-300 text-sm">
          Some Dummy text describing my skills
        </p>
        <hr className="w-20 h-0.5 bg-[#C13948] border-0 rounded" />
        <div className="flex md:flex-row flex-col flex-wrap md:gap-10 w-full items-center justify-center">
          <div className={cardStyle}>
            <div className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C13948"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-code"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <p className="font-bold text-l"> Programming languages</p>
            </div>
            <div className="flex flex-col pl-10">
              <ul className="list-disc">
                {programmingLang.map((item) => (
                  <li className="font-thin text-sm">{item}</li>
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                {frameWork.map((item) => (
                  <li className="font-thin text-sm">{item}</li>
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
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
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
              <p className="font-bold text-l">Technologies</p>
            </div>
            <div className="flex flex-col pl-10">
              <ul className="list-disc">
                {toolsAndTech.map((item) => (
                  <li className="font-thin text-sm">{item}</li>
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
        <p className="place-items-center text-slate-300 text-sm">
          Some Dummy text describing About me
        </p>
        <hr className="w-20 h-0.5 bg-[#C13948] border-0 rounded" />
        <div className="flex md:flex-row flex-col w-full items-center gap-10 md:pl-[25%]">
          <div className="h-full ">
            {/* <Image
              src="/next.svg"
              width={100}
              height={100}
              alt="img"
              quality={100}
            /> */}
            <div className={cardStyleCircle}></div>
          </div>
          <div className="h-full md:w-1/2 w-[90%]">
            <p className="text-xl">Hi There </p>
            <p>
              My name is saurav am web devloper skilled in React, node and Next
              worked on multiple tech stach wrt fontend etc blah blah
            </p>
            <p>
              My name is saurav am web devloper skilled in React, node and Next
              worked on multiple tech stach wrt fontend etc blah blah
            </p>
            <div className="flex flex-row gap-5 justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-[#C13948] place-items-center">Name</p>
                <p className=" place-items-center">Saurav Kitukale</p>
                <p className="text-[#C13948] place-items-center">Email</p>
                <p className=" place-items-center">Unisaurav@gmail.com</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#C13948] place-items-center">Phone No</p>
                <p className=" place-items-center">07442775523 </p>
                <p className="text-[#C13948] place-items-center">Github</p>
                <p className=" place-items-center" id="here">
                  unisaurav
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// FF4A57
