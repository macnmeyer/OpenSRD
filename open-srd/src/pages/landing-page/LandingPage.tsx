import React from 'react'

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <section className="w-full h-64 flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold">OpenSRD</h1>
          <h2 className="text-2xl text-gray-500">This is an example landing page</h2>
          <p>This should load markdown files instead of coding everything into the landing page itself.</p>
        </section>
    </div>
  )
}

export default LandingPage