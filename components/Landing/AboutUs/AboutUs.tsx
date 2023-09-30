'use client'
import Image from "next/image";

const AboutUs = () => {
    return (
        <section className="pb-20 text-gray-600 body-font font-lexend" id="onama">
            <div className="container flex flex-wrap px-5 py-10 mx-auto">
                <div className="flex flex-wrap content-start mt-auto -mx-4 lg:w-1/2 sm:w-2/3 sm:pr-10">
                    <div className="w-full px-4 mb-6 sm:p-4">
                        <h1 className="mb-6 text-4xl font-medium text-gray-900 title-font">Želite saznati više o nama i našem proizvodu?</h1>
                        <div className="text-lg leading-relaxed">HomeLab pojednostavljuje vaš život čineći vaš dom pametnim i potpuno automatizovanim. Naš centralni kontrolni sistem, HomeLab Hub, lako upravlja svim vašim pametnim uređajima.<br /><br />
                            Naša ponuda se sastoji od 3 paketa koji će, ovisno o paketu koji odaberete, pretvoriti određeni broj vaših kućanskih uređaja u pametne uređaje koristeći Hub Plug nastavak za utičnicu.<br /><br />
                            A znate šta još? Da biste Vaša svjetla kontrolisali putem naše aplikacije sve što je potrebno jest da imate pametnu sijalicu koja se automatski po instalaciji HomeLab Huba povezuje na isti.<br /><br />

                            <span className="font-semibold">Pridružite se revoluciji pametnog doma danas sa HomeLab-om.</span></div>
                    </div>
                    <a href="#kontakt" className="inline-flex px-6 py-2 ml-2 text-lg rounded-full btn">Kontaktirajte Nas</a>
                </div>
                <div className="w-full overflow-hidden rounded-lg lg:w-1/2 sm:mt-0">
                    <Image className="w-full my-auto" alt="hero image smart home" src="images/Landing/aboutus.png" unoptimized width={600} height={300} />
                </div>
            </div>
        </section>
    )
}


export default AboutUs
