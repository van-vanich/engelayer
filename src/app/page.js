import Navbar from '../app/components/NavBar';

const Page = () => {
    return (
        <div className="font-custom">
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-4xl">Home, my Home</h1>
                <p className="text-lg mt-4">
                    This is the iiiiii page content. You can add your documentation here.
                </p>
            </div>
        </div>
    );
};

export default Page;