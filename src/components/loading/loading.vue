<template>
  <div>
    <i class="loading" v-if="visible"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: {
    visible: Boolean
  }
}
</script>
<style scoped>
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  background-color: #bbb;
  display: block;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  margin-top: 5px;
  /* background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMA/Pjt9fPv6uNe3pUkzdTBtWdBEIJ7dlPYsKmcPikVCruNcedEOA6kbVhOMhwEAsWKakghDiOk6AAAA3dJREFUeNrt29t2ojAUBuCfsxw8V61nR6tTW2tn2v/9n23WGoVYChaEJDd+1ywXkGTvzU7E3d3dXSXPFknDtN3HyfMB6nV5ydh0ulDL4jduewZ1mMkNd1DEYI7mDEpYzNXwocBfXuEOId/a5RXeDCpEs1E3bDdMZmj3odBz22GaMYBSh3DDlHcodggtfuG+QrVRg5eMNZR7CnjpF9TzTV4Iod5bhxd+Q4OeTaEDDZZNTaMgPFAYQIeewYQPHeYOE0/QYecxZu6gw5vF2CO0WNh6QqIwNzRPAzwx5kCPP5pisvDIWAQtdmZSr0OPEWNd6JEkJg96LJK1+AI9Qt2zAEla6kGPIc+a0EK8AuMNegxFcaRJnBYDaDLmWR96zEWJrImVlEaaTON1AE0+dccimJrrEjR154MBT0xosuAZdDF48gFNXJ48QJNHXQ2LdDpoQZNfyTrM3P+xupBszRMLaT7/20OufW4gsNRU7a+56UhRnurnRiKeLSHV8scb+IRUEc9yY+QWUm1zh9pU8+X2krsKHDXtxC5PXKR5KrKEaNZ4urLEKjcXjNVUzAFPJrmNbRcSiak2RFpPTShk7mp/U9LMHF2pCe1kdKQRM83RU7KLxd6+UrIbR8gixvkZ3y0UdBIHVz8LXPn1YnC1WbnKuT0J1cgYWXqUnQ5Cns2RyZG9DqykJM42kds+EFFo+lMPKYAUG54tkMOTGo79n59vKPUVeAX2cM30NTKCkFVkd8tG3ZYGz9a4wqSsnNgu9mxTxuaoVY8Fw5wjRqpOS7vo777IOfXRZOy1+KU+ajMo8Vj9ZLYaEWoyY8ws1ESJOX3UIjIZ25daMPSOqMHOLrl3frQYa6G6o8eyW5aRIe7giIp2G8bM/g2HVTd9VBI5TLyUaScmnE9U0DN52779hAnDr+co1wNKea/hJNyyRWFavq0teFHl43wrlNZilfvHcsUL4xszuODOqhzpnFb4lk405yjso6ZDrSG/aG1RyL7BL9a42YfJLxo/P8vht1vnweZFwJTGwwK5otBjShsVTfmN2/GRYfhuM80YorKoxQx2sPrTHc0iYD4b/Z2+Sz3ev3d4k80WdQlNlmYNUaeBxVKCEeo2ClhY8xUyHCY2C7B+LSGN33R4lbXaQrL+euUZzGA0xj5UiYadwLVNg6e/+1mtSXeBu7u7u5v8A0gQkJYyptv5AAAAAElFTkSuQmCC"); */
  background-image: url("../../assets/img/loading/loading1.gif");
  background-size: cover;
  animation: rotate 1s infinite linear;
}
</style>