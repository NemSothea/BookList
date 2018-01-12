import React,{Component} from 'react';
import { connect } from 'react-redux';
class BookDetail extends Component {
	render(){
		if(!this.props.book){
			return <div><h3> BookDetail: </h3>
				Place, Select word you like!
			</div>
		}
		return(
			<div>
				<h3> BookDetail: </h3>
					<div>
						{this.props.book.title}
					</div>
					<div>
						{this.props.book.description}
					</div>
			</div>
			);
	}
}
function mapStateToProps(state){
	return{
		book:state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail)