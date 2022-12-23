import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DefaultPage from "./page/DefaultPage";
import CustomPage from "./page/CustomPage";

function App() {
    const [page, setPage] = useState("home-page");

    const BackButton = () => {
        if(page ==="home-page") return <></>
        return <>
            <hr className={"mt-5"}/>
            <u role={"button"} className={"link-primary d-flex justify-content-end"}
               onClick={() => setPage("home-page")}>Back To Home page</u>
        </>
    }

    const renderPage = () => {
        switch (page) {
            case "home-page":
                return <>
                    <h5>Home Page</h5>
                    <table className={"table table-striped border"}>
                        <thead>
                        <tr>
                            <th>Pages</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <u role={"button"} className={"link-primary"} onClick={() => setPage("default-page")}>
                                    Default page
                                </u>
                                <br/>
                            </td>
                            <td>
                                Default behavior and without a plugin
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <u role={"button"} className={"link-primary"} onClick={() => setPage("custom-page")}>
                                    Custom page
                                </u>
                                <br/>
                            </td>
                            <td>
                                Expected behavior with custom plugin
                                <h6 className={"mt-3"}>My goal:</h6>
                                <ul>
                                    <li>Only one equation in the input field</li>
                                    <li>Shows the existing value on Math Editor</li>
                                    <li>Close the Math Editor when left the page</li>
                                </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </>
                break;
            case "default-page":
                return <DefaultPage/>
                break;
            case "custom-page":
                return <CustomPage/>
                break;
        }
        return ""
    }

    return (
        <div className="p-5">
            {renderPage()}
            <BackButton/>
        </div>
    );
}

export default App;
