import Layout from '@/components/layout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Success = () => {
    const [ambition, setAmbition] = useState('');

    useEffect(() => {
        const aiAmbitionString = localStorage.getItem('userAmbition');
        if (aiAmbitionString) {
            setAmbition(aiAmbitionString);
            // localStorage.removeItem('ambition');
        }
    }, []);

    return (
        <Layout>
            <div className="container-fluid m-0 p-0 background_success">
                <div className="home_slider_container p-0 m-0 position-relative">
                    <div>
                        <div className="home_slider_image_container min-height d-flex flex-column justify-content-center align-items-center image1 p-2 pt-lg-5 m-0 ">

                            <div className="d-flex flex-column justify-content-center align-items-center text-center bg-glass" style={{ maxWidth: "800px" }} >
                                <h2 className="text-xl font-bold font-36 mt-5">Thank you</h2>
                                <p className="text-lg font-bold-2 font-20 mb-3" style={{ fontSize: "22px !important", fontWeight: "600 !important", maxWidth: "600px" }}>
                                    Your dreams are closer than you think&mdash;start making them a reality today with Seylan Bank!
                                </p>
                                <Image
                                    src={'/correct.png'}
                                    className="correct-img mb-5"
                                    alt=""
                                    width={107}
                                    height={107}
                                ></Image>

                                {/* <Link href="/" className='d-flex justify-content-center align-items-center'> */}
                                {/* <button className="submit-btn-success my-3 px-3" type="submit">
                                   Next {ambition}
                                    </button> */}


                                {/* </Link> */}

                               {/* <p className="text-white font-18 mb-3">
                                    Do you like to see your path to becoming a {ambition}?
                                </p> */}
                            </div>
                            <Link href="/" className='text-center d-flex justify-content-center align-items-center mt-5 px-3'>
                                <button className="submit-btn " type="submit">
                                    <p className="mb-0">Next</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="celebrate-section text-center mt-5" style={{ maxWidth: "900px", margin: "3rem auto" }}>
                <h2 className="font-bold text-2xl mb-4">Let&apos;s Celebrate</h2>
                <p className="text-lg mb-4">The world&apos;s TeensDay with Seylan Teens debit card offers</p>
                <div className="offers-grid p-3">
                    <div className="offer-item">
                        <div>
                            <h3 className="text-xl"><b>20%</b> Off</h3>
                            <p>Off on Total Bill - <b>14th MAR - 15th APR</b></p>
                        </div>
                        <Image src="/seylan/offers/street82-logo.png" alt="Street 82" width={100} height={100} />
                    </div>
                    <div className="offer-item">
                        <div>
                            <h3 className="text-xl"><b>10%</b> Off</h3>
                            <p>Off on Total Bill - <b>26th MARCH</b></p>
                        </div>
                        <Image src="/seylan/offers/arpico-logo.png" alt="Arpico" width={100} height={100} />
                    </div>
                    <div className="offer-item">
                        <div>
                            <h3 className="text-xl"><b>25%</b> Off</h3>
                            <p>Teens card - <b>Until 30th APRIL</b></p>
                        </div>
                        <Image src="/seylan/offers/promate-logo.png" alt="ProMate" width={100} height={100} />
                    </div>
                    <div className="offer-item">
                        <div>
                            <h3 className="text-xl"><b>20%</b> Off</h3>
                            <p>Off on Total Bill - <b>Until 30th APRIL</b></p>
                        </div>
                        <Image src="/seylan/offers/atlas-logo.png" alt="Atlas" width={100} height={100} />
                    </div>
                    <div className="offer-item">
                        <div>
                            <h3 className="text-xl"><b>20%</b> Off</h3>
                            <p>Off on Total Bill - <b>MARCH 15th, 22nd &amp; 29th</b></p>
                        </div>
                        <Image src="/seylan/offers/glomark-logo.png" alt="Glomark" width={100} height={100} />
                    </div>
                    <div className="offer-item">
                        <div>
                            <h3 className="text-xl"><b>15%</b> Off</h3>
                            <p>Off on Total Bill - <b>March 24th &amp; 25th</b></p>
                        </div>
                        <Image src="/seylan/offers/edge-logo.png" alt="Edge" width={100} height={100} />
                    </div>
                    <div className="offer-item">
                        <div>
                            <h3 className="text-xl"><b>20%</b> Off</h3>
                            <p>Burley&apos;s Dinomore, Isso, &amp; more - <b>Until 31st MARCH</b></p>
                        </div>
                        <Image src="/seylan/offers/mintpay-logo.png" alt="Dinomore" width={100} height={100} />
                    </div>
                    <div className="offer-item">
                        <div>
                            <h3 className="text-xl"><b>15%</b> Off</h3>
                            <p>CashBack Mintpay &quot;pay Now&quot; At Burger King - <b>Until 31st MARCH</b></p>
                        </div>
                        <Image src="/seylan/offers/mintpay-logo.png" alt="Mintpay" width={100} height={100} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Success;
