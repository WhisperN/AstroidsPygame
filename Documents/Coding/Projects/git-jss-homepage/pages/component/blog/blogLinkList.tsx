import BlogDataJson from "@/pages/blog/posts.json";
import BlogLink from "./blogLink";
// @ts-ignore
export default function BlogLinkList() {
    // @ts-ignore
    return (
        <>
            {BlogDataJson.map((e) => (
                // eslint-disable-next-line react/jsx-key
                <BlogLink key={e.id} name={e.name} link={e.upnRoot}></BlogLink>
            ))}
        </>
    )
}