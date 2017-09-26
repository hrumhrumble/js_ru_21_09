import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Comment extends Component {

    static propTypes = {
        comment: PropTypes.shape({
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    }


    render(){
        let {comment} = this.props

        return (
            <div>
                <strong>{comment.user}</strong>
                <div>{comment.text}</div>
            </div>

        )
    }
}
