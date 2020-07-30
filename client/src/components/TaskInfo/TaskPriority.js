import React, { useState } from 'react';
import axios from 'axios';
import { FormControl } from 'react-bootstrap';

export default function TaskPriority(currentTask) {
    const [priority, setPriority] = useState(currentTask.priority);

    const handleChange = (value) => {
        setPriority(value);
        let updatedTask = { ...currentTask };
        updatedTask.currentTask.priority = value;
        axios
            .put(
                `http://localhost:8000/api/tasks/${currentTask.number}`,
                updatedTask.currentTask,
                { withCredentials: true }
            )
            .then((res) => res.data)
            .catch(console.log);
        // (err) => setErrors([...errors, err.response.data.message]));
    };

    return (
        <div>
            <FormControl
                as="select"
                value={priority}
                onChange={(e) => handleChange(e.target.value)}
            >
                <option value={1}>High</option>
                <option value={2}>Medium</option>
                <option value={3}>Low</option>
            </FormControl>
        </div>
    );
}
