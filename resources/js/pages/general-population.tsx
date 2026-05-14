import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

export default function GeneralPopulation() {
    return (
        <SiteLayout>
            <Head title="General Population" />

            {/* Hero */}
            <section
                className="relative flex min-h-105 items-center bg-[#3a463a] bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/general-hero.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative mx-auto w-full max-w-6xl px-6">
                    <h1 className="text-3xl font-light text-white/70 md:text-5xl">
                        General Population
                    </h1>
                </div>
            </section>

            {/* Main content */}
            <section className="bg-[#ececec]">
                <div className="mx-auto max-w-3xl px-6 py-20">
                    <p className="text-center text-base font-semibold text-[#1f4538]">
                        Your overall health is an investment, not an expense!
                    </p>

                    <div className="mt-24 space-y-6 text-[14px] leading-relaxed text-[#1f4538]">
                        <p>
                            Our team of mental health professionals has the expertise and experience
                            to provide effective care to people from all walks of life. We use a
                            client-centered approach, which means that our clients are the experts
                            in their own lives, and we work collaboratively with them to develop a
                            treatment plan that is tailored to their needs and goals. We believe
                            that everyone deserves access to high-quality mental health support, and
                            we are committed to providing affordable and accessible services to you.
                        </p>

                        <h2 className="pt-4 font-semibold">Rates</h2>
                        <p>Regular session (60 minutes): CAD 168.00</p>
                        <p>Initial Meeting (90 minutes): CAD260.00</p>
                        <p>Short session (30 minutes): CAD 88.00</p>

                        <p className="pt-2">
                            We accept most insurance providers and can do direct billing. We
                            encourage our clients to contact their insurance provider to determine
                            their annual coverage.
                        </p>

                        <p>
                            We believe that everyone deserves access to quality mental health care.
                            As part of our commitment to affordability and inclusivity, we offer a
                            sliding-scale fee structure, based on your income and ability to pay.
                            Please contact us at{' '}
                            <a
                                href="mailto:info@beyond-well.ca"
                                className="underline underline-offset-4 hover:text-[#0f3d2e]"
                            >
                                info@beyond-well.ca
                            </a>{' '}
                            for further information.
                        </p>

                        <h2 className="pt-4 font-semibold">Cancellation &amp; Rescheduling Policy</h2>
                        <ul className="list-disc space-y-2 pl-6 marker:text-[#1f4538]">
                            <li>
                                Cancellations made less than 24 hours before the scheduled
                                appointment will be subject to a cancellation fee of CAD70.00.
                            </li>
                            <li>
                                In the event of a no-show, the client will be charged the full price
                                of the scheduled session.
                            </li>
                            <li>
                                Rescheduling a session within 24 hours is permitted up to 2 times
                                without a cost. Should a session be rescheduled for a third time
                                less than 24 hours of notice, a fee of CAD25.00 will be charged.
                            </li>
                        </ul>

                        <p>There are no exceptions with the cancellation policy.</p>
                    </div>
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
