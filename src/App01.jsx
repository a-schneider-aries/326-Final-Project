// //import { pbkdf2 } from "crypto";

// // This is a place holder for the initial application state.
// const state = [

// ];

// // This grabs the DOM element to be used to mount React components.
// var contentNode = document.getElementById("contents");


// // class Example extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.toggle = this.toggle.bind(this);
// //     this.state = { collapse: false };
// //   }

// //   toggle() {
// //     this.setState(state => ({ collapse: !state.collapse }));
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
// //         <Collapse isOpen={this.state.collapse}>
// //           <Card>
// //             <CardBody>
// //             Anim pariatur cliche reprehenderit,
// //              enim eiusmod high life accusamus terry richardson ad squid. Nihil
// //              anim keffiyeh helvetica, craft beer labore wes anderson cred
// //              nesciunt sapiente ea proident.
// //             </CardBody>
// //           </Card>
// //         </Collapse>
// //       </div>
// //     );
// //   }
// // }

<<<<<<< HEAD
// class MyComponent extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div>
//         <h1>Dining Locations and Their Food</h1>
//         <div><h1>Bamboo</h1></div>
//         <p>Authentic dim sum selections and hot plates.</p>
//         <div><h1>Deli Delish</h1></div>
//         <p>Hot and cold grinders featuring house-roasted turkey and roast beef.</p>
//         <div><h1>Green Fields</h1></div>
//         <p>Freshly tossed salads made to-order with locally sourced ingredients.</p>
//         <div><h1>The Grill</h1></div>
//         <p>Classic American fare ranging from burgers to chicken tenders to milkshakes.</p>
//         <div><h1>Paciugo</h1></div>
//         <p>A selection of smooth, all-natural gelato.</p>
//         <div><h1>Star Ginger</h1></div>
//         <p>Pho noodle bowls, rice bowls, and authentic Korean bibimbap.</p>
//         <div><h1>Tamales</h1></div>
//         <p>Burritos, bowls, and salads made to-order.</p>
//         <div><h1>Tavola</h1></div>
//         <p>Classic Mediterranean fare including hummus bowls, pizza, and pasta.</p>
//         <div><h1>Wasabi</h1></div>
//         <p>Sushi made with sustainably sourced fish, miso soup, and the like.</p>
//         <div><h1>Yum! Bakery</h1></div>
//         <p>Freshly baked goods including cookies, cakes, and French macaroons.</p>
//       </div>
//     );
//   }
// }

// // This renders the JSX component inside the content node:
// ReactDOM.render(<MyComponent />, contentNode);
=======
  toggle(e) {
    console.log('testing e', e)
    if (e.target.class === 'collapse') {
      e.target.className = 'collapse.in'
    } else {
      e.target.className = 'collapse'
    }
  }
render(){
  return (
    <div className="cart">
     <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('bamboo')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Bamboo
     </button>
      <div id="bamboo" className="collapse">
        <div>
          
            A freshly prepared selection of authentic dim sum and hot plates.
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('deli delish')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Deli Delish
     </button>
      <div id="deli delish" className="collapse">
        <div>
          
            Hot and cold sandwiches and rolls prepared with a variety of ingredients, including house-roasted turkey and roast beef
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('green fields')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Green Fields
     </button>
      <div id="green fields" className="collapse">
        <div>
          
            A variety of salads tossed to-order with locally sourced ingredients. 
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('paciugo')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Paciugo
     </button>
      <div id="paciugo" className="collapse">
        <div>
          
            Smooth, traditionally crafted Italian gelato made from fresh, all-natural ingredients.
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('star ginger')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Star Ginger
     </button>
      <div id="star ginger" className="collapse">
        <div>
          
            Authentic Vietnamese, Thai, and Korean specialties, including pho, rice bowls, and bibimbap.
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('tamales')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Tamales
     </button>
      <div id="tamales" className="collapse">
        <div>
          
            Burritos, burrito bowls, and salads made to-order with fresh, sustainably-sourced ingredients.
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('tavola')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Tavola
     </button>
      <div id="tavola" className="collapse">
        <div>
          
            Classic Mediterannean specialties including pizza, pasta, and hummus bowls.
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('wasabi')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Wasabi
     </button>
      <div id="wasabi" className="collapse">
        <div>
          
            A selection of sushi made with sustainably sourced seafood, as well as other authentic Japanese offerings.
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('yum')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Yum! Bakery
     </button>
      <div id="yum" className="collapse">
        <div>
          
            Full-service bakery offering homemade cookies, brownies, and seasonal specialties.
        
        </div>
      </div>
    </div>
  );
}

};

ReactDOM.render(
<MyComponent  />, document.getElementById('MyComponent')
);
>>>>>>> 423620d4a1117a5d776813698b92dedfb9c765b7
