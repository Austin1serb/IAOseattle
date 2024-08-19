//import { render, screen, act } from '@testing-library/react';
//import IncidentWidget from '@/components/IncidentWidget';
//import '@testing-library/jest-dom';

//describe('IncidentWidget', () => {
//    it('renders correctly with mock data', async () => {
//        // Mock the fetch response for IncidentWidget
//        const mockResponseData = [
//            {
//                id: "recK04xCGVvfqCIUQ",
//                createdTime: "2024-08-14T14:24:44.000Z",
//                fields: {
//                    "Report #": "IR-46769",
//                    "Client Assignment": "Olympic Sculpture Park",
//                    "Incident Type": "Vandalism / Graffiti",
//                    "Incident Date": "2024-08-14",
//                    "Narcan Administered?": "NO"
//                }
//            },
//            {
//                id: "recK04xCGVvfqCIUR",
//                createdTime: "2024-08-01T14:24:44.000Z",
//                fields: {
//                    "Incident Date": "2024-08-01",
//                    "Incident Type": "Suspicious Activity (ISR)",
//                    "Narcan Administered?": "YES"
//                }
//            }
//        ];

//        global.fetch = jest.fn(() =>
//            Promise.resolve({
//                ok: true,
//                status: 200,
//                json: () => Promise.resolve(mockResponseData),
//                headers: new Headers(),
//                redirected: false,
//                statusText: 'OK',
//                type: 'basic',
//                url: '',
//                clone: jest.fn(),
//                body: null,
//                bodyUsed: false,
//                arrayBuffer: jest.fn(),
//                blob: jest.fn(),
//                formData: jest.fn(),
//                text: jest.fn(),
//            } as Response)
//        );

//        // Render the IncidentWidget component
//        await act(async () => {
//            render(<IncidentWidget />);
//        });

//        // Assertions based on the mocked data
//        expect(screen.getByText('August 2024 Monthly Overview')).toBeInTheDocument();
//        expect(screen.getByText('Incidents Resolved')).toBeInTheDocument();
//        expect(screen.getByText('Overdoses Prevented')).toBeInTheDocument();
//        expect(screen.getByText('Vandalism')).toBeInTheDocument();
//        expect(screen.getByText('1')).toBeInTheDocument(); // Total incidents for Vandalism
//        expect(screen.getByText('1')).toBeInTheDocument(); // Overdoses prevented
//    });
//});
