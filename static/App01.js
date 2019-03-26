'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import { pbkdf2 } from "crypto";

var MyComponent = function (_React$Component) {
  _inherits(MyComponent, _React$Component);

  function MyComponent() {
    _classCallCheck(this, MyComponent);

    return _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this));
  }

  _createClass(MyComponent, [{
    key: 'toggle',
    value: function toggle(e) {
      console.log('testing e', e);
      if (e.target.class === 'collapse') {
        e.target.className = 'collapse.in';
      } else {
        e.target.className = 'collapse';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'cart' },
        React.createElement(
          'button',
          { className: 'btn btn-block', onClick: function onClick() {
              _this2.toggle.bind('bamboo');
              //console.log('testing=this.state.open ', this.state.open);
            } },
          'Bamboo'
        ),
        React.createElement(
          'div',
          { id: 'bamboo', className: 'collapse' },
          React.createElement(
            'div',
            null,
            'A freshly prepared selection of authentic dim sum and hot plates.'
          )
        ),
        React.createElement(
          'button',
          { className: 'btn btn-block', onClick: function onClick() {
              _this2.toggle.bind('deli delish');
              //console.log('testing=this.state.open ', this.state.open);
            } },
          'Deli Delish'
        ),
        React.createElement(
          'div',
          { id: 'deli delish', className: 'collapse' },
          React.createElement(
            'div',
            null,
            'Hot and cold sandwiches and rolls prepared with a variety of ingredients, including house-roasted turkey and roast beef'
          )
        ),
        React.createElement(
          'button',
          { className: 'btn btn-block', onClick: function onClick() {
              _this2.toggle.bind('green fields');
              //console.log('testing=this.state.open ', this.state.open);
            } },
          'Green Fields'
        ),
        React.createElement(
          'div',
          { id: 'green fields', className: 'collapse' },
          React.createElement(
            'div',
            null,
            'A variety of salads tossed to-order with locally sourced ingredients.'
          )
        ),
        React.createElement(
          'button',
          { className: 'btn btn-block', onClick: function onClick() {
              _this2.toggle.bind('paciugo');
              //console.log('testing=this.state.open ', this.state.open);
            } },
          'Paciugo'
        ),
        React.createElement(
          'div',
          { id: 'paciugo', className: 'collapse' },
          React.createElement(
            'div',
            null,
            'Smooth, traditionally crafted Italian gelato made from fresh, all-natural ingredients.'
          )
        ),
        React.createElement(
          'button',
          { className: 'btn btn-block', onClick: function onClick() {
              _this2.toggle.bind('star ginger');
              //console.log('testing=this.state.open ', this.state.open);
            } },
          'Star Ginger'
        ),
        React.createElement(
          'div',
          { id: 'star ginger', className: 'collapse' },
          React.createElement(
            'div',
            null,
            'Authentic Vietnamese, Thai, and Korean specialties, including pho, rice bowls, and bibimbap.'
          )
        ),
        React.createElement(
          'button',
          { className: 'btn btn-block', onClick: function onClick() {
              _this2.toggle.bind('tamales');
              //console.log('testing=this.state.open ', this.state.open);
            } },
          'Tamales'
        ),
        React.createElement(
          'div',
          { id: 'tamales', className: 'collapse' },
          React.createElement(
            'div',
            null,
            'Burritos, burrito bowls, and salads made to-order with fresh, sustainably-sourced ingredients.'
          )
        ),
        React.createElement(
          'button',
          { className: 'btn btn-block', onClick: function onClick() {
              _this2.toggle.bind('tavola');
              //console.log('testing=this.state.open ', this.state.open);
            } },
          'Tavola'
        ),
        React.createElement(
          'div',
          { id: 'tavola', className: 'collapse' },
          React.createElement(
            'div',
            null,
            'Classic Mediterannean specialties including pizza, pasta, and hummus bowls.'
          )
        ),
        React.createElement(
          'button',
          { className: 'btn btn-block', onClick: function onClick() {
              _this2.toggle.bind('wasabi');
              //console.log('testing=this.state.open ', this.state.open);
            } },
          'Wasabi'
        ),
        React.createElement(
          'div',
          { id: 'wasabi', className: 'collapse' },
          React.createElement(
            'div',
            null,
            'A selection of sushi made with sustainably sourced seafood, as well as other authentic Japanese offerings.'
          )
        ),
        React.createElement(
          'button',
          { className: 'btn btn-block', onClick: function onClick() {
              _this2.toggle.bind('yum');
              //console.log('testing=this.state.open ', this.state.open);
            } },
          'Yum! Bakery'
        ),
        React.createElement(
          'div',
          { id: 'yum', className: 'collapse' },
          React.createElement(
            'div',
            null,
            'Full-service bakery offering homemade cookies, brownies, and seasonal specialties.'
          )
        )
      );
    }
  }]);

  return MyComponent;
}(React.Component);

;

ReactDOM.render(React.createElement(MyComponent, null), document.getElementById('MyComponent'));