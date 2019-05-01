webpackJsonp([0],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(46);

var _reactDom = __webpack_require__(88);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(250);

var _App2 = _interopRequireDefault(_App);

var _App3 = __webpack_require__(254);

var _App4 = _interopRequireDefault(_App3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // //import { pbkdf2 } from "crypto";


// This is a place holder for the initial application state.
var state = [];

var NoMatch = function NoMatch() {
  return _react2.default.createElement(
    'p',
    null,
    'Page Not Found'
  );
};

var RoutedApp = function RoutedApp() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: Menu }),
    _react2.default.createElement(_reactRouter.Route, { path: '/App02', component: (0, _reactRouter.withRouter)(_App2.default) }),
    _react2.default.createElement(_reactRouter.Route, { path: '/App03', component: (0, _reactRouter.withRouter)(_App4.default) }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
  );
};

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/App02' },
          'Menu'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/App03' },
          'Place an Order'
        )
      );
    }
  }]);

  return Navigation;
}(_react2.default.Component);

var Bamboo = function (_React$Component2) {
  _inherits(Bamboo, _React$Component2);

  function Bamboo() {
    _classCallCheck(this, Bamboo);

    return _possibleConstructorReturn(this, (Bamboo.__proto__ || Object.getPrototypeOf(Bamboo)).apply(this, arguments));
  }

  _createClass(Bamboo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/App02' },
          'Bamboo'
        )
      );
    }
  }]);

  return Bamboo;
}(_react2.default.Component);

var DeliDelish = function (_React$Component3) {
  _inherits(DeliDelish, _React$Component3);

  function DeliDelish() {
    _classCallCheck(this, DeliDelish);

    return _possibleConstructorReturn(this, (DeliDelish.__proto__ || Object.getPrototypeOf(DeliDelish)).apply(this, arguments));
  }

  _createClass(DeliDelish, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/App02' },
          'Deli Delish'
        )
      );
    }
  }]);

  return DeliDelish;
}(_react2.default.Component);

var GreenFields = function (_React$Component4) {
  _inherits(GreenFields, _React$Component4);

  function GreenFields() {
    _classCallCheck(this, GreenFields);

    return _possibleConstructorReturn(this, (GreenFields.__proto__ || Object.getPrototypeOf(GreenFields)).apply(this, arguments));
  }

  _createClass(GreenFields, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/App02' },
          'Green Fields'
        )
      );
    }
  }]);

  return GreenFields;
}(_react2.default.Component);

var Grill = function (_React$Component5) {
  _inherits(Grill, _React$Component5);

  function Grill() {
    _classCallCheck(this, Grill);

    return _possibleConstructorReturn(this, (Grill.__proto__ || Object.getPrototypeOf(Grill)).apply(this, arguments));
  }

  _createClass(Grill, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/App02' },
          'The Grill'
        )
      );
    }
  }]);

  return Grill;
}(_react2.default.Component);

var Paciugo = function (_React$Component6) {
  _inherits(Paciugo, _React$Component6);

  function Paciugo() {
    _classCallCheck(this, Paciugo);

    return _possibleConstructorReturn(this, (Paciugo.__proto__ || Object.getPrototypeOf(Paciugo)).apply(this, arguments));
  }

  _createClass(Paciugo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/App02' },
          'Paciugo'
        )
      );
    }
  }]);

  return Paciugo;
}(_react2.default.Component);

var StarGinger = function (_React$Component7) {
  _inherits(StarGinger, _React$Component7);

  function StarGinger() {
    _classCallCheck(this, StarGinger);

    return _possibleConstructorReturn(this, (StarGinger.__proto__ || Object.getPrototypeOf(StarGinger)).apply(this, arguments));
  }

  _createClass(StarGinger, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/App02' },
          'Star Ginger'
        )
      );
    }
  }]);

  return StarGinger;
}(_react2.default.Component);

