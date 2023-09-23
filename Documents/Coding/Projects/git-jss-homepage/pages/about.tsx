import NavBar from "@/pages/component/navBar";
import Image from "next/image";

// ideas, some text some description nice floating svg in the background.
export default function About() {
    return(
        <main className="h-screen max-w-100">
            <NavBar/>
            <div className={"dark:text-white h-80 mt-40"}>
                <Image className={"block md-min:hidden mx-auto"} src={"/JSS-Logo.png"} alt={"Picture of me :)"} width={"300"} height={"300"}/>
                <div className={"flex flex-row max-w-2xl mx-auto px-10"}>
                    <Image className={"block md-max:hidden"} src={"/JSS-Logo.png"} alt={"Picture of me :)"} width={"300"} height={"300"}/>
                    <div className={"flex flex-col content-center"}>
                        <h3 className={"font-serif text-xl font-medium pb-8"}>A developer with passion</h3>
                        <p className={"font-serif text-justify"}>I love the everyday challenges. The endless new things to learn. Setting foot on unknown ground.
                            On the lookout for new challenges. Creative solutions on the daily basis.</p>
                    </div>
                </div>
                <div className={"h-screen flex flex-col justify-center max-w-2xl mx-auto px-10"}>
                    <div className={"flex flex-col content-center"}>
                        <h3 className={"font-serif text-4xl font-medium pb-8 mx-auto"}>Skillset</h3>
                        <p className={"font-serif text-justify"}>I am a student at University of Zurich. Since 4 years I found passion in coding. I have experience in web development such as React Js. I have worked with Microsoft solutions for company internal automation processes. I am familiar with the following languages: JS/TS, Java, PHP, Python and Power Shell. If you want to find out more about previous projects feel free to look around my blog. </p>
                    </div>
                </div>
            </div>
        </main>
    )
}