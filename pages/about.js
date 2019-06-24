export default class extends React.Component {
    render() {
        return <>
          <img src="/static/platzi-logo.png" alt="logo de platzi"/>
          <h1>Creado por Mahali Robles</h1>
          <p>Curso de Next.js de Platzi</p>
          <style jsx>{`
            h1 {
              color: white;
            }
            p {
              color: white;
            }`
          }</style>

          <style jsx global> {`
            body {
              background: #1A2A35;
              text-align: center;
              font-family: Arial;
            }
          }`}</style>
        </>

    }

}