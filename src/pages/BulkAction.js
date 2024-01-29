const bulkAction = (props)=>{
    return <div className="bulk-detail">
        <p>Bulk Action</p>
        <div className="action-button">
        <button className="done-btn">Done</button>
        <button className="remove-btn" onClick={props.handleDeleteBulkTask}>Remove</button>
        </div>
        </div>


}
export default bulkAction;