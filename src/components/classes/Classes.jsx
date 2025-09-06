import React from 'react';
import "./Classes.css";
import { useNavigate } from 'react-router-dom';

import class_1 from '../../assets/images/class_1.png';

function Classes({ headText }) {
    const navigate = useNavigate();

    const handleClassClick = (id) => {
        const selectedClass = classesData.find(item => item.id === id);

        navigate(`/playing-video/${id}`, {
            state: { classData: selectedClass }
        });
    };

    const classesData = [
        {
            id: 1,
            image: class_1,
            language: "English",
            duration: "2hr",
            title: "How to Choose Optional : Why to Choose Geography as Optional",
            educator: "Bibhuti Sir",
            date: "21st Aug 2025"
        },
        {
            id: 2,
            image: class_1,
            language: "Hindi",
            duration: "1.5hr",
            title: "Mastering Indian Polity",
            educator: "Rajesh Sir",
            date: "22nd Aug 2025"
        }
    ];

    return (
        <div className='cl-main'>
            <div className='cl-main-text'>{headText}</div>

            <div className='cl-box'>
                {classesData.map((item) => (
                    <div
                        className='cl-card'
                        key={item.id}
                        onClick={() => handleClassClick(item.id)}>
                        <img src={item.image} alt={item.title} className='cl-image' />

                        <div className='cl-info'>
                            <div className='cl-language-box'>
                                <div className='cl-language'>{item.language}</div>
                                <div className='cl-duration'> · {item.duration}</div>
                            </div>

                            <div className='cl-title'>{item.title}</div>
                            <div className='cl-educator'>{item.educator}</div>
                            <div className='cl-date'>{item.date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Classes;
