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
          "h1",
          null,
          "Dining Locations and Their Food"
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            null,
            "Bamboo"
          )
        ),
        React.createElement(
          "p",
          null,
          "Authentic dim sum selections and hot plates."
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            null,
            "Deli Delish"
          )
        ),
        React.createElement(
          "p",
          null,
          "Hot and cold grinders featuring house-roasted turkey and roast beef."
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            null,
            "Green Fields"
          )
        ),
        React.createElement(
          "p",
          null,
          "Freshly tossed salads made to-order with locally sourced ingredients."
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            null,
            "The Grill"
          )
        ),
        React.createElement(
          "p",
          null,
          "Classic American fare ranging from burgers to chicken tenders to milkshakes."
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            null,
            "Paciugo"
          )
        ),
        React.createElement(
          "p",
          null,
          "A selection of smooth, all-natural gelato."
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            null,
            "Star Ginger"
          )
        ),
        React.createElement(
          "p",
          null,
          "Pho noodle bowls, rice bowls, and authentic Korean bibimbap."
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            null,
            "Tamales"
          )
        ),
        React.createElement(
          "p",
          null,
          "Burritos, bowls, and salads made to-order."
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            null,
            "Tavola"
          )
        ),
        React.createElement(
          "p",
          null,
          "Classic Mediterranean fare including hummus bowls, pizza, and pasta."
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            null,
            "Wasabi"
          )
        ),
        React.createElement(
          "p",
          null,
          "Sushi made with sustainably sourced fish, miso soup, and the like."
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            null,
            "Yum! Bakery"
          )
        ),
        React.createElement(
          "p",
          null,
          "Freshly baked goods including cookies, cakes, and French macaroons."
        )
      );
    }
  }]);

  return MyComponent;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(MyComponent, null), contentNode);