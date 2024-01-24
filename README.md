# セットアップ
- 未インストールのVSCodeの拡張機能がある場合にレコメンドされるので、全てインストールしてください
  - 拡張機能は `.vscode/extensions.json`に書いてあるので、インストールしそびれた場合はここを見てください
- 次に以下のコマンドを実行し、Tailwind CSS の資材をダウンロードします
  - Node.js がインストールされてない場合は[こちら](https://nodejs.org/en)
```sh
npm install
```

# 開発方法
- Tailwind CSS を使うために、以下のコマンドを実行してください
  - 開発中、リアルタイムで `./assets/output.css` の中身が変わります
```sh
npx tailwindcss -i ./assets/input.css -o ./assets/output.css --watch
```
- 次に、`index.html` を Live Server で開きます

https://github.com/skikatte/html-tailwind-template/assets/74942852/7c97ebcf-9289-4bed-9ba9-cbe1474ff17d

# 注意事項
- pushする前にもう一度 `npx tailwindcss -i ./assets/input.css -o ./assets/output.css --watch` を実行しましょう
  - 不要な CSS がここで一気に消えることがあります
