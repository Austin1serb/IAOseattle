import React, { Suspense } from 'react'
import ApplicationPage from './applyComponents/ApplicationPage'

const page = () => {
    return (
            <Suspense fallback={<>...Loading</>}>
                <ApplicationPage />
            </Suspense>

    )
}

export default page