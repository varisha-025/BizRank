import React from 'react'

const Basics = () => {
    return (
        <div>
            <section>
                <div className='px-10 pt-8'>
                    <h1 className='text-3xl'>Learn the basics</h1>
                    <h3>Here's what you need to know to start selling.</h3>
                </div>
                <div className='flex justify-between align-middle'>
                    <div className='px-10 pt-8'>
                        <h2 className='text-2xl pb-4'>List your item</h2>
                        <h4 className='text-lg'>You can list new or used items and pay a final value fee only when it sells.  </h4>
                    </div>
                    <div className='px-10 pt-8'>
                        <h2 className='text-2xl pb-4'>Get seller protection</h2>
                        <h4 className='text-lg'>You&apos;re protected by policies, monitoring, and our customer service team.</h4>
                    </div>
                    <div className='px-10 pt-8'>
                        <h2 className='text-2xl pb-4'>Choose when you get paid</h2>
                        <h4 className='text-lg'>You can schedule either daily or weekly payouts, and we'll deposit your earnings directly into your bank account.</h4>
                    </div>
                
                </div>
            </section>
        </div>
    )
}

export default Basics