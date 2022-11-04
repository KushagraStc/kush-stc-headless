const CustomFotter = () => {
    return (
        <>

            <footer
                role="contentinfo"
                className="w-full  p-6 md:p-8 lg:p-12 border-none  min-h-[25rem] items-start  py-8 px-6 md:px-8 lg:px-12 border-b  bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden">

                {/* footer top */}
                <section className="footer_top flex justify-center items-center w-full h-72		 ">
                    <div className="footer_top_left w-1/2 flex flex-col items-center justify-center  ">
                        <h3>GET EXCLUSIVE OFFERS & UPDATES</h3>
                        <p>BE THE FIRST ONE TO KNOW ABOUT A NEW COLLECTION LAUNCH, A BIG-FAT SALE OR SURPRISES. SIGN UP TO KNOW EVERYTHING ABOUT FEMELLA. IT’S SERIOUSLY ALL THE THINGS YOU DON’T WANT TO MISS OUT ON.</p>
                    </div>
                    <div className="footer_top_right w-1/2 flex items-center justify-start ">
                        <input type='email' placeholder="ENTER YOUR EMAIL" />
                        <button >SUBSCRIBE</button>
                    </div>
                </section>
                <hr />

                {/* footer middle */}
                <div className="footer_middle">
                    <section className="footer_middle-top flex ">

                        <div className="footer_middle_top_right justify-center">
                            <div className="footer_middle_top_right_div w-1/4">
                                <div className="w-full m-auto">
                                    <p className="font-bold w-1/2 m-auto">STC HEADLESS</p>
                                </div>
                                <div className="footer_middle_top_right_div_top">
                                    <p>Making clothes that are simple, effortless and based on you, your style and your needs. </p>
                                </div>
                            </div>
                            <div className="footer_middle_top_right_div">
                                <h2 className="font-bold">QUICK LINKS</h2>
                                <ul>
                                    <li>NEW IN</li>
                                    <li>BEST SELLERS</li>
                                    <li>DRESSES</li>
                                    <li>GIFTS CARDS</li>
                                    <li>BLOG</li>
                                    <li>SIZE GUIDE</li>
                                    <li>HAND MIST SPRAY</li>
                                </ul>

                            </div>
                            <div className="footer_middle_top_right_div">
                                <h2 className="font-bold">HELP</h2>
                                <ul>
                                    <li>Track order</li>
                                    <li>Request a Return/Exchange</li>
                                    <li>Shipping and Return Policy</li>
                                    <li>Terms and Conditions</li>
                                    <li>Privacy Policy</li>
                                    <li>FAQ</li>
                                </ul>

                            </div>
                            <div className="footer_middle_top_right_div">
                                <h2 className="font-bold">CONNECT </h2>
                                <ul>
                                    <li>About us</li>
                                    <li>Contact us</li>
                                    <li>Instagram</li>
                                    <li>Facebook</li>
                                </ul>

                            </div>


                        </div>

                        <div className="footer_middle_top_left w-1/4">
                            <div className="footer_contact">
                                <p>CUSTOMER CARE</p>
                                <ul>
                                    <l1 className="footer_li text-xs flex flex-col">
                                        <p>
                                            +91 8178812345
                                        </p>
                                        <p>
                                            Mon-Fri 10:00am to 6:00pm (IST)
                                        </p>
                                    </l1>
                                    <l1 className="footer_li">
                                        <p className="font-bold">stc@stc.com</p>


                                    </l1>

                                </ul>

                            </div>
                        </div>
                    </section>
                    <hr />

                    {/* footer bottom  */}
                    <div className="flex justify-center  self-end pt-8  md:col-span-2 lg:col-span-2">
                        © 2022, STC HEADLESS
                    </div>
                </div>

            </footer>
        </>

    )
};
export default CustomFotter