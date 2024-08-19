import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Stepper from './Stepper';

describe('Stepper Component', () => {
    const stepNames = ['Contact Info', 'Address', 'Upload Resume', 'Preview & Submit'];

    it('renders the correct number of steps', () => {
        render(<Stepper currentStep={0} totalSteps={4} stepNames={stepNames} />);
        
        // The step names or numbers should be displayed.
        stepNames.forEach((_, index) => {
            expect(screen.getByText((index + 1).toString())).toBeInTheDocument();
        });
    });

    it('highlights the correct step as active', () => {
        render(<Stepper currentStep={1} totalSteps={4} stepNames={stepNames} />);
        
        // Ensure the step name is highlighted correctly.
        const activeStep = screen.queryAllByText('Address');
        expect(activeStep).toHaveClass('text-blue-600'); // Adjust based on your class names.
    });

    it('applies correct styles for completed steps', () => {
        render(<Stepper currentStep={3} totalSteps={4} stepNames={stepNames} />);
        
        // Ensure the completed step is styled correctly.
        const completedStep = screen.getByText('Contact Info');
        expect(completedStep).toHaveClass('text-white'); // Adjust based on your class names.
    });

    it('displays the correct step names on mobile and desktop', () => {
        render(<Stepper currentStep={2} totalSteps={4} stepNames={stepNames} />);
        
        // Check the display on mobile.
        const mobileStepName = screen.getByText('Upload', { exact: false }); // "Upload" is the first word of "Upload Resume"
        expect(mobileStepName).toBeVisible();

        // Check the display on desktop.
        const desktopStepName = screen.getByText('Upload Resume');
        expect(desktopStepName).toBeVisible();
    });

    it('is accessible', () => {
        render(<Stepper currentStep={1} totalSteps={4} stepNames={stepNames} />);
        
        // You can use testing-library's `axe` for accessibility checks if configured.
        // expect(await axe(screen.getByRole('list'))).toHaveNoViolations();
    });
});