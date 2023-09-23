import { useEffect, useState } from "react";
export default function DmSwitch() {
    const [prefCol, setPrefCol] = useState(false);

    useEffect(() => {
        let body = document.getElementById("body");
        let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if(mediaQuery) {
            setPrefCol(true);
            let html = document.getElementsByTagName("html")[0];
            html.classList.add("dark");
            // if(body !== null) {body.classList.add("dark");}
        } else {
            setPrefCol(false);
            // if(body !== null) {body.classList.add("light");}
        }
    });

    let prefColName = "light";

    if(prefCol){
        prefColName = "dark";
    } else {
        prefColName = "light";
    }
    const toggleBody = () => {
        let html = document.getElementsByTagName("html")[0];
        if(prefColName === "light") {
            html.classList.toggle("dark");
            prefColName = "dark";
        } else {
            html.classList.toggle("dark");
            prefColName = "light";
        }
    }


    return (
        <>
            <br></br>
            <label className="switch">
                <input type="checkbox" onClick={toggleBody}/>
                    <span className="slider"></span>
            </label>
        </>
    )
}