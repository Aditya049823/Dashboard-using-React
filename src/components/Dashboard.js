import React from 'react'
import useDashboardStore from '../store'
import SearchWidget from './SearchWidget'
import Section from './Section'
import './DashboardStyle.css'

const Dashboard=()=>{
    const categories=useDashboardStore((state)=>state.categories);

    return(
        <>
            <div className='dashboard-container'>
                <SearchWidget/>
                {categories.map((category)=>(
                    <Section key={category.id} category={category}/>
                ))}
            </div>
        </>
    )
}
export default Dashboard;