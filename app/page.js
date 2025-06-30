import Image from "next/image";
import localFont from 'next/font/local'
import Link from "next/link";

 
const poppins = localFont({
  src: './fonts/Poppins-ExtraBold.ttf',
  display: 'swap',
  
})

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
            <p className={`text-3xl font-bold ${poppins.className}`}>
              The Smartest URL Shortener
              </p>
            <p className="text-center">Your simple, fast, and reliable link shortener – no fluff, just results.</p>
             <div className='flex gap-3 justify-start'>

              <Link href="/shorten" className='bg-purple-500 text-white shadow-lg p-3 rounded-lg py-1 font-bold'><button>Try Now</button></Link>
              <Link href="/github" className='bg-purple-500 text-white shadow-lg p-3 rounded-lg py-1 font-bold'><button>Github</button></Link>
             </div>
       

        </div>

        <div className="flex justify-start relative">
            <Image className="mix-blend-darken"
            src="/vector.jpg"
            alt="Vector Image"
            fill={true}
            />
        </div>

      </section>
    </main>
  );
}
