import React from 'react';

const Blogs = () => {
    return (
        <div className=' w-4/5 mx-auto '>
            <h3 className='text-3xl font-semibold text-slate-700 mt-10'>Blogs</h3>


            <div className='p-8 shadow-lg my-8 bg-yellow-50'>
                <h2 className='font-bold'>What is Context API?</h2>
                <p>Context API help to pass data one componet to another component without props drilling. If any parent component have to pass data to it's nested level children componet then using context api parent component can pass data to it's nested level children component easily avoiding imidiate children. in context api top parent component need a context and using Provider it pass the data in the context. Any children can excess those data using the context avoiding the props.</p>
            </div>
            <div className='p-8 shadow-lg my-8 bg-yellow-50'>
                <h2 className='font-bold'>What Is Semantic Tag?</h2>
                <p>Symentic tag means tag name with meaningful word. By symentic or  meaningful tag name make easy to understand about the insides content of the tag example: header, footer, article, section etc. Symentic tag describe the element pupose by name . Meaningful tag name helpful for browser and also for developer. Semantic tag name also increase the web pages accessibility. </p>
            </div>
            <div className='p-8 shadow-lg my-8 bg-yellow-50'>
                <h2 className='font-bold'>Differneces Inline, Block {"&"} Inline-Block.</h2>
                <p className='text-left'>
                    <li>Inline: Only count default hight width. top and bottom margin not possible only left and right margin. Not Create any new line.  </li>
                    <li>Inline-Block: it behave similer like inline but we can hight width. Also all  type of margin possible. But Not Create any new line.  </li>
                    <li>Block:  we can hight width. Also all  type of margin possible.  Create new line becasue it takes full width of screen.  </li>
                </p>
            </div>
        </div>
    );
};

export default Blogs;