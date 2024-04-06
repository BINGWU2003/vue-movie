/*
 * @Author: BINGWU
 * @Date: 2024-02-25 23:51:53
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-03-27 01:00:19
 * @FilePath: \vue-movie\bingwu-admin\src\utils\tencentCloud.js
 * @Describe:
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import COS from 'cos-js-sdk-v5' //引入腾讯云
//创建对象，这里用的我的腾讯cos密钥
const cos = new COS({
  SecretId: 'AKIDlSClKj183qKdnvw7A0a2MUQH3kMn2pUv',
  SecretKey: 'e681kMoBYuCJG9virFg5Nhsz46A9wXfc'
})
const smallFileUpload = (file, fileName = '', updateProgress) =>
  new Promise((resolve, reject) => {
    cos.putObject(
      {
        Bucket: 'cloudshoping-1318477772' /* 填入您自己的存储桶，必须字段 */,
        Region: 'ap-nanjing' /* 存储桶所在地域，例如ap-beijing，必须字段 */,
        Key: fileName
          ? fileName
          : file.raw
              .name /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */,
        StorageClass: 'STANDARD',
        Body: file.raw,
        onProgress: function (progressData) {
          updateProgress(parseInt(100 * progressData.percent))
        }
      },
      (err, data) => {
        if (err) {
          reject(err)
        } else {
          const url = 'https://' + data.Location
          resolve(url)
        }
      }
    )
  })

const largeFileUpload = (file, fileName = '', updateProgress) =>
  new Promise((resolve, reject) => {
    cos.uploadFile(
      {
        Bucket: 'cloudshoping-1318477772' /* 填入您自己的存储桶，必须字段 */,
        Region: 'ap-nanjing' /* 存储桶所在地域，例如ap-beijing，必须字段 */,
        Key: fileName
          ? fileName
          : file.raw
              .name /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */,
        Body: file.raw,
        SliceSize:
          1024 * 1024 * 5 /* 触发分块上传的阈值，超过5MB使用分块上传，非必须 */,
        onProgress: function (progressData) {
          updateProgress(parseInt(100 * progressData.percent))
        }
      },
      function (err, data) {
        console.log(err || data)
        if (err) {
          reject(err)
        } else {
          const url = 'https://' + data.Location
          resolve(url)
        }
      }
    )
  })

export { smallFileUpload, largeFileUpload }
