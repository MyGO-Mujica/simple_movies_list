/**
 * 电影相关的类型定义
 * 
 * 本文件包含所有与电影数据相关的 TypeScript 接口和类型
 */

/**
 * 电影数据接口
 * 定义从 TMDB API 获取的电影对象结构
 */
export interface Movie {
  /** 电影唯一标识符 */
  id: number;
  
  /** 电影标题 */
  title: string;
  
  /** 电影海报图片路径（相对路径，需要拼接 TMDB 图片服务器地址） */
  poster_path: string;
  
  /** 电影发布日期，格式：YYYY-MM-DD */
  release_date: string;
  
  /** 电影简介/概述 */
  overview: string;
  
  /** 电影评分（0-10 分） */
  vote_average: number;
  
  /** 电影背景图片路径（用于详情页背景等） */
  backdrop_path: string;
}

/**
 * TMDB API 响应接口
 * 定义 API 返回的完整数据结构
 */
export interface ApiResponse {
  /** 电影列表数组 */
  results: Movie[];
  
  /** 当前页码 */
  page: number;
  
  /** 总页数 */
  total_pages: number;
  
  /** 总结果数 */
  total_results: number;
}
