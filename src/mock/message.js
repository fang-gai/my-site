import Mock from "mockjs";
import qs from "querystring";
Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function (options) {
  const query = qs.parse(options.url);
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 52,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1,10)",
          createDate: Date.now(),
          "avatar|1": [
            "@image('200x200', '#4A7BF7', '#fff', 'Avatar')",
            "@image('200x200', '#F76B1C', '#fff', 'Avatar')",
            "@image('200x200', '#34A853', '#fff', 'Avatar')",
            "@image('200x200', '#FF4136', '#fff', 'Avatar')",
          ],
        },
      ],
    },
  });
});

Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1,10)",
    createDate: Date.now(),
    "avatar|1": [
      "@image('200x200', '#4A7BF7', '#fff', 'Avatar')",
      "@image('200x200', '#F76B1C', '#fff', 'Avatar')",
      "@image('200x200', '#34A853', '#fff', 'Avatar')",
      "@image('200x200', '#FF4136', '#fff', 'Avatar')",
    ],
  },
});
