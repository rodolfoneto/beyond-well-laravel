import { Head } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

type TeamMember = {
    name: string;
    title: string;
    image: string;
    bio: string[];
};

const team: TeamMember[] = [
    {
        name: 'Taciana Velasco, MSW, RSW',
        title: 'REGISTERED MASTER SOCIAL WORKER',
        image: '/images/team/taciana.jpg',
        bio: [
            "Hello, I'm Taciana Velasco. I respectfully acknowledge that I live, work, and play on the traditional unceded territories of the Coast Salish peoples — specifically the Semiahmoo, Katzie, Kwantlen, Kwikwetlem, Qayqayt, and Tsawwassen First Nations.",
            'My cultural background is rooted in Pardo Brazilian ethnicity, a blended European, Native and African ancestries. I have a genuine affinity for collaborating with individuals from varied cultural backgrounds and walks of life, including Indigenous communities.',
            "Holding a Master's degree in Social Work from The University of British Columbia and a specialization in Child Welfare during my Bachelor's studies from the University of the Fraser Valley, I bring over fifteen years of experience in the field of human services. Across various positions within child welfare, health care and psychiatric settings, I've supported children, youth and families navigating different life challenges including, substance misuse, mental health concerns, abuse, neglect, trauma, poverty, intimate-partner violence, parent-adolescent relationship issues, self-harming & suicidal ideation concerns, and more. My experience also encompasses team leadership, group facilitation, and mentoring.",
            'My focus now extends to guiding adults and seniors navigate generational trauma, relationship complexities, loneliness, separation & divorce, stress & burn-out, attachment issues, emotional dysregulation, ADHD challenges, and a diverse range of mental health illness, especially those related to depression, anxiety and obsessive-compulsive disorder (OCD). My passion also lies in advocating and supporting parents dealing with child protection challenges.',
            'Furthermore, my therapeutic approach integrates a few models, including Attachment-Based Therapy, Solution-Focused Brief Therapy (SFBT), Narrative Therapy, Filial Therapy, Emotionally-Focused Family Therapy (EFFT), Cognitive Behavioural Therapy (CBT) and Dialectical Behavioural Therapy (DBT). Guiding my practice, I use an anti-oppressive, strength-based, trauma-informed, and client-centered framework.',
            'Beyond my profession, I cherish family time, connection with nature, exploration of world cuisines and the restorative power of relaxation.',
            'I am here to facilitate your journey towards wellness and inner reconnection.',
            'Obrigada (Thank-You)!',
        ],
    },
    {
        name: 'Nicole Big Sorrel Horse, MSW, RSW',
        title: 'REGISTERED MASTER SOCIAL WORKER',
        image: '/images/team/nicole.jpg',
        bio: [
            "Okii, my name is Nicole Big Sorrel Horse, I am a registered social worker from the Blood and Siksika nation. I am a registered member of Xaxli'p First Nation with a Master in Social Work from the University of British Columbia Okanagan with over 9 years of experience working in the health field. I currently reside on the traditional unceded territory of the Syilx Nation. My passion is to provide a holistic healing approach grounded in all areas of wellness (mental, spiritual, emotional and physical well being). My practice is to walk alongside, together with individuals, supporting and assisting with healing in areas of anxiety, childhood trauma, chronic health conditions, new diagnosis and grief & loss.",
            'Clients will experience a relaxed, safe and supported environment, with a culturally sensitives lens from an Indigenous perspective. As an Indigenous counsellor, I understand the barriers to finding a counsellor and I have experience decolonizing traditional therapeutic techniques to work for Indigenous individuals, families, youth and communities. The therapeutic approaches, I utilize include Self Regulation Therapy (SRT), motivational interviewing, and Cognitive Behavior Therapy.',
        ],
    },
];

export default function OurTeam() {
    return (
        <SiteLayout>
            <Head title="Our Team" />

            <section className="bg-[#ececec]">
                <div className="mx-auto max-w-3xl px-6 py-20">
                    {team.map((member, index) => (
                        <div key={member.name}>
                            {index > 0 && (
                                <div className="my-16 flex justify-center">
                                    <span className="block h-px w-10 bg-[#1f4538]" />
                                </div>
                            )}
                            <TeamMemberBlock member={member} />
                        </div>
                    ))}

                    <div className="mt-24">
                        <h2 className="text-3xl font-light text-[#1f1f1f] md:text-4xl">Join us!</h2>
                        <p className="mt-8 text-[15px] leading-relaxed text-[#1f4538]">
                            We are growing fast! If you are a Master level (MSW) registered social
                            worker (RSW) looking for a new opportunity, please send your resume to{' '}
                            <a
                                href="mailto:info@beyond-well.ca"
                                className="underline underline-offset-4 hover:text-[#0f3d2e]"
                            >
                                info@beyond-well.ca
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}

function TeamMemberBlock({ member }: { member: TeamMember }) {
    return (
        <article>
            <img
                src={member.image}
                alt={member.name}
                className="h-32 w-32 object-cover"
                loading="lazy"
            />

            <h2 className="mt-6 text-base text-[#1f1f1f]">{member.name}</h2>

            <p className="mt-8 text-xs tracking-[0.18em] text-[#1f4538] uppercase">
                {member.title}
            </p>

            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-[#1f4538]">
                {member.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
            </div>
        </article>
    );
}
