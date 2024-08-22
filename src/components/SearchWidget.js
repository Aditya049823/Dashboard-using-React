import React, { useState } from 'react'
import DashboardStore from '../store'
import './DashboardStyle.css'

const SearchWidget=()=>{
    const categories=DashboardStore((state)=>state.categories);
    const [searchWidget,setSearchWidget]=useState("");

    const findWidgets=searchWidget ? categories.flatMap((category)=>
        category.widgets.filter((widget)=>
        widget.name.toLowerCase().includes(searchWidget.toLowerCase()))) : [];

    return(
        <>
            <div className='search-container'>
                <input
                    type='text'
                    placeholder='Search Widgets'
                    value={searchWidget}
                    onChange={(e)=>setSearchWidget(e.target.value)}>
                </input>
                <div className='search-results'>
                    {findWidgets.length >0 ? (
                        findWidgets.map((widget)=>(
                            <div key={widget.id} className='search-item'>
                                <h3>{widget.name}</h3>
                                <p>{widget.text}</p>
                            </div>
                        ))

                    ) : searchWidget ? (
                        <p>No Widgets Found</p>
                    ) : (
                        <p></p>
                    )}
                </div>
            </div>
        </>
    )
}

export default SearchWidget;