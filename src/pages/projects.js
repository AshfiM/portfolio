import styles from "./projects.module.css"


const Projects = () => {
    const projects_list = [
        {"title":"Url Shortener",
        "desc":"Jdbc template, Url encoding, Dockerizing, Profiling, AWS RDS database integrating, Caching, Serializing,\
        AWS Redis OSS cache integrating, BeanStalk Deploying, Thymeleaf Integrating Jdbc template, Url encoding, Dockerizing, Profiling, AWS RDS database integrating, Caching, Serializing, \
AWS Redis OSS cache integrating, BeanStalk Deploying, Thymeleaf Integrating",
        "image":"/images/urlShortener.png",
        "git_url":"https://github.com/AshfiM/url-shortner.git"
        },
        {"title":"E-Commerce REST API ",
        "desc":"Jwt system, Roll based access, Pagination, Table Joining",
        "image":"/images/eCommerce.png",
        "git_url":"https://github.com/AshfiM/destinations-app.git"
        },
        {"title":"Destinations & Reviews CRUD API ",
        "desc":"Implementing One to Many relationship, Custom Repository Method by name, Delete reviews on deleting\
destination, Global Exception Handling",
        "image":"/images/destination.png",
        "git_url":" https://github.com/AshfiM/destinations-app.git/Users/ashfi/Downloads/destination.png"
        },
         {"title":"JWT Authentication API",
        "desc":"Spring Security, Password encoding using BcryptPasswordEncoder, Configuration component, Security Chain\
Filter, Header based Jwt, Cookie Based Jwt System",
        "image":"/images/jwtAuth.png",
        "git_url":"https://github.com/AshfiM/spring-boot-authentication-api.git"
        },
            {"title":"To Do List MVC App ",
        "desc":"Spring Boot, Spring MVC , Spring Data JPA, React - useState, fetch func, useEffect, conditional rendering.",
        "image":"/images/todolist.png",
        "git_url":"https://github.com/AshfiM/to-do-list-spring-boot-api.git"
        },
        
    ]
 
    return (
        <div className={styles.projectsCon}>
            {projects_list.map((project, id) => (
                <div className={styles.project} key={id}>
                    <div className={styles.projTitle}>
                        <h4>{project.title}</h4>
                    </div>
                    <hr></hr>
                    <div className={styles.imgCon}>
                        <img src={project.image}  className={styles.projImg}></img>
                    </div>
                    <hr></hr>
                    <div className={styles.projDesCon}>
                        <p>
                            {project.desc}
                        </p>
    
                        <a href={project.git_url} target="__blank">Open Repository</a>
                    
                    </div>

                </div>) )}
        </div>
    )
}

export default Projects;