import Navbar from "@/app/components/NavBar";

const Blog = () => {
    return (
        <>
            <Navbar/>
            <div>
                <div className="container mx-auto p-4">
                    <h1 className="text-4xl">Docs Page</h1>
                    <p className="text-lg mt-4">
                        This is the Docs page content. You can add your documentation here.
                    </p>
                </div>
            </div>
        </>

    );
};

export default Blog;
