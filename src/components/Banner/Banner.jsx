import Background from "../assets/img/BannerMf.jpg"
import "./Banner.css"
const Banner = ({ greeting }) => {
    return (

        <div style={{ position: "relative" }} >
            <img style={{ marginTop: 50, width: "100%" }} src={Background} />
            <h1 style={{ color: "white", fontFamily: "Arial, sans-serif", position: "absolute", top: "48%", left: "2%", }}>{greeting}
                <div className="lineBanner">
                </div>
            </h1>
        </div>
    )
}

export default Banner

