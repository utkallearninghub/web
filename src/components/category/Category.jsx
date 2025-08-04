import React from 'react';
import './Category.css';
import Calculator from '../../assets/images/calculator.png';
import Bank from '../../assets/images/bank.png';
import School from '../../assets/images/school.png';

const categories = [
    { title: 'CA', image: Calculator, bgColor: '#fff1f1' },
    { title: 'Bank exams', image: Bank, bgColor: '#f1f8ff' },
    { title: 'School Preparation', image: School, bgColor: '#f1fff1' },
    { title: 'UPSC', image: Calculator, bgColor: '#f1fff1' },
    { title: 'UPSC', image: Calculator, bgColor: '#f1fff1' },
    { title: 'UPSC', image: Calculator, bgColor: '#f1fff1' },
];
const Category = () => {
    return (
        <div className='category-main-contener'>
            <div className='category-top-text'>Our Top Category</div>

            <div className='category-contener'>
                {categories.map((category, index) => (
                    <div className='category-box' key={index}>
                        <div
                            className='category-image-box'
                            style={{ backgroundColor: category.bgColor }}
                        >
                            <img
                                src={category.image}
                                alt={category.title}
                                className='category-image'
                            />
                        </div>
                        <div className='category-title'>{category.title}</div>
                        <div className='category-explore-now'>Explore Now →</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
