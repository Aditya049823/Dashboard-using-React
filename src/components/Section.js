import React, { useState } from "react";
import useDashBoardStore from '../store'
import Widget from './Widget'

const Section=({category})=>{
    const[widgetName,setWidgetName]=useState("");
    const[widgetText,setWidgetText]=useState("");
    const addWidget=useDashBoardStore((state)=>state.addWidget)
    const removeWidget=useDashBoardStore((state)=>state.removeWidget)

    const addNewWidget=()=>{
        const newWidget={
            id:Date.now(),  //to provide an unique ID
            name:widgetName,
            text:widgetText
        };
        addWidget(category.id,newWidget);
        setWidgetName("")
        setWidgetText("")
    };

    const handleRemoveWidget=(widgetId)=>{
        removeWidget(category.id,widgetId)
    }
    return(
        <>
            <div className="section-container">
                <h2>{category.name}</h2>
                <div className="grid-container">
                    {category.widgets.map((widget)=>(
                        <Widget key={widget.id} 
                        widget={widget} 
                        categoryId={category.id}
                        onRemove={()=>handleRemoveWidget(widget.id)}></Widget>
                    ))}
                    <div className="add-form">
                        <input
                            type="text"
                            value={widgetName}
                            placeholder="Enter Widget Name"
                            onChange={(e)=>setWidgetName(e.target.value)}>
                        </input>
                        <input
                            type="text"
                            value={widgetText}
                            placeholder="Enter Some Text"
                            onChange={(e)=>setWidgetText(e.target.value)}>    
                        </input>
                        <button onClick={addNewWidget}>Add Widget +</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section;