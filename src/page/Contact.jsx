export default function Contact() {
  return (
    <div name="contact" className="h-screen bg-[#0e3252] text-gray-300 flex justify-center items-center">
        <form method="POST" action="https://getform.io/f/dc80bb37-8649-41ca-82dd-bb3adc3a445e" className="flex flex-col max-w-[600px] p-4">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-2 border-pink-400">Contact</p>
                <p className="py-4">// Submit the form below or shoot me an email : yassine.bouali.bo@gmail.com</p>
            </div>
            <input className="bg-[#ccd6f6] p-2 text-gray-700" placeholder="Name" type="Name" name="name" />
            <input className="my-4 p-2 bg-[#ccd6f6] text-gray-700" placeholder="Email" type="Email" name="email" />
            <textarea className="p-2 bg-[#ccd6f6] text-gray-700" name="message" rows="10" placeholder="Message"></textarea>
            <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
        </form>
    </div>
  )
}
