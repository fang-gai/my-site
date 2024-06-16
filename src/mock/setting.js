import Mock from "mockjs";
import qqSrc from "@/assets/images/QQ.jpg";
import weixinSrc from "@/assets/images/WeChat.jpg";
import ElonMusk from "@/assets/images/ElonMusk.png";
Mock.mock("/api/setting", 'get', {
    code: 0,
    msg: "",
    data: {
        avatar: ElonMusk,
        favicon: "https://www.riotgames.com/assets/img/meta/6e86ac3d497a87330d381e3ee6e193c3/favicon.ico",
        siteTitle: "房盖的博客",
        icp: "豫ICP备XXXXXX号",
        info: [
            {
                platform: "github",
                ID: "fang-gai",
                link: "https://github.com/fang-gai",
                target: "_block",
                QRcode: null,
            },
            {
                platform: "mail",
                ID: "fang-gai@foxmail.com",
                link: "mailto:fang-gai@foxmail.com",
                target: "_self",
                QRcode: null,
            },
            {
                platform: "qq",
                ID: "3425598489",
                link: "tencent://message/?Menu=yes&uin=3425598489",
                target: "_self",
                QRcode: qqSrc,
            },
            {
                platform: "weixin",
                ID: "k6633482",
                link: "weixin://",
                target: "_self",
                QRcode: weixinSrc,
            },
        ]
    }
})