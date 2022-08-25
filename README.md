### gulp+babel+typescript 编译示例

### 安装
```
yarn install
```

### 构建
```
yarn build
```

### 说明
gulp-typescript使用isolatedModules：true时，会不进行类型校验和生成类型声明文件。
这和typescript中isolatedModules定义不同，解决方法是覆盖配置中的isolatedModules为false。