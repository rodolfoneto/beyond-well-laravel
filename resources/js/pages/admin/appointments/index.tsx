import { Head, Link, router } from '@inertiajs/react';

type Appointment = {
    id: number;
    name: string;
    email: string;
    phone: string;
    service: string;
    population: string | null;
    preferred_date: string;
    preferred_time: string;
    status: string;
    created_at: string;
};

type Paginated<T> = {
    data: T[];
    links: { url: string | null; label: string; active: boolean }[];
    from: number | null;
    to: number | null;
    total: number;
};

type Props = {
    appointments: Paginated<Appointment>;
    filters: { status: string | null };
    statuses: string[];
};

export default function AppointmentsIndex({ appointments, filters, statuses }: Props) {
    function applyFilter(status: string | null) {
        router.get(
            '/admin/appointments',
            status ? { status } : {},
            { preserveState: true, replace: true }
        );
    }

    return (
        <>
            <Head title="Appointments" />
            <div className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Appointments</h1>
                    <span className="text-sm text-muted-foreground">
                        {appointments.total} total
                    </span>
                </div>

                <div className="flex flex-wrap gap-2">
                    <FilterChip
                        label="all"
                        active={!filters.status}
                        onClick={() => applyFilter(null)}
                    />
                    {statuses.map((s) => (
                        <FilterChip
                            key={s}
                            label={s}
                            active={filters.status === s}
                            onClick={() => applyFilter(s)}
                        />
                    ))}
                </div>

                <div className="overflow-hidden rounded-lg border border-border">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                            <tr>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Service</th>
                                <th className="px-4 py-3">Preferred</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.data.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                                        No appointments yet.
                                    </td>
                                </tr>
                            ) : (
                                appointments.data.map((a) => (
                                    <tr key={a.id} className="border-t border-border">
                                        <td className="px-4 py-3">
                                            <div className="font-medium">{a.name}</div>
                                            <div className="text-xs text-muted-foreground">{a.email}</div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div>{a.service}</div>
                                            {a.population && (
                                                <div className="text-xs text-muted-foreground">{a.population}</div>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {formatDate(a.preferred_date)}
                                            <span className="ml-2 text-xs text-muted-foreground">
                                                {a.preferred_time.slice(0, 5)}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <StatusBadge status={a.status} />
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <Link
                                                href={`/admin/appointments/${a.id}`}
                                                className="text-sm text-primary hover:underline"
                                            >
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {appointments.links.length > 3 && (
                    <div className="flex flex-wrap gap-2">
                        {appointments.links.map((link, i) => (
                            <Link
                                key={i}
                                href={link.url ?? '#'}
                                preserveState
                                className={`rounded border px-3 py-1 text-sm ${
                                    link.active
                                        ? 'border-primary bg-primary text-primary-foreground'
                                        : 'border-border'
                                } ${!link.url ? 'pointer-events-none opacity-40' : ''}`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`rounded-full border px-3 py-1 text-xs capitalize ${
                active
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border text-muted-foreground hover:border-primary/50'
            }`}
        >
            {label}
        </button>
    );
}

function StatusBadge({ status }: { status: string }) {
    const colors: Record<string, string> = {
        pending: 'bg-yellow-100 text-yellow-800',
        confirmed: 'bg-green-100 text-green-800',
        cancelled: 'bg-red-100 text-red-800',
        completed: 'bg-blue-100 text-blue-800',
    };

    return (
        <span className={`inline-block rounded px-2 py-0.5 text-xs capitalize ${colors[status] ?? 'bg-gray-100 text-gray-800'}`}>
            {status}
        </span>
    );
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString();
}

AppointmentsIndex.layout = {
    breadcrumbs: [
        { title: 'Admin', href: '/admin' },
        { title: 'Appointments', href: '/admin/appointments' },
    ],
};
