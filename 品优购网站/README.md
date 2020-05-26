# 品优购项目细节
## 文件列表
1. index.html 主页
2. list.html 商品页
3. car.html 购物车页
4. register.html 用户注册页

## 编程思路
### index.html 主页
* 主页需要对其进行SEO优化，TDK(title、description、keyword)三大标签合理设置（仿京东）、使用精灵图减少http请求
* 主页logo需要进行SEO优化
  * logo的div中需要放h1标签提权
  * h1标签中放a标签，a标签背景设为logo图
  * 标签中需要放网站文字名称，为了使文字不显示：
    * 方法一：用text-indent：-9999px将文字移除盒子外，然后父盒子overflow：hidden
    * 方法二：直接font-size：0
* 所有页面要先定版心w
* 使用语义化标签 section header nav footer
* 用原生js实现轮播图
* 一些小的图标是字体图标，可以用::after伪元素添加，不会出现在DOM树中，简化
* 注意nav盒子中的‘全部商品分类栏’的制作很有讲究，需要用dt、dd标签制作
* 楼层区floor由于不知道要建几楼，可以不给height，但是要注意margin合并问题，要父盒子给paddding
* footer盒子用dl>dt>dd制作



### list.html 商品页
* 同样大盒子无需给高度


### car.html 购物车页
* 使用jQuery对购物车商品做删除、商品增减、清空购物车、计算金额、全选等操作
* 注意.html()选来的是字符串
  * 截取字符串.substr(start,[length])
  * .toFixed()可以选择保留小数的位数
  * -*/ 可以自动将string转为number，+可以自动转为string
  * 需要注意在计算结算金额时，要checked选中了才能结算，要加判断

### register.html 用户注册页
* 注册页无需SEO优化
* 要想提交到服务器，表单外必须加form标签
* label标签配合input标签可以增加用户体验，前提是label的for属性值和input的id属性值要一致
 
  
  
  
  
