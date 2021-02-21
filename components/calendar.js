import React from "react";
// import Layout from "../components/Layout";
import FullCalendar, { render } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import '@fullcalendar/common/main.css' // @fullcalendar/react imports @fullcalendar/common
import '@fullcalendar/daygrid/main.css' // @fullcalendar/timegrid imports @fullcalendar/daygrid
import '@fullcalendar/timegrid/main.css' // @fullcalendar/timegrid is a direct import
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

export default class DemoApp extends React.Component {

    handleDateClick = (arg) => {
        alert(arg.dateStr);
    }

    render() {
        return (
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                // initialEvents={[{ title: "initial event", start: new Date() }]}
                events={[{ title: "event", date: '2021-02-21' }, { title: "event2", date: '2021-02-22' }]}
                dateClick={this.handleDateClick}
            />
        );
    }
}
