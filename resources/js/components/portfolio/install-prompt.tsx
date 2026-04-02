import { Download, Share } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [visible, setVisible] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
        setIsIOS(isIOSDevice);

        if (isIOSDevice && !localStorage.getItem('ios-install-dismissed')) {
            setVisible(true);
            return;
        }

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

    function handleDismiss() {
        setVisible(false);
        if (isIOS) {
            localStorage.setItem('ios-install-dismissed', 'true');
        }
    }

    if (!visible) return null;

    if (isIOS) {
        return (
            <div className="fixed top-20 right-6 left-6 z-50 mx-auto max-w-sm animate-in rounded-lg border bg-card p-5 shadow-lg slide-in-from-top-5">
                <div className="flex items-start gap-3">
                    <Share className="mt-0.5 text-primary" size={22} />
                    <div className="flex-1">
                        <p className="text-sm font-medium">Install this app</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                            Tap <Share className="inline h-3 w-3" /> then{' '}
                            <strong>Add to Home Screen</strong> to install.
                        </p>
                    </div>
                    <button
                        onClick={handleDismiss}
                        className="text-xs text-muted-foreground hover:text-foreground"
                    >
                        Later
                    </button>
                </div>
            </div>
        );
    }

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
                onClick={handleDismiss}
                className="text-xs text-muted-foreground hover:text-foreground"
            >
                Later
            </button>
        </div>
    );
}