var Tamales = function (_React$Component8) {
  _inherits(Tamales, _React$Component8);

  function Tamales() {
    _classCallCheck(this, Tamales);

    return _possibleConstructorReturn(this, (Tamales.__proto__ || Object.getPrototypeOf(Tamales)).apply(this, arguments));
  }

  _createClass(Tamales, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/App02' },
          'Tamales'
        )
      );
    }
  }]);

  return Tamales;
}(_react2.default.Component);

var Tavola = function (_React$Component9) {
  _inherits(Tavola, _React$Component9);

  function Tavola() {
    _classCallCheck(this, Tavola);

    return _possibleConstructorReturn(this, (Tavola.__proto__ || Object.getPrototypeOf(Tavola)).apply(this, arguments));
  }

  _createClass(Tavola, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/App02' },
          'Tavola'
        )
      );
    }
  }]);

  return Tavola;
}(_react2.default.Component);

var Wasabi = function (_React$Component10) {
  _inherits(Wasabi, _React$Component10);

  function Wasabi() {
    _classCallCheck(this, Wasabi);

    return _possibleConstructorReturn(this, (Wasabi.__proto__ || Object.getPrototypeOf(Wasabi)).apply(this, arguments));
  }

  _createClass(Wasabi, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/App02' },
          'Wasabi'
        )
      );
    }
  }]);

  return Wasabi;
}(_react2.default.Component);

var Yum = function (_React$Component11) {
  _inherits(Yum, _React$Component11);

  function Yum() {
    _classCallCheck(this, Yum);

    return _possibleConstructorReturn(this, (Yum.__proto__ || Object.getPrototypeOf(Yum)).apply(this, arguments));
  }

  _createClass(Yum, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/App02' },
          'Yum! Bakery'
        )
      );
    }
  }]);

  return Yum;
}(_react2.default.Component);

