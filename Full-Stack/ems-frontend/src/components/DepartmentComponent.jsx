import React, { useEffect, useState } from 'react'
import { createDepartment, getDepartmentById, updateDepartment } from '../services/DepartmentService';
import { useNavigate, useParams } from 'react-router-dom';

const DepartmentComponent = () => {

    const [departmentName,setDepartmentName] = useState('')
    const [departmentDescription,setDepartmentDescription] = useState('')

    const navigator = useNavigate()

    const {id} = useParams()

    useEffect(() => {
        getDepartmentById(id).then((response) => {
            const department = response.data
            setDepartmentName(department.departmentName)
            setDepartmentDescription(department.departmentDescription)
        }).catch((error) => {
            console.error(error)
        })
    },[id])

    function saveOrUpdateDepartment(e){
        e.preventDefault();

        if(!validateForm()){
            return;
        }

        const department = {departmentName,departmentDescription}
        console.log(department);

        if(id){
            updateDepartment(id,department).then((response) => {
                console.log(response.data)
                navigator('/departments')
            }).catch((error) => {
                console.error(error)
            })
        }else{
            createDepartment(department).then((response) => {
                console.log(response.data)
                navigator('/departments')
            }).catch((error) => {
                console.error(error)
            })
        }
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Department</h2>
        }
        else{
            return <h2 className='text-center'>Add Department</h2>
        }
    }

    const [errors,setErrors] = useState({
        departmentName:'',
        departmentDescription:''
    })


    function validateForm(){
        let valid = true;

        const errorsCopy = {...errors}

        if(departmentName.length === 0){
            errorsCopy.departmentName = 'Department Name is required'
            valid = false
        }
        
        if(departmentDescription.length === 0){
            errorsCopy.departmentDescription = 'Department Description is required'
            valid = false
        }

        setErrors(errorsCopy)

        return valid;
    }

  return (
    <div className='container'>
        <br></br>
        <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}

                <div className='card-body'>
                    <form>
                        <div className='form-group  mb-2'>

                            <label className='form-label'>Department Name:</label>
                            <input 
                                type='text' 
                                placeholder='Enter Department Name' 
                                name='departmentName' 
                                className={`form-control ${errors.departmentName ? 'is-invalid' : ''}`}
                                value={departmentName} 
                                onChange={(e) => setDepartmentName(e.target.value)}
                            />
                            {errors.departmentName && <div className='invalid-feedback'>{errors.departmentName}</div>}
                        </div>

                        <div className='form-group mb-2'>

                            <label className='form-label'>Department Description:</label>
                            <input 
                                type='text' 
                                placeholder='Enter Department Description' 
                                name='departmentDescription' 
                                className={`form-control ${errors.departmentDescription ? 'is-invalid' : ''}`}
                                value={departmentDescription} 
                                onChange={(e) => setDepartmentDescription(e.target.value)}
                            />
                            {errors.departmentDescription && <div className='invalid-feedback'>{errors.departmentDescription}</div>}
                        </div>

                        <button className='btn btn-success' onClick={saveOrUpdateDepartment}>Submit</button>

                    </form>
                </div>
            </div>

        </div>

    </div>
  )
}

export default DepartmentComponent