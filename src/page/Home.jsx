import { HiArrowNarrowRight } from 'react-icons/hi'


export default function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0e3252]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600' >Hi, My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]' >Yassine Bouali</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Devoloper.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sit. Quas, maxime minima? Vero, expedita aliquid molestiae veritatis esse placeat, odio similique autem exercitationem est amet dignissimos quisquam. Totam, officiis.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 mr-3 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}
