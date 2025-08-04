import React from 'react'
import './Intro.css'
import loginImage_2 from '../../assets/images/login_2.png';
import appstoreImage from '../../assets/images/appstore.png';
import playstoreImage from '../../assets/images/playstore.png';
import LiveStream from '../../assets/images/live_stream.png';
import Doubt from '../../assets/images/doubt.png';
import Note from '../../assets/images/notes.webp';
import Mcq from '../../assets/images/mcq.png';

const Intro = () => {
    return (
        <div className='intro-contener'>

            <div className='intro-top-contener'>
                <div className='intro-content-contener'>

                    <div className='intro-text'>
                        Download Our App For Best Experience
                    </div >
                    <div className='intro-subtext'>
                        Access high-quality lessons anytime, anywhere. Join thousands of learners today and start your journey with top educators.
                    </div>

                    <div className='intro-app-contener'>
                        <div className='app-contener'>
                            <img
                                src={playstoreImage}
                                alt="Description"
                                className="app-image"
                            />
                            <div className='app-text'>
                                <div className='app-subheading-text'>Download Android App</div>
                                <div className='app-heading-text'>Google Play</div>
                            </div>
                        </div>

                        <div className='app-contener'>
                            <img
                                src={appstoreImage}
                                alt="Description"
                                className="app-image"
                            />
                            <div className='app-text'>
                                <div className='app-subheading-text'>Download Ios App</div>
                                <div className='app-heading-text'>Apple Store</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='intro-image-contener'>
                    <img
                        src={loginImage_2}
                        alt="Description"
                        className="intro-image"
                    />
                </div>
            </div>

            <div className='intro-down-contener'>
                <div className='intro-down-box'>
                    <img
                        src={LiveStream}
                        alt="Description"
                        className="intro-box-image"
                    />
                    <div className='intro-box-heading-text'>Live Stream</div>
                    <div className='intro-box-subheading-text'>Interactive live classes</div>
                </div>
                  <div className='intro-down-box'>
                    <img
                        src={Doubt}
                        alt="Description"
                        className="intro-box-image"
                    />
                    <div className='intro-box-heading-text'>24 x 7</div>
                    <div className='intro-box-subheading-text'>Doubt solving sessions</div>
                </div>
                  <div className='intro-down-box'>
                    <img
                        src={Note}
                        alt="Description"
                        className="intro-box-image"
                    />
                    <div className='intro-box-heading-text'>Notes & Pdf</div>
                    <div className='intro-box-subheading-text'>Sample papers, tests & notes</div>
                </div>
                  <div className='intro-down-box'>
                    <img
                        src={Mcq}
                        alt="Description"
                        className="intro-box-image"
                    />
                    <div className='intro-box-heading-text'>MCQ Session</div>
                    <div className='intro-box-subheading-text'>Online Multiple Choice Question</div>
                </div>
            </div>

        </div>
    )
}

export default Intro