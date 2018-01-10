import React, { Component } from 'react';
export defult class BookList extends Component {
  renderList(){
    return this.props.book.map((book)=>{
      return(
        <li key={this.title} className="list-group-item">
        //helper func
          {this.title}
        </li>
      );
    });
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

}
