import Navbar from "@/app/components/NavBar";

const Docs = () => {
    return (
    <>
        <Navbar/>
        <div>
            <div className="container mx-auto p-16">
                <h1 className="text-3xl pl-2">● What is EngeLayer</h1>
                <p className="text-lg text-gray-400 pt-2">EngeLayer is an innovative decentralized application
                    (dApp) built
                    to deliver onchain analytics specifically for Ethereum Virtual Machine (EVM) Chains. </p>
                <p className="text-lg text-gray-400">EngeLayer empowers users with a suite of advanced features
                    designed to provide insights into their digital assets and activities.</p>

                <p className="text-lg text-gray-400 pt-2">EngeLayer offers users the capability to effortlessly
                    monitor
                    their onchain balances across multiple EVM chains. With real-time updates and intuitive </p>
                <p className="text-lg text-gray-400">visualization tools, users can stay informed about their
                    cryptocurrency holdings at all times.</p>

                <p className="text-lg text-gray-400 pt-2">Dive deep into your transaction history with EngeLayer's
                    seamless interface. Gain valuable insights into past transactions, including sender and
                    receiver </p>
                <p className="text-lg text-gray-400">information, transaction amounts, and more. EngeLayer provides
                    a
                    comprehensive overview of your blockchain activity, ensuring transparency and </p>
                <p className="text-lg text-gray-400">accountability.</p>

                <p className="text-lg text-gray-400 pt-2">EngeLayer goes beyond traditional cryptocurrency tracking
                    by
                    offering support for Non-Fungible Tokens (NFTs). Easily manage your NFT holdings, view </p>
                <p className="text-lg text-gray-400">detailed information about individual tokens, and track their
                    value over time.</p>

                <p className="text-lg text-gray-400 pt-2">EngeLayer seamlessly integrates with popular EVM-based
                    decentralized applications (dApps) such as AAVE, Compound Finance, and Lido Finance. Track
                    your </p>
                <p className="text-lg text-gray-400">interactions with these platforms directly from EngeLayer's
                    interface, allowing for a comprehensive overview of your lendings, borrows or staked assets.</p>

                <p className="text-lg text-gray-400 pt-2">Welcome to the future of Web3 Analytics – Welcome to
                    EngeLayer.</p>

            </div>

            <div className="container mx-auto pl-16 pt-1">
                <h1 className="text-3xl pl-2">● FAQ</h1>
                <h2 className="text-xl">How can I access my onchain balances?</h2>

                <p className="text-lg text-gray-400 pt-2">Users can access their onchain balances by just entering
                    their wallet address in Dashboard. Once wallet address is entered, users can view their
                    balances </p>
                <p className="text-lg text-gray-400">across various EVM chains.</p>

                <h2 className="text-xl pt-4">Can I track my transaction history on EngeLayer?</h2>
                <p className="text-lg text-gray-400 pt-2">Absolutely! EngeLayer provides users with a detailed
                    transaction history, allowing them to explore and analyze their onchain activities. Users can
                    view </p>
                <p className="text-lg text-gray-400">transaction details such as sender, receiver, amount, and much
                    more.</p>

                <h2 className="text-xl pt-4">Can I track the value of my Non-Fungible Token holdings on
                    EngeLayer?</h2>

                <p className="text-lg text-gray-400 pt-2">Yes, you can! EngeLayer empowers users with comprehensive
                    insights into their Non-Fungible Token holdings, offering detailed information and
                    estimated </p>
                <p className="text-lg text-gray-400">values for each digital asset.</p>

            </div>

            <div className="container mx-auto pl-16 pt-16">
                <h1 className="text-3xl pl-2">● Developers</h1>
                <p className="text-lg text-gray-400 pt-2">EngeLayer welcomes developers to integrate their
                    decentralized applications (dApps) to our Infrastructure for real-time onchain Analytics by
                    providing </p>
                <p className="text-lg text-gray-400">users with valuable insights and analytics directly through our
                    user-friendly interface.</p>

                <p className="text-lg text-gray-400 pt-2">Integrating your dApp with EngeLayer enables users to
                    seamlessly track their interactions and contributions within your ecosystem. By leveraging
                    our </p>
                <p className="text-lg text-gray-400">analytics platform, developers can increase the visibility of
                    their dApp and attract new users interested in monitoring their onchain activities.</p>

                <p className="text-lg text-gray-400 pt-2">Users can access analytics for multiple dApps within a
                    single platform, eliminating the need to navigate between different interfaces and
                    applications.</p>

                <p className="text-lg text-gray-400 pt-2">EngeLayer values collaborative partnerships with
                    developers, fostering a community-driven approach to blockchain analytics. We are open to
                    feedback, </p>
                <p className="text-lg text-gray-400">suggestions, and feature requests from developers, ensuring
                    that our platform meets the evolving needs of the blockchain ecosystem.</p>
            </div>
        </div>
    </>

    );
};

export default Docs;
