//import { pbkdf2 } from "crypto";

// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

class MyComponent extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
<<<<<<< HEAD
        <button class="collapsible">Open Collapsible</button>

        <h1 class = "content">Dining Locations and Their Food</h1>
        <div>Bamboo</div>
        <p1>Authentic dim sum selections and hot plates.</p1>
        <div>Deli Delish</div>
        <p2>Hot and cold grinders featuring house-roasted turkey and roast beef.</p2>
        <div>Green Fields</div>
        <p3>Freshly tossed salads made to-order with locally sourced ingredients.</p3>
        <div>The Grill</div>
        <p4>Classic American fare ranging from burgers to chicken tenders to milkshakes.</p4>
        <div>Paciugo</div>
        <p5>A selection of smooth, all-natural gelato.</p5>
        <div>Star Ginger</div>
        <p6>Pho noodle bowls, rice bowls, and authentic Korean bibimbap.</p6>
        <div>Tamales</div>
        <p7>Burritos, bowls, and salads made to-order.</p7>
        <div>Tavola</div>
        <p8>Classic Mediterranean fare including hummus bowls, pizza, and pasta.</p8>
        <div>Wasabi</div>
        <p9>Sushi made with sustainably sourced fish, miso soup, and the like.</p9>
        <div>Yum! Bakery</div>
        <p10>Freshly baked goods including cookies, cakes, and French macaroons.</p10>

=======
        <h1>Dining Locations and Their Food</h1>
        <div><h1>Bamboo</h1></div>
        <p>Authentic dim sum selections and hot plates.</p>
        <div><h1>Deli Delish</h1></div>
        <p>Hot and cold grinders featuring house-roasted turkey and roast beef.</p>
        <div><h1>Green Fields</h1></div>
        <p>Freshly tossed salads made to-order with locally sourced ingredients.</p>
        <div><h1>The Grill</h1></div>
        <p>Classic American fare ranging from burgers to chicken tenders to milkshakes.</p>
        <div><h1>Paciugo</h1></div>
        <p>A selection of smooth, all-natural gelato.</p>
        <div><h1>Star Ginger</h1></div>
        <p>Pho noodle bowls, rice bowls, and authentic Korean bibimbap.</p>
        <div><h1>Tamales</h1></div>
        <p>Burritos, bowls, and salads made to-order.</p>
        <div><h1>Tavola</h1></div>
        <p>Classic Mediterranean fare including hummus bowls, pizza, and pasta.</p>
        <div><h1>Wasabi</h1></div>
        <p>Sushi made with sustainably sourced fish, miso soup, and the like.</p>
        <div><h1>Yum! Bakery</h1></div>
        <p>Freshly baked goods including cookies, cakes, and French macaroons.</p>
>>>>>>> 9e08913a791103a4387dbbde2d3fa784012d8333
      </div>
    );
  }
}
// added code 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// added code 

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);