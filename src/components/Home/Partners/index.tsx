"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Digir", logo: "/partners/digirlogo.png" },
  { name: "Geto", logo: "/partners/getologo.png" },
  { name: "Kirastore", logo: "/partners/kirastorelogo.png" },
  { name: "Master Topic", logo: "/partners/mastertopic.png" },
  { name: "Oh Shakes", logo: "/partners/ohshakeslogo.png" },
  { name: "Travel", logo: "/partners/travellogo.png" },
  { name: "Zoland", logo: "/partners/zolandlogo.png" },
];

const Partners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re proud to work with amazing companies and help them achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center h-20 w-20   rounded-full  hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={120}
                className=" rounded-full h-full  transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;