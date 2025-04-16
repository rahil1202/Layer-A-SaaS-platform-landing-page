import Image from "next/image";
import Button from "@/components/Button";
import Pointers from "@/components/Pointers";
import designImage1 from "@/assets/images/design-example-1.png";
import designImage2 from "@/assets/images/design-example-2.png";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
               <div className="container relative">
                <div className="absolute top-16 -left-60 hidden md:block">
                        <Image
                            src={designImage1}
                            alt="Design Example 1"                                   
                        />                        
                </div>
                <div className="absolute -top-16 -right-72 hidden md:block">
                        <Image
                            src={designImage2}
                            alt="Design Example 2"                                   
                        />                        
                </div>
                <div className="absolute left-24 top-96 hidden md:block">
                    <Pointers name="Rahil" />
                </div>
                <div className="absolute right-52 -top-4 hidden md:block">
                    <Pointers name="James" color="red" />
                </div>


              <div className="flex flex-col space-y-4 mx-auto max-w-xl justify-center items-center">
                <div className="inline-flex py-3 px-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-bold">
                    ✨ $5.5M seed round raised
                </div>
                <div className="inline-flex py-3 px-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-bold">
                    🥇 Product of week on Product Hunt
                </div>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                Impactful design, created effortlessly.
            </h1>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                Design tools should be easy to use, not hard to learn. Layers
                combines powerful features with an intuitive interface to get
                you up and running in minutes.
            </p>
            <form className="flex border border-white/25 rounded-full p-2 mt-8 max-w-lg mx-auto md:flex-row flex-col">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent px-4 md:flex-1 flex-1 py-3 rounded-full text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-80"
                />
                <Button
                    variant="primary"
                    className="whitespace-nowrap hover:bg-lime-300 hover:text-neutral-950 transition-colors duration-100"
                    size="sm"
                >
                    Get early access
                </Button>
             </form>
            </div>
        </section>
    );
}
