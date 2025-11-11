# 🎬 电影搜索应用 (Movie Search App)

一个基于 React + TypeScript 的电影搜索和收藏应用，使用 TMDB API 获取实时电影数据。

## ✨ 功能特性

- 🎥 **热门电影展示** - 自动加载并展示当前热门电影
- 🔍 **电影搜索** - 实时搜索电影，支持中文搜索
- ❤️ **收藏管理** - 添加/删除喜欢的电影到收藏夹
- 💾 **本地存储** - 收藏数据自动保存到浏览器本地存储
- 📱 **响应式设计** - 完美适配各种屏幕尺寸
- ⚡ **快速加载** - 使用 Vite 提供极快的开发和构建速度
- 🔒 **类型安全** - 完整的 TypeScript 支持

## 🛠️ 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| React | 18+ | UI 框架 |
| TypeScript | 5+ | 类型安全 |
| Vite | 7+ | 构建工具 |
| React Router | 6+ | 路由管理 |
| Context API | - | 全局状态管理 |
| TMDB API | v3 | 电影数据源 |

## 📁 项目结构

```
src/
├── components/           # React 组件
│   ├── MovieCard.tsx     # 电影卡片组件
│   └── NavBar.tsx        # 导航栏组件
├── contexts/             # 全局状态管理
│   └── MovieContext.tsx  # 电影数据 Context (带类型定义)
├── pages/                # 页面组件
│   ├── Home.tsx          # 首页 - 热门电影和搜索
│   └── Favorites.tsx     # 收藏页面
├── services/             # API 服务
│   └── api.ts            # TMDB API 调用 (含类型定义)
├── css/                  # 样式文件
│   ├── App.css
│   ├── Home.css
│   ├── Favorites.css
│   ├── MovieCard.css
│   ├── Navbar.css
│   └── index.css
├── App.tsx               # 主应用组件
└── main.tsx              # 应用入口
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

### TypeScript 类型检查

```bash
npx tsc --noEmit
```

## 🎯 核心功能说明

### 1. 热门电影展示 (Home.tsx)
- 组件加载时自动获取热门电影列表
- 显示电影海报、标题和发布年份
- 支持实时搜索功能

### 2. 电影搜索
```typescript
// 搜索功能
- 输入电影名称
- 实时调用 TMDB API 搜索
- 支持中文搜索（通过 encodeURIComponent 编码）
- 类型安全的搜索结果处理
```

### 3. 收藏管理 (MovieContext.tsx)
全局状态管理收藏列表（带完整类型定义）：
- `favorites: Movie[]` - 收藏的电影数组
- `addToFavorites(movie: Movie): void` - 添加到收藏
- `removeFromFavorites(movieId: number): void` - 从收藏删除
- `isFavorite(movieId: number): boolean` - 检查是否已收藏

### 4. 本地存储
- 收藏数据自动保存到 `localStorage`
- 使用惰性初始化避免数据丢失
- 页面刷新后数据不丢失

## 📝 主要组件 API

### MovieCard 组件
显示单个电影卡片，支持收藏/取消收藏功能。

```typescript
interface MovieCardProps {
  movie: Movie;
}

<MovieCard movie={movieObject} key={movie.id} />
```

### MovieProvider 组件
全局状态提供者，包裹整个应用。

```typescript
interface MovieProviderProps {
  children: ReactNode;
}

<MovieProvider>
  <App />
</MovieProvider>
```

### useMovieContext Hook
在任何组件中访问全局电影数据（带类型安全）。

```typescript
const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useMovieContext()
```

## � TypeScript 类型定义

### Movie 类型
```typescript
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
}
```

### MovieContext 类型
```typescript
interface MovieContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}
```

## �🔑 API 密钥设置

项目使用 TMDB API，密钥已配置在 `src/services/api.ts` 中：

```typescript
const API_KEY = "a488d29f9599876635aed088452bc017"
```


## 🎨 样式特性

- 响应式网格布局
- 悬停效果和过渡动画
- 活跃状态样式反馈
- 加载和错误状态提示

## 📦 依赖包

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/react-router-dom": "^5.3.3",
    "@vitejs/plugin-react": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^7.0.0",
    "eslint": "^8.0.0"
  }
}
```

## 🔄 TypeScript 迁移历程

本项目已从 JavaScript 完全迁移至 TypeScript，主要改进：

### ✅ 完成的迁移
- ✨ 所有组件添加 Props 类型定义
- ✨ API 响应添加完整接口定义
- ✨ Context 添加严格类型检查
- ✨ 事件处理函数添加类型注解
- ✨ 状态管理添加泛型类型

### 🎯 类型安全的优势
1. **编译时错误检测** - 在开发阶段就能发现潜在问题
2. **智能代码补全** - IDE 提供更好的自动完成
3. **重构更安全** - 修改代码时自动检查影响范围
4. **文档即代码** - 类型定义即是最好的文档
5. **团队协作** - 统一的类型规范提高代码质量



## 🔄 数据流向

```
用户输入 → Home.tsx
    ↓
调用 searchMovies(query: string): Promise<Movie[]>
    ↓
setMovie(results) 更新状态
    ↓
渲染 MovieCard 组件（带类型检查）
    ↓
点击收藏 → useMovieContext() → addToFavorites(movie: Movie)
    ↓
Context 更新 → localStorage 保存
    ↓
所有订阅组件自动重新渲染
```

## 🎓 学习要点

本项目适合学习以下知识点：

1. **React Hooks** - useState, useEffect, useContext 的实际应用
2. **TypeScript** - 接口定义、泛型、类型推断
3. **Context API** - 全局状态管理最佳实践
4. **React Router** - 单页应用路由配置
5. **localStorage** - 浏览器本地存储的使用
6. **异步处理** - async/await 处理 API 请求
7. **组件设计** - Props、状态提升、组件复用

---

**最后更新**: 2025 年 11 月 11 日 | ✨ 已完成 TypeScript 迁移

