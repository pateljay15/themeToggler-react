import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";


const HeroSection = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    const theme = useContext(ThemeContext)[0];
    // console.log(theme);
    const currentTheme = AppTheme[theme];
    // console.log(themeMode);
    // console.log(ThemeContext)
    return(
        <div
        style={{
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center",
            height: "100vh"
        }}
        >
            <h1>Context API Theme Toggler</h1>
            <p>Click the button bellow to change the theme...</p>
            <button
            onClick={() => (setThemeMode(themeMode === "light" ? "dark" : "light"))}
            style={{
                backgroundColor: "#1287A5",
                padding: "10px 150px",
                color: "#FFF",
                fontSize: "30px",
                border: `${currentTheme.border}`
            }}
            >
                {/* Click To Change */}
                {themeMode === "light" ? "Dark Mode" : "Light Mode"}
            </button>
        </div>
    )
}

export default HeroSection;