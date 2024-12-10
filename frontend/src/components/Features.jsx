import { features } from "./CardDetails";
import FloatingComponent from "./FloatingComponent";

export default function Features() {
    return (
        <section id="services" className="w-full h-full bg-[#FFFEFE]">
            <div className="mx-[205px] mt-[150px]">
                <FloatingComponent>
                    <div className="grid lg:grid-cols-12 gap-[32px]">
                        <h1 className="col-span-5 font-montserrat font-bold w-[603px] h-[146px] text-custom-60 leading-custom-73 text-[#2E2F2E]">
                            Our
                            <span className="text-[#FF6812]"> Key Features </span>
                            & Capabilities
                        </h1>
                        <div className="col-span-1"></div>
                        <p className="text-[#888987] col-span-6 font-semibold w-[739px] h-[165px] font-nunito text-custom-24 leading-custom-32 mb-[100px]">
                            Harnessing the power of AI and cloud technologies, our advanced solutions are designed to proactively identify and neutralize threats before they can compromise your digital assets. Delivering adaptive security that evolves with your business, ensuring a resilient and secure digital landscape.
                        </p>

                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[#FCF7F0] col-span-4 w-[482px] h-[386.01px] rounded-custom-40 p-[35px] transition-colors duration-300 hover:bg-[#2E2F2E] group relative "
                            >
                                <div className="mb-24 relative h-12 w-12">
                                    <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                        {feature.defaultSvg}
                                    </div>
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {feature.hoverSvg}
                                    </div>
                                </div>
                                <h3 className="text-3xl text-[#2E2F2E] font-montserrat font-semibold mb-[20px] group-hover:text-[#FCF7F0] transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground font-medium font-nunito text-xl text-[#888987] group-hover: transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </FloatingComponent>
            </div>
        </section>
    );
}
