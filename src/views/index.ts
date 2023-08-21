import type { RouteComponent } from 'vue-router';

export const views: Record<
  PageRoute.LastDegreeRouteKey,
  RouteComponent | (() => Promise<{ default: RouteComponent }>)
> = {
  BMapGL_showInfo: () => import('./BMapGL/showInfo/index.vue'),
  403: () => import('./_builtin/403/index.vue'),
  404: () => import('./_builtin/404/index.vue'),
  500: () => import('./_builtin/500/index.vue'),
  'constant-page': () => import('./_builtin/constant-page/index.vue'),
  login: () => import('./_builtin/login/index.vue'),
  'not-found': () => import('./_builtin/not-found/index.vue'),
  about: () => import('./about/index.vue'),
  'analyze-data_bookData': () => import('./analyze-data/bookData/index.vue'),
  'analyze-data_borrowData': () => import('./analyze-data/borrowData/index.vue'),
  'analyze-data_stackData': () => import('./analyze-data/stackData/index.vue'),
  'analyze-data_userData': () => import('./analyze-data/userData/index.vue'),
  'auth-demo_permission': () => import('./auth-demo/permission/index.vue'),
  'auth-demo_super': () => import('./auth-demo/super/index.vue'),
  authority_menu: () => import('./authority/menu/index.vue'),
  authority_role: () => import('./authority/role/index.vue'),
  authority_token: () => import('./authority/token/index.vue'),
  book_books: () => import('./book/books/index.vue'),
  book_borrow: () => import('./book/borrow/index.vue'),
  book_category: () => import('./book/category/index.vue'),
  book_inventory: () => import('./book/inventory/index.vue'),
  book_stack: () => import('./book/stack/index.vue'),
  component_button: () => import('./component/button/index.vue'),
  component_card: () => import('./component/card/index.vue'),
  component_table: () => import('./component/table/index.vue'),
  dashboard_analysis: () => import('./dashboard/analysis/index.vue'),
  dashboard_recommend: () => import('./dashboard/recommend/index.vue'),
  dashboard_workbench: () => import('./dashboard/workbench/index.vue'),
  document_lihaha: () => import('./document/lihaha/index.vue'),
  document_naive: () => import('./document/naive/index.vue'),
  'document_project-link': () => import('./document/project-link/index.vue'),
  document_project: () => import('./document/project/index.vue'),
  document_vite: () => import('./document/vite/index.vue'),
  document_vue: () => import('./document/vue/index.vue'),
  exception_403: () => import('./exception/403/index.vue'),
  exception_404: () => import('./exception/404/index.vue'),
  exception_500: () => import('./exception/500/index.vue'),
  'function_tab-detail': () => import('./function/tab-detail/index.vue'),
  'function_tab-multi-detail': () => import('./function/tab-multi-detail/index.vue'),
  function_tab: () => import('./function/tab/index.vue'),
  'function_upload-image': () => import('./function/upload-image/index.vue'),
  function_websocket: () => import('./function/websocket/index.vue'),
  management_class: () => import('./management/class/index.vue'),
  management_dept: () => import('./management/dept/index.vue'),
  management_dict: () => import('./management/dict/index.vue'),
  management_notice: () => import('./management/notice/index.vue'),
  management_post: () => import('./management/post/index.vue'),
  management_route: () => import('./management/route/index.vue'),
  management_user: () => import('./management/user/index.vue'),
  plugin_charts_antv: () => import('./plugin/charts/antv/index.vue'),
  plugin_charts_echarts: () => import('./plugin/charts/echarts/index.vue'),
  plugin_copy: () => import('./plugin/copy/index.vue'),
  plugin_editor_markdown: () => import('./plugin/editor/markdown/index.vue'),
  plugin_editor_quill: () => import('./plugin/editor/quill/index.vue'),
  plugin_icon: () => import('./plugin/icon/index.vue'),
  plugin_map: () => import('./plugin/map/index.vue'),
  plugin_print: () => import('./plugin/print/index.vue'),
  plugin_swiper: () => import('./plugin/swiper/index.vue'),
  plugin_video: () => import('./plugin/video/index.vue'),
  reader_borrow: () => import('./reader/borrow/index.vue'),
  reader_info: () => import('./reader/info/index.vue'),
  tenant_management: () => import('./tenant/management/index.vue'),
  tenant_packages: () => import('./tenant/packages/index.vue')
};
