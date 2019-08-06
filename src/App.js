/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import List from './models/list';
import Restaurant from './components/Restaurant';

import './App.css';

class App extends Component {
  state = {
    restaurants: List.restaurants,
    result: [],
    search: '',
    filterValue: '',
    // sortValue: 'asc',
    isSearch: false,
    isFilter: false,
    // isSort: false
  }

  onSearch = (e) => {
    if (this.state.isFilter) this.setState({ isFilter: false })
    this.setState({ search: e.target.value, isSearch: true })

  }
  onSelect = (e) => {
    if (this.state.isSearch) this.setState({ isSearch: false })
    this.setState({ filterValue: e.target.value, isFilter: true });
  }

  // onSort = (e) => {
  //   this.setState({ sortValue: e.target.value, isSort: true });
  // }

  parseFilter() {
    const value = this.state.filterValue
    var pValue = value.split(":")
    let _v = pValue[0]
    let _k = pValue[1]

    switch (_k) {
      case "status":
        return this.state.restaurants.filter(restaurant => {
          return restaurant.status === _v.replace("_", " ");
        });
      case "sortingValues":
        return this.state.restaurants.filter(restaurant => {
          return restaurant.sortingValues.hasOwnProperty(_v)
        });
      default: {
        console.log("empty")
        return []
      }
    }

  }

  searchFilter = () => {
    const res = this.state.restaurants.filter(restaurant => {
      return restaurant.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    });
    return res;
  }

  search_restaurants = () => {
   
    return this.searchFilter().map((restaurant, index) => {
      return <Restaurant
        key={index}
        name={restaurant.name}
        status={restaurant.status}
        pop={restaurant.sortingValues.popularity}
        min={restaurant.sortingValues.minCost}
        avg={restaurant.sortingValues.averageProductPrice}
        delCost={restaurant.sortingValues.deliveryCosts}
        match={restaurant.sortingValues.bestMatch}
      />
    })
  }

  filter_restuarants = () => {
    const _restaurant = this.parseFilter()
    return _restaurant.map((restaurant, index) => {
      return <Restaurant
        key={index}
        name={restaurant.name}
        status={restaurant.status}
        pop={restaurant.sortingValues.popularity}
        min={restaurant.sortingValues.minCost}
        avg={restaurant.sortingValues.averageProductPrice}
        delCost={restaurant.sortingValues.deliveryCosts}
        match={restaurant.sortingValues.bestMatch}
      />
    })
  }

  all = () => {
    const _restaurant = this.state.restaurants;
    return _restaurant.map((restaurant, index) => {
      return <Restaurant
        key={index}
        name={restaurant.name}
        status={restaurant.status}
        pop={restaurant.sortingValues.popularity}
        min={restaurant.sortingValues.minCost}
        avg={restaurant.sortingValues.averageProductPrice}
        delCost={restaurant.sortingValues.deliveryCosts}
        match={restaurant.sortingValues.bestMatch}
      />
    })
  }

  restaurants = () => {
    if (this.state.isFilter) return this.filter_restuarants()
    if (this.state.isSearch) return this.search_restaurants()
    return this.all()
  }

  // sortRestuarants = (_restaurant) => {
  //   if (this.state.isSort) {
  //     if (this.state.sortValue === 'asc') {
  //       return _restaurant.sort((a, b) => a.sortingValues.popularity - b.sortingValues.popularity).map((restaurant, index) => {
  //         return <Restaurant
  //           key={index}
  //           name={restaurant.name}
  //           status={restaurant.status}
  //           pop={restaurant.sortingValues.popularity}
  //         />
  //       })
  //     } else {
  //       return _restaurant.sort((b, a) => a.sortingValues.popularity - b.sortingValues.popularity).map((restaurant, index) => {
  //         return <Restaurant
  //           key={index}
  //           name={restaurant.name}
  //           status={restaurant.status}
  //           pop={restaurant.sortingValues.popularity}
  //         />
  //       })
  //     }
  //   } else {
  //     return _restaurant.map((restaurant, index) => {
  //       return <Restaurant
  //         key={index}
  //         name={restaurant.name}
  //         status={restaurant.status}
  //         pop={restaurant.sortingValues.popularity}
  //       />
  //     })
  //   }
  // }

  render() {
    const { search } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-dark primary-color">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
              aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="basicExampleNav">
              <ul className="navbar-nav mx-auto">
              </ul>

            </div>

          </nav>
        </header>
        <main>
          <div className="container my-5 py-5">
            <h1>The Restaurants Directory</h1>
            <div className=" row justify-content-between mt-5">
              <div className="col-md-4">
                <select className="form-control border border-teal" onChange={this.onSelect}>
                  <option value="all">all</option>
                  <option value="bestMatch:sortingValues">Best Match</option>
                  <option value="minCost:sortingValues">Minimum Cost</option>
                  <option value="newest:sortingValues">Newest</option>
                  <option value="open:status">Open</option>
                  <option value="closed:status">Closed</option>
                  <option value="order_ahead:status">Order Ahead</option>
                  <option value="ratingAverage:sortingValues">Rating Average</option>
                  <option value="distance:sortingValues">Distance</option>
                  <option value="popularity:sortingValues">Popularity</option>
                  <option value="averageProductPrice:sortingValues">Avg Product Price</option>
                  <option value="deliveryCosts:sortingValues">Delivery Costs</option>

                </select>
              </div>
              
              <div className="col-md-4">
                <form className="">
                  <div className="md-form my-0">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.onSearch} />
                  </div>
                </form>
              </div>

            </div>
            <div className="row mt-5 pt-5">
              {
                this.restaurants()
              }

            </div>
          </div>
        </main>
      </div>
    );
  }

}

export default App;
