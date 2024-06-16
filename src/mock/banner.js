import Mock from "mockjs";
import darkBigStark from "@/assets/images/stark.jpg";
import lightBigStark from "@/assets/images/stark-rembck.jpg";
import darkMiniStark from "@/assets/images/stark-mini.jpg";
import lightMiniStark from "@/assets/images/stark-rembck-mini.jpg";
import darkBigTargaryen from "@/assets/images/targaryen.jpg";
import lightBigTargaryen from "@/assets/images/targaryen-rembck.jpg";
import darkMiniTargaryen from "@/assets/images/targaryen-mini.jpg";
import lightMiniTargaryen from "@/assets/images/targaryen-rembck-mini.jpg";
import darkBigLannister from "@/assets/images/lannister.jpg";
import lightBigLannister from "@/assets/images/lannister-rembck.jpg";
import darkMiniLannister from "@/assets/images/lannister-mini.jpg";
import lightMiniLannister from "@/assets/images/lannister-rembck-mini.jpg";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      darkImg: darkBigStark,
      lightImg: lightBigStark,
      darkImgMini: darkMiniStark,
      lightImgMini: lightMiniStark,
      title: "凛冬将至",
      description: "人唯有恐惧的时候方能勇敢",
    },
    {
      id: "2",
      darkImg: darkBigTargaryen,
      lightImg: lightBigTargaryen,
      darkImgMini: darkMiniTargaryen,
      lightImgMini: lightMiniTargaryen,
      title: "血火同源",
      description: "如果我回头，一切都完了",
    },
    {
      id: "3",
      darkImg: darkBigLannister,
      lightImg: lightBigLannister,
      darkImgMini: darkMiniLannister,
      lightImgMini: lightMiniLannister,
      title: "听我怒吼",
      description: "兰尼斯特有债必偿",
    },
  ],
});
