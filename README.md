# mongose

## 名词解释

1. Schema 模式

    一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力  
    （文档结构定义、属性类型定义）
    
2. Model 模型
    
    由 Schema 发布生成的模型，具有抽象属性和行为的数据库操作对

3. Entity (Document) 实体(文档)

    由 Model 创建的实体，他的操作也会影响数据库
    
### 注意

1. 本例子采用严格格命名方式来区别不同对象
    
    >var PersonSchema;   //Person的文本属性  
    var PersonModel;    //Person的数据库模型  
    var PersonEntity;   //Person实体

2. Schema、Model、Entity的关系

    `Schema` 生成 `Model`  
    `Model` 创造 `Entity`  
    `Model` 和 `Entity` 都可对数据库操作造成影响，但 `Model` 比 `Entity` 更具操作性
    
## 安装 mongoose 

    ```
    npm install mongoose
    ```
    
## 创建 Schema

1. 项目下创建 `schemas` 文件夹

2. 创建 `schemas/MovieSchema.js` 文件

## 创建 Model

1. 项目下创建 `models` 文件夹

2. 创建 `models/MovieModel.js` 文件

## 操作数据库

1. 创建 `/app.js` 文件

2. 创建数据库连接

    ```
    
    ```