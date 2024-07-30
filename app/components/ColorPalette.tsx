// app/components/ColorPalette.jsx
import React from 'react';

const colors = [
    { name: 'Primary', variable: '--color-primary' },
    { name: 'Primary Light', variable: '--color-primary-light' },
    { name: 'Primary Dark', variable: '--color-primary-dark' },
    { name: 'Secondary', variable: '--color-secondary' },
    { name: 'Secondary Light', variable: '--color-secondary-light' },
    { name: 'Secondary Dark', variable: '--color-secondary-dark' },
    { name: 'Background', variable: '--color-background' },
    { name: 'Surface', variable: '--color-surface' },
    { name: 'Error', variable: '--color-error' },
    { name: 'On Primary', variable: '--color-on-primary' },
    { name: 'On Secondary', variable: '--color-on-secondary' },
    { name: 'On Background', variable: '--color-on-background' },
    { name: 'On Surface', variable: '--color-on-surface' },
    { name: 'On Error', variable: '--color-on-error' },
];

const ColorPalette = () => {
    return (
        <div className="absolute bottom-0 right-0 p-4 bg-white border border-gray-300 shadow-lg z-50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {colors.map((color) => (
                    <div key={color.name} className="flex items-center space-x-4">
                        <div
                            className="w-8 h-8"
                            style={{ backgroundColor: `var(${color.variable})` }}
                        ></div>
                        <span>{color.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorPalette;