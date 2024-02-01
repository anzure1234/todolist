import FormBody from "./FormBody";
import {useContext, useState} from "react";
import BulkAction from "./BulkAction";
import {AppContext} from "../App";

const Task = (props) => {

    const _context = useContext(AppContext);

    const [isDetail, setIsDetail] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);


    const checkboxHandle = (e) => {
        props.setIsCheck(e.target.checked);
        _context.handleSelectedTask(props.task);

    }
    const detailHandle = (e) => {
        setIsUpdate(!isUpdate)
        setIsDetail(prevState => !prevState);
    }
    const deleteHandle = (e) => {
        _context.handleDeleteTask(props.task);
    }


    return (
        <div>
        <div className="task-detail">
            <div className="task-detail-item">
                <input type="checkbox" onChange={checkboxHandle}/>
                <h4>{props.task.task}</h4>
            </div>
            <input value={props.idx} type="hidden"/>
            <div className="task-detail-item">
                <button className="detail-btn" onClick={detailHandle}>Detail</button>
                <button className="remove-btn" onClick={deleteHandle}>Remove</button>
            </div>
        </div>
            {isDetail && <FormBody {...props} isUpdate={isUpdate} setIsUpdate={setIsUpdate}/>}

        </div>
    )
}
export default Task;