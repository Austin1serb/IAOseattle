import React, { useEffect, useState } from 'react';

const CustomTextField = ({
    label,
    value,
    onChange,
    autoComplete,
    required = false,
    validate,
    errorMessage,
    helperText,
    type,
    className
}: {
    autoComplete?: string;
    label: string;
    value: string;
    type?: string;
    helperText?: string;
    required?: boolean;
    validate?: () => boolean;
    errorMessage?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValidated, setHasValidated] = useState(false);

    useEffect(() => {
        if (value) {
            setHasValidated(true);
            if (validate) validate();
        }
    }, [value, validate]);

    
    const handleBlur = () => {
        setIsFocused(false);
        setHasValidated(true);

        // Trigger the validation logic for this specific field on blur
        if (validate) validate();
    };

    let transformClass = 'translate-y-5 scale-100 top-0 left-3 text-gray-500';
    let textClass = 'text-gray-500';


    if (isFocused || value) {
        transformClass = 'translate-y-4 text-sm -top-2.5 left-3 text-start font-light';
        if (isFocused) {
            if (errorMessage) {
                textClass = 'text-error';
            } else {
                textClass = 'text-blue-600';
            }
        }
    }

    return (
        <div className="flex w-full flex-col">
            <div className="relative mt-4 bg-[#f0f0f0] hover:bg-gray-200 rounded-t-[4px] transition-colors duration-200 group">
                <label
                    htmlFor={label}
                    id={`${label}-label`}
                    className={`absolute w-full h-full text-lg transition-all duration-200 transform ${transformClass} ${textClass} pointer-events-none`}
                >
                    {label} {required && <span>*</span>}
                </label>
                <div className='relative flex items-center justify-center'>
                    <input
                        type={type || 'text'}
                        id={label}
                        value={value}
                        onChange={onChange}
                        autoComplete={autoComplete || "off"}
                        name={label}
                        onFocus={() => setIsFocused(true)}
                        onBlur={handleBlur}
                        required={required}
                        className={`block leading-[90px] w-full px-3 pt-8 text-xl min-h-16 max-h-16 group-hover:border-gray-400 text-gray-700 placeholder-transparent bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-0 relative transition-colors duration-200 ${className}`}
                    />
                    <div className={`absolute  right-0 m-4  text-primary-dark transition-opacity duration-500 ${hasValidated &&required && !errorMessage ? 'opacity-100 ' : ('opacity-0')}`}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                    </div>

                </div>
                <div
                    className={`absolute animate-pulse left-0 bottom-0 w-full h-[2.5px] bg-blue-600 transition-all duration-500 ease-in-out ${isFocused && !errorMessage ? 'scale-x-100' : 'scale-x-0'
                        }`}
                    style={{ transformOrigin: 'center' }}
                ></div>
                {required &&(
           
                <div className="relative">
                    <div
                        className={`absolute  left-0 bottom-0 w-full h-[3px] bg-error  transition-all ${errorMessage && hasValidated ? 'opacity-0 duration-[420ms] ease-in ' : ' animate-pulse opacity-100 duration-500 ease-out'} opacity-100  ${errorMessage ? 'scale-x-100' : 'scale-x-0'
                            }`}
                        style={{ transformOrigin: 'left' }}
                    >
                    </div>
                    <div
                        className={`absolute  left-0 bottom-0 w-full h-[3px] bg-error transition-all  ${errorMessage && hasValidated ? 'opacity-0  duration-[420ms] ease-in' : '  animate-pulse opacity-100 duration-500 ease-out'} opacity-100  ${errorMessage ? 'scale-x-100' : 'scale-x-0'
                            }`}
                        style={{ transformOrigin: 'right' }}
                    >
                    </div>
                </div>
            )}
            </div>
            <p className={`${errorMessage && 'opacity-90 '} opacity-0  text-error text-xs ml-2 font-light transition-opacity duration-300 -mb-4`}>
                {errorMessage}.
            </p>

            <span className={`${!errorMessage && 'opacity-90 '} opacity-0  text-gray-600 text-xs ml-2 font-light transition-opacity duration-200 -mb-4`}>{helperText}</span>

        </div>
    );
};

export default CustomTextField;