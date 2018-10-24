import React, {Component} from 'react';
import Pagination from "react-js-pagination";


class ArticlesPagination extends Component {

  constructor(props){
    super(props);
    this.state = {activePage: 3}
    this.articleCount = props.length;
    console.log(this.articleCount);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
   console.log('active page is', pageNumber);
   this.setState({activePage: pageNumber});
 }

  render() {
    if (this.articleCount == 0) return null; 
    return(
      <div className="articles-pagination">
          <Pagination
    prevPageText='prev'
    nextPageText='next'
    firstPageText='first'
    lastPageText='last'
    activePage={this.state.activePage}
    itemsCountPerPage={5}
    totalItemsCount={20}
    onChange={this.handlePageChange}
  />
      </div>
    )
  }

}
export default ArticlesPagination;
