import NavBar from "@/app/components/NavBar";
import Image from "next/image";
import SocialLinkBar from "@/app/components/SocialLinkBar";

const Page = () => {
  return (
      <body>
      <NavBar/>

      <div className="page">
          <div className="container mx-auto p-10 pb-2 flex justify-between">
              <div className="page__text flex justify-center flex-col">
                  <h1 className="text-4xl">TRACKING MADE EASILY.</h1>
              </div>
              <div className="page__img flex justify-end">
                  <Image src="/static/homeLogo.svg" className="" width={100} height={100}/>
              </div>
          </div>

          <div>
              <h2 className="text-center text-4xl">We’re providing real-time analytics for </h2>
          </div>

          <div className="flex pl-36 pr-36 pt-12 items-center justify-between space-x-4">
              <Image src="/static/aave.svg" alt="" width={244} height={70}></Image>
              <Image src="/static/compound.svg" alt="" width={244} height={70}></Image>
              <Image src="/static/lido.svg" alt="" width={244} height={70}></Image>
          </div>


      </div>

      <div>
          <Image className="w-full max-w-full pt-8" src="/static/presentation.png" alt="" width={1440} height={620}/>
      </div>
      <SocialLinkBar/>
      </body>
  );
};

export default Page;
