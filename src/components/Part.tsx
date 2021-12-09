import React from "react";
import CoursePart from "../type"

type partType<T> = {
    part: T;
}
const Part = (props:partType<CoursePart>) => {
    let partToRender;    
    switch (props.part.type) {
        case "normal":
            partToRender = <p><p className="name">{props.part.name} {props.part.exerciseCount}</p>{props.part.description}</p>;  
            break;
        case "groupProject":
            partToRender = <p><p className="name">{props.part.name} {props.part.exerciseCount}</p>Project exercises {props.part.groupProjectCount}</p>    
            break;
        case "special":                       
            partToRender = <p><p className="name">{props.part.name} {props.part.exerciseCount}</p>{props.part.description}<br />Required skills: {props.part.requirements.map((txt, i) => <span key={i}>{txt}, </span>)}</p>  
            break;
        case "submission":
            partToRender = <p><p className="name">{props.part.name} {props.part.exerciseCount}</p>{props.part.description}<br />Submit to {props.part.exerciseSubmissionLink}</p>  
            break;        
        default:
            partToRender = <p>Undefined part</p>                  
    }
    return partToRender
}

export default Part;