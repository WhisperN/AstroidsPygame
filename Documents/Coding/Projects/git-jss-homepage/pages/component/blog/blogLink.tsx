// @ts-ignore
export default function BlogLink({name, link}) {
    let l = "blog/"+link;
    return (
        <a className={"dark:text-slate-300 dark:hover:text-white text-slate-600 italic font-extralight border-l-2 pl-3 ml-3 hover:border-slate-400 hover:text-black"} href={l}>{name}</a>
    )
}