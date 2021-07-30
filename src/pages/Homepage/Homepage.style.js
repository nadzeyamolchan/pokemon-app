import {makeStyles} from "@material-ui/core";

const homepageStyle = makeStyles({
    homePageWrapper: {
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        height: "64vh",
        position: "relative",
        padding: "3rem",
        backgroundColor: "#dcd7c9",
        backgroundImage:
            'url("https://www.gbposters.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/o/pokemon-eevee-maxi-poster-1.16.jpg")',
        backgroundBlendMode: "soft-light",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    headerWrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    homePageHeader: {
        marginBottom: '3rem',
        color: "rgb(49,107,179)",
        "-webkit-text-fill-color": "rgb(255,203,5)",
        "-webkit-text-stroke-width": "0.09rem",
        "-webkit-text-stroke-color": "rgb(49,107,179)",
        textAlign: "center",
    },
    homePageButton: {
        marginTop: "2rem",
    },
});

export default homepageStyle;