import MiniCssExtractPlugin from "mini-css-extract-plugin";


export default 
{
    "entry": {
        "main": "./src/index.js"
    },
    "watch": true,
    "plugins": [
        new MiniCssExtractPlugin({ filename: `style.css` })
    ],
    "module": {
        "rules": [{
            "test": /\.s[ac]ss$/i,
            "use": [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
            ],
        }],
    },
}

