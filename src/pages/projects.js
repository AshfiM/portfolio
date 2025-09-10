
import Project from "../components/project/project";
import styles from "./projects.module.css"

const Projects = () => {
    const projects_list = [
        {"title":"Student Management System",
        "desc":["Developed a React-based web application to streamline student administration tasks"]},

        {"title":"Realtime Weather Monitoring System",
        "desc":["Created a Linux application in C to monitor real-time weather data from a free API.", 
                "Features real-time alerts for extreme weather conditions."]}
                    ]

    const projects = projects_list.map((project, i) => {
        return (<div key={i}> <Project title={project.title} desc={project.desc} /></div>)
    })
    return (
        <div >
            {projects}
        </div>
    )
}

export default Projects;