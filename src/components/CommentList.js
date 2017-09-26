import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

export default class CommentList extends Component {

    state = {
        showComments: false
    }

    static defaultProps = {
        comments: []
    }

    static propTypes = {
        comments: PropTypes.array.isRequired
    }


    toggleComments = () => {
        this.setState({showComments: !this.state.showComments})
    }

    render(){
        const {comments} = this.props

        const commentList = comments.map((comment) =>
            <li key={comment.id}>
                <Comment comment={comment} />
            </li>
        )

        return (
            <div>
                {commentList.length ? (
                    <div>
                        <h2>
                            Comments
                            <button onClick={this.toggleComments}>{this.state.showComments ? 'close' : 'open'}</button>
                        </h2>
                        {this.state.showComments ? (
                            <ul>
                                {commentList}
                            </ul>
                        ):(false)}
                    </div>
                ) : (false)}
            </div>
        )
    }
}
