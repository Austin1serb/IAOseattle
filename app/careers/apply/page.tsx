import React, { Suspense } from 'react'
import ApplicationPage from './applyComponents/ApplicationPage'

const page = () => {
    return (
            <Suspense>
                <ApplicationPage />
            </Suspense>

    )
}

export default page