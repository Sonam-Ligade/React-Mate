import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const RootEventLayout = () =>{
    return <><EventsNavigation/>

        <Outlet/>

    </>

};

export default RootEventLayout;