<template>
  <div class="hello" :style="mainStyle">
    <img id="image" :src="imgSrc" @click="changeImg" crossOrigin="Anonymous">
    <div class="contentWrapper">
      <div class="info" :style="mainStyle">
        {{ mainStyle.backgroundColor }}
      </div>
      <div class="uploadWrapper">
        <button class="upload">Upload Your Image</button>
        <input class="upload" id="uploadImg" type="file" accept="image/*" @change="uploadImg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      mainStyle: {
        backgroundColor: '#42b983'
      },
      imgSrc: ''
    }
  },
  mounted () {
    this.imageOnload();
    this.changeImg();
  },
  methods: {
    changeImg: function () {
      const i = parseInt((Math.random()*1000+1));
      this.imgSrc = `https://picsum.photos/1024/?image=${i}`;
    },
    uploadImg: function () {
      const reader = new FileReader();
        reader.onload = (e) => {
        const b64 = reader.result;
        this.imgSrc = b64;
      }  
      reader.readAsDataURL(document.getElementById('uploadImg').files[0])
    },
    imageOnload: function (params) {
      const image = document.getElementById('image');
      image.onload = () => {
        smartColor(image).then(rgba => {
          const rgb = `rgb(${rgba.r}, ${rgba.g}, ${rgba.b})`;
          this.mainStyle.backgroundColor = rgb; 
          document.querySelector('meta[name="theme-color"]').setAttribute('content', rgb);
        })
      }
      image.onerror = this.changeImg;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  padding: 10px;
  height: 100%; 
  text-align: center;

  .contentWrapper {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 20px;

    .info {
      position: relative;
      margin: 0 auto 10px;
      width: 200px;
      height: 40px;
      border-radius: 20px;
      border: solid 0.5px #42b983;
      line-height: 40px;
      color: white;
    }
    .uploadWrapper {
      position: relative;  
      margin: 0 auto;
      width: 200px;
      height: 40px;
      .upload {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #42b983;
        border: solid 0.5px #42b983;
        border-radius: 20px;
        color: white;
      }
      #uploadImg {
        opacity: 0;
        cursor: pointer;
      }
    }
    
  }

  #image {
    max-height: 100%;
    max-width: 100%;
  }
}

</style>
