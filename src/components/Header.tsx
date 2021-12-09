import React from "react"
type headerProps = {
    courseName: string;
}
const Header = (props:headerProps): JSX.Element => {
    return (<h1>
        {props.courseName}
    </h1>)
}

export default Header;