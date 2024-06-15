import { useSearchParams } from "react-router-dom";
import { Container } from "../parts/Container.part";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IndexPage } from "@/pages/Tasks/Index.section.jsx";
import PropTypes from "prop-types";

const CurrentTaskView = ({ view }) => {
  switch (view.toLowerCase()) {
    case "calendar":
      return <h1>Calendar View</h1>
    case "index":
    default:
      return <IndexPage />
  }
}

CurrentTaskView.propTypes = {
  view: PropTypes.string.isRequired,
  tasks: PropTypes.array,
}

export const TaskDash = () => {
  const isLogin = localStorage.getItem("isLogin") === "true";
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/app/login");
    }
  });
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view") || "index";
  return (
    <Container>
      <CurrentTaskView view={view} />
    </Container>
  );
};
