import React , { useEffect} from "react";
import "./Main.css";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import  img1 from "../../Assets/img1.jpg";
import  img2  from "../../Assets/img2.jpg";
import  img3  from "../../Assets/img3.jpg";
import  img4  from "../../Assets/img4.jpg";
import  img5  from "../../Assets/img5.jpg";
import  img6  from "../../Assets/img6.jpg";
import  img7  from "../../Assets/img7.jpg";
import  img8  from "../../Assets/img8.jpg";
import  img9  from "../../Assets/img9.jpg";
import  img10  from "../../Assets/img10.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
    {
        id:1,
        imgSrc :img1,
        desTitle : "View of Stone Mountain",
        location : "Pixabay",
        grade : "CULTURAL RELAX",
        fees : "$1000",
        description : "Stone Mountain A beautiful view of stone mountain with trees as the surrounding. stone mountain georgia stock pictures, royalty-free photos & images."
    },
    {
        id:2,
        imgSrc :img2,
        desTitle : "Person Standing on Paved Road",
        location : "Hong Kong",
        grade : "RELAX MAXX",
        fees : "$5000",
        description : "Hồng Kông, tên chính thức là Đặc khu hành chính Hồng Kông thuộc Cộng hoà Nhân dân Trung Hoa, là một vùng đô thị đặc biệt, cũng như một trong hai đặc"
    },
    {
        id:3,
        imgSrc :img3,
        desTitle : "View of Stone Mountain",
        location : "Bắc Giang",
        grade : "RELAX xxxx",
        fees : "$10",
        description : "Stone Mountain A beautiful view of stone mountain with trees as the surrounding. stone mountain georgia stock pictures, royalty-free photos & images."
    },
    {
        id:4,
        imgSrc :img4,
        desTitle : "View of Stone Mountain",
        location : "Hòa Bình",
        grade : "RELAX FFFFFF",
        fees : "$100",
        description : "Stone Mountain A beautiful view of stone mountain with trees as the surrounding. stone mountain georgia stock pictures, royalty-free photos & images."
    },
    {
        id:5,
        imgSrc :img5,
        desTitle : "View of Stone Mountain",
        location : "Điện biên",
        grade : "RELAX AAAAAA",
        fees : "$2000",
        description : "Stone Mountain A beautiful view of stone mountain with trees as the surrounding. stone mountain georgia stock pictures, royalty-free photos & images."
    },
    {
        id:6,
        imgSrc :img6,
        desTitle : "View of Stone Mountain",
        location : "Ninh Bình",
        grade : "RELAX CCCCCCCC",
        fees : "$1000",
        description : "Stone Mountain A beautiful view of stone mountain with trees as the surrounding. stone mountain georgia stock pictures, royalty-free photos & images."
    },
    {
        id:7,
        imgSrc :img7,
        desTitle : "View of Stone Mountain",
        location : "Hải Phòng",
        grade : "RELAX BBBBB",
        fees : "$8000",
        description : "Stone Mountain A beautiful view of stone mountain with trees as the surrounding. stone mountain georgia stock pictures, royalty-free photos & images."
    },
    {
        id:8,
        imgSrc :img8,
        desTitle : "View of Stone Mountain",
        location : "Quy Nhơn",
        grade : "RELAX GGGGGG",
        fees : "$4000",
        description : "Stone Mountain A beautiful view of stone mountain with trees as the surrounding. stone mountain georgia stock pictures, royalty-free photos & images."
    },
    {
        id:9,
        imgSrc :img9,
        desTitle : "View of Stone Mountain",
        location : "HCM",
        grade : "RELAX RRRRRR",
        fees : "$4000",
        description : "Stone Mountain A beautiful view of stone mountain with trees as the surrounding. stone mountain georgia stock pictures, royalty-free photos & images."
    },
    {
        id:10,
        imgSrc :img10,
        desTitle : "View of Stone Mountain",
        location : "Hà Nội",
        grade : "RELAX SSSSSS",
        fees : "$100000",
        description : "Stone Mountain A beautiful view of stone mountain with trees as the surrounding. stone mountain georgia stock pictures, royalty-free photos & images."
    }
]

function Main() {

    useEffect(() => {
        Aos.init({ duration: 2000})
    }, [])
    return ( 
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc , desTitle , location , grade , fees , description}) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={desTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="desTitle">
                                        {desTitle}
                                    </h4>

                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>
                                                {grade} <small>+1</small>
                                            </span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="decs">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
        </section>
     );
}

export default Main;