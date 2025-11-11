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

## 📘 JavaScript 到 TypeScript 迁移详解

### 🔄 一、环境配置

#### 1. 安装 TypeScript 依赖
```bash
npm install -D typescript @types/react @types/react-dom @types/react-router-dom
```

**安装的包：**
- `typescript` - TypeScript 编译器
- `@types/react` - React 的类型定义
- `@types/react-dom` - ReactDOM 的类型定义
- `@types/react-router-dom` - React Router 的类型定义

#### 2. 创建 TypeScript 配置文件

**tsconfig.json**（主配置）：
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### 📝 二、文件逐个迁移

#### 1. api.js → api.ts

**迁移前（JavaScript）：**
```javascript
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results  // ❌ 不知道返回什么类型
}
```

**迁移后（TypeScript）：**
```typescript
// ✅ 定义电影数据类型
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
}

// ✅ 定义 API 响应类型
interface ApiResponse {
  results: Movie[];
  page: number;
  total_pages: number;
}

// ✅ 明确返回类型
export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data: ApiResponse = await response.json();
  return data.results;
};
```

**改进点：**
- ✨ 定义了 `Movie` 接口，描述电影对象结构
- ✨ 定义了 `ApiResponse` 接口，描述 API 返回格式
- ✨ 函数返回类型从 `any` 变为 `Promise<Movie[]>`
- ✨ IDE 现在可以智能提示电影对象的所有属性

#### 2. MovieContext.jsx → MovieContext.tsx

**迁移前（JavaScript）：**
```javascript
const MovieContext = createContext()  // ❌ 类型是 any

export const MovieProvider = ({children}) => {
  const [favorites, setFavorites] = useState([])  // ❌ 数组类型是 any[]
  
  const addToFavorites = (movie) => {  // ❌ movie 参数类型未知
    setFavorites(prev => [...prev, movie])
  }
}
```

**迁移后（TypeScript）：**
```typescript
// ✅ 定义 Context 类型
interface MovieContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}

// ✅ Context 有明确类型
const MovieContext = createContext<MovieContextType | undefined>(undefined);

// ✅ Hook 有类型保护
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};

// ✅ Props 有类型定义
interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  
  const addToFavorites = (movie: Movie): void => {
    setFavorites((prev) => [...prev, movie]);
  };
};
```

**改进点：**
- ✨ Context 从 `any` 变为 `MovieContextType`
- ✨ 添加了运行时类型检查
- ✨ 所有函数参数都有明确类型
- ✨ 状态使用泛型 `useState<Movie[]>`

#### 3. MovieCard.jsx → MovieCard.tsx

**迁移前（JavaScript）：**
```javascript
function MovieCard({movie}) {  // ❌ movie 类型未知
  function onFavoriteClick(e) {  // ❌ e 类型是 any
    e.preventDefault()
    addToFavorites(movie)
  }
}
```

**迁移后（TypeScript）：**
```typescript
// ✅ 定义 Props 类型
interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  // ✅ 事件类型明确
  function onFavoriteClick(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    addToFavorites(movie);
  }
}
```

**改进点：**
- ✨ Props 有接口定义
- ✨ 事件处理函数有精确类型
- ✨ IDE 输入 `movie.` 时自动提示所有属性

#### 4. Home.jsx → Home.tsx

**迁移前（JavaScript）：**
```javascript
function Home() {
  const [movies, setMovie] = useState([])  // ❌ 数组类型是 any[]
  const [error, seterror] = useState(null)  // ❌ null | string 不明确
  
  const handleSearch = async (e) => {  // ❌ e 类型是 any
    // ...
  }
}
```

**迁移后（TypeScript）：**
```typescript
function Home() {
  const [movies, setMovie] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const searchResults = await searchMovies(searchQuery);
    setMovie(searchResults);
  };
}
```

**改进点：**
- ✨ 所有状态都有明确的泛型类型
- ✨ 表单事件类型精确到 `FormEvent<HTMLFormElement>`
- ✨ 异步函数返回 `Promise<void>`

### 🎯 三、迁移带来的好处

#### 1. 编译时错误检测

**JavaScript（运行时才发现错误）：**
```javascript
const movie = { id: 1, title: "复仇者联盟" }
console.log(movie.titl)  // ❌ 运行时：undefined（属性名拼错）
```

**TypeScript（写代码时就发现错误）：**
```typescript
const movie: Movie = { id: 1, title: "复仇者联盟" }
console.log(movie.titl)  // ❌ 编译错误：Property 'titl' does not exist
```

#### 2. 智能代码补全

**JavaScript：**
```javascript
movie.  // ❌ IDE 不知道有哪些属性，无法提示
```

**TypeScript：**
```typescript
movie.  // ✅ 自动提示：id, title, poster_path, release_date...
```

#### 3. 重构更安全

修改函数签名时，TypeScript 会自动标记所有需要修改的调用位置。

#### 4. 防止空值错误

**JavaScript：**
```javascript
const storedFavs = localStorage.getItem("favorites")
const favorites = JSON.parse(storedFavs)  // ❌ 可能崩溃
```

**TypeScript：**
```typescript
const storedFavs: string | null = localStorage.getItem("favorites")
const favorites = JSON.parse(storedFavs)  // ❌ 编译错误

// ✅ 必须处理 null 情况
const favorites = storedFavs ? JSON.parse(storedFavs) : []
```

#### 5. 文档即代码

类型定义本身就是最好的文档，鼠标悬停即可查看完整的类型信息。

#### 6. 发现潜在 Bug

**迁移过程中发现的实际 Bug：**

```javascript
// ❌ Bug 1：错误的条件判断
useEffect(() => {
  const storedFavs = localStorage.getItem("favorites")
  if(setFavorites) setFavorites(JSON.parse(storedFavs))
  //  ^^^^^^^^^^^ setFavorites 是函数，永远为 true！
}, [])

// ✅ 修复
if(storedFavs) setFavorites(JSON.parse(storedFavs))
```

```javascript
// ❌ Bug 2：条件判断逻辑错误
if (favorites) {  // 数组永远为 truthy
  return <div>有收藏</div>
}

// ✅ 修复
if (favorites.length > 0) {
  return <div>有收藏</div>
}
```

### 📊 迁移前后对比

| 维度 | JavaScript | TypeScript |
|------|-----------|-----------|
| **类型安全** | ❌ 运行时才发现错误 | ✅ 编译时就发现错误 |
| **代码提示** | ⚠️ 有限的提示 | ✅ 完整的智能提示 |
| **重构支持** | ❌ 手动检查所有引用 | ✅ 自动检测影响范围 |
| **文档** | ⚠️ 需要额外维护 | ✅ 类型即文档 |
| **团队协作** | ⚠️ 依赖约定 | ✅ 强制类型规范 |
| **调试时间** | 😰 更多 | 😊 更少 |

### 🏆 总结

通过迁移到 TypeScript，我们：

✅ **添加了 8 个类型定义文件**（.tsx 文件）  
✅ **定义了 3 个核心接口**（Movie, MovieContextType, Props）  
✅ **修复了 2 个潜在 Bug**（条件判断错误）  
✅ **提升了代码可维护性**（类型安全 + 智能提示）  
✅ **提高了开发效率**（更少的调试时间）  
✅ **增强了团队协作**（统一的类型规范）  

**收益远大于成本！** 特别是在项目规模扩大、团队协作、长期维护的场景下，TypeScript 的优势会越来越明显。

---

**最后更新**: 2025 年 11 月 11 日 | ✨ 已完成 TypeScript 迁移

