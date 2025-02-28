import Image from "next/image";
import { Building, Users, Award } from "lucide-react";
import { Footer } from "../components/footer/page";
import Header from "../components/header/page.jsx";

export default function AboutPage() {
  return (
    <div className="w-full">
            <Header />
      <main className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src="https://res.cloudinary.com/dttftmu4m/image/upload/v1740141110/city_by_the_bay_1232_iwxx10.webp"
            alt="Real Estate Office"
            fill
            className="object-cover "
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              About Our Real Estate Agency
            </h1>
          </div>
        </section>
        <div className="h-3 bg-slate-800"></div>


        <div className="container mx-auto">
          {/* Company Description */}
          <section className="py-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2005, our real estate agency has been dedicated to
              helping people find their dream homes and make smart property
              investments. With a team of experienced professionals and a deep
              understanding of the local market, we've become a trusted name in
              the industry.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to provide exceptional service, expert guidance,
              and innovative solutions to meet the diverse needs of our clients.
              Whether you're buying, selling, or investing, we're here to make
              your real estate journey smooth and successful.
            </p>
          </section>

          {/* Key Features */}
          <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-semibold text-center mb-12">
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Building className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">
                    Extensive Portfolio
                  </h3>
                  <p className="text-gray-700">
                    Access to a wide range of properties to suit every need and
                    budget.
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-700">
                    Experienced professionals dedicated to your success.
                  </p>
                </div>
                <div className="text-center">
                  <Award className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">
                    Award-Winning Service
                  </h3>
                  <p className="text-gray-700">
                    Recognized for our commitment to client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Members */}
          <section className="py-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  role: "Founder & CEO",
                  image: "https://res.cloudinary.com/dttftmu4m/image/upload/v1740238056/istockphoto-1230749818-612x612_ms0mmk.jpg",
                },
                {
                  name: "Jane Smith",
                  role: "Senior Real Estate Agent",
                  image: "https://res.cloudinary.com/dttftmu4m/image/upload/v1740238056/istockphoto-1230749818-612x612_ms0mmk.jpg",
                },
                {
                  name: "Mike Johnson",
                  role: "Property Manager",
                  image: "https://res.cloudinary.com/dttftmu4m/image/upload/v1740238056/istockphoto-1230749818-612x612_ms0mmk.jpg",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </div>
  );
}

