import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import "./styles.css";
import EventForm from "../../features/events/eventForm/EventForm";

const App = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const handleCreateFormOpen = (event) => {
    setSelectedEvent(null);
    setFormOpen(true);
  };

  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar setFormOpen={handleCreateFormOpen} />
            <Container className="main">
              {/* <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}
        /> */}

              <Route path="/events" exact component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route path="/createEvent" component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
  );
};

export default App;
