import React from 'react';  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SocialContact = () => {
    return (
        <div className='w-full bg-blue-200 rounded-b-lg p-6 '>
            <div className='sm:flex'>
            <p className='p-2 rounded m-4 font-semibold' style={{backgroundColor:"#161515",color:'white'}}><a href="https://www.github.com/asaduzzaman599" target="_blank">GitHub</a></p>
            <p className='p-2 rounded m-4 font-semibold' style={{backgroundColor:"#0077b5",color:'white'}}><a href="https://www.linkedin.com/in/mohammad-asaduzzaman-5512441aa/" target="_blank">LinkeDin</a></p>
            </div>
        </div>
    );
};

export default SocialContact;