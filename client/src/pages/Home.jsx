import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import Section from '../components/Section';
import WelcomeSection from '../components/WelcomeSection';
import MissionSection from '../components/MissionSection';
import ProductSection from '../components/ProductSection';
// import ResearchSection from '../components/ResearchSection';


function Home() {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
        window.scrollTo(0, 0);
        console.log('No hash link')
        }
        // else scroll to id
        else {
        setTimeout(() => {
            const id = hash.replace('#', '');
            console.log('Hash link: ' + hash)
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            else {
                console.log("element not found")
            }
        }, 0);
        }
    }, [pathname, hash, key]); // do this on route change

    return (
        <div>
           <Section id="welcome" index={1} content={<WelcomeSection/>}/>
           <Section id="about" index={2} content={<MissionSection/>}/>
           <Section id="products" index={3} content={<ProductSection/>}/>
           {/* <Section id="research" index={4} content={<ResearchSection/>}/> */}
        </div>
    );
}

export default Home;