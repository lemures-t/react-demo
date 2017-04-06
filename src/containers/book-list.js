import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book)=>{
      return (
        <li key={book.title} className="list-group-item" onClick={()=> this.props.selectBook(book)}>{book.title}</li>
      )
    })
  }

  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch){

  // selectBook is callled,
  // dispatch the result to all reducers
  // args[1] is key-value pair added to props
  return bindActionCreators({selectBook : selectBook},dispatch)
}


// connect (fn)(components) -> glue data from redux to state of react;
// connect
//  run fn , refer args(state) to react App state;

//  connect(fn) return an annonymous fn , args to be Container class;
//  run it , refer the obj returned by fn to be Container props;
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
