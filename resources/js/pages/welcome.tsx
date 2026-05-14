import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

export default function Welcome() {
    return (
        <SiteLayout>
            <Head title="Beyond Well Therapies" />

            {/* Hero */}
            <section
                className="relative flex min-h-105 items-center justify-center bg-[#dfe4dc] bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/hero.jpg)' }}
            >
                <div className="px-6 text-center">
                    <h1 className="text-3xl font-light text-[#6b8a6b] md:text-4xl">
                        Welcome to Beyond Well Therapies!
                    </h1>
                    <p className="mt-4 text-sm text-[#5a6f5a] md:text-base">
                        Virtual/Telehealth Counselling Services
                    </p>
                </div>
            </section>

            {/* Main content */}
            <section className="bg-[#ececec]">
                <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-light text-[#1f1f1f] md:text-4xl">
                            Your Mental Health is a Priority
                        </h2>

                        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[#1f1f1f]">
                            <p>
                                Through our services, we strive to promote mental wellness,
                                resilience, and personal growth. Our team of registered mental
                                health professionals is here to listen, guide, and empower you on
                                your journey towards mental well-being.
                            </p>
                            <p>
                                Your mental health matters, and we're committed to breaking the
                                stigma surrounding mental health challenges. Together, let's create
                                a community that prioritizes self-care, fosters understanding, and
                                supports one another in our mental health journeys.
                            </p>
                            <p>
                                Remember, you're not alone. Reach out to us today and take that
                                important step towards prioritizing your mental health.
                            </p>
                        </div>

                        <a
                            href="/about-us"
                            className="mt-10 inline-flex items-center gap-3 bg-[#0f3d2e] px-7 py-3 text-sm text-white transition-colors hover:bg-[#0a2e22]"
                        >
                            about us
                            <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>

                    <aside className="md:pt-2">
                        <h3 className="text-lg font-semibold text-[#1f1f1f]">Contact Us</h3>
                        <p className="mt-6">
                            <a href="mailto:info@beyond-well.ca" className="text-[#1f1f1f] underline underline-offset-4 hover:text-[#1f4538]">
                                info@beyond-well.ca
                            </a>
                        </p>
                        <p className="mt-4 text-[#1f1f1f]">(604) 982-WELL (9355)</p>
                    </aside>
                </div>
            </section>
        </SiteLayout>
    );
}
