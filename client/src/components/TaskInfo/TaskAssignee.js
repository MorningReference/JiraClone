import React, { useState } from 'react';
import axios from 'axios';
import { FormControl } from 'react-bootstrap';

export default function TaskAssignee({
    assignee,
    setAssignee,
    currentTask,
    allUsers,
    // errors,
    // setErrors,
}) {
    // const [user, setUser] = useState(assignee);
    const handleChange = (value) => {
        // setUser(value);
        setAssignee(value);
        let updatedTask = { ...currentTask };
        updatedTask.assignee = value;
        axios
            .put(
                `http://localhost:8000/api/tasks/${currentTask.number}`,
                updatedTask,
                { withCredentials: true }
            )
            .then((res) => res.data)
            .catch(console.log);
        // (err) => setErrors([...errors, err.response.data.message]));
    };

    if (assignee === undefined) return 'Loading...';
    return (
        <div>
            <FormControl
                as="select"
                value={assignee}
                onChange={(e) => handleChange(e.target.value)}
            >
                {allUsers.map((user, idx) => {
                    return (
                        <option key={idx} value={user}>
                            {user.name}
                        </option>
                    );
                })}
            </FormControl>
        </div>
    );
}
