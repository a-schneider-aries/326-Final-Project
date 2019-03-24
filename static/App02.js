"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var carts = [{
  item: 'pizza'
}];

var contentNode = document.getElementById("contents");

var CartFilter = function (_React$Component) {
  _inherits(CartFilter, _React$Component);

  function CartFilter() {
    _classCallCheck(this, CartFilter);

    return _possibleConstructorReturn(this, (CartFilter.__proto__ || Object.getPrototypeOf(CartFilter)).apply(this, arguments));
  }

  _createClass(CartFilter, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null);
    }
  }]);

  return CartFilter;
}(React.Component);

var MenuRow = function MenuRow(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.cart.item
    )
  );
};

function MenuTable(props) {
  var CartRows = props.carts.map(function (cart) {
    return React.createElement(CartRow, { key: cart.item, cart: cart });
  });
  return React.createElement(
    "table",
    { className: "bordered-table" },
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          null,
          "Menu"
        )
      )
    ),
    React.createElement(
      "tbody",
      null,
      CartRows
    )
  );
}

var CartRow = function CartRow(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.cart.item
    )
  );
};

function CartTable(props) {
  var CartRows = props.carts.map(function (cart) {
    return React.createElement(CartRow, { key: cart.item, cart: cart });
  });
  return React.createElement(
    "table",
    { className: "bordered-table" },
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          null,
          "Your Cart"
        )
      )
    ),
    React.createElement(
      "tbody",
      null,
      CartRows
    )
  );
}

var CartAdd = function (_React$Component2) {
  _inherits(CartAdd, _React$Component2);

  function CartAdd() {
    _classCallCheck(this, CartAdd);

    var _this2 = _possibleConstructorReturn(this, (CartAdd.__proto__ || Object.getPrototypeOf(CartAdd)).call(this));

    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  _createClass(CartAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.cartAdd;
      this.props.createCart({
        item: form.item.value,
        status: 'New',
        created: new Date()
      });
      // Clear the form for the next input.
      form.item.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { name: "cartAdd", onSubmit: this.handleSubmit },
          React.createElement("input", { type: "text", name: "item", placeholder: "Item" }),
          React.createElement(
            "button",
            null,
            "Add"
          )
        )
      );
    }
  }]);

  return CartAdd;
}(React.Component);

var CartList = function (_React$Component3) {
  _inherits(CartList, _React$Component3);

  function CartList() {
    _classCallCheck(this, CartList);

    var _this3 = _possibleConstructorReturn(this, (CartList.__proto__ || Object.getPrototypeOf(CartList)).call(this));

    _this3.state = { carts: [] };

    _this3.createCart = _this3.createCart.bind(_this3);
    return _this3;
  }

  _createClass(CartList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this4 = this;

      setTimeout(function () {
        _this4.setState({
          carts: carts
        });
      }, 500);
    }
  }, {
    key: "createCart",
    value: function createCart(newCart) {
      var newcarts = this.state.carts.slice();
      newcarts.push(newCart);
      this.setState({ carts: newcarts });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Place an Order"
        ),
        React.createElement(CartFilter, null),
        React.createElement("hr", null),
        React.createElement(MenuTable, { carts: this.state.carts }),
        React.createElement("hr", null),
        React.createElement(CartAdd, { createCart: this.createCart }),
        React.createElement(CartTable, { carts: this.state.carts }),
        React.createElement("hr", null)
      );
    }
  }]);

  return CartList;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(CartList, null), contentNode);