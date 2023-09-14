import XtxSwiper from './XtxSwiper.vue'

// 类型声明文件
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
  }
}
