import { useState } from "react";
import pw_logo from '../../assets/images/pw_logo.png';
import { IoMdMenu } from "react-icons/io";
import "./DashboardNavbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import Avatar from '../../assets/images/avatar.png';
import { IoSearch } from "react-icons/io5";

function DashboardNavbar({ showSidebar, setShowSidebar }) {

  return (
    <nav className="dnav-main">

      <div className="dnav-left-content">

        <IoMdMenu className="dnav-menu" onClick={() => setShowSidebar(!showSidebar)} />
        <div className="dnav-image-contener">
          <img
            src={pw_logo}
            alt="Description"
            className="dnav-logo-image"
          />
        </div>

        <div className="dnav-company-text">
          Utkal Learning
        </div>

        <div className="dnav-category-box">
          <div className="dnav-category-text">School Preparation</div>
          <FaChevronRight className="dnav-category-icon" />
        </div>

      </div>

      <div className="dnav-profile-box">
        <div className="dnav-search-box">
          <IoSearch className="search-icon"/>

          <input
            className="dnav-search"
            placeholder="Search For Batch"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        </div>


        <div className="dnav-profile-name">Hii, Debasish</div>
        <img
          src={Avatar}
          alt="Description"
          className="dnav-logo-image"
        />
      </div>

    </nav>
  )
}

export default DashboardNavbar