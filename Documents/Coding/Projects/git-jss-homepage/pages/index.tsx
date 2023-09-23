import { Inter } from 'next/font/google'
import Card from "@/pages/component/card";
import NavBar from "@/pages/component/navBar";
import WelcomeMsg from "@/pages/component/WelcomeMsg";

const inter = Inter({ subsets: ['latin'] })
// fonts could be used...
export default function Home() {
  return (
    <main className="max-w-100">
      <NavBar/>
      <div className={"h-screen pt-40 block"}>
          <div className={"flex flex-row justify-center max-w-100"}>
            <WelcomeMsg></WelcomeMsg>
          </div>
          <div className={"w-48 h-48 mt-32 ml-32"}>
              <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                      <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                          <stop id="stop1" stopColor="rgba(76, 90, 235, 1)" offset="0%"></stop>
                          <stop id="stop2" stopColor="rgba(160, 106, 247, 1)" offset="100%"></stop>
                      </linearGradient>
                  </defs>
                  <path fill="none" d="M29.6,-28.8C36.7,-22.6,39.4,-11.3,39.2,-0.2C39,10.9,35.8,21.8,28.8,29C21.8,36.2,10.9,39.6,1.9,37.8C-7.2,35.9,-14.4,28.7,-22.1,21.5C-29.8,14.4,-38.1,7.2,-37.1,1C-36.2,-5.2,-25.9,-10.5,-18.2,-16.6C-10.5,-22.8,-5.2,-29.8,3,-32.9C11.3,-35.9,22.6,-34.9,29.6,-28.8Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="1" stroke="url(#sw-gradient)"></path>
              </svg>
          </div>
      </div>
      <div className={"h-screen"}>
          <div className={"flex flex-row justify-between"}>
              <div className={"h-48 w-48"}>
                  <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <defs>
                          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                              <stop id="stop1" stopColor="rgba(76, 90, 235, 1)" offset="0%"></stop>
                              <stop id="stop2" stopColor="rgba(160, 106, 247, 1)" offset="100%"></stop>
                          </linearGradient>
                      </defs>
                      <path fill="none" d="M18.4,-18.2C24,-12.7,28.9,-6.4,27.8,-1.1C26.7,4.2,19.6,8.4,14,13.9C8.4,19.5,4.2,26.4,-3.1,29.6C-10.4,32.7,-20.9,32,-26.5,26.4C-32.2,20.9,-33,10.4,-32.9,0.1C-32.8,-10.2,-31.6,-20.4,-26,-25.8C-20.4,-31.3,-10.2,-32.1,-1.9,-30.2C6.4,-28.3,12.7,-23.7,18.4,-18.2Z" width={"100px"} height={"100px"} transform="translate(50 50)" strokeWidth="1" stroke="url(#sw-gradient)"></path>
                  </svg>
              </div>
              <div className={"h-48 w-48"}>
                  <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <defs>
                          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                              <stop id="stop1" stopColor="rgba(76, 90, 235, 1)" offset="0%"></stop>
                              <stop id="stop2" stopColor="rgba(160, 106, 247, 1)" offset="100%"></stop>
                          </linearGradient>
                      </defs>
                      <path fill="none" d="M12.5,-14.2C16.9,-8.1,21.7,-4.1,24,2.3C26.3,8.7,26.2,17.4,21.8,24.5C17.4,31.6,8.7,37.2,0.2,37C-8.2,36.7,-16.5,30.7,-19.9,23.6C-23.3,16.5,-21.9,8.2,-21.6,0.2C-21.4,-7.8,-22.4,-15.6,-19,-21.6C-15.6,-27.7,-7.8,-32,-1.9,-30.1C4.1,-28.3,8.1,-20.2,12.5,-14.2Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="1" stroke="url(#sw-gradient)"></path>
                  </svg>
              </div>
          </div>
          <div className={"flex flex-row flex-wrap justify-around"}>
              <Card title={"Shopware Plugin"} text={"Learn more about my shopware plugins."} link={"/blog"} svg={"power-plug"}/>
              <Card title={"Projects"} text={"Things that I have done before."} link={"/blog"} svg={"project"}/>
              <Card title={"Blog"} text={"Read more about current thing that I am doing."} link={"/blog"} svg={"blog"}/>
          </div>
      </div>
    </main>
  )
}
