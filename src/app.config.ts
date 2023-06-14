export default {
    pages: [
        "pages/index/index",
        "pages/fl/index",
        "pages/cart/index",
        "pages/user/index",
    ],
    window: {
        backgroundTextStyle: "light",
        navigationBarBackgroundColor: "#6190E8",
        navigationBarTitleText: "WeChat",
        navigationBarTextStyle: "white",
    },
    tabBar: {
        list: [
            {
                pagePath: "pages/index/index",
                text: "a",
                iconPath: "./static/tab-bar/home.png",
                selectedIconPath: "./static/tab-bar/home-active.png",
            },
            {
                pagePath: "pages/fl/index",
                text: "b",
                iconPath: "./static/tab-bar/home.png",
                selectedIconPath: "./static/tab-bar/home-active.png",
            },
            {
                pagePath: "pages/cart/index",
                text: "c",
                iconPath: "./static/tab-bar/home.png",
                selectedIconPath: "./static/tab-bar/home-active.png",
            },
            {
                pagePath: "pages/user/index",
                text: "d",
                iconPath: "./static/tab-bar/home.png",
                selectedIconPath: "./static/tab-bar/home-active.png",
            },
        ],
        color: "#333",
        selectedColor: "#333",
        backgroundColor: "#fff",
        borderStyle: "black",
    },
};
