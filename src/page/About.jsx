export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0e3252] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-2 border-purple-500">About</p>
                </div>
                <div>
                </div>
            </div>
            <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
                <div className="text-4xl font-bold">
                    <p>Hi, I'm Yassine, nice to meet you, Please take a look around.</p>
                </div>
                <div className="py-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque eaque nobis quae, sunt exercitationem ipsa debitis porro dicta iste optio eligendi id corporis enim quas architecto? Impedit, reprehenderit temporibus.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

