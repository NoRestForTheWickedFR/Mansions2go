import { useNavigate } from 'react-router-dom';
import mansionImage from '../assets/mansions/mansion3.jpg'; 
import Secret from './Secret'; 

function StartPage() {
    const navigate = useNavigate();

    const handleExploreProperties = () => {
        navigate("/properties");
    };

    return (
        <div className="relative min-h-screen bg-gray-900 text-white">
            <div className="absolute inset-0">
                <img
                    src={mansionImage} 
                    alt="Luxury Mansion"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>
            
            <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 pointer-events-none">Welcome to Luxury Mansions</h1>
                <p className="text-lg md:text-xl mb-8 pointer-events-none">Your dream home awaits. Discover the finest properties.</p>
                <button
                    onClick={handleExploreProperties}
                    className="bg-yellow-500 text-black py-3 px-6 rounded-md shadow-lg hover:bg-yellow-400 transition duration-300">
                    Explore Properties
                </button>

                {/* Easter Egg implemented */}
                <div className="mt-8">
                    <Secret />
                </div>
            </div>
        </div>
    );
}

export default StartPage;
