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
        <div>Bamboo</div>
        <p1>    Authentic dim sum selections and hot plates.</p1>
        <div>Deli Delish</div>
        <p2>    Hot and cold grinders featuring house-roasted turkey and roast beef.</p2>
        <div>Green Fields</div>
        <p3>    Freshly tossed salads made to-order with locally sourced ingredients.</p3>
        <div>The Grill</div>
        <p4>    Classic American fare ranging from burgers to chicken tenders to milkshakes.</p4>
        <div>Paciugo</div>
        <p5>    A selection of smooth, all-natural gelato.</p5>
        <div>Star Ginger</div>
        <p6>    Pho noodle bowls, rice bowls, and authentic Korean bibimbap.</p6>
        <div>Tamales</div>
        <p7>    Burritos, bowls, and salads made to-order.</p7>
        <div>Tavola</div>
        <p8>    Classic Mediterranean fare including hummus bowls, pizza, and pasta.</p8>
        <div>Wasabi</div>
        <p9>    Sushi made with sustainably sourced fish, miso soup, and the like.</p9>
        <div>Yum! Bakery</div>
        <p10>   Freshly baked goods including cookies, cakes, and French macaroons.</p10>

      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
