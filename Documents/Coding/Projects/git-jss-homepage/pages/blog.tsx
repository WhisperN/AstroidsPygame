import NavBar from '@/pages/component/navBar';
import BlogLinkList from "@/pages/component/blog/blogLinkList";
import BlogEntryList from "@/pages/component/blog/blogEntryList";

// ideas, some text some description nice floating svg in the background.
export default function Blog() {
    return(
        <main className="h-screen max-w-100">
            <NavBar/>
            <div className={"h-80 mt-16 flex"}>
                <div className={"basis-1/4 flex flex-col ml-4"}>
                    <h2 className={"dark:text-white font-serif text-xl font-medium italic"}>Posts</h2>
                    <BlogLinkList></BlogLinkList>
                </div>
                <div className={"basis-3/4 flex flex-row flex-wrap"}>
                    <BlogEntryList></BlogEntryList>
                </div>
            </div>
        </main>
    )
}