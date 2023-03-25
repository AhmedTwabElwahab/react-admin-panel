import {Route,Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from './pages/new/New';
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import {productInputs,userInputs} from './formInput';

function AppRoute()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'}>
                    <Route index element={<Home/>}/>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={'users'}>
                        <Route index element={<List/>}/>
                        <Route path={':userId'} element={<Single/>}/>
                        {/*pass input as array*/}
                        <Route path={'new'} element={<New inputs={userInputs} title="Add New User"/>}/>
                    </Route>
                    <Route path={'products'}>
                        <Route index element={<List/>}/>
                        <Route path={':productId'} element={<Single/>}/>
                        <Route path={'new'} element={<New inputs={productInputs} title="Add New Product"/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;
