import React from 'react';

const Blogs = () => {
    return (
        <div className=' w-4/5 mx-auto '>
            <h3 className='text-3xl font-semibold text-slate-700 mt-10'>Blogs</h3>


            <div className='p-8 shadow-lg my-8 bg-yellow-50'>
                <h2 className='font-bold'>What is Context API?</h2>
                <p>Context API help to pass data one componet to another component without props drilling. If any parent component have to pass data to it's any levels nested children component with context api it can pass data effectively.  Parent componet can pass data to it's any levels children component by avoiding pass data to imidiate children by props drilling with context api. in context api top parent component need a context and using Provider it pass the data in the context. Any children can excess those data using that context avoiding the props.</p>
            </div>
            <div className='p-8 shadow-lg my-8 bg-yellow-50'>
                <h2 className='font-bold'>What Is Semantic Tag?</h2>
                <p>Symentic tag means tag name with meaningful word. By symentic or  meaningful tag name make easy to understand about the insides content of the tag example: header, footer, article, section etc. Symentic tag describe the element purpose by name . Meaningful tag name helpful for browser and also for developer. Semantic tag name also increase the web pages accessibility. </p>
            </div>
            <div className='p-8 shadow-lg my-8 bg-yellow-50'>
                <h2 className='font-bold'>Differneces in Inline, Block {"&"} Inline-Block.</h2>
                <p className='text-left'>
                    <li>Inline: Only count default hight width. top and bottom margin not possible only left and right margin. Not Create any new line.  </li>
                    <li>Inline-Block: it behave similer like inline but we can add hight and width. Also all  type of margin possible. But Not Create any new line.  </li>
                    <li>Block:  we can add hight and width. Also all  type of margin possible.  Create new line becasue it takes full width of the screen.  </li>
                </p>
            </div>
        </div>
    );
};

export default Blogs;