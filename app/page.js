import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100 md:text-lg text-xs ">
      <section className="grid grid-cols-2 h-[50vh]">

        <div className="flex flex-col items-center justify-center gap-4">

          <p className="font-bold text-2xl pl-8">The best URL shortener in the market</p>

          <p className="md:px-44 px-6 text-center">
            We are the best URL shortener in this world.Most of the URL shortener asks for your details for login. We understand your needs and care for your time and privacy.
          </p>
          <div className="flex gap-4">

            <Link href="/shorten"><button className='bg-purple-500 shadow-lg p-3 py-1 font-semibold hover:scale-110 transition delay-150 duration-300 ease-in-out rounded-lg text-white '>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 shadow-lg p-3 py-1 hover:scale-110 transition delay-150 duration-300 ease-in-out font-semibold rounded-lg text-white '>GitHub</button></Link>

          </div>
        </div>
        <div className="flex justify-start relative h-56 md:h-auto top-28 md:top-auto">
          <Image
            className="mix-blend-darken"
            src="/vector.jpg"
            alt="working person"
            fill={true}
          />

        </div>
      </section>
    </main>
  );
}
