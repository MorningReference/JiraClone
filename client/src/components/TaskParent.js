import React, { useState } from 'react';
import TaskHeader from './TaskHeader';
import Issues from './Issues';
import TaskContent from './TaskContent';

export default function TaskParent(props) {
    const [taskNum, setTaskNum] = useState(props.id);

    return (
        <div className="ml-3 col-10">
            <TaskHeader />
            <div className="row mt-5 ml-1">
                <Issues setTaskNumber={setTaskNum} />
                <TaskContent taskNumber={taskNum} className="col-8" />
            </div>
        </div>
    );
}
