import React from "react";
import Ratings from "./Ratings.jsx";
import Reviews from "./Reviews.jsx";
import AddReview from "./AddReview.jsx";
import { Grid } from "@material-ui/core";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      product_id: 24, // Math.floor(Math.random() * 100), //21
      meta: {},
      reviews: {},
      modalIsOpen: false,
      sort: "newest",
      filterBy: undefined,
    };
  }

  fetchMetadata() {
    fetch(`/reviews/${this.state.product_id}/meta`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          meta: data,
        });
      });
  }

  fetchReviews(sortBy = "") {
    const url = `/reviews/${this.state.product_id}/list`;

    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          reviews: data,
        });
      });
  }

  componentDidMount() {
    this.fetchMetadata();
    this.fetchReviews("newest");
  }

  addReview() {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  setSort(value) {
    this.setState({ sort: value });
    this.fetchReviews(value);
  }

  setFilter(value) {
    this.setState({ filterBy: value });
  }

  render() {
    return (
      <div id="app">
        <h2 id="title">Ratings and Reviews</h2>
        <Grid container spacing={4}>
          <Ratings
            meta={this.state.meta}
            setFilter={this.setFilter.bind(this)}
          />
          <Reviews
            reviews={this.state.reviews}
            update={this.fetchReviews.bind(this)}
            addReview={this.addReview.bind(this)}
            sort={this.state.sort}
            setSort={this.setSort.bind(this)}
            filterBy={this.state.filterBy}
          />
        </Grid>
        {/* <AddReview
          isOpen={this.state.modalIsOpen}
          closeModal={this.closeModal.bind(this)}
          meta={this.state.meta}
          update={this.fetchReviews.bind(this)}
        /> */}
      </div>
    );
  }
}

export default App;
