import WorkImg from '../assets/workImg.jpeg'
import Realestate from '../assets/realestate.jpg'

export default function Work() {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0e3252] text-gray-300">
        <div className="max-w-[1000px] p-4  mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold border-b-4 border-pink-600 inline">Work</p>
                <p className="py-4">// check out some of my recent work</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div style={{backgroundImage: `url(${WorkImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    <div className='opacity-0 group-hover:opacity-100' >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS App 
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 border-2 border-pink-300 text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                 <button className='text-center rounded-lg px-4 py-3 border-2 border-pink-300 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Realestate})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    <div className='opacity-0 group-hover:opacity-100' >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS App 
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 border-2 border-pink-300 text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                 <button className='text-center rounded-lg px-4 py-3 border-2 border-pink-300 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Realestate})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    <div className='opacity-0 group-hover:opacity-100' >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS App 
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 border-2 border-pink-300 text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                 <button className='text-center rounded-lg px-4 py-3 border-2 border-pink-300 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Realestate})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    <div className='opacity-0 group-hover:opacity-100' >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS App 
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 border-2 border-pink-300 text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                 <button className='text-center rounded-lg px-4 py-3 border-2 border-pink-300 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Realestate})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    <div className='opacity-0 group-hover:opacity-100' >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS App 
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 border-2 border-pink-300 text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                 <button className='text-center rounded-lg px-4 py-3 border-2 border-pink-300 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Realestate})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    <div className='opacity-0 group-hover:opacity-100' >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS App 
                        </span>
                        <div className='pt-8 text-center '>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 border-2 border-pink-300 text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                 <button className='text-center rounded-lg px-4 py-3 border-2 border-pink-300 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