var Menu = function (_React$Component12) {
  _inherits(Menu, _React$Component12);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(Navigation, null),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(Bamboo, null),
        _react2.default.createElement(
          'p1',
          null,
          'Authentic dim sum selections and hot plates.'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement('img', { src: 'https://umassdining.com/sites/default/files/images/hd5981.jpg' }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(DeliDelish, null),
        _react2.default.createElement(
          'p2',
          null,
          'Hot and cold grinders featuring house-roasted turkey and roast beef.'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement('img', { src: 'https://umassdining.com/sites/default/files/images/deli_delish.jpg' }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(GreenFields, null),
        _react2.default.createElement(
          'p3',
          null,
          'Freshly tossed salads made to-order with locally sourced ingredients.'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement('img', { src: 'https://umassdining.com/sites/default/files/images/green_fields.jpg' }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(Grill, null),
        _react2.default.createElement(
          'p4',
          null,
          'Classic American fare ranging from burgers to chicken tenders to milkshakes.'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement('img', { src: 'https://www.umass.edu/cp/sites/default/files/Lincoln%20Campus%20Center_Blue%20Wall_01.jpg' }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(Paciugo, null),
        _react2.default.createElement(
          'p5',
          null,
          'Traditional Italian gelato made with all-natural ingredients and real fruit'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement('img', { src: 'https://umassdining.com/sites/default/files/images/paciugo%20_resized.jpg' }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(StarGinger, null),
        _react2.default.createElement(
          'p6',
          null,
          'A variety of Vietnamese, Thai, and Korean specialties including pho and bibimbap.'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement('img', { src: 'https://umassdining.com/sites/default/files/images/star_ginger%20_resized.jpg' }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(Tamales, null),
        _react2.default.createElement(
          'p7',
          null,
          'Burritos, bowls, and salads made to-order with sustainably-harvested ingredients'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement('img', { src: 'https://umassdining.com/sites/default/files/images/tamales.jpg' }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(Tavola, null),
        _react2.default.createElement(
          'p8',
          null,
          'Classic Mediterranean dishes including hummus bowls, pizza, and pasta.'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement('img', { src: 'https://umassdining.com/sites/default/files/images/hd4661.jpg' }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(Wasabi, null),
        _react2.default.createElement(
          'p9',
          null,
          'Sushi made fresh with sustainably sourced fish and a wide variety of other Japanese specialties.'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement('img', { src: 'https://umassdining.com/sites/default/files/images/wasabi.jpg' }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(Yum, null),
        _react2.default.createElement(
          'p10',
          null,
          'Homemade baked goods including cookies, cakes, and French macaroons, as well as seasonal offerings.'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement('img', { src: 'https://umassdining.com/sites/default/files/images/yum_bakery%20_resized.jpg' })
      );
    }
  }]);

  return Menu;
}(_react2.default.Component);

exports.default = Menu;

_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), contentNode);

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Router, Route, hashHistory } from 'react-router';
// import MenuFilter from './MenuFilter.jsx';
//var contentNode = document.getElementById("contents");


// class CartFilter extends React.Component {
//   render() {
//     return <div></div>;
//   }
// }

var MenuRow = function MenuRow(props) {
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      props.item.location
    ),
    _react2.default.createElement(
      'td',
      null,
      props.item.item
    ),
    _react2.default.createElement(
      'td',
      null,
      props.item.description
    ),
    _react2.default.createElement(
      'td',
      null,
      props.item.price
    )
  );
};

function MenuTable(props) {
  var MenuRows = props.items.map(function (item) {
    return _react2.default.createElement(MenuRow, { key: item._id, item: item });
  });
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'table',
      { className: 'bordered-table' },
      _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            'Location'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Item'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Description'
          ),
          _react2.default.createElement(
            'td',
            null,
            'Price'
          )
        )
      ),
      _react2.default.createElement(
        'tbody',
        null,
        MenuRows
      )
    )
  );
}

var CartRow = function CartRow(props) {
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      props.item.item
    ),
    _react2.default.createElement(
      'td',
      null,
      props.item.price
    )
  );
};

function CartTable(props) {
  var CartRows = props.items.map(function (item) {
    return _react2.default.createElement(CartRow, { key: item._id, item: item });
  });
  console.log(CartRows);
  return _react2.default.createElement(
    'table',
    { className: 'bordered-table' },
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Item'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Price'
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      CartRows
    )
  );
}

var CartAdd = function (_React$Component) {
  _inherits(CartAdd, _React$Component);

  function CartAdd() {
    _classCallCheck(this, CartAdd);

    var _this = _possibleConstructorReturn(this, (CartAdd.__proto__ || Object.getPrototypeOf(CartAdd)).call(this));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(CartAdd, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.cartAdd;
      this.props.createCart({
        item: form.item.value,
        price: form.price.value,
        status: 'New'
      });
      // Clear the form for the next input.
      form.item.value = '';
      form.price.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { name: 'cartAdd', onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { type: 'text', name: 'item', placeholder: 'Item' }),
          _react2.default.createElement('input', { type: 'text', name: 'price', placeholder: 'Price' }),
          _react2.default.createElement(
            'button',
            null,
            'Add'
          )
        )
      );
    }
  }]);

  return CartAdd;
}(_react2.default.Component);

// const NoMatch = () => <p>Page Not Found</p>;

// const RoutedApp = () => (
//   <Router history={hashHistory} >
//     <Route path="/" component={Menu} />
//     <Route path="/App02" component={withRouter(CartList)} />
//     <Route path="*" component={NoMatch} />
//   </Router>);

var CartList = function (_React$Component2) {
  _inherits(CartList, _React$Component2);

  function CartList() {
    _classCallCheck(this, CartList);

    var _this2 = _possibleConstructorReturn(this, (CartList.__proto__ || Object.getPrototypeOf(CartList)).call(this));

    console.log("constructor");
    _this2.state = { items: [] };

    _this2.createCart = _this2.createCart.bind(_this2);
    return _this2;
  }

  _createClass(CartList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this3 = this;

      console.log("testtesttest");
      fetch('/api/items').then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data.records);
            console.log("Total count of records:", data._metadata.total_count);
            _this3.setState({ items: data.records });
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
    key: 'createCart',
    value: function createCart(newItem) {
      var _this4 = this;

      fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
      }).then(function (res) {
        if (res.ok) {
          res.json().then(function (updatedItem) {
            var newItems = _this4.state.items.concat(updatedItem);
            _this4.setState({ item: newItems });
          });
        } else {
          res.json().then(function (error) {
            alert('Failed to add item: ' + error.message);
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      this.state.cartItems = [];
      console.log("render");

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/' },
          'Back to Home'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Place an Order'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(MenuTable, { items: this.state.items })
      );
    }
  }]);

  return CartList;
}(_react2.default.Component);

