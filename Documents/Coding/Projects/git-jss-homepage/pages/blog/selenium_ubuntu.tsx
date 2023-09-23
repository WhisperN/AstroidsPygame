import NavBar from '@/pages/component/navBar';
import BlogLink from "@/pages/component/blog/blogLink";
import BlogSidebar from "@/pages/component/blog/blogSidebar";

// ideas, some text some description nice floating svg in the background.
// @ts-ignore
export default function Selenium_ubuntu(){
    return(
        <main className="h-screen max-w-100">
            <NavBar/>
            <div className={"h-80 mt-16 flex"}>
                <BlogSidebar></BlogSidebar>
                <div className={"basis-3/4 flex flex-col text-black dark:text-white max-w-2xl"}>
                    <h2 className={"dark:text-white font-serif text-xl font-medium italic pt-8"}>Library booking bot on an Ubuntu server</h2>
                    <h4 className={"dark:text-white font-serif text-l pt-4"}>Using Selenium and Chromedriver bound to a Cronjob.</h4>
                    <br />
                    <p className={"text-lg"}>

                        Imagine no more annoying button clicking for repetitve tasks. Sounds like a dream for every Software engineer. <br/>
                        Last month I came across such a task for a library booking system. The library I study is usually fully booked in a matter of an hour. In the following article I will cover the rough concept and approach I used to set up my environment. I will not go in depth (like what commands I used and what the precise steps were) because it would go beyond the scope of this article. Nevertheless, you can find the Python code on my <a href={"https://github.com/WhisperN/UZHBookingBot"} className={"dark:text-cyan-300 text-cyan-500"}>Github</a>. <br/><br/>

                        <span className={"font-serif text-xl font-medium italic pt-4"}>Selenium with Chromedriver</span><br/>
                        Booking a seat in the library is done through a website. A direct API approach is not possible. This means I need a script for web automation. Since I have already experience with Python and I have a setup running on my machine. So, I opted for Python 3.9 instead of Java. With a quick installation of the Selenium library through pip and Chromedriver on my machine I went straight for the code. Using the Selenium library (And reading the docs ;) ) you can write a web bot in a matter of minutes.<br/>
                        I added a log file to store potential error messages with a time stamp.<br/><br/>

                        Now I have my finished web bot. But I do not want my laptop to be running all night. This is a task for an Ubuntu server (CLI only). <br/><br/>

                        <span className={"font-serif text-xl font-medium italic pt-4"}>Migrating to an Ubuntu server</span><br/>
                        A friend of mine gave me some server space. Using Tailscale I connected via SSH to the machine. Next I set up Python 3.9, the package manager pip and installed selenium. Now I only need the Chromedriver. There is a popular method to install the automated web browser and that is with Snap. But as soon as you log out of an Ubuntu machine your private home directory is encrypted. Making it impossible to run automated jobs. Staying logged in permanently is not an option. That means: manually install Chromedriver into the usr/local directory. I will not provide a tutorial on how to do this, but you should find it through google. Before the next step it is essential to store the python files in a usr directory. For my part it was usr/local. <br/><br/>

                        <span className={"font-serif text-xl font-medium italic pt-4"}>Setting up a Cron Job</span><br/>
                        I want the job to repeat itself every morning at 6 am. For this I create a new crontab entry where I run a shell script that triggers the python job. Because things can always go wrong, I created a log file for the Cronjob that is filled from the same shell script.

                        And done! Simple booking system that makes my life easier.

                    </p>
                </div>
            </div>
        </main>
    )
}