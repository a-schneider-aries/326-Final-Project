// //import { pbkdf2 } from "crypto";

// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class Bamboo extends React.Component {
  render() {
  return (
    <div>
  <p11>Bamboo</p11>
  </div>
  )
  }
 }
 class DeliDelish extends React.Component {
  render() {
  return (
  <div><p12>Deli Delish</p12></div>
  )
  }
 }
 
 class GreenFields extends React.Component {
  render() {
  return (
  <div><p13>Green Fields</p13></div>
  )
  }
 }
 class Grill extends React.Component {
  render() {
  return (
  <div><p14>The Grill</p14></div>
  )
  }
 }
 class Paciugo extends React.Component {
  render() {
  return (
  <div><p15>Paciugo</p15></div>
  )
  }
 }
 class StarGinger extends React.Component {
  render() {
  return (
  <div><p16>Star Ginger</p16></div>
  )
  }
 }
 class Tamales extends React.Component {
  render() {
  return (
  <div><p17>Tamales</p17></div>
  )
  }
 }
 class Tavola extends React.Component {
  render() {
  return (
  <div><p18>Tavola</p18></div>
  )
  }
 }
 class Wasabi extends React.Component {
  render() {
  return (
  <div><p19>Wasabi</p19></div>
  )
  }
 }
 class Yum extends React.Component {
  render() {
  return (
  <div><p20>Yum! Bakery</p20></div>
  )
  }
 }
 class Menu extends React.Component {
  render() {
  return (
  <div>
  <Bamboo />
  <p1>Authentic dim sum selections and hot plates.</p1>
  <hr />
  <img src="https://umassdining.com/sites/default/files/images/hd5981.jpg" />
  <hr />
  <DeliDelish />
  <p2>Hot and cold grinders featuring house-roasted turkey and roast beef.</p2>
  <hr />
  <img src="https://umassdining.com/sites/default/files/images/deli_delish.jpg" />
  <hr />
  <hr />
  <GreenFields />
  
  <p3>Freshly tossed salads made to-order with locally sourced ingredients.</p3>
  <hr />
  <img src="https://umassdining.com/sites/default/files/images/green_fields.jpg" />
  <hr />
  <Grill />
  <p4>Classic American fare ranging from burgers to chicken tenders to milkshakes.</p4>
  <hr />
  <img src="https://www.umass.edu/cp/sites/default/files/Lincoln%20Campus%20Center_Blue%20Wall_01.jpg" />
  <hr />
  <Paciugo />
  <p5>Traditional Italian gelato made with all-natural ingredients and real fruit</p5>
  <hr />
  <img src="https://umassdining.com/sites/default/files/images/paciugo%20_resized.jpg" />
  <hr />
  <StarGinger />
  <p6>A variety of Vietnamese, Thai, and Korean specialties including pho and bibimbap.</p6>
  <hr />
  <img src="https://umassdining.com/sites/default/files/images/star_ginger%20_resized.jpg" />
  <hr />
  <Tamales />
  <p7>Burritos, bowls, and salads made to-order with sustainably-harvested ingredients</p7>
  <hr />
  <img src="https://umassdining.com/sites/default/files/images/tamales.jpg" />
  <hr />
  <Tavola />
  <p8>Classic Mediterranean dishes including hummus bowls, pizza, and pasta.</p8>
  <hr />
  <img src="https://umassdining.com/sites/default/files/images/hd4661.jpg" />
  <hr />
  <Wasabi />
  <p9>Sushi made fresh with sustainably sourced fish and a wide variety of other Japanese specialties.</p9>
  <hr />
  <img src="https://umassdining.com/sites/default/files/images/wasabi.jpg" />
  <hr />
  <Yum />
  <p10>Homemade baked goods including cookies, cakes, and French macaroons, as well as seasonal offerings.</p10>
  <hr />
  <img src="https://umassdining.com/sites/default/files/images/yum_bakery%20_resized.jpg"/>
  </div>
  
  );
  }
 }
 ReactDOM.render(<Menu />, contentNode); 