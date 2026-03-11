#!/bin/bash

# 图片保存目录
IMG_DIR=~/projects/getbiji-docs/docs/public/images

# 核心功能页面列表
declare -A PAGES=(
  ["recording"]="https://doc.biji.com/docs/OX23wRkIqiQJ3mkSKXJcQVftnZb"
  ["meeting"]="https://doc.biji.com/docs/GxabwpezwiNyzIkOLhwc3XUwnGc"
  ["classroom"]="https://doc.biji.com/docs/GCVpwAkYFiLuCPkCQjoc8sf9nJM"
  ["link"]="https://doc.biji.com/docs/GfPqwZfDRibB44kXvmvcQBRDngd"
  ["photo"]="https://doc.biji.com/docs/B786wQqFYi5OtpkmJZWcaFgInDf"
  ["internal"]="https://doc.biji.com/docs/Xkf0wf4Xfiwwink8HrXcVYbsn0M"
  ["import"]="https://doc.biji.com/docs/EKMVwTnLrimXJtk2Mg8cS3KNnUe"
  ["book"]="https://doc.biji.com/docs/RHEKwSvzjiQV56kjBtoccd17nKg"
  ["voiceprint"]="https://doc.biji.com/docs/LaK3wuAVji3TxQk98RncksXYnog"
  ["command"]="https://doc.biji.com/docs/KLFWwSISFiBTFekcejRcrHjqnnd"
  ["vocabulary"]="https://doc.biji.com/docs/Er3mwjI6Ki0yo3koLuTcJdNPnwb"
  ["widget"]="https://doc.biji.com/docs/VGC9wvYIpikdDxkqEmbcxvCPnrI"
  ["siri"]="https://doc.biji.com/docs/Mapvw5tZri64kMkYohwclTY7nBc"
  ["shortcuts"]="https://doc.biji.com/docs/VJKZwY4QRixB2Ak9Ujkcz2npntd"
  ["miniprogram"]="https://doc.biji.com/docs/CiNewuOXWiDvKWkWbTScEJ9Fnkb"
  ["web"]="https://doc.biji.com/docs/PydawiziAiDqxokurl4cSlyGnAu"
  ["kb-create"]="https://doc.biji.com/docs/VdKMwBmEsisMzCk4NCYcIoxNnYd"
  ["kb-live"]="https://doc.biji.com/docs/OMCDwvKShijvCmkYnJDcfYgXnre"
  ["kb-blogger"]="https://doc.biji.com/docs/DjTGwfNFpicM7mk6IcrczAq7nve"
  ["kb-upload"]="https://doc.biji.com/docs/D4wSweNN4isT6dk7h59cMohlnXb"
  ["kb-share"]="https://doc.biji.com/docs/M4nuwqGA8iJBqXkgKJZcP79WnMg"
  ["getseed-intro"]="https://doc.biji.com/docs/IxLiw9qxzisOFhkx9kFcFQRSnFc"
  ["getseed-quick"]="https://doc.biji.com/docs/WZIswBJHbiyIfxkKQAiczyo4nRR"
  ["getseed-features"]="https://doc.biji.com/docs/IoKmwezQ1iVEl5kxcvGcmtZwnNh"
)

echo "页面列表已准备好，共 ${#PAGES[@]} 个页面"
