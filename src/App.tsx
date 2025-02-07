
import './App.css'
import {Container} from "@mui/material";
import NavBar from "./components/NavBar/NavBar.tsx";
import Home from "./containers/Home/Home.tsx";
import {Route, Routes} from "react-router-dom";
import NewPost from "./containers/NewPost/NewPost.tsx";
import EditPost from "./containers/EditPost/EditPost.tsx";
import ReadMore from "./containers/ReadMore/ReadMore.tsx";
import About from "./containers/About/About.tsx";
import Contacts from "./containers/Contacts/Contacts.tsx";

const App = () => (
    <>
        <header>
            <NavBar></NavBar>
        </header>
        <Container maxWidth='lg'>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/posts' element={<Home/>}></Route>
                <Route path='/posts/about' element={<About/>}></Route>
                <Route path='/posts/contacts' element={<Contacts/>}></Route>
                <Route path='/posts/new-post' element={<NewPost/>}></Route>
                <Route path='/posts/:idPost' element={<ReadMore/>}></Route>
                <Route path='/posts/:idPost/edit' element={<EditPost/>}></Route>
                <Route path='*' element={(<h1>Page not found</h1>)}></Route>
            </Routes>
        </Container>

    </>
);

export default App
