const { body, query, validationResult } = require('express-validator/check')
const FsUtil = require('./../utils/FsUtils')
var formidable = require('formidable');
var path = require('path');
const config = {
  basePath: 'F:\\file-test',
  maxSize: 10 * 1024 * 1024
}

module.exports = {
  'upload': (req,res)=>{
    try {
      //创建上传表单
      var form = new formidable.IncomingForm();
      //设置编辑
      form.encoding = 'utf-8';
      //设置上传目录
      // form.uploadDir = curPath;
      form.uploadDir = config.basePath
      //保留后缀(不可更改)
      form.keepExtensions = true
      //能申请到的内存值,非文件大小
      // form.maxFieldsSize = config.maxSize;

      //文件大小限制,超出触发error事件
      form.maxFileSize = config.maxSize;
      //大小限制错误判断
      form.overLimitSize = false

      form.on('progress', (bytesReceived, bytesExpected) => {
        //在这里判断接受到数据是否超过最大，超过截断接受流
        if(bytesReceived > form.maxFileSize){
          // console.log('上传文件超过指定大小......');
          form.overLimitSize = true
        }
      });

      form.parse(req, async (err, fields, files) => {
        if (err) {
          if(form.overLimitSize){
            console.log('上传文件超过指定大小......response');
            return res.status(500).json({
              success:false,
              message:'上传文件大小受限'
            })
          }else{
            console.log(err)
            return res.status(500).json({
              success:false,
              message:'服务器错误'
            })
          }
        }
        //是否存在有重名
        let {name:fileName,path: filePath} = files.resource
        FsUtil.rename(filePath,path.join(config.basePath,fileName))
        // FsUtil.rename(p, newPath)
        res.status(200).json({success: true,fileName:fileName,filePath: filePath})
      })
    } catch (e) {
      console.log('文件上传失败' + e)
      res.status(500).json({success: false})
    }
  }
}