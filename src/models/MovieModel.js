/**
 * MovieModel.js
 * @auther xuhuaiyu
 * @create 2017-06-11 15:04
 */

var mongoose = require('mongoose');
var MovieSchame = require('../schemas/MovieSchema')// 导入模式

// 编译生成 MovieModel
var MovieModel = mongoose.model('movie', MovieSchame); // 模型名称（表明），模式

module.exports = MovieModel; // 导出

