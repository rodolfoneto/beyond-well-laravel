import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

const benefits = [
    'Improved mental health and well-being',
    'Emotional support and a non-judgmental space',
    'Practical coping skills for life challenges',
    'Increased self-awareness and understanding',
    'Better communication and relationship skills',
    'Reduction of symptoms for mental health conditions',
    'Enhanced problem-solving abilities',
    'Greater emotional resilience',
    'Stress reduction and improved relaxation techniques',
    'Facilitation of personal growth and development',
    'Potential positive impact on physical health',
    'Overall improved quality of life and satisfaction',
];

const focusAreas = [
    'Anxiety Disorders',
    'Mood/Depressive Disorders',
    'Oppositional Defiant Disorder (ODD)',
    'ADHD',
    'Relationship Complications',
    'Life Transitions & Personal Growth',
    'Loneliness',
    'Separation & Divorce',
    'Life Transitions',
    'Child Welfare Issues',
    'Grief and Loss',
    'Attachment Issues',
    'Low-Moderate Suicidal Ideation',
    'Parent-teen Conflict',
    'Mental Health Assessments',
];

export default function Services() {
    return (
        <SiteLayout>
            <Head title="Services" />

            {/* Hero */}
            <section
                className="relative flex min-h-105 items-center justify-center bg-[#dfe4dc] bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/services-hero.jpg)' }}
            >
                <div className="px-6 text-center">
                    <h1 className="text-3xl font-light text-[#1f4538] md:text-4xl">
                        Boost your Mental Health a Priority
                    </h1>
                    <div className="mt-8">
                        <a
                            href="/book-appointment"
                            className="inline-flex items-center gap-3 bg-[#0f3d2e] px-7 py-3 text-sm text-white transition-colors hover:bg-[#0a2e22]"
                        >
                            book it now
                            <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="bg-[#ececec]">
                <div className="mx-auto max-w-3xl px-6 py-20">
                    {/* Quote */}
                    <blockquote className="text-center">
                        <p className="text-[15px] leading-relaxed text-[#1f4538]">
                            "...We cannot say goodbye to a problem until at first we have said hello".
                        </p>
                        <footer className="mt-4 text-[13px] text-[#1f4538]">
                            Gerry Oleman — Elder, traditional knowledge keeper, mentor, storyteller,
                            healer, and educator.
                        </footer>
                    </blockquote>

                    {/* What is Integrative Therapy */}
                    <div className="mt-20">
                        <h2 className="text-lg font-semibold text-[#1f1f1f]">
                            What is Integrative Therapy?
                        </h2>
                        <p className="mt-6 text-[15px] leading-relaxed text-[#1f4538]">
                            Integrative therapy also known as integrative psychotherapy, is an
                            approach to counselling and psychotherapy that combines various
                            techniques and theories from different therapeutic models. It takes
                            into account a personalized treatment plan for each individual,
                            considering their unique needs and preferences. This approach looks at
                            the whole person, including their thoughts, emotions, behaviors, and
                            relationships, and emphasizes the importance of a strong therapeutic
                            relationship. Integrative therapy is evidence-based and can be used
                            for a wide range of psychological issues, with a focus on cultural
                            sensitivity and flexibility in treatment length and goals.
                        </p>
                    </div>

                    {/* Benefits */}
                    <div className="mt-12">
                        <h2 className="text-lg font-semibold text-[#1f1f1f]">
                            What are the benefits?
                        </h2>
                        <p className="mt-6 text-[15px] leading-relaxed text-[#1f4538]">
                            Engaging in counselling or therapy sessions can offer a wide range of
                            benefits for individuals seeking support for their mental and emotional
                            well-being. Here are some of the key benefits:
                        </p>
                        <ul className="mt-6 list-disc space-y-2 pl-6 text-[15px] leading-relaxed text-[#1f4538] marker:text-[#1f4538]">
                            {benefits.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="mt-12">
                        <h2 className="text-lg font-semibold text-[#1f1f1f]">Our Services</h2>
                        <p className="mt-6 text-[15px] leading-relaxed text-[#1f4538]">
                            Our service covers various areas, including trauma recovery, grief and
                            loss, depression, anxiety, relationship challenges, life issues,
                            separation & divorce, child welfare issues, parent-teen conflict, suicide
                            ideation, attachment issues, and personal growth. We offer individual
                            counselling and therapy sessions, tailoring our services to meet the
                            specific needs of each client. As our practice, we employ an{' '}
                            <strong>integrative therapy model</strong> that draws upon various
                            therapeutic approaches, including Cognitive Behavioural Therapy (CBT),
                            Dialectical Behavioural Therapy (DBT), Attachment-Based Therapy,
                            Emotion-Focused Family Therapy (EFFT), and Solution-Focused Brief
                            Therapy. We firmly believe in the importance of recognizing that you
                            are the expert of your own life. Our goal is to support you in gaining
                            insight, developing effective coping strategies, and fostering meaningful
                            change in your life. Together, we will work towards instilling a greater
                            sense of well-being, resilience, and empowerment.
                        </p>
                    </div>

                    {/* Areas of Focus */}
                    <div className="mt-12">
                        <h2 className="text-lg font-semibold text-[#1f1f1f]">Areas of Focus:</h2>
                        <ul className="mt-6 list-disc space-y-2 pl-6 text-[15px] leading-relaxed text-[#1f4538] marker:text-[#1f4538]">
                            {focusAreas.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Telehealth Services */}
                    <div className="mt-12">
                        <h2 className="text-lg font-semibold text-[#1f1f1f]">Telehealth Services</h2>
                        <p className="mt-6 text-[15px] leading-relaxed text-[#1f4538]">
                            At Beyond Well Therapies, we offer telehealth services with experienced
                            mental health professionals who are dedicated to providing personalized
                            care and support. Telehealth services can provide many benefits, including
                            increased convenience, reduced travel time and expenses, and the ability
                            to receive care that fits into your busy schedule, from the comfort of
                            your home. We are here for audio visits and video meetings.
                        </p>
                        <p className="mt-6 text-[15px] leading-relaxed text-[#1f4538]">
                            Beyond Well Therapies is here to provide compassionate care and support.
                        </p>
                        <p className="mt-6 text-[15px] leading-relaxed text-[#1f4538]">
                            We invite you to book your initial session today!
                        </p>
                        <p className="mt-6">
                            <a
                                href="mailto:info@beyond-well.ca"
                                className="text-[15px] text-[#1f4538] underline underline-offset-4 hover:text-[#0f3d2e]"
                            >
                                info@beyond-well.ca
                            </a>
                        </p>
                    </div>

                    {/* Booking buttons */}
                    <div id="book" className="mt-16 flex flex-col items-center gap-6">
                        <a
                            href="/book-appointment?population=General+Population"
                            className="flex w-56 flex-col items-center bg-[#0f3d2e] px-7 py-4 text-sm text-white transition-colors hover:bg-[#0a2e22]"
                        >
                            <span>book it now</span>
                            <span className="mt-1 text-xs opacity-90">general population</span>
                        </a>
                        <a
                            href="/book-appointment?population=Indigenous+Population"
                            className="flex w-56 flex-col items-center bg-[#0f3d2e] px-7 py-4 text-sm text-white transition-colors hover:bg-[#0a2e22]"
                        >
                            <span>book it now</span>
                            <span className="mt-1 text-xs opacity-90">indigenous population</span>
                        </a>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
