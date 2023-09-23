//import { Link } from 'react'
// @ts-ignore
export default function NavLink({ text,link }) {
    const cls = "grey";
    return (
        <li><a className={cls} href={link}>{text}</a></li>
    )
}