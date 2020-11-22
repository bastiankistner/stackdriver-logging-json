// prettier-ignore
export type ResourceMap = {
	'aiplatform.googleapis.com/Endpoint': { resource_container: string; location: string; endpoint_id: string };
	api: { project_id: string; service: string; method: string; version: string; location: string };
	'apigee.googleapis.com/Environment': { resource_container: string; org: string; env: string; location: string };
	app_script_function: { project_id: string; invocation_type: string; function_name: string };
	assistant_action: { project_id: string; version_id: string; action_id: string };
	audited_resource: { project_id: string; service: string; method: string };
	aws_alb_load_balancer: { project_id: string; name: string; region: string; aws_account: string };
	aws_cloudfront_distribution: { project_id: string; distribution_id: string; region: string; aws_account: string };
	aws_dynamodb_table: { project_id: string; table: string; region: string; aws_account: string };
	aws_ebs_volume: { project_id: string; volume_id: string; region: string; aws_account: string };
	aws_ec2_instance: { project_id: string; instance_id: string; aws_account: string; region: string };
	aws_elasticache_cluster: { project_id: string; cluster_id: string; region: string; aws_account: string };
	aws_elb_load_balancer: { project_id: string; region: string; name: string; aws_account: string };
	aws_emr_cluster: { project_id: string; cluster_id: string; region: string; aws_account: string };
	aws_kinesis_stream: { project_id: string; stream_name: string; region: string; aws_account: string };
	aws_lambda_function: { project_id: string; function_name: string; region: string; aws_account: string };
	aws_rds_database: { project_id: string; name: string; region: string; aws_account: string };
	aws_redshift_cluster: { project_id: string; cluster_identifier: string; region: string; aws_account: string };
	aws_s3_bucket: { project_id: string; bucket_name: string; region: string; aws_account: string };
	aws_ses: { project_id: string; region: string; aws_account: string };
	aws_sns_topic: { project_id: string; topic: string; region: string; aws_account: string };
	aws_sqs_queue: { project_id: string; queue: string; region: string; aws_account: string };
	bigquery_biengine_model: { project_id: string; location: string; model_id: string };
	bigquery_dataset: { project_id: string; dataset_id: string };
	bigquery_dts_config: { project_id: string; location: string; config_id: string };
	bigquery_dts_run: { project_id: string; location: string; config_id: string; run_id: string };
	bigquery_project: { project_id: string; location: string };
	bigquery_resource: { project_id: string };
	bigquery_table: { project_id: string; dataset_id: string; table_id: string };
	billing_account: { project_id: string; account_id: string };
	build: { project_id: string; build_id: string; build_trigger_id: string };
	client_auth_config_brand: { project_id: string; brand_id: string };
	client_auth_config_client: { project_id: string; client_id: string };
	cloud_composer_environment: { project_id: string; location: string; environment_name: string };
	cloud_dataproc_cluster: { project_id: string; cluster_name: string; cluster_uuid: string; region: string };
	cloud_dataproc_job: { project_id: string; region: string; job_id: string; job_uuid: string };
	cloud_debugger_resource: { project_id: string; app: string };
	cloud_function: { project_id: string; function_name: string; region: string };
	cloud_run_revision: { project_id: string; service_name: string; revision_name: string; location: string; configuration_name: string };
	cloud_scheduler_job: { project_id: string; location: string; job_id: string };
	cloud_tasks_queue: { project_id: string; queue_id: string; target_type: string };
	cloudiot_device: { project_id: string; device_num_id: string; device_registry_id: string; location: string };
	cloudiot_device_registry: { project_id: string; device_registry_id: string; location: string };
	cloudkms_cryptokey: { project_id: string; location: string; key_ring_id: string; crypto_key_id: string };
	cloudkms_cryptokeyversion: {
		project_id: string;
		location: string;
		key_ring_id: string;
		crypto_key_id: string;
		crypto_key_version_id: string;
	};
	cloudkms_keyring: { project_id: string; location: string; key_ring_id: string };
	cloudml_model_version: { project_id: string; model_id: string; version_id: string; region: string };
	cloudsql_database: { project_id: string; database_id: string; region: string };
	'cloudvolumesgcp-api.netapp.com/NetAppCloudVolumeSO': { resource_container: string; location: string; volume_id: string };
	consumed_api: { project_id: string; service: string; method: string; version: string; credential_id: string; location: string };
	container: {
		project_id: string;
		cluster_name: string;
		namespace_id: string;
		instance_id: string;
		pod_id: string;
		container_name: string;
		zone: string;
	};
	csr_repository: { project_id: string; name: string };
	dataflow_step: { project_id: string; job_id: string; step_id: string; job_name: string; region: string };
	dataproc_cluster: { project_id: string; cluster_id: string; zone: string };
	datastore_database: { project_id: string; database_id: string };
	datastore_index: { project_id: string; database_id: string; index_id: string };
	deployment: { project_id: string; name: string };
	deployment_manager_manifest: { project_id: string; manifest_name: string; deployment_name: string };
	deployment_manager_operation: { project_id: string; operation_name: string };
	deployment_manager_resource: { project_id: string; resource_name: string; deployment_name: string };
	deployment_manager_type: { project_id: string; name: string };
	dns_managed_zone: { project_id: string; zone_name: string; location: string };
	dns_policy: { project_id: string; policy_name: string; location: string };
	dns_query: { project_id: string; target_name: string; location: string; target_type: string; source_type: string };
	'fleetengine.googleapis.com/Fleet': { resource_container: string; location: string };
	folder: { folder_id: string };
	gae_app: { project_id: string; module_id: string; version_id: string; zone: string };
	gce_autoscaler: { project_id: string; autoscaler_id: string; location: string };
	gce_backend_bucket: { project_id: string; backend_bucket_id: string };
	gce_backend_service: { project_id: string; backend_service_id: string; location: string };
	gce_client_ssl_policy: { project_id: string; client_ssl_policy_id: string };
	gce_commitment: { project_id: string; commitment_id: string; location: string };
	gce_disk: { project_id: string; disk_id: string; zone: string };
	gce_firewall_rule: { project_id: string; firewall_rule_id: string };
	gce_forwarding_rule: { project_id: string; forwarding_rule_id: string; region: string };
	gce_health_check: { project_id: string; health_check_id: string };
	gce_image: { project_id: string; image_id: string };
	gce_instance: { project_id: string; instance_id: string; zone: string };
	gce_instance_group: { project_id: string; instance_group_id: string; instance_group_name: string; location: string };
	gce_instance_group_manager: {
		project_id: string;
		instance_group_manager_id: string;
		instance_group_manager_name: string;
		location: string;
	};
	gce_instance_template: { project_id: string; instance_template_id: string; instance_template_name: string };
	gce_license: { project_id: string; license_id: string };
	gce_network: { project_id: string; network_id: string };
	gce_network_endpoint_group: { project_id: string; zone: string; network_endpoint_group_id: string };
	gce_node_group: { project_id: string; node_group_id: string; zone: string };
	gce_node_template: { project_id: string; node_template_id: string; region: string };
	gce_operation: { project_id: string; operation_name: string; location: string };
	gce_packet_mirroring: { project_id: string; packet_mirroring_id: string; region: string };
	gce_project: { project_id: string };
	gce_reserved_address: { project_id: string; reserved_address_id: string; location: string };
	gce_resource_policy: { project_id: string; resource_policy_id: string; region: string };
	gce_route: { project_id: string; route_id: string };
	gce_router: { project_id: string; router_id: string; region: string };
	gce_snapshot: { project_id: string; snapshot_id: string };
	gce_ssl_certificate: { project_id: string; ssl_certificate_id: string; ssl_certificate_name: string };
	gce_subnetwork: { project_id: string; subnetwork_id: string; subnetwork_name: string; location: string };
	gce_target_http_instance: { project_id: string; target_http_instance_id: string; zone: string };
	gce_target_http_proxy: { project_id: string; target_http_proxy_id: string };
	gce_target_https_proxy: { project_id: string; target_https_proxy_id: string };
	gce_target_pool: { project_id: string; target_pool_id: string; zone: string };
	gce_target_ssl_proxy: { project_id: string; target_ssl_proxy_id: string };
	gce_url_map: { project_id: string; url_map_id: string };
	gcs_bucket: { project_id: string; bucket_name: string; location: string };
	generic_node: { project_id: string; location: string; namespace: string; node_id: string };
	generic_task: { project_id: string; location: string; namespace: string; job: string; task_id: string };
	genomics_dataset: { project_id: string; dataset_id: string };
	genomics_operation: { project_id: string; operation_id: string };
	gke_cluster: { project_id: string; cluster_name: string; location: string };
	gke_nodepool: { project_id: string; nodepool_name: string; location: string; cluster_name: string };
	global: { project_id: string };
	healthcare_annotation_store: { project_id: string; location: string; dataset_id: string; annotation_store_id: string };
	healthcare_consent_store: { project_id: string; location: string; dataset_id: string; consent_store_id: string };
	healthcare_dataset: { project_id: string; location: string; dataset_id: string };
	healthcare_dicom_store: { project_id: string; location: string; dataset_id: string; dicom_store_id: string };
	healthcare_fhir_store: { project_id: string; location: string; dataset_id: string; fhir_store_id: string };
	healthcare_hl7v2_store: { project_id: string; location: string; dataset_id: string; hl7v2_store_id: string };
	http_load_balancer: {
		project_id: string;
		forwarding_rule_name: string;
		url_map_name: string;
		target_proxy_name: string;
		backend_service_name: string;
		zone: string;
	};
	iam_role: { project_id: string; role_name: string };
	identitytoolkit_project: { project_id: string };
	identitytoolkit_tenant: { project_id: string; tenant_name: string };
	k8s_cluster: { project_id: string; location: string; cluster_name: string };
	k8s_container: {
		project_id: string;
		location: string;
		cluster_name: string;
		namespace_name: string;
		pod_name: string;
		container_name: string;
	};
	k8s_control_plane_component: {
		project_id: string;
		location: string;
		cluster_name: string;
		component_name: string;
		component_location: string;
	};
	k8s_node: { project_id: string; location: string; cluster_name: string; node_name: string };
	k8s_pod: { project_id: string; location: string; cluster_name: string; namespace_name: string; pod_name: string };
	logging_exclusion: { project_id: string; name: string };
	logging_log: { project_id: string; name: string };
	logging_sink: { project_id: string; name: string; destination: string };
	managed_service: { project_id: string; service_name: string; producer_project_id: string };
	metric: { project_id: string; name: string };
	ml_job: { project_id: string; job_id: string; task_name: string };
	nat_gateway: { project_id: string; region: string; router_id: string; gateway_name: string };
	network_security_policy: { project_id: string; policy_name: string };
	organization: { organization_id: string };
	project: { project_id: string };
	pubsub_snapshot: { project_id: string; snapshot_id: string };
	pubsub_subscription: { project_id: string; subscription_id: string };
	pubsub_topic: { project_id: string; topic_id: string };
	recommender: { project_id: string; recommender_id: string; location: string };
	recommender_insight_type: { project_id: string; insight_type_id: string; location: string };
	redis_instance: { project_id: string; region: string; instance_id: string; node_id: string };
	reported_errors: { project_id: string };
	service_account: { project_id: string; email_id: string; unique_id: string };
	service_config: { project_id: string; service_name: string; service_config_id: string };
	service_rollout: { project_id: string; service_name: string; rollout_id: string };
	servicedirectory_namespace: { project_id: string; location: string; namespace_name: string };
	serviceusage_service: { project_id: string; service_name: string };
	serviceuser_service: { project_id: string; service_name: string };
	spanner_instance: { project_id: string; instance_id: string; location: string; instance_config: string };
	testservice_matrix: { project_id: string; matrix_id: string };
	threat_detector: { project_id: string; detector_name: string };
	uptime_url: { project_id: string; host: string };
	vpc_access_connector: { project_id: string; location: string; connector_name: string };
	vpn_gateway: { project_id: string; gateway_id: string; region: string };
	vpn_tunnel: { project_id: string; tunnel_id: string; tunnel_name: string; location: string };
};

