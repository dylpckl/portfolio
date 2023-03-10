import Image from "next/image";
import { Inter } from "next/font/google";
import Project from "./(components)/Project";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const projects = [
  {
    project: {
      title: "steamparty.io",
      description: "description",
      dateCompleted: "xxxx-xx-xx",
      image: "",
    },
  },
  {
    project: {
      title: "steamparty.io2",
      description: "description",
      dateCompleted: "xxxx-xx-xx",
      image: "",
    },
  },
  {
    project: {
      title: "steamparty.io3",
      description: "description",
      dateCompleted: "xxxx-xx-xx",
      image: "",
    },
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-4 items-center bg-zinc-800 text-zinc-200 max-w-4xl m-auto min-h-screen">
      {/* header */}
      <header className="bg-sky-600 h-16 w-full flex items-center justify-between text-black">
        <div className="">ds</div>

        <div className="flex gap-2">
          <ul className="flex gap-2">
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#work">work</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
          <Link href="/resume">resume</Link>
        </div>
      </header>

      {/* intro */}
      <section className="bg-pink-600 w-full min-h-96 h-96 flex flex-col justify-center items-start pt-7 text-black">
        <h1 className="text-7xl">Dylan Smith</h1>
        <h2 className="text-5xl">passionate about all things web related</h2>
        <p className="mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button>click a button</button>
      </section>

      <section className="w-full">
        {projects.map((project, index) => (
          <Project
            key={project.project.title}
            direction={index % 2 ? "right" : "left"}
            {...project}
          />
        ))}
      </section>
    </main>
  );
}
