import NavBar from "@/app/components/NavBar";
import Image from "next/image";
import SocialLinkBar from "@/app/components/SocialLinkBar";
import {Space_Grotesk} from "next/dist/compiled/@next/font/dist/google";

const Page = () => {
  return (
      <body>
          <NavBar/>

          <div className="page font-custom">
              <div className="container mx-auto p-10 flex justify-between">
                  <div className="page__text flex justify-center flex-col">
                      <h1 className="text-4xl">TRACKING MADE EASILY.</h1>
                      <p className="text-lg mt-4">
                          EngeLayer is tracking app in Scroll Mainnet
                      </p>
                  </div>
                  <div className="page__img flex justify-end">
                      <Image src="/static/homeImg.png" className="" width={100} height={100} />
                  </div>
              </div>
          </div>

          <SocialLinkBar/>
      </body>
  );
};

export default Page;
