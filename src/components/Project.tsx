import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.jpeg';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/Shakefire/Face-Recognition-Based-Access-Control-System" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Shakefire/Face-Recognition-Based-Access-Control-System" target="_blank" rel="noreferrer"><h2>Face-Recognition Access Control</h2></a>
                    <p>Developed a security solution leveraging computer vision and deep learning for automated access control systems.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/Shakefire/Nexa-AI-COMPANION" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Shakefire/Nexa-AI-COMPANION" target="_blank" rel="noreferrer"><h2>Nexa-AI-COMPANION</h2></a>
                    <p>An AI-powered assistant integrated with WhatsApp, providing intelligent conversational capabilities using large language models.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/Shakefire/Solvix-NewsAnalyzer" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Shakefire/Solvix-NewsAnalyzer" target="_blank" rel="noreferrer"><h2>Solvix-NewsAnalyzer</h2></a>
                    <p>An NLP-driven tool for analyzing and verifying news content, helping to identify misinformation and sentiment trends.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/Shakefire/Email-Phising-Detection-Using-NLP" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Shakefire/Email-Phising-Detection-Using-NLP" target="_blank" rel="noreferrer"><h2>Email Phishing Detection</h2></a>
                    <p>Built a model using Natural Language Processing to detect and classify fraudulent emails and phishing attempts with high accuracy.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/Shakefire/Multi-Disease-Prediction-System" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Shakefire/Multi-Disease-Prediction-System" target="_blank" rel="noreferrer"><h2>Multi-Disease Prediction System</h2></a>
                    <p>A comprehensive health assistant capable of predicting multiple diseases from user-provided symptoms using machine learning.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/Shakefire/Rice-Disease-Detection-Using-CNN" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Shakefire/Rice-Disease-Detection-Using-CNN" target="_blank" rel="noreferrer"><h2>Rice Disease Detection</h2></a>
                    <p>Developed a CNN-based model for identifying and classifying diseases in rice crops from terminal leaf images.</p>
                </div>
                <div className="project">
                    <a href="https://aladgolddynamic.com.ng" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://aladgolddynamic.com.ng" target="_blank" rel="noreferrer"><h2>Aladgold Dynamic</h2></a>
                    <p>A dynamic web platform designed for scalability and modern user experience, utilizing backend optimization techniques.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/Shakefire/Credit-card-fraud" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Shakefire/Credit-card-fraud" target="_blank" rel="noreferrer"><h2>Credit Card Fraud Detection</h2></a>
                    <p>Analyzed financial transaction data to build a predictive model for identifying fraudulent credit card activities.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/Shakefire/Fake-News-Detection-Using-NLP" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Shakefire/Fake-News-Detection-Using-NLP" target="_blank" rel="noreferrer"><h2>NLP Fake News Detection</h2></a>
                    <p>Implemented a text analysis system to differentiate between real and fake news headlines using NLP techniques.</p>
                </div>
                <div className="project">
                    <a href="https://github.com/Shakefire/LandminesDetection-" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Shakefire/LandminesDetection-" target="_blank" rel="noreferrer"><h2>Landmine Detection</h2></a>
                    <p>Research-based project using infrared signatures and deep learning architectures to detect buried landmines.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;
