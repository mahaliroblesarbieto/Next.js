export default class extends React.Component {
    render() {
        return <>
          <h1>Hola Mundo</h1>
          <p>Bienvenidos al curso de Next.js</p>
          <img src="/static/platzi-logo.png" alt="logo de platzi"/>

          <style jsx>{`
          h1 {
            color: red;
          }
          :global(div p) {
            color: green;
          }
          p {
            color: green;
          }`}</style>

          <style jsx global> {`
            body {
              background: yellow;
            }
          }`}</style>
        </>

    }

}