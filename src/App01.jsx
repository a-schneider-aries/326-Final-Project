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
        <p1>Argo Tea\n
        Baby Berk 1\n
        Baby Berk 2\n
        Berkshire Dining Common\n
        Blue Wall\n
        Chicken and Co.\n
        Franklin Dining Common\n
        Greenough Subs\n
        Hampshire Dining Common\n
        Procrastination Station\n
        Roots Cafe\n
        Sweets and More\n
        Worcester Dining Common\n</p1>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
