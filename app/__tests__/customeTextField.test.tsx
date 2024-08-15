import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomTextField from '@/careers/apply/applyComponents/CustomTextField';

describe('CustomTextField', () => {
    const defaultProps = {
        label: 'Username',
        value: '',
        onChange: jest.fn(),
        autoComplete: 'username',
        type: 'text',
        required: true,
        validate: (value: string) => value.length >= 5,
        errorMessage: 'Username must be at least 5 characters long',
    };

    it('renders correctly with required props', () => {
        render(<CustomTextField {...defaultProps} />);
        const inputElement = screen.getByLabelText(/username/i);
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('required');
    });

    it('displays the label correctly', () => {
        render(<CustomTextField {...defaultProps} />);
        const labelElement = screen.getByText(/username/i);
        expect(labelElement).toBeInTheDocument();
    });

    it('calls onChange when the input value changes', () => {
        render(<CustomTextField {...defaultProps} />);
        const inputElement = screen.getByLabelText(/username/i);
        fireEvent.change(inputElement, { target: { value: 'testuser' } });
        expect(defaultProps.onChange).toHaveBeenCalled();
    });

    it('validates the input and displays error message on blur', () => {
        render(<CustomTextField {...defaultProps} />);
        const inputElement = screen.getByLabelText(/username/i);

        fireEvent.change(inputElement, { target: { value: 'test' } });
        fireEvent.blur(inputElement);

        expect(screen.getByText(/username must be at least 5 characters long/i)).toBeVisible();
    });

    it('shows success indicator when input is valid', () => {
        render(<CustomTextField {...defaultProps} />);
        const inputElement = screen.getByLabelText(/username/i);

        fireEvent.change(inputElement, { target: { value: 'validusername' } });
        fireEvent.blur(inputElement);

        expect(screen.queryByText(defaultProps.errorMessage)).not.toBeInTheDocument();
    });
});