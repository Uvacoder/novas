import NewsAPI from 'newsapi'
import { 
  toArticle,
} from './utils.js'

const newsapi = new NewsAPI(process.env.NEWSAPI_KEY)

export const getArticles = async () => {
  console.log('called')
  const latest = await newsapi.v2.topHeadlines({
    country: 'us'
  })

  const entertainment = await newsapi.v2.topHeadlines({
    category: 'entertainment',
    country: 'us'
  })

  const covid = await newsapi.v2.topHeadlines({
    q: 'covid',
    country: 'us'
  })

  const convertedLatest = latest.articles.map(toArticle)
  const convertedEntertainment = entertainment.articles.map(toArticle)
  const convertedCovid = covid.articles.map(toArticle)

  return {
    all: [...convertedLatest, ...convertedEntertainment, ...convertedCovid],
    latest: convertedLatest,
    covid: convertedCovid,
    entertainment: convertedEntertainment 
  }
}