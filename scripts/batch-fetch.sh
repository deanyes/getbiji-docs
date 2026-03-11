#!/bin/bash
# 批量获取所有页面的图片

IMG_DIR=~/projects/getbiji-docs/docs/public/images
cd $IMG_DIR

# 页面URL和前缀映射
declare -A PAGES=(
  ["meeting"]="GxabwpezwiNyzIkOLhwc3XUwnGc"
  ["classroom"]="GCVpwAkYFiLuCPkCQjoc8sf9nJM"
  ["link"]="GfPqwZfDRibB44kXvmvcQBRDngd"
  ["photo"]="B786wQqFYi5OtpkmJZWcaFgInDf"
  ["internal"]="Xkf0wf4Xfiwwink8HrXcVYbsn0M"
  ["import"]="EKMVwTnLrimXJtk2Mg8cS3KNnUe"
  ["book"]="RHEKwSvzjiQV56kjBtoccd17nKg"
  ["voiceprint"]="LaK3wuAVji3TxQk98RncksXYnog"
  ["command"]="KLFWwSISFiBTFekcejRcrHjqnnd"
  ["vocabulary"]="Er3mwjI6Ki0yo3koLuTcJdNPnwb"
  ["widget"]="VGC9wvYIpikdDxkqEmbcxvCPnrI"
  ["siri"]="Mapvw5tZri64kMkYohwclTY7nBc"
  ["shortcuts"]="VJKZwY4QRixB2Ak9Ujkcz2npntd"
  ["miniprogram"]="CiNewuOXWiDvKWkWbTScEJ9Fnkb"
  ["web"]="PydawiziAiDqxokurl4cSlyGnAu"
  ["kb-create"]="VdKMwBmEsisMzCk4NCYcIoxNnYd"
  ["kb-live"]="OMCDwvKShijvCmkYnJDcfYgXnre"
  ["kb-blogger"]="DjTGwfNFpicM7mk6IcrczAq7nve"
  ["getseed-intro"]="IxLiw9qxzisOFhkx9kFcFQRSnFc"
  ["getseed-quick"]="WZIswBJHbiyIfxkKQAiczyo4nRR"
  ["getseed-features"]="IoKmwezQ1iVEl5kxcvGcmtZwnNh"
)

for prefix in "${!PAGES[@]}"; do
  echo "$prefix"
done
