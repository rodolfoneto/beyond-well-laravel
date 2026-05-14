import { Form, Head, usePage } from '@inertiajs/react';
import SiteLayout from '@/layouts/site-layout';

type FlashProps = {
    flash?: {
        success?: string;
    };
};

const services = [
    'Initial Meeting (90 minutes)',
    'Regular Session (60 minutes)',
    'Short Session (30 minutes)',
];

const populations = ['General Population', 'Indigenous Population'];

export default function BookAppointment() {
    const { flash } = usePage<FlashProps>().props;
    const presetPopulation =
        typeof window !== 'undefined'
            ? new URLSearchParams(window.location.search).get('population') ?? ''
            : '';

    return (
        <SiteLayout>
            <Head title="Book an Appointment" />

            <section
                className="relative flex min-h-72 items-center justify-center bg-[#dfe4dc] bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/hero.jpg)' }}
            >
                <div className="px-6 text-center">
                    <h1 className="text-3xl font-light text-[#1f4538] md:text-4xl">
                        Book an Appointment
                    </h1>
                    <p className="mt-3 text-sm text-[#5a6f5a] md:text-base">
                        Tell us a little about you and we will get back to you.
                    </p>
                </div>
            </section>

            <section className="bg-[#ececec]">
                <div className="mx-auto max-w-2xl px-6 py-20">
                    {flash?.success && (
                        <div className="mb-8 rounded border border-[#0f3d2e]/30 bg-[#0f3d2e]/5 px-4 py-3 text-sm text-[#0f3d2e]">
                            {flash.success}
                        </div>
                    )}

                    <Form action="/book-appointment" method="post" resetOnSuccess className="space-y-5">
                        {({ processing, errors }) => (
                            <>
                                <Field label="Full name" error={errors.name}>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        autoComplete="name"
                                        className={inputClass}
                                    />
                                </Field>

                                <div className="grid gap-5 md:grid-cols-2">
                                    <Field label="Email" error={errors.email}>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            autoComplete="email"
                                            className={inputClass}
                                        />
                                    </Field>
                                    <Field label="Phone" error={errors.phone}>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            autoComplete="tel"
                                            className={inputClass}
                                        />
                                    </Field>
                                </div>

                                <Field label="Service" error={errors.service}>
                                    <select name="service" required defaultValue="" className={inputClass}>
                                        <option value="" disabled>Select a service</option>
                                        {services.map((s) => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                </Field>

                                <Field label="Population" error={errors.population}>
                                    <select name="population" defaultValue={presetPopulation} className={inputClass}>
                                        <option value="">— optional —</option>
                                        {populations.map((p) => (
                                            <option key={p} value={p}>{p}</option>
                                        ))}
                                    </select>
                                </Field>

                                <div className="grid gap-5 md:grid-cols-2">
                                    <Field label="Preferred date" error={errors.preferred_date}>
                                        <input
                                            type="date"
                                            name="preferred_date"
                                            required
                                            className={inputClass}
                                        />
                                    </Field>
                                    <Field label="Preferred time" error={errors.preferred_time}>
                                        <input
                                            type="time"
                                            name="preferred_time"
                                            required
                                            className={inputClass}
                                        />
                                    </Field>
                                </div>

                                <Field label="Notes" error={errors.notes}>
                                    <textarea
                                        name="notes"
                                        rows={4}
                                        className={inputClass}
                                        placeholder="Tell us anything that may help us prepare for your session."
                                    />
                                </Field>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center gap-3 bg-[#0f3d2e] px-7 py-3 text-sm text-white transition-colors hover:bg-[#0a2e22] disabled:opacity-60"
                                >
                                    {processing ? 'Sending…' : 'Request appointment'}
                                    <span aria-hidden="true">&rarr;</span>
                                </button>
                            </>
                        )}
                    </Form>
                </div>
            </section>
        </SiteLayout>
    );
}

const inputClass =
    'w-full border border-[#1f4538]/30 bg-white px-3 py-2 text-sm text-[#1f1f1f] outline-none focus:border-[#0f3d2e] focus:ring-1 focus:ring-[#0f3d2e]';

function Field({
    label,
    error,
    children,
}: {
    label: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <label className="block">
            <span className="mb-1 block text-sm text-[#1f4538]">{label}</span>
            {children}
            {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
        </label>
    );
}
