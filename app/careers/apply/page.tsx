import React, { Suspense } from 'react'
import ApplicationPage from './Homepage'

const page = () => {
    return (
        <div> 
              <Suspense>
            <ApplicationPage />
        </Suspense>


        </div>
    )
}

export default page