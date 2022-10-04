/* eslint-disable react/jsx-no-comment-textnodes */
import css from '../assets/css.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import mongo from '../assets/mongo.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'

export default function Skills() {
  return (
    <div name="skills" className="h-screen bg-[#0e3252] text-gray-300">

        <div className='max-w-[1000px] p-4  mx-auto flex flex-col justify-center w-full h-full'>
        
            <div>
                <p className='text-4xl font-bold inline border-b-2 border-pink-600'>Skills</p>
                <p className='py-4' >// These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8' >
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={html} alt="HTML" />
                    <p className='py-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={react} alt="react" />
                    <p className='py-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={css} alt="CSS" />
                    <p className='py-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={tailwind} alt="tailwind" />
                    <p className='py-4'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={github} alt="github" />
                    <p className='py-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={javascript} alt="javascript" />
                    <p className='py-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={mongo} alt="mongo" />
                    <p className='py-4'>MONGODB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-200'>
                    <img src={node} alt="node" />
                    <p className='py-4'>NODE</p>
                </div>
            </div>
        </div>
    </div>
  )
}

