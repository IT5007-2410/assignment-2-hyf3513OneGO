/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const initialTravellers = [
  {
    id: 1, name: 'Jack', phone: 88885555,passportID:"A1111",
    bookingTime: new Date(),
  },
  {
    id: 2, name: 'Rose', phone: 88884444,passportID:"A1112",
    bookingTime: new Date(),
  },
  {
    id: 3, name: 'Ocean', phone: 88884444,passportID:"A1112",
    bookingTime: new Date(),
  },
];
const totalSeatsNum = 60

function TravellerRow(props) {
  {/*Q3. Placeholder to initialize local variable based on traveller prop.*/}
  return (
    <tr>
	  {/*Q3. Placeholder for rendering one row of a table with required traveller attribute values.*/}
    </tr>
  );
}

class Display extends React.Component {
  
	/*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/
  constructor(props) {
    super(props);
  }
  render(){
    return (
        <div>
          <h2>Display Page</h2>
          <table className="bordered-table">
            <thead>
            <tr>
              {/*Q3. Below table is just an example. Add more columns based on the traveller attributes you choose.*/}
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Passport ID</th>
              <th>Booking Time</th>
              <th>Operations</th>
            </tr>
            </thead>
            <tbody>
            {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/}
            {this.props.travellers.map((item,key)=>{
              return (
                  <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.passportID}</td>
                    <td>{item.bookingTime.toLocaleDateString()}</td>
                    <td className="tableOperations">
                      <a className="tableOperation">Delete</a>
                    </td>
                  </tr>

              )
            })}
            </tbody>
          </table>
        </div>
    );
  }

}

class Add extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
  }

  render() {
    return (
      <form name="addTraveller" onSubmit={this.handleSubmit}>
	    {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
        <h2>Add Page</h2>
        <input type="text" name="travellername" placeholder="Name" />
        <button>Add</button>
      </form>
    );
  }
}


class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {nameInput:""}
  }
  handleSubmit(e) {
    e.preventDefault();
    /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
    this.props.deleteTraveller(this.state.nameInput);
  }
  handleChange(e) {
    this.setState({nameInput: e.target.value});
  }
  render() {
    return (
        <div>
          <h2>Delete Page</h2>
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
	    {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
	<input onChange={this.handleChange} value={this.state.nameInput} type="text" name="travellername" placeholder="Name" />
        <button>Delete</button>
      </form>
        </div>
    );
  }
}

class Homepage extends React.Component {
	constructor(props) {
	  super(props);
	}
	render(){
	return (
        <div>
          {/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
          <h2>HomePage</h2>
          <div className={"visualizeLabels"}>
            <div className={"visualizeLabel"}>
              <a className={"visualizeIcon"}  style={{"background":"gray"}}></a>
              <a className={"visualizeLabelText"}>
              Occupied Seat
              </a>
            </div>
            <div className={"visualizeLabel"}>
              <a className={"visualizeIcon"}></a>
              <a className={"visualizeLabelText"}>
                Available Seat
              </a>
            </div>
          </div>
          <div className={"visualizeSeats"}>

            {
              Array.from({length: this.props.totalSeatsNum}, (_, index) => {
                if (index < this.props.travellers.length) {
                  return <a key={index} className={"seatItem occupiedSeatItem"}>{index+1}</a>
                } else {
                  return <a key={index} className={"seatItem"}>{index+1}</a>

                }
              })
            }
          </div>
        </div>);
    }
}

class TicketToRide extends React.Component {
  constructor() {
    super();
    this.state = { travellers: [], selector: 2,totalSeatsNum:0};
    this.bookTraveller = this.bookTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
  }

  setSelector(value)
  {
  	/*Q2. Function to set the value of component selector variable based on user's button click.*/
    this.setState({ selector: value });
  }
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ travellers: initialTravellers,totalSeatsNum:totalSeatsNum});
    }, 500);
  }

  bookTraveller(passenger) {
	    /*Q4. Write code to add a passenger to the traveller state variable.*/
  }

  deleteTraveller(passenger) {
    console.log(passenger)
	  /*Q5. Write code to delete a passenger from the traveller state variable.*/
  }
  render() {
    return (
      <div>
        <h1>Ticket To Ride</h1>
	<div>
	    {/*Q2. Code for Navigation bar. Use basic buttons to create a nav bar. Use states to manage selection.*/}
      <nav >
        <a className={`tabItems ${this.state.selector===0?"selectedTab":null}`} onClick={()=>{this.setSelector(0)}}>Home</a>
        <a className={`tabItems ${this.state.selector===1?"selectedTab":null}`} onClick={()=>{this.setSelector(1)}}>Add</a>
        <a className={`tabItems ${this.state.selector===2?"selectedTab":null}`} onClick={()=>{this.setSelector(2)}}>Delete</a>
        <a className={`tabItems ${this.state.selector===3?"selectedTab":null}`} onClick={()=>{this.setSelector(3)}}>Display</a>
      </nav>
	</div>
	<div>
		{/*Only one of the below four divisions is rendered based on the button clicked by the user.*/}
		{/*Q2 and Q6. Code to call Instance that draws Homepage. Homepage shows Visual Representation of free seats.*/}
      {this.state.selector===0?<Homepage travellers={this.state.travellers} totalSeatsNum={this.state.totalSeatsNum}></Homepage>:null}
      {this.state.selector===1?<Add></Add>:null}
      {this.state.selector===2?<Delete deleteTraveller={this.deleteTraveller}></Delete>:null}
      {this.state.selector===3?<Display travellers={this.state.travellers}></Display>:null}
		{/*Q3. Code to call component that Displays Travellers.*/}
		
		{/*Q4. Code to call the component that adds a traveller.*/}
		{/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}
	</div>
      </div>
    );
  }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));
