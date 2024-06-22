import NoPrjectImg from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="w-2/3 text-center mt-24">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={NoPrjectImg}
        alt="No project selected"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a Project or Get started with a new project
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create a new Project</Button>
      </p>
    </div>
  );
}
