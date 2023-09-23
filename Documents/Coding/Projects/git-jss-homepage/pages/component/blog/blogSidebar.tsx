// @ts-ignore
import BlogLink from "@/pages/component/blog/blogLink";
import BlogDataJson from "@/pages/blog/posts.json";

export default function BlogSidebar() {
    return (
        <div className={"basis-1/4 flex flex-col ml-4"}>
            <h2 className={"dark:text-white font-serif text-xl font-medium italic"}>Posts</h2>
            {BlogDataJson.map((e) => (
                // eslint-disable-next-line react/jsx-key
                <BlogLink key={e.id} name={e.name} link={e.upnA}></BlogLink>
            ))}
        </div>
    )
}