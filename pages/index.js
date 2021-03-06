import 'isomorphic-fetch';
import Link from 'next/link'
import FormData from 'form-data'


export default class extends React.Component {
  static async getInitialProps() {

    let myData = new FormData()
    myData.append('id', '148640034')
    myData.append('password', '5720426')
    let req = await fetch
    ('http://3.92.189.89/tpp_apps/index.php/api/login', {
      method: 'post',
      body: myData
    })
    console.log(req)
    //let { body:channels } = await req.json()
    return {}
  }
    render() {
        //const { channels } = this.props
        return <>
          <header>Podcasts</header>
          
          {/* <div className="channels">
          { channels.map((channel) => (
            <Link href={`/channel?id=${ channel.id }`} prefetch>
              <a className="channel">
                <img src={ channel.urls.logo_image.original } alt="imagen de la pelicula"/>
                <h2>{ channel.title }</h2>
              </a>
            </Link>
          ))}
          </div>
           */}
          <style jsx>{`
            header {
              color: #fff;
              background: #8756ca;
              padding: 15px;
              text-align: center;
            }

            .channels {
              display: grid;
              grid-gap: 15px;
              padding: 15px;
              grid-template-columns: repeat(auto-fill, minmax(160px, 1fr ) )

            }

            .channel {
              display: block;
              border-radius: 3px;
              box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
              margin-bottom: 0.5em;
            }


            .channel img {
              width: 100%;
            }

            h2 {
              padding: 5px;
              font-size: 0.9em;
              font-weight: 600;
              margin: 0;
              text-align: center;
            }
          `}</style>

          <style jsx global> {`
            body {
              margin: 0;
              font-family: system-ui;
              background: white;
            }
          }`}</style>
        </>

    }

}