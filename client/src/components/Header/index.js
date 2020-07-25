import React from 'react'
import { Jumbotron} from 'react-bootstrap'

function Header(props) {

    return (
        <Jumbotron className="mt-4 paper">
 
            <h1 align = "center" className="pt-5">{props.title}</h1>
            <h4 align = "center" className="pb-5">{props.subtitle}</h4>

        </Jumbotron>

    )

}

export default Header