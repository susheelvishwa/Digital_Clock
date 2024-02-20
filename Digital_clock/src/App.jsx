import Heading from "./component/heading";
import Slogan from "./component/slogan";
import CurrentTime from "./component/time";
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
  return (
    <>
      <center>
        <Heading />
        <Slogan />
        <CurrentTime />
      </center>
    </>
  );
}

export default App;