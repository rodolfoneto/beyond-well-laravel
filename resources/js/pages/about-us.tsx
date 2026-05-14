import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

export default function AboutUs() {
    return (
        <SiteLayout>
            <Head title="About Beyond Well Therapies" />

            {/* Hero */}
            <section
                className="relative flex min-h-105 items-center bg-[#3a463a] bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/about-hero.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative mx-auto w-full max-w-6xl px-6">
                    <h1 className="text-3xl font-light text-white md:text-5xl">
                        About Beyond Well Therapies
                    </h1>
                </div>
            </section>

            {/* Main content */}
            <section className="bg-[#ececec]">
                <div className="mx-auto max-w-3xl px-6 py-24">
                    <h2 className="text-center text-2xl font-semibold text-[#1f4538] md:text-3xl">
                        Welcome to Beyond Well Therapies!
                    </h2>

                    <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-[#1f4538]">
                        <p>
                            First, we would like to raise our hands in thanks to the Katzie,
                            Semiahmoo, Kwantlen and other Coast Salish Peoples for allowing us
                            to learn, work and play on their land!
                        </p>

                        <p>
                            At Beyond Well Therapies, we are committed to providing compassionate
                            and evidence-based mental health services to help individuals overcome
                            challenges and achieve greater well-being. Our team of licensed mental
                            health professionals has extensive experience working with clients from
                            diverse backgrounds and cultures, and we are dedicated to ongoing
                            training and development in cultural competency.
                        </p>

                        <p>
                            Born in October 2021, Beyond Well Therapies offers counselling and
                            therapy services with experienced and compassionate mental health
                            professionals who specialize in a range of mental health concerns!
                        </p>

                        <p>
                            Our registered mental health providers use research-supported
                            techniques and treatments to help you achieve your goals. Our services
                            cover various areas, including trauma recovery, grief and loss,
                            depression, anxiety, relationship challenges, and personal growth. We
                            offer individual sessions, tailoring our services to meet the specific
                            needs of each client. We use different types of therapy models,
                            including Cognitive Behavioural Therapy (CBT), Dialectical Behavioural
                            Therapy (DBT), Attachment-Based Therapy, Emotion-Based Family Therapy
                            (EFFT) and Solution-Focused Brief Therapy.
                        </p>

                        <p className="pt-2 font-semibold">Telehealth Services</p>

                        <p>
                            At Beyond Well Therapies, we offer telehealth services with experienced
                            mental health professionals who are dedicated to providing personalized
                            care and support. Telehealth services can provide many benefits,
                            including increased convenience, reduced travel time and expenses, and
                            the ability to receive care that fits into your busy schedule, without
                            leaving home.
                        </p>

                        <p>
                            Beyond Well Therapies is here to provide compassionate care and
                            support. We invite you to book your initial session today!
                        </p>

                        <p>
                            Contact us at{' '}
                            <a
                                href="mailto:info@beyond-well.ca"
                                className="underline underline-offset-4 hover:text-[#0f3d2e]"
                            >
                                info@beyond-well.ca
                            </a>
                        </p>
                    </div>

                    <a
                        href="#"
                        className="mt-10 inline-flex items-center gap-3 bg-[#0f3d2e] px-7 py-3 text-sm text-white transition-colors hover:bg-[#0a2e22]"
                    >
                        services
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </section>
        </SiteLayout>
    );
}
