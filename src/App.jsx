import Card from "./components/Card";
import DateCounter from "./components/DateCounter";
import ImageSlider from "./components/ImageSlider";
import StarRatting from "./components/StarRatting";
import TextExpander from "./components/TextExpander";
import "./index.css";


const appStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "4rem",
    padding:"4rem 0",
};

function App() {
    return (
        <div style={appStyle}>
            <Card />
            <ImageSlider/>
            <TextExpander/>
            <DateCounter/>
            <StarRatting/>
        </div>
    );
}

export default App;