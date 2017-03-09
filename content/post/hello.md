+++
date = "2017-03-09T14:10:07+09:00"
draft = false
title = "hello"

+++

# hugo にする時に使ったコマンド一覧

- 新しいリポジトリを作成 テスト

`hugo new site sample-hugo`

-
`hugo server`

`hugo new post/hello`

`hugo new post/hello.md`

`hugo server --buildDrafts`

`cd themes`

`git clone https://github.com/dim0627/hugo-tranquilpeak-theme.git`

`hugo server --theme=hugo-tranquilpeak-theme --buildDrafts`

`hugo version`

`git init`

`touch .gitignore`

`git config -l`

`git config --local user.name "hoge"`

`git config --local user.email hoge@gmail.com`

`echo "# hoge" >> README.md`

`hugo undraft content/post/hello.md`

`hugo server --theme=hugo-tranquilpeak-theme`

.gitignore の cache 削除
`git rm -r --cached .`

`git add .`

`git commit -m ".gitignore is now working"`

`git push origin master`

## 参考サイト
Hugo Quickstart Guide

https://gohugo.io/overview/quickstart/

テーマの作り方

https://42-design.work/design/how-to-make-of-hugo-theme/
