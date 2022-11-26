import React, { useState } from 'react'
import { Paper, TextField, Button, Select, MenuItem } from "@mui/material"
import {ANIMAL_TYPE_OPTIONS} from "../../constance/constance"
import "./Form.css"
import { useAnimal } from '../../context/AnimalContext'

const initialFormValues = {
  type: ANIMAL_TYPE_OPTIONS[0].value
}

const Form = () => {

  const [formValues, setFormValues] = useState(initialFormValues);

  const { addNewAnimal } = useAnimal()

  const handleChange = (event) => {
    setFormValues(prevValues => ({
      ...prevValues, 
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addNewAnimal(formValues)
    setFormValues(initialFormValues)
  }

  return (
    <Paper sx={{width:"600px", height:"300px", marginX: "auto"}} elevation={3}>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='form-column'>
            <TextField
             value={formValues["name"]}
             onChange={handleChange} name="name" type="text" variant='outlined' label="Name"
             required/>
            <TextField
             value={formValues["age"]}
             onChange={handleChange} name='age' type="number" variant='outlined' label="Age"
             required/>
          </div>
          <div className='form-column'>
            <Select
            sx={{width:"180px"}}
            value={formValues["type"]}
            onChange={handleChange} name='type' label="Type"
            required>
              {ANIMAL_TYPE_OPTIONS.map((option, i) => (
                <MenuItem key={i} value={option.value}>{option.label}</MenuItem>
              ))}
            </Select>
            <TextField
            value={formValues["imageUrl"]}
            onChange={handleChange} name='imageUrl' type="text" variant='outlined' label="Image"
            required/>
          </div>
          <Button type='submit' variant='contained'>Add Animal</Button>
        </form>
    </Paper>
  )
}

export default Form