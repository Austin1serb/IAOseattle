'use client';
import React, { Suspense } from 'react'
import ApplicationPage from './applyComponents/ApplicationPage'
import { FormProvider } from '@/context/multistep-form-context';

const page = () => {
    return (
        <FormProvider>
            <Suspense fallback={<>...Loading</>}>
                <ApplicationPage />
            </Suspense>
        </FormProvider>

    )
}

export default page