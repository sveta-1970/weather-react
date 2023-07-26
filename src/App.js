import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          This project was created by{" "}
          <a
            href="https://www.linkedin.com/in/svitlana-shkriabina-5a2072157/"
            target="_blank"
            rel="noreferrer"
          >
            Svitlana Shkriabina
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/sveta-1970/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          and{" "}
          <a
            href="https://ornate-meerkat-63f145.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
