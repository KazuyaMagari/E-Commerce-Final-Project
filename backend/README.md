# E-commerce Backend

Express.js + Firebase を使用したバックエンド API

## セットアップ

1. 依存関係のインストール:

```bash
npm install
```

2. 環境変数の設定 (.env ファイルを作成):

```bash
cp .env.example .env
```

3. Firebase 認証情報を .env に追加

## 実行

開発環境:

```bash
npm run dev
```

本番環境:

```bash
npm start
```

## API エンドポイント

### Products

- GET /api/v1/products - 全商品取得
- GET /api/v1/products/:id - 商品詳細取得
- POST /api/v1/products - 商品作成
- PUT /api/v1/products/:id - 商品更新
- DELETE /api/v1/products/:id - 商品削除

### Orders

- GET /api/v1/orders - 全注文取得
- GET /api/v1/orders/:id - 注文詳細取得
- POST /api/v1/orders - 注文作成
- PUT /api/v1/orders/:id - 注文更新
- DELETE /api/v1/orders/:id - 注文削除
