// @ts-ignore
export default function Card({title, text, link, svg}) {
    return (
        <div className={"w-60 h-60 p-4 my-5 mx-5 rounded-md bg-slate-200 text-black"}>
            <div>
                <h1 className={"font-serif text-xl font-medium italic"}>{title}</h1>
            </div>
            <div className={"flex flex-row mt-4"}>
                <p>{text}</p>
            </div>
            <div className={"mt-10"}>
                <a href={link} className={"hover:text-slate-400"}>Read more!</a>
            </div>
        </div>
    )
}