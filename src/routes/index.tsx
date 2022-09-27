import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "../page/About";
import { Blog } from "../page/Blog";
import { Contact } from "../page/Contact";
import { Home } from "../page/Home";
import { Login } from "../page/Login";
import { Schedules } from "../page/Schedules";
import { SchedulesList } from "../page/SchedulesList";
import { Services } from "../page/Services";
import { Signup } from "../page/Signup";
// import { SchedulesTimeOptions } from "../page/SchedulesTimeOptions";


export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Routes>
        <Route path="/schedulesNew" element={<Schedules />} />
      </Routes>
      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/users" element={<Signup />} />
      </Routes>
      <Routes>
        <Route path="/SchedulesList" element={<SchedulesList />} />
      </Routes>
    </Router>
  )
}
