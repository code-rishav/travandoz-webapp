

const Footer = () => {
    return (
        <div className="bottom">
            <footer className="mx-0 p-8 bg-white bottom-0 w-full">
                <div className="mx-0  w-full max-w-screen-xl p-0 py-0 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <span className="pl-10 text-4xl font-semibold whitespace-nowrap text-dark-color">Travandoz</span>

                        </div>
                        <div className="grid grid-cols-4 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h1 className="mb-6 text-xl font-semibold text-primary-color uppercase ">Resources</h1>
                                <ul className="text-gray-500 dark:text-gray-400 font-sm">
                                    <li className="mb-2">
                                        <a href="/" className="text-secondary-color hover:text-link-hover-color">Home</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/" className="text-secondary-color hover:text-link-hover-color">How it works</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/" className="text-secondary-color hover:text-link-hover-color">FAQs</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/" className="text-secondary-color hover:text-link-hover-color">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h1 className="mb-6 text-xl font-semibold text-primary-color uppercase ">Follow us</h1>
                                <ul className="text-gray-500 dark:text-gray-400 font-sm">
                                    <li className="mb-2">
                                        <a href="/" className="text-secondary-color hover:text-link-hover-color ">Github</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/" className="text-secondary-color hover:text-link-hover-color ">Discord</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/" className="text-secondary-color hover:text-link-hover-color ">Instagram</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/" className="text-secondary-color hover:text-link-hover-color ">Facebook</a>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <h1 className="mb-6 text-xl font-semibold text-primary-color uppercase">Legal</h1>
                                <ul className="text-gray-500 dark:text-gray-400 font-sm">
                                    <li className="mb-2">
                                        <a href="#" className="text-secondary-color hover:text-link-hover-color">Privacy Policy</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#" className="text-secondary-color hover:text-link-hover-color">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </footer>
            <div className="bg-secondary-color w-full h-2">
            </div>


        </div>
    )
}

export default Footer
