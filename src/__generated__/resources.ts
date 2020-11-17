// prettier-ignore
export const LABELS_FOR_RESOURCES = {
	api: ['project_id', 'service', 'method', 'version', 'location'] as const,
	'apigee.googleapis.com/Environment': ['resource_container', 'org', 'env', 'location'] as const,
	app_script_function: ['project_id', 'invocation_type', 'function_name'] as const,
	assistant_action: ['project_id', 'version_id', 'action_id'] as const,
	audited_resource: ['project_id', 'service', 'method'] as const,
	aws_ec2_instance: ['project_id', 'instance_id', 'aws_account', 'region'] as const,
	aws_elb_load_balancer: ['project_id', 'region', 'name', 'aws_account'] as const,
	bigquery_biengine_model: ['project_id', 'location', 'model_id'] as const,
	bigquery_dataset: ['project_id', 'dataset_id'] as const,
	bigquery_dts_config: ['project_id', 'location', 'config_id'] as const,
	bigquery_dts_run: ['project_id', 'location', 'config_id', 'run_id'] as const,
	bigquery_project: ['project_id', 'location'] as const,
	bigquery_resource: ['project_id'] as const,
	bigquery_table: ['project_id', 'dataset_id', 'table_id'] as const,
	billing_account: ['project_id', 'account_id'] as const,
	build: ['project_id', 'build_id', 'build_trigger_id'] as const,
	client_auth_config_brand: ['project_id', 'brand_id'] as const,
	client_auth_config_client: ['project_id', 'client_id'] as const,
	cloud_composer_environment: ['project_id', 'location', 'environment_name'] as const,
	cloud_dataproc_cluster: ['project_id', 'cluster_name', 'cluster_uuid', 'region'] as const,
	cloud_dataproc_job: ['project_id', 'region', 'job_id', 'job_uuid'] as const,
	cloud_debugger_resource: ['project_id', 'app'] as const,
	cloud_function: ['project_id', 'function_name', 'region'] as const,
	cloud_run_revision: ['project_id', 'service_name', 'revision_name', 'location', 'configuration_name'] as const,
	cloud_scheduler_job: ['project_id', 'location', 'job_id'] as const,
	cloud_tasks_queue: ['project_id', 'queue_id', 'target_type'] as const,
	cloudiot_device: ['project_id', 'device_num_id', 'device_registry_id', 'location'] as const,
	cloudiot_device_registry: ['project_id', 'device_registry_id', 'location'] as const,
	cloudkms_cryptokey: ['project_id', 'location', 'key_ring_id', 'crypto_key_id'] as const,
	cloudkms_cryptokeyversion: ['project_id', 'location', 'key_ring_id', 'crypto_key_id', 'crypto_key_version_id'] as const,
	cloudkms_keyring: ['project_id', 'location', 'key_ring_id'] as const,
	cloudml_model_version: ['project_id', 'model_id', 'version_id', 'region'] as const,
	cloudsql_database: ['project_id', 'database_id', 'region'] as const,
	'cloudvolumesgcp-api.netapp.com/NetAppCloudVolumeSO': ['resource_container', 'location', 'volume_id'] as const,
	consumed_api: ['project_id', 'service', 'method', 'version', 'credential_id', 'location'] as const,
	container: ['project_id', 'cluster_name', 'namespace_id', 'instance_id', 'pod_id', 'container_name', 'zone'] as const,
	csr_repository: ['project_id', 'name'] as const,
	dataflow_step: ['project_id', 'job_id', 'step_id', 'job_name', 'region'] as const,
	dataproc_cluster: ['project_id', 'cluster_id', 'zone'] as const,
	datastore_database: ['project_id', 'database_id'] as const,
	datastore_index: ['project_id', 'database_id', 'index_id'] as const,
	deployment: ['project_id', 'name'] as const,
	deployment_manager_manifest: ['project_id', 'manifest_name', 'deployment_name'] as const,
	deployment_manager_operation: ['project_id', 'operation_name'] as const,
	deployment_manager_resource: ['project_id', 'resource_name', 'deployment_name'] as const,
	deployment_manager_type: ['project_id', 'name'] as const,
	dns_managed_zone: ['project_id', 'zone_name', 'location'] as const,
	dns_policy: ['project_id', 'policy_name', 'location'] as const,
	dns_query: ['project_id', 'target_name', 'location', 'target_type', 'source_type'] as const,
	'fleetengine.googleapis.com/Fleet': ['resource_container', 'location'] as const,
	folder: ['folder_id'] as const,
	gae_app: ['project_id', 'module_id', 'version_id', 'zone'] as const,
	gce_autoscaler: ['project_id', 'autoscaler_id', 'location'] as const,
	gce_backend_bucket: ['project_id', 'backend_bucket_id'] as const,
	gce_backend_service: ['project_id', 'backend_service_id', 'location'] as const,
	gce_client_ssl_policy: ['project_id', 'client_ssl_policy_id'] as const,
	gce_commitment: ['project_id', 'commitment_id', 'location'] as const,
	gce_disk: ['project_id', 'disk_id', 'zone'] as const,
	gce_firewall_rule: ['project_id', 'firewall_rule_id'] as const,
	gce_forwarding_rule: ['project_id', 'forwarding_rule_id', 'region'] as const,
	gce_health_check: ['project_id', 'health_check_id'] as const,
	gce_image: ['project_id', 'image_id'] as const,
	gce_instance: ['project_id', 'instance_id', 'zone'] as const,
	gce_instance_group: ['project_id', 'instance_group_id', 'instance_group_name', 'location'] as const,
	gce_instance_group_manager: ['project_id', 'instance_group_manager_id', 'instance_group_manager_name', 'location'] as const,
	gce_instance_template: ['project_id', 'instance_template_id', 'instance_template_name'] as const,
	gce_license: ['project_id', 'license_id'] as const,
	gce_network: ['project_id', 'network_id'] as const,
	gce_network_endpoint_group: ['project_id', 'zone', 'network_endpoint_group_id'] as const,
	gce_node_group: ['project_id', 'node_group_id', 'zone'] as const,
	gce_node_template: ['project_id', 'node_template_id', 'region'] as const,
	gce_operation: ['project_id', 'operation_name', 'location'] as const,
	gce_packet_mirroring: ['project_id', 'packet_mirroring_id', 'region'] as const,
	gce_project: ['project_id'] as const,
	gce_reserved_address: ['project_id', 'reserved_address_id', 'location'] as const,
	gce_resource_policy: ['project_id', 'resource_policy_id', 'region'] as const,
	gce_route: ['project_id', 'route_id'] as const,
	gce_router: ['project_id', 'router_id', 'region'] as const,
	gce_snapshot: ['project_id', 'snapshot_id'] as const,
	gce_ssl_certificate: ['project_id', 'ssl_certificate_id', 'ssl_certificate_name'] as const,
	gce_subnetwork: ['project_id', 'subnetwork_id', 'subnetwork_name', 'location'] as const,
	gce_target_http_instance: ['project_id', 'target_http_instance_id', 'zone'] as const,
	gce_target_http_proxy: ['project_id', 'target_http_proxy_id'] as const,
	gce_target_https_proxy: ['project_id', 'target_https_proxy_id'] as const,
	gce_target_pool: ['project_id', 'target_pool_id', 'zone'] as const,
	gce_target_ssl_proxy: ['project_id', 'target_ssl_proxy_id'] as const,
	gce_url_map: ['project_id', 'url_map_id'] as const,
	gcs_bucket: ['project_id', 'bucket_name', 'location'] as const,
	generic_node: ['project_id', 'location', 'namespace', 'node_id'] as const,
	generic_task: ['project_id', 'location', 'namespace', 'job', 'task_id'] as const,
	genomics_dataset: ['project_id', 'dataset_id'] as const,
	genomics_operation: ['project_id', 'operation_id'] as const,
	gke_cluster: ['project_id', 'cluster_name', 'location'] as const,
	gke_nodepool: ['project_id', 'nodepool_name', 'location', 'cluster_name'] as const,
	global: ['project_id'] as const,
	healthcare_annotation_store: ['project_id', 'location', 'dataset_id', 'annotation_store_id'] as const,
	healthcare_consent_store: ['project_id', 'location', 'dataset_id', 'consent_store_id'] as const,
	healthcare_dataset: ['project_id', 'location', 'dataset_id'] as const,
	healthcare_dicom_store: ['project_id', 'location', 'dataset_id', 'dicom_store_id'] as const,
	healthcare_fhir_store: ['project_id', 'location', 'dataset_id', 'fhir_store_id'] as const,
	healthcare_hl7v2_store: ['project_id', 'location', 'dataset_id', 'hl7v2_store_id'] as const,
	http_load_balancer: ['project_id', 'forwarding_rule_name', 'url_map_name', 'target_proxy_name', 'backend_service_name', 'zone'] as const,
	iam_role: ['project_id', 'role_name'] as const,
	identitytoolkit_project: ['project_id'] as const,
	identitytoolkit_tenant: ['project_id', 'tenant_name'] as const,
	k8s_cluster: ['project_id', 'location', 'cluster_name'] as const,
	k8s_container: ['project_id', 'location', 'cluster_name', 'namespace_name', 'pod_name', 'container_name'] as const,
	k8s_node: ['project_id', 'location', 'cluster_name', 'node_name'] as const,
	k8s_pod: ['project_id', 'location', 'cluster_name', 'namespace_name', 'pod_name'] as const,
	logging_exclusion: ['project_id', 'name'] as const,
	logging_log: ['project_id', 'name'] as const,
	logging_sink: ['project_id', 'name', 'destination'] as const,
	managed_service: ['project_id', 'service_name', 'producer_project_id'] as const,
	metric: ['project_id', 'name'] as const,
	ml_job: ['project_id', 'job_id', 'task_name'] as const,
	nat_gateway: ['project_id', 'region', 'router_id', 'gateway_name'] as const,
	network_security_policy: ['project_id', 'policy_name'] as const,
	organization: ['organization_id'] as const,
	project: ['project_id'] as const,
	pubsub_snapshot: ['project_id', 'snapshot_id'] as const,
	pubsub_subscription: ['project_id', 'subscription_id'] as const,
	pubsub_topic: ['project_id', 'topic_id'] as const,
	recommender: ['project_id', 'recommender_id', 'location'] as const,
	recommender_insight_type: ['project_id', 'insight_type_id', 'location'] as const,
	redis_instance: ['project_id', 'region', 'instance_id', 'node_id'] as const,
	reported_errors: ['project_id'] as const,
	service_account: ['project_id', 'email_id', 'unique_id'] as const,
	service_config: ['project_id', 'service_name', 'service_config_id'] as const,
	service_rollout: ['project_id', 'service_name', 'rollout_id'] as const,
	servicedirectory_namespace: ['project_id', 'location', 'namespace_name'] as const,
	serviceusage_service: ['project_id', 'service_name'] as const,
	serviceuser_service: ['project_id', 'service_name'] as const,
	spanner_instance: ['project_id', 'instance_id', 'location', 'instance_config'] as const,
	testservice_matrix: ['project_id', 'matrix_id'] as const,
	threat_detector: ['project_id', 'detector_name'] as const,
	uptime_url: ['project_id', 'host'] as const,
	vpc_access_connector: ['project_id', 'location', 'connector_name'] as const,
	vpn_gateway: ['project_id', 'gateway_id', 'region'] as const,
	vpn_tunnel: ['project_id', 'tunnel_id', 'tunnel_name', 'location'] as const,
} as const;