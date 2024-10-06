

function PropertiesSection() {
    return (
        <div className="py-16 bg-gray-800">
            <h2 className="text-3xl md:text-5xl text-center text-yellow-500 mb-8">Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img src="../src/assets/mansions/mansion1.jpg" alt="Property 1" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold">Luxurious Beverly Hills Estate</h3>
                        <p className="text-gray-700">$45,500,000</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img src="../src/assets/mansions/mansion11.jpg" alt="Property 1" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold">Elegant Seattle Mansion</h3>
                        <p className="text-gray-700">$2,500,000</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img src="../src/assets/mansions/mansion6.jpg" alt="Property 1" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold">Stunning Albuquerque Luxury Home</h3>
                        <p className="text-gray-700">$2,500,000</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertiesSection;
