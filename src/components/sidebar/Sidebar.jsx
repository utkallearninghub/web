import React, { useState } from 'react';
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { RiComputerLine } from "react-icons/ri";
import { RiUserCommunityLine } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { MdOutlineContactPhone } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { MdOutlinePolicy } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

function Sidebar({ show, setShow }) {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState("batches");

    const handleNavigation = (path, itemName) => {
        navigate(path);
        setActiveItem(itemName);
        setShow(false); // Close the sidebar
    };

    return (
        <div className={show ? "sidenav active" : "sidenav"}>
            <div className='sidebar-items'>
                <div
                    onClick={() => handleNavigation("/", "batches")}
                    className={activeItem == "batches" ? "sidebarItems activeItem" : "sidebarItems"}>
                    <RiComputerLine className={activeItem == "batches" ? "sidebar-icon activeItem" : "sidebar-icon"} />
                    <div className={activeItem == "batches" ? "sidebarItemText activeItem" : "sidebarItemText"}>Batches</div>
                </div>
                <div onClick={() => handleNavigation("/community", "community")}
                    className={activeItem == "community" ? "sidebarItems activeItem" : "sidebarItems"}>
                    <RiUserCommunityLine className={activeItem == "community" ? "sidebar-icon activeItem" : "sidebar-icon"} />
                    <div className={activeItem == "community" ? "sidebarItemText activeItem" : "sidebarItemText"}>Community</div>
                </div>
                <div onClick={() => handleNavigation("/test-series", "test-series")}
                    className={activeItem == "test-series" ? "sidebarItems activeItem" : "sidebarItems"}>
                    <GoChecklist className={activeItem == "test-series" ? "sidebar-icon activeItem" : "sidebar-icon"} />
                    <div className={activeItem == "test-series" ? "sidebarItemText activeItem" : "sidebarItemText"}>Test Series</div>
                </div>
                <div onClick={() => handleNavigation("/store", "store")}
                    className={activeItem == "store" ? "sidebarItems activeItem" : "sidebarItems"}>
                    <BsCart3 className={activeItem == "store" ? "sidebar-icon activeItem" : "sidebar-icon"} />
                    <div className={activeItem == "store" ? "sidebarItemText activeItem" : "sidebarItemText"}>Our Store</div>
                </div>
                <div onClick={() => handleNavigation("/category", "category")}
                    className={activeItem == "category" ? "sidebarItems activeItem" : "sidebarItems"}>
                    <BiCategory className={activeItem == "category" ? "sidebar-icon activeItem" : "sidebar-icon"} />
                    <div className={activeItem == "category" ? "sidebarItemText activeItem" : "sidebarItemText"}>Category</div>
                </div>

                <div className='border'></div>

                <div onClick={() => handleNavigation("/category", "category")}
                    className={activeItem == "category" ? "sidebarItems activeItem" : "sidebarItems"}>
                    <MdOutlineContactPhone className={activeItem == "category" ? "sidebar-icon activeItem" : "sidebar-icon"} />
                    <div className={activeItem == "category" ? "sidebarItemText activeItem" : "sidebarItemText"}>Contact us</div>
                </div>

                <div onClick={() => handleNavigation("/category", "category")}
                    className={activeItem == "category" ? "sidebarItems activeItem" : "sidebarItems"}>
                    <GoQuestion className={activeItem == "category" ? "sidebar-icon activeItem" : "sidebar-icon"} />
                    <div className={activeItem == "category" ? "sidebarItemText activeItem" : "sidebarItemText"}>About us</div>
                </div>

                <div onClick={() => handleNavigation("/category", "category")}
                    className={activeItem == "category" ? "sidebarItems activeItem" : "sidebarItems"}>
                    <MdOutlinePolicy className={activeItem == "category" ? "sidebar-icon activeItem" : "sidebar-icon"} />
                    <div className={activeItem == "category" ? "sidebarItemText activeItem" : "sidebarItemText"}>Policy</div>
                </div>

                <div className='sidebar-policy-box'>
                    <div className='sidebar-policy'>Privacy policy</div>
                    <div className='sidebar-space'></div>
                    <div className='sidebar-policy'>Refund policy</div>
                    <div className='sidebar-space'></div>
                    <div className='sidebar-policy'>Terms & Conditions</div>
                    
                </div>

                <div onClick={() => handleNavigation("/category", "category")}
                    className={activeItem == "category" ? "sidebarItems activeItem" : "sidebarItems"}>
                    <IoLogOutOutline className={activeItem == "category" ? "sidebar-icon activeItem" : "sidebar-icon"} />
                    <div className={activeItem == "category" ? "sidebarItemText activeItem" : "sidebarItemText"}>Logout</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar