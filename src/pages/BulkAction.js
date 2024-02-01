import {useContext} from "react";
import {AppContext} from "../App";

const BulkAction = () => {
    const _context = useContext(AppContext);
    console.log(_context);
    return <div className="bulk-detail">
        <p>Bulk Action</p>
        <div className="action-button">
            <button className="done-btn">Done</button>
            <button className="remove-bulk-btn" onClick={_context.handleDeleteBulkTask}>Remove</button>
        </div>
    </div>


}
export default BulkAction;