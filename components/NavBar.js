import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./NavBar.module.css"



function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <Link href={"/"}>
                <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a>
            </Link>
            <Link href='/about'>
                <a className={[styles.link, router.pathname === "/about" ? styles.active : ""].join(" ")}>about</a>
            </Link>
        </nav>
    )
}

export default NavBar