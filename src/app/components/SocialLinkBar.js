// src/components/Navbar.js
import Link from 'next/link';
import '@/index.css';
import Image from 'next/image'


const SocialLinkBar = () => {
    let imgSrc = 'logo.svg';
    return (
        <div className="max-w-full container pt-32 pb-8">

            <div className="container mx-auto flex justify-between items-center text-white space-x-2">
                <div>
                    <Image src="/static/logo.svg" className="" width={178} height={50}/>
                    <p className="text-center text-gray-400 pl-1 pt-4">© 2024 Starecore, Inc. All Rights reserved.</p>
                </div>

                <div className="">
                    <p className="text-2xl">Socials</p>
                    <div className="flex items-center justify-center space-x-4">
                        <div className="text-left">
                            <p className="text-left text-gray-400">X / Twitter</p>
                            <p className="text-left text-gray-400">Github</p>
                        </div>
                        <div>
                            <p className="text-left text-gray-400">Medium</p>
                            <p className="text-left text-gray-400">Discord</p>
                        </div>
                    </div>
                </div>

                <div className="text-left">
                    <p className="text-2xl">Company</p>
                    <div className="flex items-start justify-start space-x-4">
                        <div className="text-left">
                            <p className="text-left text-gray-400">Blog</p>
                            <p className="text-left text-gray-400">Docs</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <p className="text-2xl">Legal</p>
                    <div className="flex items-center justify-start space-x-4">
                        <div className="text-left">
                            <p className="text-left left-0 text-gray-400">Privacy Policy</p>
                            <p className="text-left text-gray-400">Terms of Use</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center">
                    <Image src="/static/covalent.svg" alt="" width={276} height={90}/>
                </div>
            </div>
        </div>
    );
};


export default SocialLinkBar;
