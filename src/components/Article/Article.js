import React from 'react';
import { useFetchArticle } from '../../utils/hooks'
import Loading from '../Loading/Loading'
import ArticleDetails from './ArticleDetails'
import { Error404, UnexpectedError} from '../Error/index'

import ContentNotFoundError from '../../utils/CustomErrors/ContentNotFoundError'


function Article(props) {
    const { url } = props;

    const { article, isLoading, error } = useFetchArticle(url);

    if (isLoading) {
        return (
            <div className="relative min-h-screen">
                <Loading />
            </div>
        )
    }

    if (error) {
        if (error instanceof ContentNotFoundError) {
            return <Error404 />
        }

        return <UnexpectedError />
    }

    if (!article) {
        return null;
    }

    const { elements } = article;

    return (
        <React.Fragment>
            <ArticleDetails elements={elements} />
        </React.Fragment>
    );
}

export default Article;