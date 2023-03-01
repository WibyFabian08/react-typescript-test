export interface newsType {
    status: string,
    totalResults: number,
    articles: ArticleType[]
}

export interface ArticleType {
    source: sourceType,
    author: string,
    title: string,
    description?: string,
    url: string,
    urlToImage?: string,
    publishedAt: Date,
    content?: string
}

export interface sourceType {
    id: string,
    name: string
}