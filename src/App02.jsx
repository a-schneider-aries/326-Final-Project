const carts = [
  {
    item: 'pizza'
  }
];

var contentNode = document.getElementById("contents");

class CartFilter extends React.Component {
  render() {
    return <div></div>;
  }
}

const MenuRow = (props) => (
  <tr>
  </tr>
);
// props.cart.item}

function MenuTable(props) {
  const CartRows = props.carts.map(cart => (
    <MenuRow key={"nothing"} cart={cart} />
  ));
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Menu</th>
          <td>chicken</td>
          <td>Meat</td>
          <td>Goat</td>
          <td>Beef</td>
          <td>Taco</td>
        </tr>
      </thead>
      <tbody>{CartRows}</tbody>
    </table>
  );
}

const CartRow = (props) => (
  <tr>
    <td>{props.cart.item}</td>
  </tr>
);


function CartTable(props) {
  const CartRows = props.carts.map(cart => (
    <CartRow key={cart.item} cart={cart} />
  ));
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Your Cart</th>
        </tr>
      </thead>
      <tbody>{CartRows}</tbody>
    </table>
  );
}

class CartAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.cartAdd;
    this.props.createCart({
      item: form.item.value,
      status: 'New',
      created: new Date(),
    });
    // Clear the form for the next input.
    form.item.value = '';
  }

  render() {
    return (
      <div>
        <form name="cartAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="item" placeholder="Item" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

class CartList extends React.Component {
  constructor() {
    super();
    this.state = { carts: [] };

    this.createCart = this.createCart.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({
        carts: carts
      });
    }, 500);
  }

  createCart(newCart) {
    const newcarts = this.state.carts.slice();
    newcarts.push(newCart);
    this.setState({ carts: newcarts });
  }

  render() {
    return (
      <div>
        <h1>Place an Order</h1>
        <CartFilter />
        <hr />
        <MenuTable carts={this.state.carts} />
        <hr />   
        <CartAdd createCart={this.createCart} />
        <CartTable carts={this.state.carts} />
        <hr />
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<CartList />, contentNode);
