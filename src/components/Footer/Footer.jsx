import React, {useEffect    } from "react";
import "./Footer.css";
import video2 from "../../Assets/video3.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {

    useEffect(() => {
        Aos.init({ duration: 2000})
    }, [])
    return ( 
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} muted autoPlay loop type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        {/* Thẻ <small> xác định văn bản nhỏ hơn (như bản quyền và các nhận xét bên lề khác). */}
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND <FiSend className="icon" />  
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon" /> Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                        Thế gian hàng tỷ người, số người lẻ hay chẵn, chẵn hay lẻ, 
                        tôi không biết rõ. Chỉ biết khi người ta kết thành đôi thành cặp, 
                        chỉ còn tôi với anh bị bỏ lại, thế mà vẫn chẳng thuộc về nhau Khác 
                        nào hai chiếc giày cuối cùng vốn tưởng là một đôi nhưng lại không phải?
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className="icon" />
                            <AiFillYoutube className="icon" />
                            <AiFillInstagram className="icon" />
                            <FaTripadvisor className="icon" />

                        </div>
                    </div>

                    <div data-aos="fade-up" className="footerLinks grid">
                        {/* 1 */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>
                        {/* 2 */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                HostelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                TripAdvisor
                            </li>
                        </div>
                        {/* 3 */}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                HaNoi
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                HoChiMinh
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                HoaBinh
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                NinhBinh
                            </li>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED - QUANGANH</small>
                    </div>
                </div>
            </div>

        </section>
     );
}

export default Footer;