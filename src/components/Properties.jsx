//This can be added for the properties, stopped right here because I figured it is enough.
//The idea is to list 30 properties after you press at the header properties.
//This is not finished and should be continued.
//I did not remove it because that is my way to cope with the fact that I wrote that for no reason.


import mansion1 from '../assets/mansions/mansion1.jpg';
import mansion2 from '../assets/mansions/mansion2.jpg';
import mansion3 from '../assets/mansions/mansion3.jpg';
import mansion4 from '../assets/mansions/mansion4.jpg';
import mansion5 from '../assets/mansions/mansion5.jpg';
import mansion6 from '../assets/mansions/mansion6.jpg';
import mansion7 from '../assets/mansions/mansion7.jpg';
import mansion8 from '../assets/mansions/mansion8.jpg';
import mansion9 from '../assets/mansions/mansion9.jpg';
import mansion10 from '../assets/mansions/mansion10.jpg';
import mansion11 from '../assets/mansions/mansion11.jpg';
import mansion12 from '../assets/mansions/mansion12.jpg';
import mansion13 from '../assets/mansions/mansion13.jpg';
import mansion14 from '../assets/mansions/mansion14.jpg';
import mansion15 from '../assets/mansions/mansion15.jpg';
import mansion16 from '../assets/mansions/mansion16.jpg';
import mansion17 from '../assets/mansions/mansion17.jpg';
import mansion18 from '../assets/mansions/mansion18.jpg';
import mansion19 from '../assets/mansions/mansion19.jpg';
import mansion20 from '../assets/mansions/mansion20.jpg';
import mansion21 from '../assets/mansions/mansion21.jpg';
import mansion22 from '../assets/mansions/mansion22.jpg';
import mansion23 from '../assets/mansions/mansion23.jpg';
import mansion24 from '../assets/mansions/mansion24.jpg';
import mansion25 from '../assets/mansions/mansion25.jpg';
import mansion26 from '../assets/mansions/mansion26.jpg';
import mansion27 from '../assets/mansions/mansion27.jpg';
import mansion28 from '../assets/mansions/mansion28.jpg';
import mansion29 from '../assets/mansions/mansion29.jpg';
import mansion30 from '../assets/mansions/mansion30.jpg';

const propertiesData = [
    { id: 1, image: mansion1, title: "Luxurious Beverly Hills Estate", price: "$45,500,000" },
    { id: 2, image: mansion2, title: "Elegant Seattle Mansion", price: "$7,500,000" },
    { id: 3, image: mansion3, title: "Stunning Albuquerque Luxury Home", price: "$9,999,999" },
    { id: 4, image: mansion4, title: "Exquisite San Francisco Residence", price: "$12,000,000" },
    { id: 5, image: mansion5, title: "Charming New York Penthouse", price: "$8,500,000" },
    { id: 6, image: mansion6, title: "Modern Miami Beach House", price: "$15,000,000" },
    { id: 7, image: mansion7, title: "Historic Boston Manor", price: "$6,500,000" },
    { id: 8, image: mansion8, title: "Grand Washington D.C. Estate", price: "$25,000,000" },
    { id: 9, image: mansion9, title: "Stately Chicago Villa", price: "$10,500,000" },
    { id: 10, image: mansion10, title: "Luxurious Las Vegas Home", price: "$20,000,000" },
    { id: 11, image: mansion11, title: "Elegant Seattle Mansion", price: "$7,500,000" },
    { id: 12, image: mansion12, title: "Stunning Atlanta Luxury Condo", price: "$4,500,000" },
    { id: 13, image: mansion13, title: "Contemporary Austin Retreat", price: "$3,800,000" },
    { id: 14, image: mansion14, title: "Secluded Hawaii Paradise", price: "$10,000,000" },
    { id: 15, image: mansion15, title: "Stylish Portland Loft", price: "$2,700,000" },
    { id: 16, image: mansion16, title: "Elegant Nashville Home", price: "$5,200,000" },
    { id: 17, image: mansion17, title: "Classic Philadelphia Brownstone", price: "$3,500,000" },
    { id: 18, image: mansion18, title: "Luxury San Diego Seaside Villa", price: "$9,800,000" },
    { id: 19, image: mansion19, title: "Sleek Dallas High-Rise", price: "$6,800,000" },
    { id: 20, image: mansion20, title: "Serene Denver Mountain Lodge", price: "$7,000,000" },
    { id: 21, image: mansion21, title: "Chic Miami Oceanfront Property", price: "$14,500,000" },
    { id: 22, image: mansion22, title: "Beautiful Salt Lake City Residence", price: "$3,200,000" },
    { id: 23, image: mansion23, title: "Luxe Detroit Estate", price: "$5,500,000" },
    { id: 24, image: mansion24, title: "Grand Orlando Villa", price: "$8,000,000" },
    { id: 25, image: mansion25, title: "Stylish Phoenix Home", price: "$3,500,000" },
    { id: 26, image: mansion26, title: "Charming Tampa Bungalow", price: "$2,200,000" },
    { id: 27, image: mansion27, title: "Cozy Minneapolis Cabin", price: "$1,800,000" },
    { id: 28, image: mansion28, title: "Impressive Indianapolis Mansion", price: "$4,000,000" },
    { id: 29, image: mansion29, title: "Majestic Baltimore Residence", price: "$6,000,000" },
    { id: 30, image: mansion30, title: "Charming St. Louis Home", price: "$2,500,000" },
];

function Properties() {
    return (
        <div className="py-16 bg-gray-800">
            <h2 className="text-3xl md:text-5xl text-center text-yellow-500 mb-8">Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {propertiesData.map(property => (
                    <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <img src={property.image} alt={`Property ${property.id}`} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">{property.title}</h3>
                            <p className="text-gray-700">{property.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Properties;
