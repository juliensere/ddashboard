/**
 * Created by JulienSere on 29/12/2016_
 */
export interface MetricsResponse {
  mem: number;
  mem_free: number;
  processors: number;
  instance_uptime: number;
  uptime: number;
  systemload_average: number;
  heap_committed: number;
  heap_init: number;
  heap_used: number;
  heap: number;
  nonheap_committed: number;
  nonheap_init: number;
  nonheap_used: number;
  nonheap: number;
  threads_peak: number;
  threads_daemon: number;
  threads_totalStarted: number;
  threads: number;
  classes: number;
  classes_loaded: number;
  classes_unloaded: number;
  gc_copy_count: number;
  gc_copy_time: number;
  gc_marksweepcompact_count: number;
  gc_marksweepcompact_time: number;
  httpsessions_max: number;
  httpsessions_active: number;
  datasource_primary_active: number;
  datasource_primary_usage: number;
  gauge_response_supervision_metrics: number;
  gauge_response_supervision_info: number;
  gauge_response_supervision_root: number;
  gauge_response_supervision_health: number;
  gauge_response_star-star: number;
  gauge_response_supervision_env: number;
  gauge_response_star-star_favicon_ico: number;
  gauge_response_supervision: number;
  counter_status_200_supervision_metrics: number;
  counter_status_200_star-star_favicon_ico: number;
  counter_status_200_supervision_health: number;
  counter_status_200_supervision_root: number;
  counter_status_200_supervision_env: number;
  counter_status_404_star-star: number;
  counter_status_200_supervision: number;
  counter_status_200_supervision_info: number;
}
