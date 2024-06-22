// import NewProject from "./component/NewProject";
import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
import ProjectSideBar from "./component/ProjectSideBar";
import { useState } from "react";
import SelectedProject from "./component/SelectedProject";
import { useRef } from "react";
function App() {
  const [selectedProjects, setSelectedProjects] = useState({
    selectedProjectsId: undefined,
    projects: [],
    tasks: [],
  });
  function handleAddTask(text) {
    console.log(selectedProjects);
    setSelectedProjects((prevState) => {
      const newTask = {
        task: text,
        projectId: prevState.selectedProjectsId,
        id: Math.random(),
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(taskId) {
    let updatedTasks = selectedProjects.tasks.filter(
      (task) => task.id !== taskId
    );
    setSelectedProjects((prevState) => {
      return {
        ...prevState,
        tasks: [...updatedTasks],
      };
    });
  }
  function handleStartAddProject() {
    setSelectedProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectsId: null,
      };
    });
  }
  function handleSelectProject(id) {
    setSelectedProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectsId: id,
      };
    });
  }
  function handleAddProject(project) {
    setSelectedProjects((prevState) => {
      const newProject = {
        ...project,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectsId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  function handleDeletion(id) {
    let updatedProjects = selectedProjects.projects.filter(
      (proj) => proj.id !== id
    );
    setSelectedProjects(() => {
      return {
        projects: [...updatedProjects],
        selectedProjectsId: undefined,
      };
    });
  }
  const slecteProjec = selectedProjects.projects.filter(
    (proj) => proj.id === selectedProjects.selectedProjectsId
  );
  let content = (
    <SelectedProject
      project={slecteProjec}
      onDeletion={handleDeletion}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedProjects.tasks}
    />
  );
  if (selectedProjects.selectedProjectsId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (selectedProjects.selectedProjectsId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projects={selectedProjects.projects}
        onSelectProject={handleSelectProject}
      />
      {/* <NewProject /> */}
      {content}
    </main>
  );
}

export default App;
