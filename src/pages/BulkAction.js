import {useContext} from "react";
import {AppContext} from "../App";

const bulkAction = ()=>{
    const _context=useContext(AppContext);
    return <div className="bulk-detail">
        <p>Bulk Action</p>
        <div className="action-button">
        <button className="done-btn">Done</button>
        <button className="remove-btn" onClick={_context.handleDeleteBulkTask}>Remove</button>
        </div>
        </div>


}
export default bulkAction;