const testimonialsData = [
    {
        name: 'Lalo Salamanca',
        comment: 'Finding the right luxury property has never been easier. The selection and service here are top-notch. You won’t find better options anywhere else.',
        photo: '../src/assets/Kunden/LaloSalamanca.jpg', 
    },
    {
        name: 'Gustavo Fring',
        comment: 'Exceptional service and an exclusive selection of high-end properties. This is the go-to place for anyone serious about investing in luxury real estate.',
        photo: '../src/assets/Kunden/GustavoFring.jpg',
    },
    {
        name: 'Saul Goodman',
        comment: 'If you’re looking for a luxury mansion, this is where you need to be! They have the best listings, and their team is always ready to help, no matter what you need.',
        photo: '../src/assets/Kunden/SaulGoodman.jpg',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-16 bg-gray-800">
            <h2 className="text-3xl md:text-5xl text-center text-yellow-500 mb-8">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
                        <img
                            src={testimonial.photo}
                            alt={`Client ${index + 1}`}
                            className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-gray-300"
                        />
                        <h3 className="text-lg font-semibold text-center">{testimonial.name}</h3>
                        <p className="text-gray-800 text-center">{testimonial.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
