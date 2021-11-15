<template>
  <div>
    class继承
    
  </div>
</template>
<script>
// es6 类继承
class animal { //定义动物类 父类
  age = 0;
  constructor (age) {
    this.age = age;
  }
  eat() {
    console.log('eat,吃');
  }
  fu() {
    console.log('fu',this.age) // 可以使用类constructor中定义的变量
  }
}
// extends 用来继承父类
class person extends animal{ // 定义人 子类
  constructor (age,name) {
    super(age); // 给父类传递数据
    this.name = name;
  }
  eat() { // 相同方法子类会覆盖父类的同名方法
    console.log('eats,吃吃吃');
  }
  zi() { // 不同的方法都会保存下来
    console.log('zi',this.name,this.age); // 也可以使用父类constructor中定义的变量
  }
}
export default {
  data() {
    return {
      animal,
      person
    }
  },
  mounted() {
    let ycg = new person(18,'ycg');//子类人的实例化
    console.log(ycg);
    ycg.eat();//子类方法覆盖父类方法
    ycg.zi();//子类方法
    ycg.fu();//父类方法
  }
}
</script>
<style scoped>

</style>