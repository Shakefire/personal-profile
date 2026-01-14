import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
    const [mode, setMode] = useState<string>('dark');

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <HelmetProvider>
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Helmet>
                <title>Kabir Muhammad Hassan | Portfolio</title>
                <meta name="description" content="Portfolio of Kabir Muhammad Hassan - Software Engineer specializing in full-stack development." />
                <meta property="og:title" content="Kabir Muhammad Hassan | Portfolio" />
                <meta property="og:description" content="Portfolio of Kabir Muhammad Hassan - Software Engineer specializing in full-stack development." />
                <meta property="og:type" content="website" />
                {/* <meta property="og:image" content="%PUBLIC_URL%/og-image.png" /> */} 
            </Helmet>
            <FadeIn transitionDuration={700}>
                <Main/>
                <Expertise/>
                <Timeline/>
                <Project/>
                <Contact/>
            </FadeIn>
            <Footer />
        </div>
    </HelmetProvider>
    );
}

export default App;