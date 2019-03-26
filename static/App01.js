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

var Bamboo = function (_React$Component) {
  _inherits(Bamboo, _React$Component);

  function Bamboo() {
    _classCallCheck(this, Bamboo);

    return _possibleConstructorReturn(this, (Bamboo.__proto__ || Object.getPrototypeOf(Bamboo)).apply(this, arguments));
  }

  _createClass(Bamboo, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p11",
          null,
          "Bamboo"
        )
      );
    }
  }]);

  return Bamboo;
}(React.Component);

var DeliDelish = function (_React$Component2) {
  _inherits(DeliDelish, _React$Component2);

  function DeliDelish() {
    _classCallCheck(this, DeliDelish);

    return _possibleConstructorReturn(this, (DeliDelish.__proto__ || Object.getPrototypeOf(DeliDelish)).apply(this, arguments));
  }

  _createClass(DeliDelish, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p12",
          null,
          "Deli Delish"
        )
      );
    }
  }]);

  return DeliDelish;
}(React.Component);

var GreenFields = function (_React$Component3) {
  _inherits(GreenFields, _React$Component3);

  function GreenFields() {
    _classCallCheck(this, GreenFields);

    return _possibleConstructorReturn(this, (GreenFields.__proto__ || Object.getPrototypeOf(GreenFields)).apply(this, arguments));
  }

  _createClass(GreenFields, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p13",
          null,
          "Green Fields"
        )
      );
    }
  }]);

  return GreenFields;
}(React.Component);

var Grill = function (_React$Component4) {
  _inherits(Grill, _React$Component4);

  function Grill() {
    _classCallCheck(this, Grill);

    return _possibleConstructorReturn(this, (Grill.__proto__ || Object.getPrototypeOf(Grill)).apply(this, arguments));
  }

  _createClass(Grill, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p14",
          null,
          "The Grill"
        )
      );
    }
  }]);

  return Grill;
}(React.Component);

var Paciugo = function (_React$Component5) {
  _inherits(Paciugo, _React$Component5);

  function Paciugo() {
    _classCallCheck(this, Paciugo);

    return _possibleConstructorReturn(this, (Paciugo.__proto__ || Object.getPrototypeOf(Paciugo)).apply(this, arguments));
  }

  _createClass(Paciugo, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p15",
          null,
          "Paciugo"
        )
      );
    }
  }]);

  return Paciugo;
}(React.Component);

var StarGinger = function (_React$Component6) {
  _inherits(StarGinger, _React$Component6);

  function StarGinger() {
    _classCallCheck(this, StarGinger);

    return _possibleConstructorReturn(this, (StarGinger.__proto__ || Object.getPrototypeOf(StarGinger)).apply(this, arguments));
  }

  _createClass(StarGinger, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p16",
          null,
          "Star Ginger"
        )
      );
    }
  }]);

  return StarGinger;
}(React.Component);

var Tamales = function (_React$Component7) {
  _inherits(Tamales, _React$Component7);

  function Tamales() {
    _classCallCheck(this, Tamales);

    return _possibleConstructorReturn(this, (Tamales.__proto__ || Object.getPrototypeOf(Tamales)).apply(this, arguments));
  }

  _createClass(Tamales, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p17",
          null,
          "Tamales"
        )
      );
    }
  }]);

  return Tamales;
}(React.Component);

var Tavola = function (_React$Component8) {
  _inherits(Tavola, _React$Component8);

  function Tavola() {
    _classCallCheck(this, Tavola);

    return _possibleConstructorReturn(this, (Tavola.__proto__ || Object.getPrototypeOf(Tavola)).apply(this, arguments));
  }

  _createClass(Tavola, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p18",
          null,
          "Tavola"
        )
      );
    }
  }]);

  return Tavola;
}(React.Component);

var Wasabi = function (_React$Component9) {
  _inherits(Wasabi, _React$Component9);

  function Wasabi() {
    _classCallCheck(this, Wasabi);

    return _possibleConstructorReturn(this, (Wasabi.__proto__ || Object.getPrototypeOf(Wasabi)).apply(this, arguments));
  }

  _createClass(Wasabi, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p19",
          null,
          "Wasabi"
        )
      );
    }
  }]);

  return Wasabi;
}(React.Component);

var Yum = function (_React$Component10) {
  _inherits(Yum, _React$Component10);

  function Yum() {
    _classCallCheck(this, Yum);

    return _possibleConstructorReturn(this, (Yum.__proto__ || Object.getPrototypeOf(Yum)).apply(this, arguments));
  }

  _createClass(Yum, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p20",
          null,
          "Yum! Bakery"
        )
      );
    }
  }]);

  return Yum;
}(React.Component);

var Menu = function (_React$Component11) {
  _inherits(Menu, _React$Component11);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Dining Locations"
        ),
        React.createElement(Bamboo, null),
        React.createElement(
          "p1",
          null,
          "Authentic dim sum selections and hot plates."
        ),
        React.createElement("hr", null),
        React.createElement(DeliDelish, null),
        React.createElement(
          "p2",
          null,
          "Hot and cold grinders featuring house-roasted turkey and roast beef."
        ),
        React.createElement("hr", null),
        React.createElement(GreenFields, null),
        React.createElement(
          "p3",
          null,
          "Freshly tossed salads made to-order with locally sourced ingredients."
        ),
        React.createElement("hr", null),
        React.createElement(Grill, null),
        React.createElement(
          "p4",
          null,
          "Classic American fare ranging from burgers to chicken tenders to milkshakes."
        ),
        React.createElement("hr", null),
        React.createElement(Paciugo, null),
        React.createElement(
          "p5",
          null,
          "Traditional Italian gelato made with all-natural ingredients and real fruit."
        ),
        React.createElement("hr", null),
        React.createElement(StarGinger, null),
        React.createElement(
          "p6",
          null,
          "A variety of Vietnamese, Thai, and Korean specialties including pho and bibimbap."
        ),
        React.createElement("hr", null),
        React.createElement(Tamales, null),
        React.createElement(
          "p7",
          null,
          "Burritos, bowls, and salads made to-order with sustainably-harvested ingredients."
        ),
        React.createElement("hr", null),
        React.createElement(Tavola, null),
        React.createElement(
          "p8",
          null,
          "Classic Mediterranean dishes including hummus bowls, pizza, and pasta."
        ),
        React.createElement("hr", null),
        React.createElement(Wasabi, null),
        React.createElement(
          "p9",
          null,
          "Sushi made fresh with sustainably sourced fish and a wide variety of other Japanese specialties."
        ),
        React.createElement("hr", null),
        React.createElement(Yum, null),
        React.createElement(
          "p10",
          null,
          "Homemade baked goods including cookies, cakes, and French macaroons, as well as seasonal offerings."
        )
      );
    }
  }]);

  return Menu;
}(React.Component);

ReactDOM.render(React.createElement(Menu, null), contentNode);