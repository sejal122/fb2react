import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./components/classComponent";
import FunctionComponent from "./components/functionComponent";
import Conditionalrendering from "./components/conditionalrendering";
import Lists from "./components/lists";
import Table from "./components/table";
import Lifecycle from "./components/lifecycle";
import Errorphase from "./components/errorphase";
import ErrorBoundary from "./components/errorBoundary";
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonCount from "./components/buttonCount";
import ButtonHover from "./components/buttonHover";
import Userefhook from "./components/userefhook";
import {Route,Routes} from 'react-router-dom'
import Navigation from "./components/navigation";
import Fallback from "./components/fallback";
import Myform from "./components/myform";
import UseEff from "./components/useEff";
import { useEffect } from "react";
import Todo from "./components/todo";
import TodoForm from "./components/todoForm";
import EditTodo from "./components/editTodo";
{
  /* The following line can be included in your src/index.js or App.js file */
}

function App() {
  var score = 10;
  var city = "Mumbai";
  return (
    <div className="App">
      <h1>React tutorial</h1>
{/* <Navigation/> */}

<hr/>
      <Routes>

        <Route path='/' Component={Todo}/>
        <Route path='/addTodo' Component={TodoForm}/>
        <Route path="/state" Component={FunctionComponent}/>
        <Route path="/lists" Component={Lists}/>
        <Route path="/classcomp" Component={ClassComponent}/>
        <Route path='/editTodo/:id' Component={EditTodo}/>
        <Route path="*" Component={Fallback}/>
      </Routes>









      {/* <h1>Welcome to ReactJS !</h1>
<Button variant="primary">bootstrap btn</Button>
<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion> */}
      {/* <FunctionComponent myscore={score} city={city} />
    <ClassComponent myscore={score} city={city}/>
    <Conditionalrendering/> */}
      {/* <Lists/>
    <Table/> */}
      {/* <Lifecycle color="yellow" />

      <ErrorBoundary>
        <Errorphase car="kia" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Errorphase car="mustang" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Errorphase car="i10" />
      </ErrorBoundary> */}
        {/* <ButtonCount/>
        <ButtonHover/>
        <Userefhook/> */}
    </div>
  );
}

export default App;
