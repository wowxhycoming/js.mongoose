/**
 * app.js
 * @auther xuhuaiyu
 * @create 2017-06-11 13:38
 */

var mongoose = require('mongoose');
var MovieModel = require('./src/models/MovieModel')
var _ = require('underscore');

mongoose.connect('mongodb://127.0.0.1/test');

// 模拟页面提交的数据对象。定义要插入或更新到数据库中的对象
var movieObjInsert = {
    docker:'3',
    title:'银河护卫队',
    language:'l',
    country:'shit',
    summary:'bastard',
    flash:'n',
    poster:'o',
    year: 2010
};

var movieObjUpdate = {
    _id:'593d1737b80a1c2f7820040e', // 文档中的ID
    docker:'d11',
    title:'掌上shit',
    language:'ll',
    country:'shitc',
    summary:'bastards',
    flash:'nn',
    poster:'oo',
    year: 2011
};

// 插入 和 更新
// save(movieObjUpdate);

// 查询
query();

function query() {
    
    console.log('query')
    MovieModel.findAll(function (err, movies) {
        console.log('query end')
        if(err) {
            console.log('error occur');
            console.log(err);
        } else {
            console.log('query seccess');
            console.log(movies.length);
            console.log(movies)
        }
    });
    
}

function save(movie) {
    console.log('app.save');
    
    var id = movie._id;
    
    console.log(typeof id !== 'undefined' ? 'updateMovie' : 'insertMovie');
    
    if(typeof id !== 'undefined') { // post 上来的数据如果 *有* id，则表示更新
        updateMovie(id);
    } else{ // post 上来的数据如果 *没有* id，则表示插入
        insertMovie();
    }
};

function insertMovie() {
    console.log('app.insertMovie');
    var movieEntity;
    
    // 新增：直接调用模型的构造函数。
    movieEntity = new MovieModel({
        docker: movieObjInsert.docker,
        title: movieObjInsert.title,
        language: movieObjInsert.language,
        country: movieObjInsert.country,
        summary: movieObjInsert.summary,
        flash: movieObjInsert.flash,
        poster: movieObjInsert.poster,
        year: movieObjInsert.year
    });
    
    movieEntity.save(function (err, movie) {
        if(err) {
            console.log(err);
        } else {
            // save 后的 movie
            console.log(movie);
        }
    })
}

function updateMovie(id) {
    console.log('app.updateMovie');
    
    // 如果这是一个路由，id 和 moiveObj 都从 request 中获取。
    var movieEntity;
    
    MovieModel.findById(id, function (err, movie) {
        if(err) {
            console.log('error occur');
            console.log(err);
        } else {
            console.log('query seccess');
            console.log(movie)
        }
        
        // 更新操作：用 post 上来的数据来更新查询到的旧的数据（模拟网页操作）
        /**
         * 用到一个新模块 underscore ，可以实现用新对象的字段替换就对象对应的字段
         */
        movieEntity = _.extend(movie, movieObjUpdate);
        console.log('extend');
        console.log(movieEntity);
    
        movieEntity.save(function(err, movie) {
            if(err) {
                console.log(err);
            } else {
                // save 后的 movie
                console.log("sucess");
                console.log(movie);
            }
        });
    
        // setTimeout(function () {
        //
        // }, 1);
    });
}