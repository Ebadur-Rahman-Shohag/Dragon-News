import React, { use } from 'react'
import { NavLink } from 'react-router'

const categoryPromise = fetch("/categories.json").then(res => res.json())


function LeftSide() {
    const categoryData = use(categoryPromise)
    return (
        < >
            <aside className='col-span-3 '>
                <h3 className='text-xl text-dark-2 font-semibold'>All Category</h3>
                {/* menu links */}
                <div className='left-side flex flex-col gap-3 mt-5'>
                    {categoryData.map((category) => (
                        <NavLink to={`/category/${category.id}`} className="text-xl text-dark-4 font-medium py-5 text-center" key={category.id}>{category.name}</NavLink>
                    ))}
                </div>
            </aside>
        </>
    )
}

export default LeftSide