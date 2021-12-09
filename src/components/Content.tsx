import React from 'react';
import Part from './Part';
import CoursePart from "../type"
type contentProps<T> = {
    content: T[]
}
const Content = (props:contentProps<CoursePart>): JSX.Element => {
    const contentPs = props.content.map((course, i)=>{
        return <Part key={i} part={course} />
    })
    return <div>{contentPs}</div>
}

export default Content;