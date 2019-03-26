//import { pbkdf2 } from "crypto";

// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class Bamboo extends React.Component {
  render() {
  return (
  <div>Bamboo</div>
  )
  }
 }
 class DeliDelish extends React.Component {
  render() {
  return (
  <div>Deli Delish</div>
  )
  }
 }
 
 class GreenFields extends React.Component {
  render() {
  return (
  <div>Green Fields</div>
  )
  }
 }
 class Grill extends React.Component {
  render() {
  return (
  <div>The Grill</div>
  )
  }
 }
 class Paciugo extends React.Component {
  render() {
  return (
  <div>Paciugo</div>
  )
  }
 }
 class StarGinger extends React.Component {
  render() {
  return (
  <div>Star Ginger</div>
  )
  }
 }
 class Tamales extends React.Component {
  render() {
  return (
  <div>Tamales</div>
  )
  }
 }
 class Tavola extends React.Component {
  render() {
  return (
  <div>Tavola</div>
  )
  }
 }
 class Wasabi extends React.Component {
  render() {
  return (
  <div>Wasabi</div>
  )
  }
 }
 class Yum extends React.Component {
  render() {
  return (
  <div>Yum! Bakery</div>
  )
  }
 }
 class Menu extends React.Component {
  render() {
  return (
  <div>
  <h1>Dining Locations</h1>
  <Bamboo />
  <hr />
  <DeliDelish />
  <hr />
  <GreenFields />
  <hr />
  <Grill />
  <hr />
  <Paciugo />
  <hr />
  <StarGinger />
  <hr />
  <Tamales />
  <hr />
  <Tavola />
  <hr />
  <Wasabi />
  <hr />
  <Yum />
  </div>
  );
  }
 }
 ReactDOM.render(<Menu />, contentNode); 