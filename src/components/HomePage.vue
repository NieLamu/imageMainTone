<template>
  <div class="hello" :style="mainStyle">
    <img id="image" :src="imgSrc" crossorigin="Anonymous" v-show="!loading" @click="changeImg">
    <div class="loader" v-show="loading">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="contentWrapper">
      <div class="info">Try click the picture</div>
      <div class="colorInfo" :style="mainStyle">{{ mainStyle.backgroundColor }}</div>
      <div class="uploadWrapper">
        <button class="upload">UPLOAD YOUR PICTURE</button>
        <input class="upload" id="uploadImg" type="file" accept="image/*" @change="uploadImg">
      </div>
      <a href="https://github.com/NieLamu/imageMainTone" target="_blank" title="imageMainTone">
        <i class="icon ion-logo-github"></i>
      </a>
    </div>
  </div>
</template>

<script>
import "../assets/css/loading.css";
import { imageMainTone } from "../assets/js/imageMainTone";

export default {
  name: "HomePage",
  props: {
    msg: String
  },
  data() {
    return {
      mainStyle: {
        backgroundColor: "#42b983"
      },
      imgSrc: "",
      loading: true
    };
  },
  mounted() {
    this.imageOnload();
    this.changeImg();
  },
  methods: {
    changeImg: function() {
      this.loading = true;
      const i = parseInt(Math.random() * 1000 + 1);
      this.imgSrc = `https://picsum.photos/1024/?image=${i}`;
    },
    uploadImg: function() {
      const reader = new FileReader();
      reader.onload = () => {
        const b64 = reader.result;
        this.imgSrc = b64;
      };
      reader.readAsDataURL(document.getElementById("uploadImg").files[0]);
    },
    imageOnload: function() {
      const image = document.getElementById("image");
      image.onload = () => {
        this.loading = false;
        imageMainTone(image).then(rgba => {
          const rgb = `rgb(${rgba.r}, ${rgba.g}, ${rgba.b})`;
          this.mainStyle.backgroundColor = rgb;
          document
            .querySelector('meta[name="theme-color"]')
            .setAttribute("content", rgb);
        });
      };
      image.onerror = this.changeImg;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  // padding: 30px;
  height: 100%;
  text-align: center;

  .contentWrapper {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0.625rem;
    .info {
      position: relative;
      margin: 0 auto 0.625rem;
      width: 100%;
      height: 2.5rem;
      border-radius: 1.25rem;
      line-height: 2.5rem;
      color: white;
    }
    .colorInfo {
      position: relative;
      margin: 0 auto 0.625rem;
      width: 12.5rem;
      height: 2.5rem;
      border-radius: 1.25rem;
      border: solid 0.03125rem #42b983;
      line-height: 2.5rem;
      color: white;
    }
    .uploadWrapper {
      position: relative;
      margin: 0 auto;
      width: 12.5rem;
      height: 2.5rem;
      .upload {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #42b983;
        border: solid 0.03125rem #42b983;
        border-radius: 1.25rem;
        color: white;
      }
      #uploadImg {
        opacity: 0;
        cursor: pointer;
      }
    }
    .icon {
      font-size: 2rem;
      color: black;
    }
    .icon:hover {
      color: white;
    }
  }

  #image {
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
