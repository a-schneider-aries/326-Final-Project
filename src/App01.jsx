//import { pbkdf2 } from "crypto";

// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class MyComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Dining Locations and Their Food</h1>
        <p1>Argo Tea\
        Baby Berk 1\
        Baby Berk 2\
        Berkshire Dining Common\
        Blue Wall\
        Chicken and Co.\
        Franklin Dining Common\
        Greenough Subs\
        Hampshire Dining Common\
        Procrastination Station\
        Roots Cafe\
        Sweets and More\
        Worcester Dining Common</p1>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
