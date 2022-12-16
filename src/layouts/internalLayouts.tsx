import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

type Props = {
    Component?: any,
    otherProps?: any
}

const InternalLayout:React.FC<Props> = ({ Component, ...otherProps }) => {
    return (
        <div className="w-full">
            <div className="flex">
                <Sidebar />
                <Header />
            </div>
            <main className="overflow-x-hidden">
                <Component {...otherProps} />
            </main>
        </div>
    )
};

export default InternalLayout;