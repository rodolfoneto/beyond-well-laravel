import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

export default function Contact() {
    return (
        <SiteLayout>
            <Head title="Contact" />

            {/* Hero */}
            <section
                className="relative flex min-h-112 items-center justify-center bg-[#dfe4dc] bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/contact-hero.jpg)' }}
            >
                <div className="px-6 text-center">
                    <p className="mx-auto max-w-xl text-xl leading-snug text-[#1f1f1f] md:text-2xl">
                        Contact Beyond Well Therapies to book your initial session today or simply
                        book online:
                    </p>
                </div>
            </section>

            {/* Contact info */}
            <section className="bg-[#ececec]">
                <div className="mx-auto max-w-2xl px-6 pt-20 pb-12 text-center">
                    <h2 className="text-3xl font-light text-[#1f4538] md:text-4xl">Contact</h2>
                    <p className="mt-8">
                        <a
                            href="mailto:info@beyond-well.ca"
                            className="text-[15px] text-[#1f4538] underline underline-offset-4 hover:text-[#0f3d2e]"
                        >
                            info@beyond-well.ca
                        </a>
                    </p>
                    <p className="mt-4 text-[15px] text-[#1f4538]">(604) 982-WELL(9355)</p>
                </div>
            </section>

            {/* Logo */}
            <section className="bg-[#ececec]">
                <div className="mx-auto max-w-2xl px-6 pb-24">
                    <img
                        src="/images/logo.png"
                        alt="Beyond Well Therapies"
                        className="mx-auto w-full max-w-md"
                    />
                </div>
            </section>
        </SiteLayout>
    );
}
