import BlogDataJson from "@/pages/blog/posts.json";
import BlogEntry from "@/pages/component/blog/blogEntry";
export default function BlogEntryList(){
    return (
        <>
            {BlogDataJson.map((e) => (
                // eslint-disable-next-line react/jsx-key
                <BlogEntry key={e.id} title={e.name} desc={e.description} upn={e.upnRoot}></BlogEntry>
            ))}
        </>
    )
}