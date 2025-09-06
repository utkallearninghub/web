import React, { useRef, useState, useEffect } from "react";
import "./VideoPlayer.css";
import Hls from "hls.js";
import { useNavigate } from "react-router-dom";

import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { MdOutlineForward10 } from "react-icons/md";
import { MdOutlineReplay10 } from "react-icons/md";
import { IoVolumeHighSharp } from "react-icons/io5";

import { CgMaximize } from "react-icons/cg";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { BiLike } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

import pw_logo from '../../assets/images/hritik_avatar.jpg';

const formatTime = (time) => {
  if (isNaN(time)) return "00:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds
    }`;
};

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [showCommentsBox, setCommentsBox] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [comment, setComment] = useState('')
  const [showControls, setShowControls] = useState(true);
  const hideTimeoutRef = useRef(null);
    const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // go back to previous page
  };

  // Show controls when mouse moves
  const handleMouseMove = () => {
    setShowControls(true);

    // Clear previous timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    // Set new timeout to hide controls after 3s
    hideTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  // Cleanup timeout when unmounting
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);


  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
      hls.attachMedia(videoRef.current);
    } else if (
      videoRef.current &&
      videoRef.current.canPlayType("application/vnd.apple.mpegurl")
    ) {
      videoRef.current.src =
        "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
    }
  }, []);

  // Show Chat Box
  const toggleCommentsBox = () => {
    setCommentsBox(!showCommentsBox);
  };

  // Play / Pause
  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10; // skip 5 seconds forward
    }
  };

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10; // skip 5 seconds backward
    }
  };

  // Update Progress & Timer
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    const percent = (video.currentTime / video.duration) * 100;
    setProgress(percent);
    setCurrentTime(video.currentTime);
  };

  // Set Duration when metadata is loaded
  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    setDuration(video.duration);
  };

  // Seek video
  const handleSeek = (e) => {
    const video = videoRef.current;
    const newTime = (e.target.value / 100) * video.duration;
    video.currentTime = newTime;
    setProgress(e.target.value);
  };

  // Volume control
  const handleVolume = (e) => {
    const video = videoRef.current;
    const newVolume = e.target.value;
    video.volume = newVolume;
    setVolume(newVolume);
  };

  // Fullscreen
  const handleFullscreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  const commentsData = [
    {
      id: 1,
      name: "Debasish Sahoo",
      date: "10 days ago",
      text: "Good video",
      likes: 400,
      avatar: pw_logo,
    },
    {
      id: 2,
      name: "Debasish Sahoo",
      date: "8 days ago",
      text: "Very helpful tutorial",
      likes: 120,
      avatar: pw_logo,
    },
    {
      id: 3,
      name: "Debasish Sahoo",
      date: "5 days ago",
      text: "Awesome explanation 👏",
      likes: 89,
      avatar: pw_logo,
    },
    {
      id: 4,
      name: "Debasish Sahoo",
      date: "2 days ago",
      text: "Keep uploading more!",
      likes: 0,
      avatar: pw_logo,
    },
  ];

  return (
    <div className="video-main-div" onMouseMove={handleMouseMove}>
      <div className="video-container">
        <video
          ref={videoRef}
          className="video-player"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          autoPlay
          onClick={togglePlay}
        >
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Back */}
        {showControls && (
          <div className="video-back">
            <IoArrowBack className="video-back-icon" onClick={handleBack}/>
          </div>
        )}

        {/* Custom Controls */}
        {showControls && (
          <div className="controls">
            <div className="video-track-box">
              <span className="video-track-timer">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="video-track-bar"
                style={{ "--value": `${progress}%` }}
              />

            </div>

            <div className="video-action-box">
              <div className="play-pause-box">
                <div onClick={togglePlay}>
                  {isPlaying ? <IoMdPause className="action-btn" /> : <IoMdPlay className="action-btn" />}
                </div>

                <MdOutlineReplay10 className="action-btn" onClick={skipBackward} />
                <MdOutlineForward10 className="action-btn" onClick={skipForward} />

                <div className="video-volume-box">
                  <IoVolumeHighSharp className="video-volume-btn" />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolume}
                    className="video-volume-bar"
                  />
                </div>

              </div>

              <div className="video-settings-box">
                <MdOutlineChat onClick={toggleCommentsBox} className="action-btn" />
                <MdOutlineSettings className="action-btn" />
                <CgMaximize onClick={handleFullscreen} className="action-btn" />

              </div>

            </div>

          </div>
        )}
      </div>

      {/* video chat box */}
      <div className={showCommentsBox ? "video-comments-box show" : "video-comments-box"}>
        <div className={showCommentsBox ? "video-comments-box-close show" : "video-comments-box-close"}>
          <div className="video-comments-close-text">Comments</div>
          <RxCross2 onClick={toggleCommentsBox} className="video-comments-close-icon" />
        </div>

        <div className={showCommentsBox ? "video-comments-sction show" : "video-comments-sction"}>
          {commentsData.map((comment) => (
            <div className="video-comment-box" key={comment.id}>
              <div className="video-comment-name-box">
                <img
                  src={comment.avatar}
                  alt="User avatar"
                  className="video-comment-image"
                />
                <div className="video-comment-name">{comment.name}</div>
                <div className="video-comment-date">. {comment.date}</div>
              </div>
              <div className="video-comment">{comment.text}</div>
              <div className="video-comment-like-box">
                <BiLike className="video-comment-like-icon" />
                <div className="video-comment-like-count">{comment.likes}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={showCommentsBox ? "video-comment-sender show" : "video-comment-sender"}>
          <form className="video-comment-sender-box" onSubmit={handleSubmit}>
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="video-comment-sender-input"
              type="text"
              required
              placeholder="Add a comment..." />
            <button className="video-comment-sender-btn" type="submit">
              <IoMdSend className={comment == "" ? "video-comment-sender-btn-icon" : "video-comment-sender-btn-icon show"} />
            </button>
          </form>

        </div>
      </div>
    </div>

  );
};

export default VideoPlayer;