# VIETISジャパン コーポレートサイト

株式会社VIETISジャパンのコーポレートサイト。Next.js App Router で実装。

---

## URL

| 環境 | URL |
|---|---|
| 開発・確認用 | https://vietis-jp.vercel.app |
| 日本語本番（予定） | https://vietis.co.jp |
| 英語本番（予定） | https://vietis.com.vn ※英語サイトはベトナム側が作成 |

---

## 技術スタック

- **フレームワーク**: Next.js (App Router)
- **スタイリング**: バニラCSS（CSS-in-JSX `<style>`タグ方式）
- **フォント**: Noto Sans JP + Roboto（Google Fonts CDN）
- **フォーム**: Formspree
- **予約カレンダー**: Spir
- **デプロイ**: Vercel（GitHub連携・自動デプロイ）
- **CMS（予定）**: Strapi

---

## ローカル起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開く。

---

## ディレクトリ構成

```
src/
├── app/
│   ├── page.tsx               # トップページ
│   ├── about/                 # 企業情報
│   ├── blog/
│   │   ├── page.tsx           # ブログ一覧
│   │   └── [slug]/page.tsx    # ブログ記事（現在001のみ実装）
│   ├── cases/
│   │   ├── page.tsx           # 実績一覧
│   │   └── example-01〜17/    # 実績詳細（17件）
│   ├── contact/               # お問い合わせ
│   ├── consultation/          # 無料相談予約（Spir埋め込み）
│   ├── download/              # 資料請求
│   ├── product/
│   │   ├── page.tsx           # プロダクト一覧
│   │   ├── keyspider/         # Keyspider
│   │   └── menraku/           # Menraku
│   ├── recruit/               # 採用
│   ├── service/
│   │   ├── page.tsx           # サービス一覧
│   │   ├── ai-development/
│   │   ├── ai-driving-suite/
│   │   ├── dev-app/
│   │   ├── dev-system/
│   │   ├── dev-web/
│   │   ├── support-ai/
│   │   ├── support-system/
│   │   └── support-web/
│   └── privacy-policy/
├── components/
│   ├── Header.tsx             # 共通ヘッダー
│   ├── Footer.tsx             # 共通フッター
│   ├── ContactForm.tsx        # お問い合わせフォーム（Formspree）
│   ├── SpirWidget.tsx         # Spirカレンダー埋め込み
│   ├── FaqInit.tsx            # FAQアコーディオン（3パターン対応）
│   ├── RevealInit.tsx         # スクロールアニメーション
│   ├── TopPageInit.tsx        # トップページ専用JS
│   ├── BlogArticleInit.tsx    # ブログ記事ページ（TOC・SNSシェア）
│   ├── BlogFilterInit.tsx     # ブログ一覧フィルター
│   ├── CasesFilterInit.tsx    # 実績一覧フィルター
│   └── ScrollRestoration.tsx  # スクロール位置復元
public/
├── img/client/                # クライアントロゴ（マーキー用）
└── img/cert/                  # 認証ロゴ（CMMI・ISO・Pマーク）
scripts/
└── gen_blog001.py             # ブログHTML→page.tsx変換スクリプト
```

---

## デプロイ

`main` ブランチに push すると Vercel に自動デプロイされます。

```bash
git add .
git commit -m "変更内容"
git push
```

---

## Strapi連携（予定）

### Strapiとは

Strapi はオープンソースのヘッドレスCMSです。管理画面からコンテンツを登録・編集でき、REST API または GraphQL で Next.js 側からデータを取得します。

公式ドキュメント: https://docs.strapi.io

### 日英サイトのStrapi構成方針

日本語サイト（vietis.co.jp）と英語サイト（vietis.com.vn）はコンテンツの方向性が異なるため、**コンテンツタイプを分けて管理**する。Strapiのサーバーは1台で運用する。

```
Strapi 1サーバー
├── Collection Type: article     → 日本語サイト（vietis.co.jp）に配信
└── Collection Type: article_en  → 英語サイト（vietis.com.vn）に配信
```

| | `article`（日本語） | `article_en`（英語） |
|---|---|---|
| 構築担当 | ベトナム側 | ベトナム側 |
| コンテンツ管理 | 日本側（渡辺） | ベトナム側 |
| 記事の方向性 | 技術・DX・AI系 | ベトナム側に一任 |

このREADMEは **`article`（日本語サイト用）** のコンテンツタイプ仕様を記載する。`article_en` の仕様はベトナム側で別途定義する。

---

### フェーズ1：ブログ連携

#### ステップ1：Strapi のセットアップ

```bash
# Strapi プロジェクトを新規作成
npx create-strapi-app@latest vietis-cms --quickstart
```

起動後、`http://localhost:1337/admin` で管理画面にアクセスして管理者アカウントを作成する。

ホスティング先（Railway / Render / Strapi Cloud など）はベトナム側で選定・構築する。  
構築完了後、StrapiサーバーのURLを日本側（渡辺）に共有すること。

