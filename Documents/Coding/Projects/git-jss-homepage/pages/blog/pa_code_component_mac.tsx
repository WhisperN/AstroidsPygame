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
                    <h2 className={"dark:text-white font-serif text-xl font-medium italic pt-8"}>Create and build a code component on Mac!</h2>
                    <h4 className={"dark:text-white font-serif text-l pt-4"}>Using Selenium and Chromedriver bound to a Cronjob.</h4>
                    <br />
                    <div className={"text-lg"}>
                        <span className={"font-serif text-xl font-medium italic pt-4"}>Prerequisites</span><br/>
                        <ul>
                            <li>• An IDE (preferably VS code)</li>
                            <li>• Node.js (18 or higher) and the package manager npm</li>
                            <li>• Quick sneak peek in to the <a href={"https://learn.microsoft.com/en-us/power-apps/developer/component-framework/create-custom-controls-using-pcf"} className={"dark:text-cyan-300 text-cyan-500"}>MS docs</a></li>
                        </ul><br/>
                        When developing on a different platform than Windows we are missing the super useful Microsoft Power Platform CLI. But there is a solution for this on Mac.  It is called CLI for Microsoft 365 and you can find on Github (https://github.com/pnp/cli-microsoft365 ). The package manager can be installed with <br/><br/>
                        `npm install -g @pnp/cli-microsoft365`<br/><br/>
                        Now you have almost the same command available as in Windows to create a new code component.<br/><br/>
                        `m365 pa pcf init –namespace (specify your namespace here) --name (Name of the code component) --template (component type)`<br/><br/>

                        From here on you can follow the same procedure as in the docs.
                        <ul>
                            <li>• Create a new folder `mkdir (folder name)`</li>
                            <li>• Go to the new folder `cd (folder name)`</li>
                            <li>• `m365 pa pcf init –namespace (specify your namespace here) --name (Name of the code component) --template (component type)`</li>
                        </ul><br/>
                        Now we must deviate from the docs for this to work. We need typescript at version 4. And have to specifically install it. Run: <br/><br/>
                        `npm install typescript@4 --save-dev`<br/><br/>
                        We miss only one thing now. This will give us an error that ESLint is not set up properly.<br/><br/>
                        `npm init @eslint/config`<br/><br/>
                        Personal recommendation: When asked for “How would you like to use ESLint?”, select the first option that says you want to use it only for syntax.
                        Before starting you should create a tsconfig.json in the same directory as your index.ts file (new folder name/component name). You should specify the index.ts file in here.<br/>
                        My file looks like this:<br/><br/>

                        Now you can run `npm start` and it should run without any issues.<br/><br/>
                        I hope this helps. Happy coding.


                    </div>
                </div>
            </div>
        </main>
    )
}