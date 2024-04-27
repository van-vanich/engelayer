import NavBar from "@/app/components/NavBar";
import Image from "next/image";

const Page = () => {
  return (
      <>
          <NavBar/>

          <div className="page font-custom">
              <div className="container mx-auto p-4 flex justify-between align-middle">
                  <div className="page__text flex justify-center flex-col">
                      <h1 className="text-4xl">TRACKING MADE EASILY.</h1>
                      <p className="text-lg mt-4">
                          EngeLayer is tracking app in Scroll Mainnet
                      </p>
                  </div>
                  <div className="page__img">
                      <Image src="/static/homeImg.png" className=""/>
                  </div>
              </div>
          </div>
      </>
  );
};

export default Page;
