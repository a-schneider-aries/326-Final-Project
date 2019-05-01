import React from 'react';

export default class MenuFilter extends React.Component {
  constructor(props) {
    // NEW
    // super();
    // this.clearFilter = this.clearFilter.bind(this);
    // this.setFilterOpen = this.setFilterOpen.bind(this);
    // this.setFilterAssigned = this.setFilterAssigned.bind(this);

    super(props);
    this.state = {
      location: props.initFilter.location || '',
      changed: false,
    };
    
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    // NEW END
  }

  // NEW
  /*
  setFilterOpen(e) {
    e.preventDefault();
    this.props.setFilter({ status: 'Open' });
  }

  setFilterAssigned(e) {
    e.preventDefault();
    this.props.setFilter({ status: 'Assigned' });
  }
  */
  componentWillReceiveProps(newProps) {
    this.setState({
      location: newProps.initFilter.location || '',
      changed: false,
    });
  }

  resetFilter() {
    this.setState({
      location: this.props.initFilter.location || '',
      changed: false,
    });
  }

  onChangLocation(e) {
    this.setState({ location: e.target.value, changed: true });
  }
  // NEW END

  clearFilter(e) {
    // NEW
    // e.preventDefault();
    // NEW END
    this.props.setFilter({});
  }

  applyFilter() {
    const newFilter = {};
    if (this.state.location) newFilter.location = this.state.location;
    this.props.setFilter(newFilter);
  }

  clearFilter() {
    this.props.setFilter({});
  }

  render() {
    // NEW
    /*
    const Separator = () => <span> | </span>;
    return (
      <div>
        <a href="#" onClick={this.clearFilter}>All Issues</a>
        <Separator />
        <a href="#" onClick={this.setFilterOpen}>Open Issues</a>
        <Separator />
        <a href="#" onClick={this.setFilterAssigned}>Assigned Issues</a>
      </div>);
      */
    return (
      <div>
        Status:
          <select value={this.state.status} onChange={this.onChangeStatus}>
          <option value="">(Any)</option>
          <option value="bamboo">Bamboo at Chef's Table</option>
          <option value="deli">Deli Delish</option>
          <option value="tavola">Tavola</option>
          <option value="green">Green Fields</option>
          <option value="grill">The Grill</option>
          <option value="paciugo">Paciugo</option>
          <option value="star">Star Ginger</option>
          <option value="wasabi">Wasabi</option>
          <option value="tamales">Tamales</option>
        </select>
        &nbsp;
        Effort between:
        <input size={5} value={this.state.location} onChange={this.onChangeEffortGte} />
        &nbsp;-&nbsp;
        <input size={5} value={this.state.effort_lte} onChange={this.onChangeEffortLte} />
        <button onClick={this.applyFilter}>Apply</button>
        <button onClick={this.resetFilter} disabled={!this.state.changed}>Reset</button>
        <button onClick={this.clearFilter}>Clear</button>
      </div>
    );
    // NEW END
  }
}

// IssueFilter.propTypes = {
//   setFilter: React.PropTypes.func.isRequired,
// };
// NEW
MenuFilter.propTypes = {
  setFilter: React.PropTypes.func.isRequired,
  initFilter: React.PropTypes.object.isRequired,
};
// NEW END