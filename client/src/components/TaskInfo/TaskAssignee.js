import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-dropdown-select';

export default function TaskAssignee({
    currentTask,
    allUsers,
    // errors,
    // setErrors,
}) {
    const [assignee, setAssignee] = useState(currentTask.assignee);
    const handleChange = (value) => {
        setAssignee(value[0]);

        axios
            .put(
                `http://localhost:8000/api/tasks/${currentTask._id}`,
                { assignee: value[0] },
                { withCredentials: true }
            )
            .then((res) => res.data)
            .catch(console.log);
        // (err) => setErrors([...errors, err.response.data.message]));
    };

    if (assignee === undefined) return 'Loading...';
    return (
        <div>
            {/* <FormControl
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
            </FormControl> */}
            <h5>Assignee</h5>
            <Select
                options={allUsers}
                onChange={(values) => handleChange(values)}
                multi={false}
                clearable={true}
                searchable={true}
                dropdownHandle={false}
                labelField="name"
                placeholder={assignee.name}
            />
        </div>
    );
}
