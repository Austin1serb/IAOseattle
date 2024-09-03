import React, { useEffect } from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handlePageChange = (page: number) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    return (
        <div className="flex justify-center space-x-2 mt-4 py-8">
            <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                className={`px-3 py-1 transition-all duration-200 border rounded ${
                    currentPage === 1
                        ? 'opacity-50 cursor-not-allowed border-gray-400'
                        : 'bg-white text-blue-600 cursor-pointer hover:bg-blue-800 hover:text-white'
                }`}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {pages.map((page) => (
                <button
                    type="button"
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 transition-all duration-200 border rounded ${
                        currentPage === page
                            ? 'bg-blue-500 text-white cursor-default'
                            : 'bg-white text-blue-600 cursor-pointer hover:bg-blue-800 hover:text-white'
                    }`}
                >
                    {page}
                </button>
            ))}
            <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                className={`px-3 py-1 transition-all duration-200 border rounded ${
                    currentPage === totalPages
                        ? 'opacity-50 cursor-not-allowed border-gray-400'
                        : 'bg-white text-blue-600 cursor-pointer hover:bg-blue-800 hover:text-white'
                }`}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;