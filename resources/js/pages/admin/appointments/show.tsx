import { Form, Head, Link, usePage } from '@inertiajs/react';

type Appointment = {
    id: number;
    name: string;
    email: string;
    phone: string;
    service: string;
    population: string | null;
    preferred_date: string;
    preferred_time: string;
    notes: string | null;
    status: string;
    created_at: string;
    updated_at: string;
};

type FlashProps = {
    flash?: { success?: string };
};

type Props = {
    appointment: Appointment;
    statuses: string[];
};

export default function AppointmentShow({ appointment, statuses }: Props) {
    const { flash } = usePage<FlashProps>().props;

    return (
        <>
            <Head title={`Appointment · ${appointment.name}`} />
            <div className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <Link
                            href="/admin/appointments"
                            className="text-sm text-muted-foreground hover:underline"
                        >
                            &larr; Back to appointments
                        </Link>
                        <h1 className="mt-1 text-2xl font-semibold">{appointment.name}</h1>
                    </div>

                    <Form
                        action={`/admin/appointments/${appointment.id}`}
                        method="delete"
                        options={{ preserveScroll: true }}
                        onBefore={() => confirm('Delete this appointment?')}
                    >
                        <button
                            type="submit"
                            className="rounded border border-red-300 px-3 py-1 text-sm text-red-700 hover:bg-red-50"
                        >
                            Delete
                        </button>
                    </Form>
                </div>

                {flash?.success && (
                    <div className="rounded border border-green-300 bg-green-50 px-4 py-2 text-sm text-green-800">
                        {flash.success}
                    </div>
                )}

                <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-lg border border-border p-5 md:col-span-2">
                        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                            Details
                        </h2>
                        <dl className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                            <Detail label="Email">
                                <a href={`mailto:${appointment.email}`} className="text-primary hover:underline">
                                    {appointment.email}
                                </a>
                            </Detail>
                            <Detail label="Phone">
                                <a href={`tel:${appointment.phone}`} className="text-primary hover:underline">
                                    {appointment.phone}
                                </a>
                            </Detail>
                            <Detail label="Service">{appointment.service}</Detail>
                            <Detail label="Population">{appointment.population ?? '—'}</Detail>
                            <Detail label="Preferred date">{formatDate(appointment.preferred_date)}</Detail>
                            <Detail label="Preferred time">{appointment.preferred_time.slice(0, 5)}</Detail>
                            <Detail label="Submitted">{formatDateTime(appointment.created_at)}</Detail>
                            <Detail label="Last updated">{formatDateTime(appointment.updated_at)}</Detail>
                        </dl>

                        {appointment.notes && (
                            <div className="mt-6">
                                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                    Notes
                                </h3>
                                <p className="mt-2 whitespace-pre-wrap text-sm">{appointment.notes}</p>
                            </div>
                        )}
                    </div>

                    <div className="rounded-lg border border-border p-5">
                        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                            Status
                        </h2>

                        <Form
                            action={`/admin/appointments/${appointment.id}`}
                            method="patch"
                            options={{ preserveScroll: true }}
                            className="space-y-3"
                        >
                            {({ processing }) => (
                                <>
                                    <select
                                        name="status"
                                        defaultValue={appointment.status}
                                        className="w-full rounded border border-border bg-background px-3 py-2 text-sm capitalize"
                                    >
                                        {statuses.map((s) => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full rounded bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
                                    >
                                        {processing ? 'Saving…' : 'Update status'}
                                    </button>
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div>
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
            <dd className="mt-0.5">{children}</dd>
        </div>
    );
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString();
}

function formatDateTime(iso: string) {
    return new Date(iso).toLocaleString();
}

AppointmentShow.layout = {
    breadcrumbs: [
        { title: 'Admin', href: '/admin' },
        { title: 'Appointments', href: '/admin/appointments' },
    ],
};
