"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import { pbkdf2 } from "crypto";

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var MyComponent = function (_React$Component) {
  _inherits(MyComponent, _React$Component);

  function MyComponent() {
    _classCallCheck(this, MyComponent);

    return _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this));
  }

  _createClass(MyComponent, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { "class": "collapsible" },
          "Open Collapsible"
        ),
        React.createElement(
          "h1",
          { "class": "content" },
          "Dining Locations and Their Food"
        ),
        React.createElement(
          "div",
          null,
          "Bamboo"
        ),
        React.createElement(
          "p1",
          null,
          "Authentic dim sum selections and hot plates."
        ),
        React.createElement(
          "div",
          null,
          "Deli Delish"
        ),
        React.createElement(
          "p2",
          null,
          "Hot and cold grinders featuring house-roasted turkey and roast beef."
        ),
        React.createElement(
          "div",
          null,
          "Green Fields"
        ),
        React.createElement(
          "p3",
          null,
          "Freshly tossed salads made to-order with locally sourced ingredients."
        ),
        React.createElement(
          "div",
          null,
          "The Grill"
        ),
        React.createElement(
          "p4",
          null,
          "Classic American fare ranging from burgers to chicken tenders to milkshakes."
        ),
        React.createElement(
          "div",
          null,
          "Paciugo"
        ),
        React.createElement(
          "p5",
          null,
          "A selection of smooth, all-natural gelato."
        ),
        React.createElement(
          "div",
          null,
          "Star Ginger"
        ),
        React.createElement(
          "p6",
          null,
          "Pho noodle bowls, rice bowls, and authentic Korean bibimbap."
        ),
        React.createElement(
          "div",
          null,
          "Tamales"
        ),
        React.createElement(
          "p7",
          null,
          "Burritos, bowls, and salads made to-order."
        ),
        React.createElement(
          "div",
          null,
          "Tavola"
        ),
        React.createElement(
          "p8",
          null,
          "Classic Mediterranean fare including hummus bowls, pizza, and pasta."
        ),
        React.createElement(
          "div",
          null,
          "Wasabi"
        ),
        React.createElement(
          "p9",
          null,
          "Sushi made with sustainably sourced fish, miso soup, and the like."
        ),
        React.createElement(
          "div",
          null,
          "Yum! Bakery"
        ),
        React.createElement(
          "p10",
          null,
          "Freshly baked goods including cookies, cakes, and French macaroons."
        )
      );
    }
  }]);

  return MyComponent;
}(React.Component);
// added code 


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
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
ReactDOM.render(React.createElement(MyComponent, null), contentNode);