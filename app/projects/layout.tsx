import { useEffect } from 'react';

export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.commento.io/js/commento.js';
        script.defer = true;
        document.body.appendChild(script);
    }, []);

	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
			{children}
		</div>
	);
}