export const LABELS_FOR_RESOURCE: Record<keyof Resource, readonly string[]> = {
	'aiplatform.googleapis.com/Endpoint': ['resource_container', 'location', 'endpoint_id'] as const,
	api: ['project_id', 'service', 'method', 'version', 'location'] as const,
	'apigee.googleapis.com/Environment': ['resource_container', 'org', 'env', 'location'] as const,
	app_script_function: ['project_id', 'invocation_type', 'function_name'] as const,
	assistant_action: ['project_id', 'version_id', 'action_id'] as const,
	audited_resource: ['project_id', 'service', 'method'] as const,
	aws_alb_load_balancer: ['project_id', 'name', 'region', 'aws_account'] as const,
	aws_cloudfront_distribution: ['project_id', 'distribution_id', 'region', 'aws_account'] as const,
	aws_dynamodb_table: ['project_id', 'table', 'region', 'aws_account'] as const,
	aws_ebs_volume: ['project_id', 'volume_id', 'region', 'aws_account'] as const,
	aws_ec2_instance: ['project_id', 'instance_id', 'aws_account', 'region'] as const,
	aws_elasticache_cluster: ['project_id', 'cluster_id', 'region', 'aws_account'] as const,
	aws_elb_load_balancer: ['project_id', 'region', 'name', 'aws_account'] as const,
	aws_emr_cluster: ['project_id', 'cluster_id', 'region', 'aws_account'] as const,
	aws_kinesis_stream: ['project_id', 'stream_name', 'region', 'aws_account'] as const,
	aws_lambda_function: ['project_id', 'function_name', 'region', 'aws_account'] as const,
	aws_rds_database: ['project_id', 'name', 'region', 'aws_account'] as const,
	aws_redshift_cluster: ['project_id', 'cluster_identifier', 'region', 'aws_account'] as const,
	aws_s3_bucket: ['project_id', 'bucket_name', 'region', 'aws_account'] as const,
	aws_ses: ['project_id', 'region', 'aws_account'] as const,
	aws_sns_topic: ['project_id', 'topic', 'region', 'aws_account'] as const,
	aws_sqs_queue: ['project_id', 'queue', 'region', 'aws_account'] as const,
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
	k8s_control_plane_component: ['project_id', 'location', 'cluster_name', 'component_name', 'component_location'] as const,
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
