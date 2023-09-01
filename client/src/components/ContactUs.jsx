function ContactUs() {
    return (
        <div className="bg-section-bg-color w-full h-auto flex flex-col items-center justify-center py-16">
            <h1 className="text-center text-5xl font-bold  py-4 mb-8">Get in Touch</h1>
            <div className="flex flex-wrap items-center justify-center">
                <div className="flex-auto px-8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13994.321013131503!2d77.1185871!3d28.7320877!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013938e13ba5%3A0xbacd4c8f320fa4ff!2sSHAHEED%20SUKHDEV%20COLLEGE%20OF%20BUSINESS%20STUDIES!5e0!3m2!1sen!2sin!4v1693499283218!5m2!1sen!2sin" width="500" height="250" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-2xl"></iframe>
                </div>
                <div className="flex-auto">
                    <div className="p-8">
                        <h2 className="text-4xl font-semibold mb-4">Head Office</h2>
                        <p className="text-xl text-p-color mb-2">Shaheed Sukhdev College of Business Studies, <br /> Rohini, New Delhi</p>
                        <hr style={{ borderColor: "lightgray" }} />
                        <p className="text-lg text-p-color ">Phone <span className="text-secondary-color text-base">+91 1234567890</span></p>
                        <p className="text-lg text-p-color">Email <span className="text-secondary-color text-base">info@company.com</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
