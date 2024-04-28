import Navbar from "@/app/components/NavBar";
import Image from "next/image";

const Blog = () => {
    return (
        <>
            <Navbar/>
            <div>
                <div className="container mx-auto p-4 pb-0">
                    <h1 className="text-3xl">EngeLayer Latest Updates - Blog</h1>
                    <p className="text-lg pt-1 text-gray-400">
                        Learn about EngeLayer’s technology, research, and latest developments.
                    </p>
                </div>

                <div className="flex justify-between pl-36 pr-36 pt-16">
                    <div className="rounded-lg border-gray-400 border-2 justify-between text-xl overflow-hidden">
                        <Image className="content-center flex justify-center min-w-full border-b-2 border-gray-400"
                               src="/static/blog.svg"
                               alt=""
                               width={400} height={300}/>
                        <p className="text-center pt-2">EngeLayer: Your Onchain Footprint -</p>
                        <p className="text-center">Smart & Simple Onchain Analytics</p>

                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">You can explore your onchain data in a
                            way</p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">that suits you best with EngeLayer’s </p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">simple and accessible analytics.</p>
                    </div>

                    <div className="rounded-lg border-gray-400 border-2 justify-between text-xl overflow-hidden">
                        <Image className="content-center flex justify-center min-w-full border-b-2 border-gray-400"
                               src="/static/blog.svg"
                               alt=""
                               width={400} height={300}/>

                        <p className="text-center pt-2">EngeLayer: Summary - Quick dApp</p>
                        <p className="text-center">Overview</p>

                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">You can explore your onchain data in a
                            way</p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">that suits you best with EngeLayer’s </p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">simple and accessible analytics.</p>
                    </div>


                    <div className="rounded-lg border-gray-400 border-2 justify-between text-xl overflow-hidden">
                        <Image className="content-center flex justify-center min-w-full border-b-2 border-gray-400"
                               src="/static/blog.svg"
                               alt=""
                               width={400} height={300}/>
                        <p className="text-center pt-2">EngeLayer: Introduction - What’s </p>
                        <p className="text-center">EngeLayer</p>

                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">You can explore your onchain data in a
                            way</p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">that suits you best with EngeLayer’s </p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">simple and accessible analytics.</p>
                    </div>
                </div>

                <div className="container mx-auto p-4 pb-0 pt-16">
                    <h1 className="text-3xl">Ethereum Ecosystem Latest Updates - Blog</h1>
                    <p className="text-lg pt-1 text-gray-400">
                        Learn more about the latest Ethereum Ecosystem’s news, technologies, conferences and community
                        meetups.
                    </p>
                </div>

                <div className="flex justify-between pl-36 pr-36 pt-16">
                    <div className="rounded-lg border-gray-400 border-2 justify-between text-xl overflow-hidden">
                        <Image className="content-center flex justify-center min-w-full border-b-2 border-gray-400"
                               src="/static/blog.svg"
                               alt=""
                               width={400} height={300}/>

                        <p className="text-center pt-2 pl-2 pr-2">V0RTEx: Scroll’s First Online</p>
                        <p className="text-center pl-2 pr-2">Hackathon</p>

                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">The Hackathon will run from April 24th
                            until </p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">April 29th and will be hosted on
                            DoraHacks</p>
                    </div>

                    <div className="rounded-lg border-gray-400 border-2 justify-between text-xl overflow-hidden">
                        <Image className="content-center flex justify-center min-w-full border-b-2 border-gray-400"
                               src="/static/blog.svg"
                               alt=""
                               width={400} height={300}/>
                        <p className="text-center pt-2">Ethereum: DappConn - Berlin,</p>
                        <p className="text-center">Germany</p>

                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">A 3-day Developer Conference for </p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">Ethereum Infrastructure that would bring</p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">together over 900 builders together.</p>
                    </div>


                    <div className="rounded-lg border-gray-400 border-2 justify-between text-xl overflow-hidden">
                        <Image className="content-center flex justify-center min-w-full border-b-2 border-gray-400"
                               src="/static/blog.svg"
                               alt=""
                               width={400} height={300}/>
                        <p className="text-center pt-2">Linea Builder Launchpad - Your</p>
                        <p className="text-center">Web3 Developer Journey</p>

                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">The easiest way to dive in your Web3</p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">Developer Journey within the vibrant Linea</p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">Ecosystem.</p>
                    </div>
                </div>


                <div className="flex justify-between ml-36 mr-36 pt-16">
                    <div className="rounded-lg border-gray-400 border-2 justify-between text-xl overflow-hidden">
                        <Image className="content-center flex justify-center min-w-full border-b-2 border-gray-400"
                               src="/static/blog.svg"
                               alt=""
                               width={400} height={300}/>

                        <p className="text-center pt-2 pl-2 pr-2">Introducing Scroll Sessions: Session</p>
                        <p className="text-center pl-2 pr-2">Zero</p>


                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">Scroll Sessions -  loyalty program to reward </p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">the community for engagement in the </p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">Scroll Ecosystem.</p>
                    </div>

                    <div className="rounded-lg border-gray-400 border-2 justify-between text-xl overflow-hidden">
                        <Image className="content-center flex justify-center min-w-full border-b-2 border-gray-400"
                               src="/static/blog.svg"
                               alt=""
                               width={400} height={300}/>

                        <p className="text-center pt-2">Staking Opportunities Post-BNB </p>
                        <p className="text-center">Chain Fusion</p>

                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">Look at the next phase for BNB Chain with</p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">staking capabilities with the integration of</p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">LSDFi and MEV.</p>
                    </div>


                    <div className="rounded-lg border-gray-400 border-2 justify-between text-xl overflow-hidden">
                        <Image className="content-center flex justify-center min-w-full border-b-2 border-gray-400"
                               src="/static/blog.svg"
                               alt=""
                               width={400} height={300}/>

                        <p className="text-center pt-2">How Base is driving down fees </p>
                        <p className="text-center">across the board with EIP-4844</p>

                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">Initial step towards danksharding to deliver</p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">scalability improvements to reduce data</p>
                        <p className="text-center text-lg text-gray-400 pl-2 pr-2">availability costs by another 10-100x.</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Blog;
