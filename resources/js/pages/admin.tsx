import { Head } from '@inertiajs/react';

export default function Admin() {
    return (
        <>
            <Head title="Admin" />
            <div className="flex h-full flex-1 flex-col gap-4 p-6">
                <h1 className="text-2xl font-semibold">Admin Area</h1>
                <p className="text-muted-foreground text-sm">
                    Welcome to the administration area. Only users with{' '}
                    <code className="rounded bg-muted px-1 py-0.5 text-xs">is_admin = true</code>{' '}
                    can access this page.
                </p>
            </div>
        </>
    );
}

Admin.layout = {
    breadcrumbs: [
        {
            title: 'Admin',
            href: '/admin',
        },
    ],
};
