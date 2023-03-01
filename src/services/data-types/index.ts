// export interface newsType {
//     status: string,
//     totalResults: number,
//     articles: ArticleType[]
// }

export interface ArticleType {
    source: SourceType,
    author: string,
    title: string,
    description?: string,
    url: string,
    urlToImage?: string,
    publishedAt: Date,
    content?: string
}

export interface SourceType {
    id: string,
    name: string
}