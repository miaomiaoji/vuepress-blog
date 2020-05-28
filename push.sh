#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 上传
git init
git add -A
git commit -m 'update'

# 上传至
git push -f git@github.com:miaomiaoji/vuepress-blog.git master
