import React, { useState } from "react";
import "./BatchDetails.css";

import { IoMdArrowBack } from "react-icons/io";
import batch_1 from '../../assets/images/batch_1.png';
import { IoCalendarOutline } from "react-icons/io5";
import Classes from "../../components/classes/Classes";

function BatchDetails() {
  const [activeItem, setActiveItem] = useState("batch-details");
  const fullText = `
    In this EPFO Batch, top educators will guide you through all the essential concepts and exam strategies
    to crack the recruitment exam. Whether you are just starting your preparation or are already deep into your studies, 
    this batch is designed to help you master quantitative aptitude, reasoning, English, general awareness,
    and domain-specific topics such as industrial regulations and labour laws. The comprehensive 3 month program 
    features over 13 courses taught by experienced educators, ensuring you have all the tools needed for both 
    the preliminary and advanced stages of the exam. 

    BATCH FEATURES: Interactive Live Classes: Learn from the comfort of your home with top educators who specialize in 
    EPFO AO/EO and APFC exam preparation. Unlimited Course Access: Get unrestricted access to all courses across 
    multiple subjects, including both core skills and domain-specific knowledge. Core Skill Modules: Detailed sessions 
    on Quantitative Aptitude, Logical Reasoning, and General English. Focused Domain Training: In-depth coverage of 
    EPFO-specific topics, labour laws, and social security schemes to strengthen your conceptual clarity. 
    Regular Live Test Series: Participate in test series designed specifically for EPFO AO/EO and APFC, simulating 
    real exam conditions to track your progress. Instant Doubt Resolution: Use the Raise a Hand feature during live 
    sessions to get your queries clarified promptly by experts. Classes are conducted 5-6 days a week to ensure 
    complete syllabus coverage, making it easier to stay on track with your preparation. This batch is your one-stop 
    solution for EPFO AO/EO and APFC exam success building a solid foundation, boosting your confidence, and helping 
    you achieve your dream role in the public sector.
  `;

  const [showMore, setShowMore] = useState(false);

  const previewText = fullText.split(" ").slice(0, 100).join(" ") + "...";

  const handleItemCick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className='bd-main'>

      <div className='bd-toolbar-box'>
        <div className='bd-toolbar'>
          <IoMdArrowBack className='bd-back-icon' />
          <div className='bd-category'>UPSC CSE - GS</div>
        </div>
        <div className="bd-topbar">
          <div
            onClick={() => handleItemCick("batch-details")}
            className={activeItem == "batch-details" ? "bd-topbar-text activeItem" : "bd-topbar-text"}>Batch Details</div>
          <div
            onClick={() => handleItemCick("live-classes")}
            className={activeItem == "live-classes" ? "bd-topbar-text activeItem" : "bd-topbar-text"}>Live Classes</div>
          <div
            onClick={() => handleItemCick("recorded-classes")}
            className={activeItem == "recorded-classes" ? "bd-topbar-text activeItem" : "bd-topbar-text"}>Recorded Classes</div>
          <div
            onClick={() => handleItemCick("test")}
            className={activeItem == "test" ? "bd-topbar-text activeItem" : "bd-topbar-text"}>Test</div>
          <div
            onClick={() => handleItemCick("your-schedule")}
            className={activeItem == "your-schedule" ? "bd-topbar-text activeItem" : "bd-topbar-text"}>Your Schedule</div>
        </div>
      </div>

      {
        activeItem === "batch-details" ? (
          <div>
            <div className='bd-container'>

              <div className='bd-box'>
                <img src={batch_1} className='bd-image' />
                <div className='bd-info'>

                  <div className='bd-language-box'>
                    <div className='bd-language'>English</div>
                    <div className='bd-syllabus-text'>Complete Syllabus Batch</div>
                  </div>

                  <div className='bd-title'>Yalgaar Batch for EPFO 2025</div>
                  <div className="bd-desc">
                    {showMore ? fullText : previewText}
                    <span
                      onClick={() => setShowMore(!showMore)}
                      style={{ color: "blue", cursor: "pointer", marginLeft: "8px" }}
                    >
                      {showMore ? "Show Less" : "Show More"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bd-border"></div>

              <div className="bd-subscription-container">
                <div className="bd-date-box">
                  <IoCalendarOutline className='bd-date-icon' />
                  <div className='bd-date-text'>Starts on Aug 12</div>
                </div>

                <div className="bd-subscription-box">
                  <button type="submit" className="bd-subscription-btn">
                    Geet subscription
                  </button>

                </div>
              </div>

            </div>

            <div className="class-box">
              <Classes headText={"Demo Classes for you"}/>
            </div>
          </div>
        ) : activeItem === "live-classes" ? (
          <></>
        ): activeItem === "recorded-classes" ? (
          <></>
        ): activeItem === "test" ? (
          <></>
        ): activeItem === "your-schedule" ? (
          <></>
        )
          : (
            <div className="class-box">
              <Classes headText={"Demo Classes for you"}/>
            </div>
          )}


    </div>
  )
}

export default BatchDetails