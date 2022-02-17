---
title: 'Next.jsでサクッと作る。高スペックのWebサイト'
date: 'June 24 2021'
excerpt: 'This is the excerpt'
description: 'いままでプログラミングを一切したことがない人に贈る、はじめてのWebサイト構築法。WordPressなんてもう古い。スペックも高くて拡張性も高いNext.jsをマスターしよう。'
cover_image: '/images/posts/img2.png'
---

自分だけのサイトを公開してみたい。  

note？Blog？なんだかプラットフォームは縛りが多いし、もっと自由にやりたいことがある。TwitterやInstagramを使うのも面倒だし、なんだかやりたいことと違うんだ。  

そんなアナタにオススメしたいのが、Next.jsを使った高スペックサイト構築。  
  
Next.jsってなに？って方の為にカンタンに説明します。Next.jsとは簡単かつ高速なサイト構築をすることができるフレームワーク。嘘かと思うかもしれませんが、Next.jsを使いこなすことができれば**1万ページ以上コンテンツがあるサイトも数分で構築することもできます。**実際に私もそんなサイトを運営しています。  

さぁ、前書きはこの辺にして、さっさと始めてみましょう！  
<hr class='my-12' />

- ### 目次
- **1. Next.jsの運用イメージ**
- **2. Next.jsの基本的な使い方**

<hr class='my-12' />

## Next.jsの運用イメージ
サイトを作成するまでに最低限必要なコードは、わずか1行。
```
> npx create-next-app
```
なんだこりゃ、どうすりゃいいんだよ！と思う方もいるかもしれませんが、しっかりあとから説明するのでご安心ください。  
<br/>
ここで伝えたいことは、Next.jsではこのコードを実行するだけで、サイトが構築できるということ。さらに、[Vercel](https://vercel.com/)というサイトで数クリックするだけでWebサイトとして公開可能なのです。   

とはいえ、実際に自分のサイトを作るには、コードを書く必要があります。  
この記事では、自分で作ったコンテンツや、Twitterアカウントの宣伝、アプリの宣伝など、色々なコンテンツを埋め込んでサイトを作成することを目指します。

- iOS版：[Mui - 幸せのための時間管理アプリ🍀 - App Store](https://apps.apple.com/jp/app/mui-幸せのための時間管理アプリ/id1585646872)
- Android版：[Mui - 幸せのための時間管理アプリ🍀 - Apps on Google Play](https://play.google.com/store/apps/details?id=hagakun.time_tracking_app)  
  