<template>
  <div id="page">
    <canvas ref="canvas_sakura" id="canvas_sakura" class="bg-sakura"></canvas>
  </div>
</template>
<script>
import { Sakura, SakuraList } from "../../assets/js/sakura";

export default {
  data() {
    return {
      sakuraNum: 100, //页面樱花数量 (添加)
      limitTimes: -1, //樱花坠落循环次数
      limitArray: [],
    };
  },
  created() {
    this.initParams();
  },
  mounted() {
    // 初始化页面参数与对象
    this.initSakura();
    this.initSakuraList();
    // 页面开始坠落樱花
    this.startSakura();
  },
  methods: {
    // 初始化循环数组
    initParams() {
      for (let index = 0; index < this.sakuraNum; index++) {
        this.limitArray[index] = this.limitTimes;
      }
    },
    initSakura() {
      const img = new Image();
      img.src = require("./imgs/sakura.png"); //图片路径使用require才能获取
      // 绘制樱花
      const _this = this;
      Sakura.prototype.draw = function (cxt) {
        cxt.save();
        const xc = (40 * this.s) / 4;
        cxt.translate(this.x, this.y);
        cxt.rotate(this.r);
        cxt.drawImage(img, 0, 0, 100 * this.s, 100 * this.s); //context.drawImage(img,x,y,width,height);
        cxt.restore();
      };

      // 修改樱花位置,模拟飘落.
      Sakura.prototype.update = function () {
        this.x = this.fn.x(this.x, this.y);
        this.y = this.fn.y(this.y, this.y);
        this.r = this.fn.r(this.r);

        // 如果樱花越界, 重新调整位置
        if (
          this.x > window.innerWidth ||
          this.x < 0 ||
          this.y > window.innerHeight ||
          this.y < 0
        ) {
          // 如果樱花不做限制
          if (_this.limitArray[this.idx] == -1) {
            this.r = _this.getRandom("fnr");
            if (Math.random() > 0.4) {
              this.x = _this.getRandom("x");
              this.y = 0;
              this.s = _this.getRandom("s");
              this.r = _this.getRandom("r");
            } else {
              this.x = window.innerWidth;
              this.y = _this.getRandom("y");
              this.s = _this.getRandom("s");
              this.r = _this.getRandom("r");
            }
          }
          // 否则樱花有限制
          else {
            if (_this.limitArray[this.idx] > 0) {
              this.r = _this.getRandom("fnr");
              if (Math.random() > 0.4) {
                this.x = _this.getRandom("x");
                this.y = 0;
                this.s = _this.getRandom("s");
                this.r = _this.getRandom("r");
              } else {
                this.x = window.innerWidth;
                this.y = _this.getRandom("y");
                this.s = _this.getRandom("s");
                this.r = _this.getRandom("r");
              }
              // 该越界的樱花限制数减一
              _this.limitArray[this.idx]--;
            }
          }
        }
      };
    },
    initSakuraList() {
      SakuraList.prototype.push = function (sakura) {
        this.list.push(sakura);
      };

      // list update 方法
      SakuraList.prototype.update = function () {
        for (let i = 0, len = this.list.length; i < len; i++) {
          this.list[i].update();
        }
      };

      // list draw 方法
      SakuraList.prototype.draw = function (cxt) {
        for (let i = 0, len = this.list.length; i < len; i++) {
          this.list[i].draw(cxt);
        }
      };
      SakuraList.prototype.get = function (i) {
        return this.list[i];
      };
      SakuraList.prototype.size = function () {
        return this.list.length;
      };
    },
    // 位置随机策略
    getRandom(option) {
      let ret, random;
      switch (option) {
        case "x":
          ret = Math.random() * window.innerWidth;
          break;
        case "y":
          ret = Math.random() * window.innerHeight;
          break;
        case "s":
          ret = Math.random();
          break;
        case "r":
          ret = Math.random() * 6;
          break;
        case "fnx":
          random = Math.random() - 0.3;
          ret = function (x, y) {
            return x + 0.5 * random - 1.7;
          };
          break;
        case "fny":
          random = 5 + Math.random() * 0.7;
          ret = function (x, y) {
            return y + random;
          };
          break;
        case "fnr":
          random = Math.random() * 0.03;
          ret = function (r) {
            return r + random;
          };
          break;
      }
      return ret;
    },

    // 樱花入口
    startSakura() {
      const requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame;
      const canvas = this.$refs.canvas_sakura;
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      const cxt = canvas.getContext("2d");
      const sakuraList = new SakuraList();
      // sakuraNum 樱花个数
      for (let i = 0; i < this.sakuraNum; i++) {
        const randomX = this.getRandom("x");
        const randomY = this.getRandom("y");
        const randomR = this.getRandom("r");
        const randomS = this.getRandom("s");
        const randomFnx = this.getRandom("fnx"); //x轴移动速度
        const randomFny = this.getRandom("fny"); //y轴移动速度
        const randomFnR = this.getRandom("fnr"); //转动速度
        const sakura = new Sakura(
          randomX,
          randomY,
          randomS,
          randomR,
          {
            x: randomFnx,
            y: randomFny,
            r: randomFnR,
          },
          i
        );

        sakura.draw(cxt);

        sakuraList.push(sakura);
      }
      let stop = requestAnimationFrame(function f() {
        // console.log("111");
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        // 修改樱花位置逻辑
        sakuraList.update();
        // 画出修改后的樱花
        sakuraList.draw(cxt);
        // 递归 修改位置, 画出修改后的樱花
        stop = requestAnimationFrame(f);
      });
    },
  },
};
</script>
