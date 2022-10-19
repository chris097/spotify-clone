import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

type Props = {
    Component?: any,
    otherProps?: any
}

const InternalLayout:React.FC<Props> = ({ Component, ...otherProps }) => {
    return (
        <div>
            <div className="flex">
                <Sidebar />
                <Header />
            </div>
            <main className="md:ml-64 md:mr-4 mx-6 md:mx-0">
                <Component {...otherProps} />
            </main>
        </div>
    )
};

export default InternalLayout;