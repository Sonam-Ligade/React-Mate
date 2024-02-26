import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  // if (props.items.length === 0) {
  //   return (
  //     <Card className={classes.users}>
  //       <h3>No Users Added!!</h3>
  //     </Card>
  //   );
  // }

  return (
    <Card className={classes.users}>
      <ul>
        {props.items.map((item) => (
          <li key={Math.random().toString}>
            {item.name} ({item.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
