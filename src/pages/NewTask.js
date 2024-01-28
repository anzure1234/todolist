import FormBody from "./FormBody";

const newTask = (props) => {
    return <div className="container-full">
        <div className="container">
            <h2>New Task</h2>
            <FormBody TaskData={props}/>



        </div>
    </div>
}
export default newTask;
