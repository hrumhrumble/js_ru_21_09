import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

export default class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired,
            comments: PropTypes.array
        }).isRequired,
        isOpen: PropTypes.bool,
        onClick: PropTypes.func
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props

        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {isOpen ? (
                    <section>
                        {article.text}
                        <CommentList comments={article.comments}/>
                    </section>
                ) : (false)}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }
}