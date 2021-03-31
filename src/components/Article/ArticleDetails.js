import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { formatDate } from '../../utils/helpers'

function ArticleDetails(props) {

    const { elements } = props;

    const { author, body, date, heading, mainImage } = elements;

    return (
        <div>
            <div className="bg-gray-100 min-h-screen">
                <main>
                    <div className="relative py-20 sm:py-20">
                        {/* Gradient background */}
                        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-r from-teal-500 to-cyan-600 "></div>
                        {/* Rendering Article Elements */}
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <ArticleImage mainImage={mainImage} />
                            <ArticleHeading heading={heading} />
                            <ArticleAuthor author={author} />
                            <ArticleDate date={date} />
                            <ArticleBody body={body} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

const ArticleImage = ({ mainImage }) => {

    if (!mainImage.value) {
        return null;
    }

    const { leadImage, leadImageCaption, leadImageCredit } = mainImage.value;

    if (!leadImage || !leadImage.url) {
        return null;
    }

    return (
        <figure className="relative">

            <img className="lg:max-h-200 lg:w-full object-fit rounded-xl shadow-xl overflow-hidden" src={`${process.env.REACT_APP_BASE_URI}/${mainImage.value.leadImage.url}`} alt="Content Lead" />
            <ArticleImageCaption leadImageCaption={leadImageCaption} />
            <ArticleImageCredit leadImageCredit={{ leadImageCredit }} />

        </figure>
    )
}

const ArticleImageCaption = ({ leadImageCaption }) => {

    if (!leadImageCaption || !leadImageCaption.value) {
        return null;
    }

    const { value } = leadImageCaption;

    return (
        <figcaption className="mt-1 text-xs font-light figure-caption">{value}</figcaption>
    )

}

const ArticleImageCredit = ({ leadImageCredit }) => {

    if (!leadImageCredit || !leadImageCredit.value) {
        return null;
    }

    const { value } = leadImageCredit

    return (
        <footer>
            <p className="text-xs font-light">Credit: {value}</p>
        </footer>
    )

}

const ArticleHeading = ({ heading }) => {

    if (!heading || !heading.value) {
        return null;
    }

    const { value } = heading;

    return (
        <h1 className="mt-12 mb-6 text-left text-4xl sm:text-5xl font-semibold text-gray-900 tracking-wide">
            {value}
        </h1>)
}

const ArticleAuthor = ({ author }) => {

    if (!author || !author.value) {
        return null;
    }

    const { value } = author;


    return (
        <p className="text-sm font-medium text-gray-900">
            Written by {value}
        </p>
    )

}

const ArticleDate = ({ date }) => {

    if (!date || !date.value) {
        return null;
    }

    const { value } = date;

    return (
        <div className="flex space-x-1 text-sm text-gray-500">
            {formatDate(value)}
        </div>
    )
}

const ArticleBody = ({ body }) => {

    if (!body || !body.values) {
        return null;
    }

    const { values } = body;

    if (typeof values === "string") {
        return (
            <article className="my-12">
                <section className="my-2">{ReactHtmlParser(values)}</section>;
            </article>)
    }

    return (
        <article className="my-12">
            {values.map((item, i) => {
                return <section className="my-2" key={i}>{ReactHtmlParser(item)}</section>;
            })}
        </article>
    )
}

export default ArticleDetails;