---

#### ステップ2：コンテンツタイプの作成

管理画面の **Content-Type Builder** で以下の Collection Type を作成する。

**Collection Type名**: `article`

| フィールド名 | 型 | 必須 | 説明 |
|---|---|---|---|
| `title` | Short text | ✅ | 記事タイトル |
| `slug` | UID（`title` から自動生成） | ✅ | URLスラッグ（例: `kikanji-system-refresh`） |
| `excerpt` | Long text | ✅ | 一覧ページの抜粋文（2行表示） |
| `content` | Rich Text (Blocks) | ✅ | 本文。h2・h3・p・ul・ol・strong を使用 |
| `publishedDate` | Date | ✅ | 公開日（例: `2026-06-09`） |
| `updatedAt` | - | - | 更新日。Strapiが自動管理するフィールドのため定義不要。APIレスポンスに自動で含まれる |
| `category` | Enumeration | ✅ | カテゴリ（下記の値を設定）。表示名への変換はNext.js側で行うため `categoryLabel` は不要 |
| `eyecatch` | Media（Single image） | ✅ | アイキャッチ画像（16:9推奨） |
| `authorName` | Short text | ✅ | 著者名（例: `渡辺 和久`） |
| `authorRole` | Short text | ✅ | 著者肩書き（例: `代表 / テクノロジーストラテジスト`） |
| `authorAvatar` | Media（Single image） | | 著者アバター画像 |
| `metaDescription` | Long text | | SEO用メタディスクリプション |

**`category` Enumeration の値：**

| value | 表示名 |
|---|---|
| `dx` | DX・業務改善 |
| `dev` | システム・アプリ開発 |
| `ai` | AI・最新技術 |
| `culture` | 社内カルチャー |

> **目次（TOC）について**
> ブログ記事ページの右サイドに表示される目次のこと（参考: https://vietis-jp.vercel.app/blog/001 ）。
> 目次は `content` フィールド内の h2/h3 から Next.js 側で自動生成するため、Strapi側でのフィールド定義は不要。
>
> ただし、Strapi の Rich Text を Next.js でレンダリングする際に **h2/h3 タグへ自動で `id` 属性を付与する処理** が必要。
> `id` がないと目次のリンクが機能せず、スクロール連動ハイライトも動作しない。
>
> この処理は **Next.js側（日本側）** で実装する。Strapi は記事を保存するだけで関与しない。
> ベトナム側からStrapiのAPIのURLが共有されたタイミングで対応する。
>
> 実装例：見出しテキストをスラッグ化して `id` に設定する（Next.js のレンダラー内で処理）
> ```tsx
> // 例: "要件定義のポイント" → id="要件定義のポイント"
> const slugify = (text: string) => text.replace(/\s+/g, '-').toLowerCase();
>
> // @strapi/blocks-react-renderer などで h2/h3 をカスタムレンダリングする際に id を付与
> ```

---

#### ステップ3：API アクセスの許可

管理画面の **Settings > Roles > Public** で `article` の以下を許可する：

- `find`（一覧取得）
- `findOne`（個別取得）

---

#### ステップ4：APIの動作確認

以下のエンドポイントでデータが返ることを確認する：

```
# 一覧
GET https://your-strapi-server.com/api/articles?populate=eyecatch&sort=publishedDate:desc

# 個別（slugで取得）
GET https://your-strapi-server.com/api/articles?filters[slug][$eq]=kikanji-system-refresh&populate=*
```

---

#### ステップ5：完了報告

ステップ1〜4が完了したら、以下を日本側（渡辺）に共有すること：

- Strapi サーバーの URL
- 管理画面のログイン情報

---

> **以降は日本側の作業**
>
> StrapiのURLが共有されたら、Next.jsプロジェクトのルートに `.env.local` を作成して設定する：
> ```env
> NEXT_PUBLIC_STRAPI_URL=https://your-strapi-server.com
> ```
> その後、`/blog/page.tsx`（一覧）と `/blog/[slug]/page.tsx`（詳細）をAPI取得に書き換える。
> （現在 `/blog/[slug]/page.tsx` は記事001のみ静的実装済み。連携時に全面書き換えが必要。）

---

### フェーズ2：実績連携

ブログ連携完了後に着手。コンテンツタイプ定義は別途追記予定。

- `/cases/page.tsx`（一覧）と `/cases/[slug]/page.tsx`（詳細）をAPI取得に書き換え

---

## 残タスク

- [ ] Strapi構築・ブログ連携（ベトナム側）
- [ ] ブログ記事ページ（`001`以外は404。Strapi連携で解決予定）
- [ ] OGP画像（SNSシェア用サムネイル）
- [ ] Google Analytics などの計測タグ
- [ ] `vietis.co.jp` へのドメイン切り替え（Strapi連携・UI修正完了後）
