import Image from "next/image";
// @ts-ignore
export default function BlogEntry({title, desc, upn}){
const link = "blog/"+upn;
    return (
        <div className={"max-w-xs pr-8 pb-8"}>
            <h2 className={"dark:text-white font-serif text-xl font-medium italic"}>{title}</h2>
            <Image src={"/blog/entry.webp"} width={"200"} height={"200"} alt={"There should be an image here... hmm..."}/>
            <p className={"dark:text-slate-300 text-slate-600 italic font-extralight"}>{desc}</p>
            <a href={link}>
                <button className={"rounded-full bg-white text-black hover:text-slate-400 p-2 mt-4"}>Read more!</button>
            </a>
        </div>
    )
}