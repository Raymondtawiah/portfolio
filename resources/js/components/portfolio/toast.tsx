import { CheckCircle, XCircle } from 'lucide-react';

interface ToastProps {
    message: string;
    type?: 'success' | 'error';
    onClose: () => void;
}

export default function Toast({
    message,
    type = 'success',
    onClose,
}: ToastProps) {
    return (
        <div
            onClick={onClose}
            className="fixed top-20 right-6 z-50 flex animate-in cursor-pointer items-center gap-3 rounded-lg border bg-card px-5 py-4 shadow-lg slide-in-from-top-5"
        >
            {type === 'success' ? (
                <CheckCircle className="text-green-500" size={22} />
            ) : (
                <XCircle className="text-red-500" size={22} />
            )}
            <p className="text-sm font-medium">{message}</p>
        </div>
    );
}
