# switch开关组件 -- 使用方法

# 参数说明
## @param value.sync
* 说明：双向绑定的switch开关值
* 是否必传：是
* 值类型：Boolean
* 注意：传值需要带上.sync，用于通过子组件触发修改父组件中的值

## @param on
* 说明：设置switch开关值为true时的样式
* 是否必传：否
* 值类型：Object
* 参数说明{
  text: 'on',         // 文案描述,默认值:`on`,如:`开启`
  textStyle: '',      // 文案描述样式,如:`color:red;`
  containerStyle: '', // 开关容器样式,如:`width:100px;border:0px;`
  dotsStyle: ''       // 圆点样式,如:`width:20px;margin-left: calc(100% - 20px);`
}
* 注意：组件圆点移动用参数的`dotsStyle`的`margin-left: calc(100% - 20px)`,此css实现圆点移动。 必须将此字段的偏移量设置为与圆点自身的width相同。如：圆点`width:50px`,应该设置`margin-left: calc(100% - 50px);`

## @param off
* 说明：设置switch开关值为false时的样式
* 是否必传：否
* 值类型：Object
* 参数说明{
  text: 'on',         // 文案描述,默认值:`on`,如:`开启`
  textStyle: '',      // 文案描述样式,如:`color:red;`
  containerStyle: '', // 开关容器样式,如:`width:100px;border:0px;`
  dotsStyle: ''       // 圆点样式,如:`width:20px;`,为false时无特殊需求,不需要设置`margin-left`
}

## @param disabled
* 说明：设置组件是否禁用
* 是否必传：否
* 值类型：Boolean

# 事件说明
## @event automaticChange
* 说明：switch开关值被异步改变时的回调函数
* 回调参数：改变后的Boolean值

## @event manualChange
* 说明：手动切换switch开关值的回调函数
* 回调参数：改变后的Boolean值

```html
<switch-dom
  :value.sync="val"
  :on="{text:'开启', textStyle:'color:green;',containerStyle:'width:100px;',dotsStyle:'width:20px;height:20px;margin-left: calc(100% - 20px);'}"
  :off="{text:'关闭', textStyle:'color:red;',containerStyle:'width:100px;',dotsStyle:'background-color: fuchsia;'}"
  :disabled="false"
  @automaticChange='automaticChange'
  @manualChange='manualChange'
/>
```