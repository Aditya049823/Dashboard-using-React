//To Store and dynamically populate the JSON

import create from 'zustand'

const DashboardStore=create((set)=>({
    categories:[
        {
            id:1,
            name:"CSPM Executive Dashboard",
            widgets:[
                {
                    id:101,
                    name:"Cloud Account",
                    text:"Text"
                },
                {
                    id:102,
                    name:"Cloud Account Risk Assesment",
                    text:"Some Text"
                }
            ]
        },
        {
            id:2,
            name:"CWPP Dashboard",
            widgets:[
                {
                    id:201,
                    name:"Top 5 Namespace specific Alerts",
                    text:"No Data Available"
                },
                {
                    id:202,
                    name:"Workload Alerts",
                    text:"No Data Present"
                }
            ]
        },
        {
            id:3,
            name:"Registry Scan",
            widgets:[
                {
                    id:301,
                    name:"Image Risk Assesment",
                    text:"Asses the Risk"
                },
                {
                    id:302,
                    name:"Image Security Issues",
                    text:"Random"
                }
            ]
        },
        {
            id:4,
            name:"Tickets",
            widgets:[
                {
                    id:401,
                    name:"Tickets",
                    text:"Tickets will appear here"
                }
            ]
        }
    ],
    //to add the widgets 
    addWidget:(categoryId,widget)=>set((state)=>{
        const newCategory=state.categories.map(category=>category.id===categoryId? {...category,widgets:[...category.widgets,widget]}:category);
        return {categories:newCategory}
    }),
    //to remove/delete
    removeWidget:(categoryId,widgetId)=>set((state)=>{
        const updatedWidget=state.categories.map(category=>category.id===categoryId?{...category,widgets:category.widgets.filter(w=>w.id!==widgetId)}:category);
        return {categories:updatedWidget}
    })
}));

export default DashboardStore;
