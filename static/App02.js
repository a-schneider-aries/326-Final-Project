"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      props.menu_item.item
    ),
    React.createElement(
      "td",
      null,
<<<<<<< HEAD
      props.menu_item.price
=======
      props.item.description
    ),
    React.createElement(
      "td",
      null,
      props.item.price
>>>>>>> 4c40f321967ed851f35e52e590ef764b25469b3d
    )
  );
};

function MenuTable(props) {
<<<<<<< HEAD
  var CartRows = props.items.map(function (cart_item) {
    return React.createElement(MenuRow, { key: cart_item._id, cart_item: cart_item });
=======
  var MenuRows = props.items.map(function (item) {
    return React.createElement(MenuRow, { key: item._id, item: item });
>>>>>>> 4c40f321967ed851f35e52e590ef764b25469b3d
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
          "Item"
        ),
        React.createElement(
          "th",
          null,
          "Description"
        ),
        React.createElement(
          "td",
          null,
          "Price"
        )
      )
    ),
    React.createElement(
      "tbody",
      null,
<<<<<<< HEAD
      CartRows
=======
      MenuRows
>>>>>>> 4c40f321967ed851f35e52e590ef764b25469b3d
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
      props.item.item
    ),
    React.createElement(
      "td",
      null,
      props.item.price
    )
  );
};

function CartTable(props) {
  var CartRows = props.items.map(function (item) {
    return React.createElement(CartRow, { key: item._id, item: item });
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
          "Item"
        ),
        React.createElement(
          "th",
          null,
          "Price"
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
        price: form.price.value,
        status: 'New',
        created: new Date()
      });
      // Clear the form for the next input.
      form.item.value = '';
      form.price.value = '';
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
          React.createElement("input", { type: "text", name: "price", placeholder: "Price" }),
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

    _this3.state = { cart_items: [] };

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

      fetch('/api/items').then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log("Total count of records:", data._metadata.total_count);
            _this4.setState({ items: data.records });
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to fetch issues:" + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server:", err);
      });
    }
  }, {
    key: "createCart",
    value: function createCart(newItem) {
      var _this5 = this;

      fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
      }).then(function (res) {
        if (res.ok) {
          res.json().then(function (updatedItem) {
            var newItems = _this5.state.items.concat(updatedItem);
            _this5.setState({ items: newItems });
          });
        } else {
          res.json().then(function (error) {
            alert('Failed to add item: ' + error.message);
          });
        }
      });
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
        React.createElement(MenuTable, { items: this.state.items }),
        React.createElement("hr", null),
        React.createElement(CartAdd, { createCart: this.createCart }),
        React.createElement(CartTable, { items: this.state.items }),
        React.createElement("hr", null)
      );
    }
  }]);

  return CartList;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(CartList, null), contentNode);