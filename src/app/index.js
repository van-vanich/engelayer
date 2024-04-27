import Navbar from '../app/components/NavBar';

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-4xl">Home Page</h1>
            </div>
        </div>
    );
}
