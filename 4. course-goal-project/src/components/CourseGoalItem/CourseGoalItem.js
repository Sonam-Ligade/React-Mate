import './CourseGoalItem.css';
const CourseGoalItem = props => {

    const deleteGoalHandler = () =>{
        props.onDelete(props.id);
    }
    return(
        <li className='goal-item' onClick={deleteGoalHandler}>{props.children}</li>
    );
};

export default CourseGoalItem;