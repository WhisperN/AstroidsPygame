// @ts-ignore
import NavLink from "@/pages/component/navLink";
import Search from "@/pages/component/search";
import DmSwitch from "@/pages/component/dmSwitch";

export default function NavBurger() {
    return (
        <>
            <input className={"hidden"} id={"toggle"} type={"checkbox"}></input>

            <label htmlFor={"toggle"} className={"hamburger"}>
                <div className={"top-bun"}></div>
                <div className={"meat"}></div>
                <div className={"bottom-bun"}></div>
            </label>

            <div className={"nav"}>
                <div className={"nav-wrapper dark:bg-black bg-white"}>
                    <nav>
                        <NavLink text={"Home"} link={"/"}/>
                        <NavLink text={"About Me"} link={"/about"}/>
                        <NavLink text={"Blog"} link={"/blog"}/>
                        <div className={"flex flex-row justify-end items-center hover:grey"}>
                            <DmSwitch></DmSwitch>
                        </div>
                    </nav>
                </div>
            </div>
        </>
)}