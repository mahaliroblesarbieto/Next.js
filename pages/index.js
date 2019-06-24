import 'isomorphic-fetch';
export default class extends React.Component {
  static async getInitialProps() {
    let req = await fetch
    ('https://api.audioboom.com/channels/recommended')
    let { body:channels } = await req.json()
    return { channels: channels}
  }
    render() {
        const { channels } = this.props
        return <>
          <header>Podcasts</header>
          { channels.map((channel) => (
            <div>{ channel.title}</div>
          ))}
          <style jsx>{`
            header {
              color: #fff;
              background: #8756ca;
              padding: 15px;
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