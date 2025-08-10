import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Batch.css";
import batch_1 from '../../assets/images/batch_1.png';
import batch_2 from '../../assets/images/batch_2.jpg';
import { IoCalendarOutline } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

const Batch = () => {
  const navigate = useNavigate();
  const batches = [
    { id: 1, title: "UPSC GS Foundation Batch", language: "English", educator: "By Raj Malhotra", image: batch_1 },
    { id: 2, title: "Complete Prelims + Mains Course", language: "Hindi", educator: "By Ananya Singh", image: batch_2 },
    { id: 3, title: "Answer Writing Practice Sessions", language: "Odia", educator: "By Ramesh Kumar", image: batch_1 },
    { id: 4, title: "Answer Writing Practice Sessions", language: "English", educator: "By Ramesh Kumar", image: batch_2 },
    { id: 5, title: "Answer Writing Practice Sessions", language: "English", educator: "By Ramesh Kumar", image: batch_2 },
    { id: 6, title: "Answer Writing Practice Sessions", language: "English", educator: "By Ramesh Kumar", image: batch_2 },
    { id: 7, title: "Batch 7", language: "Hindi", educator: "By Neha Sharma", image: batch_1 },
    { id: 8, title: "Batch 8", language: "Odia", educator: "By Amit Kumar", image: batch_1 },
    { id: 9, title: "Batch 9", language: "English", educator: "By Ramesh Kumar", image: batch_2 },
    { id: 10, title: "Batch 10", language: "English", educator: "By Ramesh Kumar", image: batch_2 },
    { id: 11, title: "Batch 11", language: "English", educator: "By Raj Malhotra", image: batch_1 },
    { id: 12, title: "Batch 12", language: "Hindi", educator: "By Ananya Singh", image: batch_2 },
    { id: 13, title: "Batch 13", language: "Odia", educator: "By Ramesh Kumar", image: batch_1 },
    { id: 14, title: "Batch 14", language: "English", educator: "By Ramesh Kumar", image: batch_2 },
    { id: 15, title: "Batch 15", language: "English", educator: "By Ramesh Kumar", image: batch_2 }
  ];

  const itemsPerPage = 6; // show 5 batches per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(batches.length / itemsPerPage);

  // Get only batches for the selected page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBatches = batches.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/batch-details/${id}`); // ✅ go to details page
  };

  return (
    <div className='main-batch'>
      <div className='batch-main-text'>Crack UPSC CSE - GS with our best educators</div>
      <div className='batch-remark-box'>
        <a className='batch-remark'>🗹 Live & recorded online classes</a>
        <a className='batch-remark'>🗹 Best for full exam preparation</a>
        <a className='batch-remark'>🗹 24X7 support system</a>
      </div>

      <div className='batch-main-title'>Recommended batches for you</div>

      <div className='batches-container'>
        {currentBatches.map((batch) => (
          <div key={batch.id}
            className='batch-card'
            onClick={() => handleCardClick(batch.id)}
          >
            <img src={batch.image} alt={batch.title} className='batch-thumbnail' />
            <div className='batch-info'>
              <div className='batch-language-container'>
                <div className='batch-language'>{batch.language}</div>
              </div>
              <div className='batch-title'>{batch.title}</div>
              <div className='batch-desc-container'>
                <IoCalendarOutline className='batch-desc-icon' />
                <div className='batch-desc-title'>Starts in 2 days · 11 Aug 2025</div>
              </div>
              <div className='batch-desc-container'>
                <CiTimer className='batch-desc-icon' />
                <div className='batch-desc-title'>Full day classes</div>
              </div>
              <div className='batch-desc-container'>
                <RxAvatar className='batch-desc-icon' />
                <div className='batch-desc-title'>Atul Jain, Apoorva Rajput and Nipun Alambayan</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination-btn">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active-page" : ""}
          >
            {index + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Batch;