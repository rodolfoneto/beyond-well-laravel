import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

export default function IndigenousPopulation() {
    return (
        <SiteLayout>
            <Head title="Indigenous Population" />

            {/* Hero */}
            <section
                className="relative flex min-h-105 items-center bg-[#3a463a] bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/indigenous-hero.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative mx-auto w-full max-w-6xl px-6">
                    <h1 className="text-3xl font-light text-white md:text-5xl">
                        Indigenous Population
                    </h1>
                </div>
            </section>

            {/* Main content */}
            <section className="bg-[#ececec]">
                <div className="mx-auto max-w-2xl px-6 py-24 text-center">
                    <p className="text-[15px] leading-relaxed text-[#1f4538]">
                        Our team is committed to working collaboratively with Indigenous communities
                        and respecting cultural values, traditions, and spiritual well-being. We
                        understand that mental health experiences can be unique and complex, and we
                        are committed to providing individualized care that meets the specific needs
                        of our Indigenous clients. Our registered mental health professionals who
                        have experience working with Indigenous clients are committed to ongoing
                        training and development in cultural competency. Our approach is rooted in
                        cultural humility, and we strive to create a safe and supportive space for
                        Indigenous clients to heal and grow.
                    </p>

                    <p className="mt-8 text-[15px] leading-relaxed text-[#1f4538]">
                        We are proud to accept the First Nations Health Authority (FNHA) Benefits
                        Program. For further information, please do not hesitate in contacting us
                        at{' '}
                        <a
                            href="mailto:info@beyond-well.ca"
                            className="underline underline-offset-4 hover:text-[#0f3d2e]"
                        >
                            info@beyond-well.ca
                        </a>
                    </p>
                </div>
            </section>

            {/* Contact */}
            <section className="bg-[#ececec]">
                <div className="mx-auto max-w-2xl px-6 pb-24 text-center">
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
        </SiteLayout>
    );
}
