import Mock from "mockjs";

Mock.mock(/^\/api\/project\/?$/, 'get', {
    code: 0,
    msg: "",
    // data: [],
    "data|10-20": [{
        id: "@guid",
        name: "@ctitle(3,10)",
        "url|1": ["@url", null],
        "github": "@url",
        "descroption|1-4": ["@cparagraph(1,5)"],
        thumb: "@image(300x250 , @color,#fff,MockImg)",
    }]
})
