import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  // articles = [
  //   {
  //     "source": { "id": "cbc-news", "name": "CBC News" },
  //     "author": "CBC News",
  //     "title": "Nurse's overtime winner helps Canada past Sweden, into semis of women's hockey worlds | CBC Sports",
  //     "description": "Canada survived a determined Sweden squad with a 3-2 overtime win on Thursday in Brampton, Ont. Sarah Nurse sent the CAA Centre crowd into a frenzy, burying a shot from the top of the circle past Sweden goalie Emma Soderberg.",
  //     "url": "http://www.cbc.ca/sports/hockey/canada-sweden-womens-hockey-worlds-quarterfinal-recap-april-13-1.6809961",
  //     "urlToImage": "https://i.cbc.ca/1.6810215.1681430995!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/hkw-iihf-canada-sweden-20230413.JPG",
  //     "publishedAt": "2023-04-14T01:07:14.188456Z",
  //     "content": "By the skin of its teeth, Canada is into the semifinals at the women's hockey world championship.\r\nThe two-time defending champions survived a determined Sweden squad with a 3-2 overtime win on Thurs… [+1865 chars]"
  //   },
  //   {
  //     "source": { "id": "nhl-news", "name": "NHL News" },
  //     "author": "Mike G. Morreale",
  //     "title": "Bettman voices support for public vote on Coyotes arena project in Tempe",
  //     "description": "NHL Commissioner Gary Bettman on Thursday voiced his support for the upcoming public vote on the proposed Tempe Sports and Entertainment District that would keep the Arizona Coyotes in the East Valley city.",
  //     "url": "https://www.nhl.com/news/nhl-commissioner-gary-bettman-voices-support-for-public-vote-on-arizona-coyotes-arena-project-in-tempe/c-343487484",
  //     "urlToImage": "https://cms.nhl.bamgrid.com/images/photos/343487882/1024x576/cut.jpg",
  //     "publishedAt": "2023-04-13T23:04:31Z",
  //     "content": "NHL Commissioner Gary Bettman on Thursday voiced his support for the upcoming public vote on the proposed Tempe Sports and Entertainment District that would keep the Arizona Coyotes in the East Valle… [+3717 chars]"
  //   },
  //   {
  //     "source": { "id": "lequipe", "name": "L'equipe" },
  //     "author": "L'EQUIPE",
  //     "title": "Le flash sports du 14 avril",
  //     "description": "Retrouvez toute l'actualité sportive dans votre flash quotidien.",
  //     "url": "https://www.lequipe.fr/Tous-sports/Actualites/Le-flash-sports-du-14-avril/1391324",
  //     "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/le-flash-sports-l-equipe/1500000001773210/0:0,1997:1331-640-427-75/5dacc.jpg",
  //     "publishedAt": "2023-04-13T22:05:00+00:00",
  //     "content": "Nice n'a pu faire mieux que match nul à Bâle jeudi soir (2-2). Lyon se déplace ce vendredi soir à Toulouse en ouverture de la 31e journée de Ligue 1. Le PSG va déposer un dossier pour acheter le Stad… [+69 chars]"
  //   },
  //   {
  //     "source": { "id": "fox-sports", "name": "Fox Sports" },
  //     "author": "Melissa Rohlin",
  //     "title": "Exclusive: Kevin Durant knows you think he's too sensitive, but 'it's not just a me thing'",
  //     "description": "Kevin Durant has long been known for clapping back against criticism on social media. But speaking with FOX Sports, the Suns star wonders why other players \"don't get that 'sensitive' rep.\"",
  //     "url": "http://www.foxsports.com/stories/nba/exclusive-kevin-durant-knows-you-think-hes-too-sensitive-but-its-not-just-a-me-thing",
  //     "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/04/1408/814/04.12.23_Durant_Horizontal.jpg?ve=1&tl=1",
  //     "publishedAt": "2023-04-13T19:10:36Z",
  //     "content": "PHOENIX Kevin Durant defends himself when he thinks he's inaccurately criticized.\r\nWhile some view that as being overly sensitive, Durant believes he's being honest and controlling his own narrative,… [+8584 chars]"
  //   },
  //   {
  //     "source": { "id": "fox-sports", "name": "Fox Sports" },
  //     "author": "Carmen Vitali",
  //     "title": "Inside the premier NFL Draft offensive-line academy: The Big Boys Club gets bigger",
  //     "description": "Started by offensive line trainer Duke Manyweather and FOX Sports' own Geoff Schwartz, the Big Boys Club has churned out a long list of great linemen. This year brought 5 new prospects.",
  //     "url": "http://www.foxsports.com/stories/nfl/inside-the-premier-nfl-draft-offensive-line-academy-the-big-boys-club-gets-bigger",
  //     "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/04/1408/814/Screen-Shot-2023-04-12-at-9.18.29-PM.png?ve=1&tl=1",
  //     "publishedAt": "2023-04-13T13:00:09Z",
  //     "content": "Just outside Dallas, at the center of a state-of-the-art complex, towers a beautifully modern glass building with gleaming green turf out front. It isn't uncommon to see some of the NFL's biggest sta… [+5920 chars]"
  //   },
  //   {
  //     "source": { "id": "bleacher-report", "name": "Bleacher Report" },
  //     "author": null,
  //     "title": " Kings&#x27; Beam Under Attack ",
  //     "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
  //     "url": "https://bleacherreport.com/videos/415140-light-the-beam--hero-ball",
  //     "urlToImage": null,
  //     "publishedAt": "2023-04-03T14:52:21.1065694Z",
  //     "content": "LIGHT the BEAM | Hero Ball"
  //   },
  //   {
  //     "source": { "id": "bleacher-report", "name": "Bleacher Report" },
  //     "author": null,
  //     "title": "&#x27;The Voncast&#x27; with Myles Garrett",
  //     "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
  //     "url": "https://bleacherreport.com/videos/304730-the-voncast-with-myles-garrett",
  //     "urlToImage": null,
  //     "publishedAt": "2022-12-01T18:52:49.4768049Z",
  //     "content": "Myles Garrett and Von Miller talk playing in the NBA, pick their dream NFL defense and more"
  //   },
  //   {
  //     "source": {
  //       "id": "the-washington-times",
  //       "name": "The Washington Times"
  //     },
  //     "author": "The Washington Times https://www.washingtontimes.com",
  //     "title": "Latest Quizzes",
  //     "description": "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
  //     "url": "https://www.washingtontimes.com/quiz/",
  //     "urlToImage": null,
  //     "publishedAt": "2022-08-30T16:37:43.8583104Z",
  //     "content": "Featured Quizzes\r\nTake the challenge to learn about the life and career highlights of famed nonagenarian actress and comedian Betty White.\r\n Shares \r\nRead our synopsis and correctly identify a litera… [+32510 chars]"
  //   }
  // ]

  static defaultProps = {
    country: 'in',
    pageSize : 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,  
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(){
    super();
    console.log("constructor");
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: false,
      page: 1
    }
  }



  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb7c7d05f1fa43d7810d14788a598abd&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults, loading: false})
  }

  handlePrevClick = async ()=>{
    console.log("prev");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb7c7d05f1fa43d7810d14788a598abd&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
  

    this.setState({
      page: this.state.page - 1,
      articles : parsedData.articles,
      loading: false
    })

  }

  handleNextClick = async ()=>{
    console.log("next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

   
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb7c7d05f1fa43d7810d14788a598abd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
          this.setState({loading: true});
          let data = await fetch(url);
          let parsedData = await data.json()
          console.log(parsedData);
        

          this.setState({
            page: this.state.page + 1,
            articles : parsedData.articles,
            loading: false
    })
      }
    }

    

  render() {
    return (
      <div className="container my-5 ">
        <h2 className='text-center'>NewsApp - Top Headlines</h2>
       {this.state.loading && <Spinner/>}

        {/* <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
        
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
          
          
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous </button>
          <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
