function ContactSection() {
    return (
        <div id="contact" className="py-16 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-5xl text-yellow-500 mb-4">Contact Us Right Now</h2>
                    <p className="text-lg mb-6">
                        Have questions or want to schedule a viewing? We're here to help you find your dream home.
                    </p>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                            rows="4"
                            required
                        ></textarea>
                        <button className="bg-yellow-500 text-gray-900 p-3 rounded-lg hover:bg-yellow-400 transition">
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4">
                    <div className="p-4">
                        <div className="relative w-full max-w-[500px] md:max-w-[600px] md:h-[450px]" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48372.89013608286!2d-74.01913881280957!3d40.733299867436315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sde!4v1728238843480!5m2!1sen!2sde"
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
