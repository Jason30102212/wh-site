import React, {useState} from 'react'
import Axios from 'axios'

const StringInput = (props) => {

  const [itemData, setItemData] = useState (
    {
      name: ''
    }
  )

  const { name } = itemData

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted");
    Axios.post('/api/items/', {name: itemData.name})
    props.updateItems()
  }

  const onChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value })
    console.log(itemData.name);
  }

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={onSubmit} className="input-group w-25">
          <input
            className="form-control"
            type="name"
            placeholder="Item Name"
            name="name"
            value={name}
            onChange={onChange}
          />
          <div className="input-group-append">
            <input className="btn btn-primary" type="submit" value="Add Item"/>
          </div>
      </form>
    </div>
  )
}

export default StringInput
