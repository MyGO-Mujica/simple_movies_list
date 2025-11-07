# 🎬 电影搜索应用 (Movie Search App)

一个基于 React 的电影搜索和收藏应用，使用 TMDB API 获取实时电影数据。

## ✨ 功能特性

- 🎥 **热门电影展示** - 自动加载并展示当前热门电影
- 🔍 **电影搜索** - 实时搜索电影，支持中文搜索
- ❤️ **收藏管理** - 添加/删除喜欢的电影到收藏夹
- 💾 **本地存储** - 收藏数据自动保存到浏览器本地存储
- ⚡ **快速加载** - 使用 Vite 提供极快的开发和构建速度

## 🛠️ 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| React | 18+ | UI 框架 |
| Vite | - | 构建工具 |
| React Router | - | 路由管理（已安装） |
| Context API | - | 全局状态管理 |
| TMDB API | - | 电影数据源 |

## 📁 项目结构

```
src/
├── components/           # React 组件
│   ├── MovieCard.jsx     # 电影卡片组件
│   └── NavBar.jsx        # 导航栏组件
├── contexts/             # 全局状态管理
│   └── MovieContext.jsx  # 电影数据 Context
├── pages/                # 页面组件
│   ├── Home.jsx          # 首页 - 热门电影和搜索
│   └── Favorites.jsx     # 收藏页面
├── services/             # API 服务
│   └── api.js            # TMDB API 调用
├── css/                  # 样式文件
│   ├── App.css
│   ├── Home.css
│   ├── Favorites.css
│   ├── MovieCard.css
│   ├── Navbar.css
│   └── index.css
├── App.jsx               # 主应用组件
└── main.jsx              # 应用入口
```

## 🚀 快速开始

### 环境要求
- Node.js 16+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 查看应用。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 🎯 核心功能说明

### 1. 热门电影展示 (Home.jsx)
- 组件加载时自动获取热门电影列表
- 显示电影海报、标题和发布年份
- 支持实时搜索功能

### 2. 电影搜索
```javascript
// 搜索功能
- 输入电影名称
- 实时调用 TMDB API 搜索
- 支持中文搜索（通过 encodeURIComponent 编码）
```

### 3. 收藏管理 (MovieContext.jsx)
全局状态管理收藏列表：
- `favorites` - 收藏的电影数组
- `addToFavorites(movie)` - 添加到收藏
- `removeFromFavorites(movieId)` - 从收藏删除
- `isFavorite(movieId)` - 检查是否已收藏

### 4. 本地存储
- 收藏数据自动保存到 `localStorage`
- 页面刷新后数据不丢失

## 📝 主要组件 API

### MovieCard 组件
显示单个电影卡片，支持收藏/取消收藏功能。

```javascript
<MovieCard movie={movieObject} key={movie.id} />
```

### MovieProvider 组件
全局状态提供者，包裹整个应用。

```javascript
<MovieProvider>
  <App />
</MovieProvider>
```

### useMovieContext Hook
在任何组件中访问全局电影数据。

```javascript
const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useMovieContext()
```

## 🔑 API 密钥设置

项目使用 TMDB API，密钥已配置在 `src/services/api.js` 中：

```javascript
const API_KEY = "a488d29f9599876635aed088452bc017"
```

> ⚠️ 注意：生产环境中应将 API 密钥移至环保变量

## 🎨 样式特性

- 响应式网格布局
- 悬停效果和过渡动画
- 活跃状态样式反馈
- 加载和错误状态提示

