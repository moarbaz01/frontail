"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers, Zap, Code2, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";

interface ServiceProps {
    service: {
        id: number;
        title: string;
        slug: string;
        image: string;
        overview: string;
        whatWeOffer: string[];
        process: string[];
        whyChooseUs: string[];
        technologies: string[];
        cta: {
            title: string;
            subtitle: string;
            buttonText: string;
        };
    };
}

const ServiceDetailsView: React.FC<ServiceProps> = ({ service }) => {
    const router = useRouter();

    return (
        <div className=" min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden ">
                <div className="absolute inset-0 bg-grid-black/[0.02] -z-[1]" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
                            {service.title}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            {service.title} that <span className="text-primary">Scales</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {service.overview}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <button
                                onClick={() => router.push("/contact")}
                                className="btn-3d px-8 py-4 bg-primary text-white rounded-md font-bold text-lg flex items-center gap-2"
                            >
                                Start Project <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Left Column: What We Offer */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <Layers className="text-primary w-8 h-8" />
                                What We Offer
                            </h2>
                            <div className="space-y-6">
                                {service.whatWeOffer.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 p-4 rounded-md hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 hover:scale-[1.02]"
                                    >
                                        <div className="mt-1 bg-primary/10 p-2 rounded-md text-primary">
                                            <Zap className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{item}</h3>
                                            <p className="text-gray-500 text-sm">Comprehensive solution optimized for growth.</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column: Why Choose Us & Tech */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-900 text-white p-8 rounded-md relative overflow-hidden shadow-xl"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                                    <Rocket className="text-primary w-6 h-6" />
                                    Why Choose Us?
                                </h2>
                                <ul className="space-y-4 relative z-10">
                                    {service.whyChooseUs.map((reason, index) => (
                                        <li key={index} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                            <span>{reason}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Code2 className="text-gray-700 w-6 h-6" />
                                    Tech Stack
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {service.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-600 font-medium text-sm shadow-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
                        <p className="text-gray-600">A streamlined process to take you from idea to launch.</p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Mobile hidden, Desktop visible) */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />

                        <div className="space-y-12">
                            {service.process.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.split('–')[0]}</h3>
                                        <p className="text-gray-600 leading-relaxed">{step.split('–')[1] || step}</p>
                                    </div>

                                    <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold shadow-lg shadow-primary/30 border-4 border-white">
                                        {index + 1}
                                    </div>

                                    <div className="flex-1" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-primary rounded-md p-12 md:p-16 text-white relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">{service.cta.title}</h2>
                            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                                {service.cta.subtitle}
                            </p>
                            <button
                                onClick={() => router.push("/contact")}
                                className="btn-3d-light px-8 py-4 bg-white text-primary rounded-md font-bold text-lg"
                            >
                                {service.cta.buttonText}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailsView;
