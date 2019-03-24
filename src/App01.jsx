import { pbkdf2 } from "crypto";

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
        <p1>Baby Berk 1</p1>
        <p2>Baby Berk 2</p2>
        <p3>Berkshire Dining Common </p3>
        <p4>Blue Wall</p4>
        <p5>Franklin Dining Common</p5>
        <p6>Greenough Subs</p6>
        <p7>Hampshire Dining Common</p7>
        <p8>Procrastination Station</p8>
        <p9>Roots Cafe</p9>
        <p10>Sweets and More</p10>
        <p11>Worcester Dining Common</p11>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
