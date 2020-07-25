import React from 'react'
import {Container, Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import './style.css'
import { Link } from 'react-router-dom'
import GoogleLogout from 'react-google-login'

function Navigator() {

    const logoutResponse = (response) => {
        // setProfile(null)
        console.log(response)
    }

    return(
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <Link to="/">
                    Books101
                    </Link>
                    </Navbar.Brand>
                <Navbar.Brand href="/search">Search</Navbar.Brand>
                <Navbar.Brand href="/saved">Saved</Navbar.Brand>
                <GoogleLogout
                        clientId="970195238301-f6vdi1usburijct7fgp2l1k8nbh29ve0.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={logoutResponse}
                    >
                </GoogleLogout >

            </Navbar>
        </Container>
    )

}

export default Navigator
