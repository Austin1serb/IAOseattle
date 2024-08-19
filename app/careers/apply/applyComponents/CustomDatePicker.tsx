import React, { useState, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({
    label,
    value,
    onChange,
    type='date',
    required = false,
    validate,
    errorMessage,
    helperText,
}: {
    autoComplete?: string;
    label: string;
    value: string;
    type?: string;
    maxLength?: number;
    required?: boolean;
    helperText?: string;
    validate?: (value: string) => boolean;
    errorMessage?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValidated, setHasValidated] = useState(false);

    // NEEDS TO BE HERE FOR VALIDATION EFFECTS
    const isValid = useMemo(() => {
        if (!hasValidated) return true;
        return validate ? validate(value) : true;
    }, [value, hasValidated, validate]);

    const handleBlur = () => {
        setIsFocused(false);
        setHasValidated(true);
        console.log(errorMessage);
    };


    const handleFocus = () => {
        setIsFocused(true);
    };
    return (
        <div className="flex w-full flex-col">
            <div className="relative mt-4 bg-[#F0F0F0] hover:bg-gray-200 rounded-t-[4px] transition-colors group  duration-200">
                <label
                    htmlFor={label}
                    id={`${label}-label`}
                    className={`absolute text-lg transition-all duration-200 transform ${isFocused || value || type === 'date'
                        ? `translate-y-4 text-sm -top-2.5 left-3 text-start ${isFocused ? (errorMessage ? 'text-error' : 'text-blue-600') : 'text-gray-500'} font-light`
                        : 'translate-y-5 scale-100 top-0 left-3 text-gray-500'
                        } pointer-events-none `}
                >
                    {label}  {required && <span>*</span>}
                </label>
                <div className="date-picker relative w-full">
                    <DatePicker
                        name={label}
                        id={label}
                        selected={value ? new Date(value) : null}
                        onChange={(date: Date | null, event: React.SyntheticEvent<any> | undefined) => {
                            if (date) {
                                onChange({ target: { value: date.toISOString().split('T')[0] } } as React.ChangeEvent<HTMLInputElement>);
                            }
                        }} dateFormat="MM-dd-yyyy"
                        className="block  w-full px-3 pt-8 text-base min-h-16 max-h-16 group-hover:border-gray-400 text-gray-700 placeholder-tranparent bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-0 relative transition-colors duration-200 cursor-pointer"
                        showYearDropdown
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        showMonthDropdown
                        dropdownMode="select"
                        wrapperClassName="w-full"
                        placeholderText='MM-DD-YYYY'
                        required={required}
                    />

                    {/* Calendar Icon */}
                    <div className={`absolute right-2.5 top-4 pointer-events-none text-blue-500 hover:text-blue-600 bg-slate-200 p-2 rounded-full transition-colors duration-300 group-hover:bg-gray-100 z-10 flex items-center justify-center  ${!errorMessage && hasValidated ? 'text-primary-dark' : errorMessage && 'text-error'}`}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12-5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg>
                    </div>
                </div>
                <div
                    className={`absolute animate-pulse left-0 bottom-0 w-full h-[2.5px] bg-blue-600 transition-all duration-500 ease-in-out ${isFocused && !errorMessage ? 'scale-x-100' : 'scale-x-0'
                        }`}
                    style={{ transformOrigin: 'center' }}
                ></div>
                <div className="relative
animate-pulse">
                    <div
                        className={`absolute  left-0 bottom-0 w-full h-[3px] bg-error  transition-all ${!errorMessage && hasValidated && 'opacity-0'} opacity-100 duration-500 ease-in-out ${errorMessage ? 'scale-x-100' : 'scale-x-0'
                            }`}
                        style={{ transformOrigin: 'left' }}
                    >
                    </div>
                    <div
                        className={`absolute  left-0 bottom-0 w-full h-[3px] bg-error transition-all  ${!errorMessage && hasValidated && 'opacity-0'} opacity-100 duration-500 ease-in-out ${errorMessage ? 'scale-x-100' : 'scale-x-0'
                            }`}
                        style={{ transformOrigin: 'right' }}
                    >
                    </div>
                </div>
                <p className={`${errorMessage && 'opacity-90 '} opacity-0  text-error text-xs ml-2 font-light transition-opacity duration-300 -mb-4`}>
                    {errorMessage}. 
                </p>
                <span>{helperText}</span>
            </div>
        </div>
    );
};

export default CustomDatePicker;