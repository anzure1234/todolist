import FormBody from "./FormBody";
import {useState} from "react";
import BulkAction from "./BulkAction";

const Task = (props) => {


    const [isCheck,setIsCheck] = useState(false);
    const [isDetail,setIsDetail] = useState(false);


    const checkboxHandle = (e) => {
        setIsCheck(e.target.checked);
    }
    const detailHandle = (e) => {
        setIsDetail(prevState => !prevState);
    }


    return <div className="task-detail">
        <div className="task-detail-item">
            <input type="checkbox" defaultChecked="false" onChange={checkboxHandle}/>
            <h4>{props.task.task}</h4>
        </div>
        <input value={props.idx} type="hidden"/>
        <div className="task-detail-item">
            <button className="detail-btn" onClick={detailHandle}>Detail</button>
            <button className="remove-btn">Remove</button>
        </div>
        {isDetail &&<FormBody />}

        {isCheck &&<BulkAction/>}

    </div>
}
export default Task;