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
        {/* <div>Argo Tea</div> */}
        {/* <div>Baby Berk 1</div> */}
        {/* <div>Baby Berk 2</div> */}
        {/* <div>Berkshire Dining Common</div> */}
        <div>Blue Wall</div>
        {/* <div>Chicken and Co.</div> */}
        {/* <div>Franklin Dining Common</div> */}
        {/* <div>Greenough Sub Shop</div> */}
        {/* <div>Hampshire Dining Common</div> */}
        {/* <div>Procrastination Station</div> */}
        {/* <div>Roots Cafe</div> */}
        {/* <div>Sweets and More</div> */}
        {/* <div>Worcester Dining Common</div> */}
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
