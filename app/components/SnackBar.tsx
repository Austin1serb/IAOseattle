import React, { useEffect, useState } from 'react';

interface SnackbarProps {
    message: string;
    open: boolean;
    duration?: number; // Duration in milliseconds
    onClose: () => void; // Function to call when the Snackbar closes
    actionLabel?: string; // Label for the action button (e.g., "UNDO")
    onAction?: () => void; // Function to call when the action button is clicked
}

const Snackbar: React.FC<SnackbarProps> = ({
    message,
    open,
    duration = 3000,
    onClose,
    actionLabel,
    onAction,
}) => {
    const [visible, setVisible] = useState(open);

    useEffect(() => {
        if (open) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                setTimeout(onClose, 300);
            }, duration);

            return () => clearTimeout(timer);
        } else {
            setVisible(false);
        }
    }, [open, duration, onClose]);

    return (
        <div
            className={`fixed z-[1400] flex items-center justify-start bottom-6 left-6 right-auto
            transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} 
            transition-all  duration-300 ease-in-out`}
        >
            <div
                className="bg-gray-900 text-white px-6 py-3 rounded shadow-md flex items-center space-x-4"
                role="alert"
                style={{ transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
                <span>{message}</span>
                {actionLabel && (
                    <button
                        type='button'
                        onClick={() => {
                            if (onAction) onAction();
                        }}
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                    >
                        {actionLabel}
                    </button>
                )}
                <button
                    onClick={() => setVisible(false)}
                    className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                    aria-label="close"
                >
                    <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Snackbar;