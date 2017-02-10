require('normalize.css/normalize.css');
require('styles/App.scss');


import React from 'react';

//获取图片相关数据
var imageDatas = require('../data/imageData.json');
//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = function genImageURL(imageDataArr){
    for(var i=0,j=imageDataArr.length;i<=j;i++){
        var singleImageData = imageDataArr[i];

        singleImageData.imageURL = require('../images/singleImageData.filename');

        imageDataArr[i] = singleImageData;
    }
    return imageDataArr;
}(imageDatas);

// 原来的代码
class AppComponent extends React.Component {
 render() {
   return (
     <div className="index">
       <img src={yeomanImage} alt="Yeoman Generator" />
       <div>hello!</div>
       <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>

     </div>
   );
 }
}
//
// var GalleryByReactApp = React.createClass({
//     render : function(){
//         return (
//           <section className="stage">
//           <section className ="img-sec"></section>
//           <nav className="controller-nav"></nav>
//           </section>
//             );
//     }
// });
AppComponent.defaultProps = {
};

export default AppComponent;
