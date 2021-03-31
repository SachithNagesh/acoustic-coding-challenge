import { useEffect, useState } from 'react';
import API from '../api/api'

const useFetchArticle = (url) => {

    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setError(null);
        setArticle(null);

        if (!url) {
            setError("The URL is empty");
            return;
        }

        setIsLoading(true);

        API.getContentByURL(url)
            .then(content => {
                setArticle(content);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            });

    }, [url]);

    return { article, isLoading, error };
}

export { useFetchArticle };

