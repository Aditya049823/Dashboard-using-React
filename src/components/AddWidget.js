import React, { useState } from 'react';
import useDashboardStore from '../store';

const AddWidget = () => {
  const addWidget = useDashboardStore(state => state.addWidget);
  const categories = useDashboardStore(state => state.categories);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || null);
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = () => {
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText,
    };
    addWidget(selectedCategory, newWidget);
    setWidgetName('');
    setWidgetText('');
}

  return(
    <>
      <div>
        <h3>Add Widget</h3>
        <select onChange={(e)=>setSelectedCategory(Number(e.target.value))}>
          {categories.map(category=>(
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <input
          type='text'
          value={widgetName}
          placeholder='Enter Widget Name'
          onChange={(e)=>setWidgetName(e.target.value)}>
        </input>
        <input
          type='text'
          value={widgetText}
          placeholder='text'
          onChange={(e)=>setWidgetText(e.target.value)}>
        </input>
        <button onClick={handleSubmit}>Add Widget</button>
      </div>
    </>
  )
}

export default AddWidget