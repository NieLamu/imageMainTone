<template>
  <div class="hello" :style="mainStyle">
    <img id="image" :src="imgSrc" @click="changeImg">
    <div class="infoWrapper">
      <div class="info">
        <input class="upload" id="uploadImg" type="file" @change="uploadImg">
        <button class="upload">Upload Your Image</button>
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
        'background-color': '#376473',
        'text-align': 'center'
      },
      imgSrc: ''
    }
  },
  mounted () {
    this.changeImg();
  },
  methods: {
    changeImg: function () {
      const i = parseInt((Math.random()*1000+1));
      this.imgSrc = `https://picsum.photos/600/600/?image=${i}`
    },
    uploadImg: function () {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  padding: 10px;
  height: 100%; 

  .infoWrapper {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 20px;
    display: flex;
    justify-content: center;

    .info {
      position: relative;
      width: 200px;
      height: 40px;
    }
    .upload {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgb(9, 19, 35);
      border-radius: 20px;
      color: white;
    }
    #uploadImg {
      opacity: 0;
      z-index: 1;
      cursor: pointer;
    }
  }
  
  #image {
    max-height: 100%;
    max-width: 100%;
  }
}

</style>
