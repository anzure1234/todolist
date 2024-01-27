import '../App.css';
const FormBody = () => {
  return (
    <div className="form-body">
        <input type="text" placeholder="Add new Task" className="full-width"/>
        <h5>Description</h5>
        <textarea rows="20"></textarea>
        <div className="info-input">
            <div className="info-item">
                <h5>Due Date</h5>
                <input type="date"/>
            </div>
            <div className="info-item">
                <h5>Priority</h5>
                <select>
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                </select>
            </div>
        </div>
        <br/>
        <button type="Submit" className="submit-btn">Add</button>
    </div>
  );
}
export default FormBody;