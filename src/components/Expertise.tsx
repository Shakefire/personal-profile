import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "JavaScript",
    "PHP",
    "SQL",
    "Django",
    "Flask",
    "PostgreSQL",
    "MySQL",
    "RESTful APIs"
];

const labelsSecond = [
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Windows",
];

const labelsThird = [
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Streamlit",
    "Computer Vision",
    "NLP"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Software Engineering & Web Development</h3>
                        <p>I build scalable web systems and data-driven applications using modern frameworks like Django, Flask, and React. My focus is on performance, maintainability, and practical impact.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>DevOps & System Architecture</h3>
                        <p>I have experience addressing scalability and latency issues in database-driven systems, as well as managing cloud environments on Azure and AWS.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>AI & Machine Learning</h3>
                        <p>I specialize in Deep Learning architectures (DNN, CNN, YOLO, VGG16) for computer vision and NLP tasks, with a strong focus on security, surveillance, and medical AI systems.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
