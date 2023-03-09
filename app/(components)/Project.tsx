export interface IProject {
  title: string;
  description: string;
  dateCompleted: string;
}
export type ProjectProps = {
  project: IProject;
  direction?: "left" | "right";
};

const Project = ({ project, direction = "left" }: ProjectProps) => {
  console.log(project)
    return (
    <div className="bg-teal-600 w-full flex p-4 gap-4">
      <div className="bg-zinc-800 w-1/2">{project.title}</div>
      <div className="bg-zinc-800 w-1/2">right</div>
    </div>
  );
};
export default Project;
