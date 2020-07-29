import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskTitle from './TaskTitle';
import TaskActivity from './TaskActivity';


export default function TaskInfo({ taskNumber }) {

    const [loaded, setLoaded] = useState(false)
    // const [task, setTask] = useState(null)
    const [name, setName] = useState(null)
    const [number, setNumber] = useState(null)
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/tasks/${taskNumber}`, {withCredentials: true})
            .then(res => {
                // setTask(res.data);
                setName(res.data.name);
                setNumber(res.data.number);
                setLoaded(true);
            })
            .catch(console.log);
    })

    if(!loaded) return "Loading...";
    
    // if(loaded) {
    //     var { name, number } = task;
    // }

    return(
        <div className="row">
            <div className="col-9">
                <p>GEER-{number}</p>
                <TaskTitle name={name} setName={setName} number={number}/>
                <div>
                    <span>Attach </span>
                    <span>Create Subtask </span>
                    <span>Link Issue </span>
                    <span>LWaM</span>
                </div>
                <div>
                    <p>Description</p>
                    <input type="text"/>
                </div>
                <TaskActivity />
            </div>
            <div className="col-3">
                <p>todo</p>
                <p>assignee</p>
                <p>reporter</p>
                <p>due date</p>
                <p>priority</p>
                <p>show 3 more fields</p>
            </div>
        </div>
    )
}