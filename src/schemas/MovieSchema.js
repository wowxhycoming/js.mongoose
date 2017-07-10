/**
 * movie.js
 * @auther xuhuaiyu
 * @create 2017-06-11 13:45
 */

var mongoose = require('mongoose');

// 模式定义
var MoviceSchema = new mongoose.Schema({
    docker:String, //导演
    title:String, // 电影名
    language:String, // 语言
    country:String, // 国家
    summary:String, // 简介
    flash:String, // flash 地址
    poster:String, // 海报地址
    year: Number, // 年份（2017）
    mate:{ // 插入或更新这条文档的记录
        createDate:{
            type:Date, // 日期类型
            default:Date.now() // 默认值
        },
        updateDate:{
            type:Date, // 日期类型
            default:Date.now() // 默认值
        }
    }
});

// 这里的方法不会直接与数据库进行交互，只有经过 Model 编译、实例化以后，才会与数据库交互。

// 每次保存时，都会调用这个方法
MoviceSchema.pre('save', function (next) {
    console.log('pre save');
    
    // 如果是新增数据（插入）
    if(this.isNew) {
        this.mate.createDate = this.mate.updateDate = Date.now();
    } else { // 更新
        this.mate.updateDate = Date.now();
    }
    
    next();
});

// 添加静态方法
MoviceSchema.statics = {
    // 取出数据库中所有数据
    findAll : function (cb) {
        return this.find({})
                    .sort('mate.updateDate') // 按更新时间排序
                    .exec(cb); // 执行回调
    },
    // 查询单条数据
    findById : function (id, cb) {
        return this.findOne({_id:id})
                    .exec(cb); // 执行回调
    }
}

// 导出
module.exports = MoviceSchema;