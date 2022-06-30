import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import styles from "./../../styles/front-layout/style.module.css";
import Link from "next/link";
import {useEffect, useState} from "react";
import {currentUser, signOut} from "../../functions/auth.function";
import {useRouter} from "next/router";

export default function NavbarFront({ children }) {
    const router = useRouter();
    const [user, setUser] = useState({});

    useEffect(async () => {
        try{
            const auth = await currentUser();
            setUser(auth.data);
        }catch (e) {

        }
    }, []);

    return (
        <>
            <Navbar bg="dark" expand="lg" className={styles.navbarFront}>
                <Container>
                    <Link href="/">
                        <Navbar.Brand href="/">GiftLove</Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/">
                            <Nav.Link href="#home">Home</Nav.Link>
                            </Link>
                        </Nav>
                        <Nav className="justify-content-end" >
                            {!user.id && (
                                <>
                                <Link href="/login">
                                    <Nav.Link href="/login">Login</Nav.Link>
                                </Link>
                                <Link href="/register">
                                 <Nav.Link href="/register">Register</Nav.Link>
                                </Link>
                                </>
                            )}
                            {user && user.id && (
                                <>
                                <NavDropdown title="User" id="basic-nav-dropdown">
                                    <NavDropdown.Item
                                    onClick={(event) => {
                                        event.preventDefault();
                                        localStorage.removeItem('token');
                                        router.push("/login");
                                    }}
                                    href="#logout">Keluar</NavDropdown.Item>
                                </NavDropdown>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}