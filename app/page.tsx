import React from "react";
import { GlobeIcon, BitcoinIcon, ActivityIcon, ShieldIcon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import FloatingNavbar from "./navbar";
import Safari from "@/components/magicui/safari";
import { Spotlight } from "@/components/ui/spotlight";
import SolanaLogo from "./public/solanaLogo.png";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import RainbowDivider from "./divider";
import { Cover } from "@/components/ui/cover";
import { MagicCard } from "@/components/magicui/magic-card";
import { CoolMode } from "@/components/magicui/cool-mode";
import io from "./test.jpg";

const features = [
  {
    Icon: BitcoinIcon,
    name: "Secure Wallet",
    description: "Store and manage your crypto assets securely.",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: BitcoinIcon,
    name: "Bitcoin Integration",
    description: "Seamless integration with Bitcoin transactions.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    background: <h1>Hithesh</h1>,
  },
  {
    Icon: ActivityIcon,
    name: "Ethereum Support",
    description: "Access and manage your Ethereum assets effortlessly.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: ShieldIcon,
    name: "Enhanced Security",
    description: "Advanced security features to protect your assets.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: GlobeIcon,
    name: "Global Access",
    description: "Access your assets from anywhere in the world.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen   antialiased from-gray-900 to-gray-800 text-white ">
      {/* Hero Section */}
      <FloatingNavbar />
      <header className="container mx-auto pl-4 py-16  text-center my-3">
        <div className="flex justify-start h-[100vh] overflow-hidden   mt-20 ">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="#9370DB"
          />

          <div className="flex">
            <div className=" flex basis-[60%] flex-wrap gap-2 ">
              <BackgroundBeamsWithCollision className=" basis-[48%]  !w-[480px] !h-[300px]  skew-x-12 flex flex-col  rounded-lg">
                <Image
                  src={SolanaLogo}
                  width={100}
                  alt="Solana asset "
                  className=" z-50  bg-black"
                />
                <h2 className="text-2xl relative z-20 md:text-4xl lg:text-4xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                  Charity NOW
                  <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                      <span className="">Login</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                      <span className="">
                        <CoolMode>
                          <button>
                            <Cover className="  font-extrabold text-5xl">
                              Login!
                            </Cover>
                          </button>
                        </CoolMode>{" "}
                      </span>
                    </div>
                  </div>
                </h2>
              </BackgroundBeamsWithCollision>
              <BackgroundBeamsWithCollision className=" basis-[48%] text-wrap  !w-[480px] !h-[300px] !bg-black skew-x-12 flex rounded-lg flex-col">
                <Image
                  src={SolanaLogo}
                  width={100}
                  alt="Solana asset "
                  className=" z-50  bg-black"
                />
                <h2 className="text-2xl relative z-20 md:text-4xl lg:text-4xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                  What&apos;s cooler
                  <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                      <span className="">Create Account!</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                      <CoolMode>
                        <button>
                          <Cover className=" w-[200px] font-extrabold text-4xl">
                            Create Account!
                          </Cover>
                        </button>
                      </CoolMode>{" "}
                    </div>
                  </div>
                </h2>
              </BackgroundBeamsWithCollision>

              <div className="text-3xl  font-extrabold  -mt-30 z-50 ">
                <h1 className="  text-black text-start text-3xl">Go Fund Me</h1>
                <div
                  className={`text-wrap text-start text-black text-1xl  italic  font-extralight`}
                >
                  Our platform harnesses the power of blockchain technology to
                  transform the way charitable donations are made and managed.
                  We provide a transparent, secure, and decentralized
                  environment where donors can directly contribute to causes
                  they care about with cryptocurrency. Every transaction is
                  recorded on the blockchain, ensuring full transparency and
                  accountability.
                </div>
              </div>
            </div>

            <Image
              src={io}
              width={500}
              height={100}
              alt="Solana asset "
              className="  basis-[20%]   "
            />
          </div>
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
        </div>
        <RainbowDivider />

        <div className="flex gap-3">
          <div className=" my-44 w-[700px]  mx-5  skew-x-12 basis-[80%] flex justify-center  items-center h-[300px]  ">
            <MagicCard
              className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl border-2"
              gradientColor={"dark" === "dark" ? "#6a0dad" : "#9370DB"}
            >
              <div className=" text-wrap ">
                <h1>We shall transport you with Solana</h1>
                <CoolMode>
                  <button>
                    <Cover className=" font-extrabold text-7xl">Blinks!</Cover>
                  </button>
                </CoolMode>
              </div>
            </MagicCard>

            <div></div>
          </div>
        </div>
        <RainbowDivider />

        <div className="  bg-white  skew-x-12  my-5 z-20  h-[200px]  "></div>

        <h1 className="text-4xl font-bold mb-4">Welcome to CryptoSafe</h1>
        <p className="text-xl mb-8">
          Secure, seamless, and smart crypto management
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Get Started
        </Button>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Create Account", "Secure Your Wallet", "Start Trading"].map(
            (step, index) => (
              <Card key={step} className="bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl">{`${index + 1}. ${step}`}</CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </CardDescription>
                </CardHeader>
              </Card>
            ),
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8">
          Join thousands of users who trust CryptoSafe for their crypto needs
        </p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          Sign Up Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 CryptoSafe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
