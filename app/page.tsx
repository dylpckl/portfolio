import Image from "next/image";
import { Inter } from "next/font/google";
import Project from "./(components)/Project";

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
    <main className="flex flex-col items-center bg-zinc-800 text-zinc-200 p-6 max-w-4xl m-auto min-h-screen">
      {/* header */}
      <header className="">header</header>

      {/* about */}
      <div className="">about</div>

      {projects.map((project, index) => (
        <Project
          key={project.project.title}
          direction={index % 2 ? "right" : "left"}
          {...project}
        />
      ))}
    </main>
  );
}
