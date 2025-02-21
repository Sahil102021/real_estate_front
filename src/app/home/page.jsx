import "../styles/globals.css";
import Box from "../components/box/page.jsx";
import Button1 from "../components/button1/page.jsx";
import Image from "next/image"; // Import the Image component for Next.js

export default function HomePage() {
  return (
    <div>
      <div className="w-full">
        <div className="container mx-auto px-6">
          <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg
                  className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <main className="mt-10 mb-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">
                        Simplifiez votre pratique
                      </span>{" "}
                      <span className="block text-blue-600 xl:inline">
                        d'infirmier libéral 🩺
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Swily vous aide à gérer vos rendez-vous 📅, optimiser vos
                      tournées 🚗 et simplifier votre facturation 💰. Gagnez du
                      temps et concentrez-vous sur l'essentiel : vos patients
                      💖.
                    </p>
                    <div className="mt-5 flex gap-2">
                      {" "}
                      {/* Fixed typo here */}
                      <Button1 title={"hello"} />
                      <Button1 title={"hello"} />
                      <Button1 title={"hello"} />
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <div className="mt-12 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Infirmière utilisant une tablette"
                width={2070}
                height={1380}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
