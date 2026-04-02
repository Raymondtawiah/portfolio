import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setVisible(true);
        };
        window.addEventListener('beforeinstallprompt', handler);
        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    async function handleInstall() {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setVisible(false);
        }
        setDeferredPrompt(null);
    }

    if (!visible) return null;

    return (
        <div className="fixed top-20 right-6 z-50 flex animate-in items-center gap-3 rounded-lg border bg-card px-5 py-4 shadow-lg slide-in-from-top-5">
            <Download className="text-primary" size={22} />
            <div>
                <p className="text-sm font-medium">Install this app</p>
                <p className="text-xs text-muted-foreground">
                    Add to home screen for quick access
                </p>
            </div>
            <button
                onClick={handleInstall}
                className="ml-3 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
                Install
            </button>
            <button
                onClick={() => setVisible(false)}
                className="text-xs text-muted-foreground hover:text-foreground"
            >
                Later
            </button>
        </div>
    );
}
