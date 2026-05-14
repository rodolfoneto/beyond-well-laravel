import { Link } from '@inertiajs/react';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

type MenuKey = 'about' | 'services' | null;

type DropdownItem = { label: string; href: string };

export default function SiteLayout({ children }: PropsWithChildren) {
    const [openMenu, setOpenMenu] = useState<MenuKey>(null);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setOpenMenu(null);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    function toggle(menu: Exclude<MenuKey, null>) {
        setOpenMenu((current) => (current === menu ? null : menu));
    }

    return (
        <div className="min-h-screen bg-white text-[#1f1f1f]">
            <header className="relative z-20 bg-white">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
                    <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tight text-[#1f4538]">
                        <img
                            src="/images/logo.png"
                            alt="Beyond Well Therapies"
                            className="h-10 w-10 object-contain"
                        />
                        Beyond Well Therapies
                    </Link>

                    <nav ref={navRef} className="hidden items-center gap-10 text-base text-[#1f4538] md:flex">
                        <DropdownTrigger
                            label="about us"
                            isOpen={openMenu === 'about'}
                            onClick={() => toggle('about')}
                            items={[
                                { label: 'about us', href: '/about-us' },
                                { label: 'our team', href: '/our-team' },
                            ]}
                        />
                        <DropdownTrigger
                            label="services"
                            isOpen={openMenu === 'services'}
                            onClick={() => toggle('services')}
                            items={[
                                { label: 'services', href: '/services' },
                                { label: 'indigenous population', href: '/indigenous-population' },
                                { label: 'general population', href: '/general-population' },
                            ]}
                        />
                        <Link href="/contact" className="hover:text-[#0f3d2e]">
                            contact
                        </Link>
                    </nav>
                </div>
            </header>

            {children}

            <footer className="bg-[#ececec]">
                <div className="mx-auto max-w-6xl px-6 pb-12">
                    <div className="flex gap-8 text-sm text-[#1f1f1f]">
                        <Link href="/services" className="hover:text-[#1f4538]">services</Link>
                        <Link href="/contact" className="hover:text-[#1f4538]">contact</Link>
                    </div>
                    <p className="mt-6 text-sm text-[#1f1f1f]">© 2026 &nbsp;Beyond Well Therapies</p>
                </div>
            </footer>
        </div>
    );
}

function DropdownTrigger({
    label,
    isOpen,
    onClick,
    items,
}: {
    label: string;
    isOpen: boolean;
    onClick: () => void;
    items: DropdownItem[];
}) {
    return (
        <div className="relative">
            <button
                type="button"
                onClick={onClick}
                aria-expanded={isOpen}
                className={`inline-flex items-center gap-2 pb-1 transition-colors hover:text-[#0f3d2e] ${
                    isOpen ? 'border-b-2 border-[#0f3d2e] text-[#0f3d2e]' : ''
                }`}
            >
                {label}
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 10 10"
                    fill="none"
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                >
                    <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full left-1/2 z-30 mt-3 -translate-x-1/2">
                    <div className="mx-auto h-0 w-0 border-r-12 border-b-12 border-l-12 border-r-transparent border-b-[#1f4538] border-l-transparent" />
                    <div className="min-w-65 bg-[#1f4538] px-10 py-8">
                        <ul className="flex flex-col items-center gap-6 text-white">
                            {items.map((item) => (
                                <li key={item.label} className="text-center">
                                    <Link href={item.href} className="block text-base whitespace-nowrap hover:opacity-80">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
