//import { pbkdf2 } from "crypto";

class MyComponent extends React.Component {
  constructor() {
    super();
  }

  toggle(e) {
    console.log('testing e', e)
    if (e.target.class === 'collapse') {
      e.target.className = 'collapse.in'
    } else {
      e.target.className = 'collapse'
    }
  }
render(){
  return (
    <div className="cart">
     <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('bamboo')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Bamboo
     </button>
      <div id="bamboo" className="collapse">
        <div>
          
            A freshly prepared selection of authentic dim sum and hot plates.
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('deli delish')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Deli Delish
     </button>
      <div id="deli delish" className="collapse">
        <div>
          
            Hot and cold sandwiches and rolls prepared with a variety of ingredients, including house-roasted turkey and roast beef
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('green fields')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Green Fields
     </button>
      <div id="green fields" className="collapse">
        <div>
          
            A variety of salads tossed to-order with locally sourced ingredients. 
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('paciugo')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Paciugo
     </button>
      <div id="paciugo" className="collapse">
        <div>
          
            Smooth, traditionally crafted Italian gelato made from fresh, all-natural ingredients.
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('star ginger')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Star Ginger
     </button>
      <div id="star ginger" className="collapse">
        <div>
          
            Authentic Vietnamese, Thai, and Korean specialties, including pho, rice bowls, and bibimbap.
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('tamales')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Tamales
     </button>
      <div id="tamales" className="collapse">
        <div>
          
            Burritos, burrito bowls, and salads made to-order with fresh, sustainably-sourced ingredients.
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('tavola')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Tavola
     </button>
      <div id="tavola" className="collapse">
        <div>
          
            Classic Mediterannean specialties including pizza, pasta, and hummus bowls.
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('wasabi')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Wasabi
     </button>
      <div id="wasabi" className="collapse">
        <div>
          
            A selection of sushi made with sustainably sourced seafood, as well as other authentic Japanese offerings.
        
        </div>
      </div>
      <button className="btn btn-block" onClick={() => {
                          this.toggle.bind('yum')
                          //console.log('testing=this.state.open ', this.state.open);
                      }}>
                         Yum! Bakery
     </button>
      <div id="yum" className="collapse">
        <div>
          
            Full-service bakery offering homemade cookies, brownies, and seasonal specialties.
        
        </div>
      </div>
    </div>
  );
}

};

ReactDOM.render(
<MyComponent  />, document.getElementById('MyComponent')
);
