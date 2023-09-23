import Image from "next/image";
import NavLink from "@/pages/component/navLink";
import Settings from '@/pages/component/settings';
import Search from "@/pages/component/search";
import {Input} from "postcss";
import DmSwitch from "@/pages/component/dmSwitch";
import NavBurger from "@/pages/component/NavBurger";

export default function NavBar() {
    return(
            <div className="">
                <ul className="flex flex-row items-center">
                    <li className={"basis-1/4"}><Image src={"/JSS-Logo.png"} width={"90"} height={"90"} alt={"Company logo"}/></li>
                    <div className={"md-min:hidden dark:text-white font-serif text-xl italic basis-3/4 flex flex-row-reverse"}>
                        <NavBurger></NavBurger>
                    </div>
                    <div className={"md-max:hidden dark:text-white font-serif text-xl italic basis-2/4 flex flex-row justify-around"}>
                        <NavLink text={"Home"} link={"/"}/>
                        <NavLink text={"About Me"} link={"/about"}/>
                        <NavLink text={"Blog"} link={"/blog"}/>
                    </div>
                    <li className={"md-max:hidden basis-1/4 pr-10"}>
                        <div className={"flex flex-row justify-end items-center hover:grey"}>
                            <Search></Search>
                            <DmSwitch></DmSwitch>
                        </div>
                        <div className={"absolute el-hide"} id={"drop-down-search"}>
                            <input placeholder={"search"}></input>
                            <button className={"rounded-full text-amber-300 bg-slate-50"}>Search</button>
                        </div>
                    </li>
                </ul>
            </div>
    )
}