// This renders the JSX component inside the content node:
//ReactDOM.render(<CartList />, contentNode);


exports.default = CartList;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(46);

var _reactDom = __webpack_require__(88);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var carts = [{
  item: ''
}];

var contentNode = document.getElementById("contents");

var CartFilter = function (_React$Component) {
  _inherits(CartFilter, _React$Component);

  function CartFilter() {
    _classCallCheck(this, CartFilter);

    return _possibleConstructorReturn(this, (CartFilter.__proto__ || Object.getPrototypeOf(CartFilter)).apply(this, arguments));
  }

  _createClass(CartFilter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null);
    }
  }]);

  return CartFilter;
}(_react2.default.Component);

// const MenuRow = (props) => (
//   <tr>
//   </tr>
// );
// // props.cart.item}

// function MenuTable(props) {
//   const CartRows = props.carts.map(cart => (
//     <MenuRow key={"nothing"} cart={cart} />
//   ));
//   return (
//     <table className="bordered-table">
//       <thead>
//         <tr>
//           <th>Menu</th>
//           <th>Menu 2</th>
//           <td>chicken</td>
//           <td>Meat</td>
//           <td>Goat</td>
//           <td>Beef</td>
//           <td>Taco</td>
//         </tr>
//       </thead>
//       <tbody>{CartRows}</tbody>
//     </table>
//   );
// }

var CartRow = function CartRow(props) {
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      props.cart.item
    )
  );
};

function CartTable(props) {
  var CartRows = props.carts.map(function (cart) {
    return _react2.default.createElement(CartRow, { key: cart.item, cart: cart });
  });
  return _react2.default.createElement(
    'table',
    { className: 'bordered-table' },
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Your Cart'
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
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
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.cartAdd;
      this.props.createCart({
        item: form.item.value
      });
      // Clear the form for the next input.
      form.item.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { name: 'cartAdd', onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { type: 'text', name: 'item', placeholder: 'Item' }),
          _react2.default.createElement(
            'button',
            null,
            'Add'
          ),
          _react2.default.createElement('input', { type: 'text', name: '', placeholder: 'Name' }),
          _react2.default.createElement('input', { type: 'text', name: '', placeholder: 'Address' }),
          _react2.default.createElement('input', { type: 'text', name: '', placeholder: 'Payment Method' })
        )
      );
    }
  }]);

  return CartAdd;
}(_react2.default.Component);

var TheCart = function (_React$Component3) {
  _inherits(TheCart, _React$Component3);

  function TheCart() {
    _classCallCheck(this, TheCart);

    var _this3 = _possibleConstructorReturn(this, (TheCart.__proto__ || Object.getPrototypeOf(TheCart)).call(this));

    _this3.state = { carts: [] };

    _this3.createCart = _this3.createCart.bind(_this3);
    return _this3;
  }

  _createClass(TheCart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this4 = this;

      setTimeout(function () {
        _this4.setState({
          carts: carts
        });
      }, 500);
    }
  }, {
    key: 'createCart',
    value: function createCart(newCart) {
      var newcarts = this.state.carts.slice();
      newcarts.push(newCart);
      this.setState({ carts: newcarts });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/' },
          'Back to Home'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Place an Order'
        ),
        _react2.default.createElement(CartFilter, null),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(CartAdd, { createCart: this.createCart }),
        _react2.default.createElement(CartTable, { carts: this.state.carts }),
        _react2.default.createElement('hr', null)
      );
    }
  }]);

  return TheCart;
}(_react2.default.Component);

// This renders the JSX component inside the content node:


exports.default = TheCart;
_reactDom2.default.render(_react2.default.createElement(TheCart, null), contentNode);

/***/ })

},[114]);
//# sourceMappingURL=app.bundle.js.map