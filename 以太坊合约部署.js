

**工具
1.google浏览器(没有的自shā吧)
2.metamask浏览器插件(以太坊钱包插件，非常方便，无需同步区块等)**

# 插件安装
[插件下载地址](https://metamask.io/download.html)
**Install MetaMask for Chrome 
然后自己领悟吧 傻瓜式安装 如果报错 ”无法将程序目录移动到个人文件夹中“ 重启电脑重试
装完之后右上角出现狐狸头 插件就安装好了 然后登陆账户 转0.5个以太币进来**

# 部署合约
打开[remix](https://remix.ethereum.org/)
remix：在线工具，可以编写、编译、调试、发布合约，还有模拟环境，总之无敌
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200416164050953.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjcwNDM1Ng==,size_16,color_FFFFFF,t_70#pic_center)

**1. 图示1位置创建个sol文件 把准备好的合约代码考进来(上篇博客有写一个标准合约)
 [标准合约链接](https://github.com/lim960/Eth/blob/master/%E6%A0%87%E5%87%86ERC20%E4%BB%A3%E5%B8%81%E5%90%88%E7%BA%A6.js)
2. 点击图示2按钮 会调出工具栏**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200416165834276.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjcwNDM1Ng==,size_16,color_FFFFFF,t_70#pic_center)
**3.编译合约(一般都不需要编译 默认ctrl s保存自动编译)
注意上边的版本号要和合约用的版本号一致
只要看到左侧菜单的绿色√说明编译成功了**

4.部署合约
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200416185256253.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjcwNDM1Ng==,size_16,color_FFFFFF,t_70#pic_center)

**1.点击1按钮 出现工作栏
2.选择环境为 Injected Web3  会使用MetaMask插件的环境，下面可以选择账户，选择我们有余额的账户，设置gas limit ，填个600w左右，反正用不完会退。value不用管它。
3.选择我们最终实现的合约TetherToken(我的图这里名字不一样)，总之不要选工具合约、Ownable、接口合约，选最终实现的。
4.填写构造方法的参数，没有就不填
5.点击参数input左边的deploy部署**
![在这里插入图片描述](https://img-blog.csdnimg.cn/202004161801481.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjcwNDM1Ng==,size_16,color_FFFFFF,t_70#pic_center)
**然后会提示可能会超过燃料上限，不要管它，点send**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200416183649671.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjcwNDM1Ng==,size_16,color_FFFFFF,t_70#pic_center)
然后会弹出这个窗问你是否确认，同时要配置一下gas price，默认10，我设置为2，部署了三个小时了  还没完，看自己情况。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200416184900103.jpg#pic_center)
然后点击确定 部署完成，接下来就是等待。。。
remix控制台会有交易hash点击直接过去查看处理情况
