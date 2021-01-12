import React from 'react';
const project = (props) => {
    return (
        <div className="project">
            <h1 className="project-title"><a className="project-title-ref" href="">{props.title}</a></h1>
            <div className="project-desc">{props.desc}</div>
            <div className="project-short-details">{props.details}</div>
        </div>
    )
}

const project_details = (props) => {
    return (
        <div className="project-details">
            
        </div>
    )
}

export { project as Project, project_details as ProjectDetails };