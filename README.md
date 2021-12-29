# 目的
Webpack5でReact + TypeScriptの開発環境を構築。

# 前提条件
以下のコマンドで`tsconfig.json`を作成しておくこと
```
npx tsc --init
```
# ポイント
## tsconfig.json
トランスパイルする動作環境。IEも考慮するなら`ES2015`ではなく`ES5`を指定。
```
"target": "ES2015"
```
JavaScriptやブラウザで利用されるAPIの型定義
```
"lib": ["ES2020", "DOM"]
```
Reactのテンプレート言語`JSX`に対応
```
"jsx": "react"
```
標準のES Modules形式を指定
```
"module": "ES2015"
```
importによるモジュール読み込む時のエイリアス(pathsの値は任意)
```
"baseUrl": "./",
"paths": {
  "@/*": ["src/*"]
},
```
## webpack.config.js
トランスパイル時にエイリアスを解決するために指定
```
resolve: {
  alias: {
    '@': path.join(__dirname, '/src')
  }
}
```