export declare function createSampleEntry(message: string | Error, spanId?: string, traceId?: string): {
    metadata: {
        logName: string | undefined;
        trace?: string | undefined;
        labels?: {
            [x: string]: string;
        } | undefined;
        httpRequest?: (Pick<import("../types/shared").HttpRequest, "requestMethod" | "requestUrl" | "requestSize" | "status" | "responseSize" | "userAgent" | "remoteIp" | "serverIp" | "referer" | "cacheHit" | "cacheLookup" | "cacheFillBytes" | "protocol" | "cacheValidatedWithOriginServer"> & {
            latency?: number | import("../types/shared").Duration | undefined;
        } & {
            latency?: import("../types/shared").Duration | undefined;
        }) | undefined;
        timestamp?: Date | undefined;
        insertId?: string | undefined;
        spanId?: string | undefined;
        traceSampled?: boolean | undefined;
        operation?: {
            id?: string | undefined;
            producer?: string | undefined;
            first?: boolean | undefined;
            last?: boolean | undefined;
        } | undefined;
        sourceLocation?: {
            file: string;
            line: number;
            function?: string | undefined;
        } | undefined;
        severity?: "DEFAULT" | "DEBUG" | "INFO" | "NOTICE" | "WARNING" | "ERROR" | "CRITICAL" | "ALERT" | "EMERGENCY" | undefined;
        resource?: import("../types/shared").ResourceType<"global" | "api" | "apigee.googleapis.com/Environment" | "app_script_function" | "assistant_action" | "audited_resource" | "aws_ec2_instance" | "aws_elb_load_balancer" | "bigquery_biengine_model" | "bigquery_dataset" | "bigquery_dts_config" | "bigquery_dts_run" | "bigquery_project" | "bigquery_resource" | "bigquery_table" | "billing_account" | "build" | "client_auth_config_brand" | "client_auth_config_client" | "cloud_composer_environment" | "cloud_dataproc_cluster" | "cloud_dataproc_job" | "cloud_debugger_resource" | "cloud_function" | "cloud_run_revision" | "cloud_scheduler_job" | "cloud_tasks_queue" | "cloudiot_device" | "cloudiot_device_registry" | "cloudkms_cryptokey" | "cloudkms_cryptokeyversion" | "cloudkms_keyring" | "cloudml_model_version" | "cloudsql_database" | "cloudvolumesgcp-api.netapp.com/NetAppCloudVolumeSO" | "consumed_api" | "container" | "csr_repository" | "dataflow_step" | "dataproc_cluster" | "datastore_database" | "datastore_index" | "deployment" | "deployment_manager_manifest" | "deployment_manager_operation" | "deployment_manager_resource" | "deployment_manager_type" | "dns_managed_zone" | "dns_policy" | "dns_query" | "fleetengine.googleapis.com/Fleet" | "folder" | "gae_app" | "gce_autoscaler" | "gce_backend_bucket" | "gce_backend_service" | "gce_client_ssl_policy" | "gce_commitment" | "gce_disk" | "gce_firewall_rule" | "gce_forwarding_rule" | "gce_health_check" | "gce_image" | "gce_instance" | "gce_instance_group" | "gce_instance_group_manager" | "gce_instance_template" | "gce_license" | "gce_network" | "gce_network_endpoint_group" | "gce_node_group" | "gce_node_template" | "gce_operation" | "gce_packet_mirroring" | "gce_project" | "gce_reserved_address" | "gce_resource_policy" | "gce_route" | "gce_router" | "gce_snapshot" | "gce_ssl_certificate" | "gce_subnetwork" | "gce_target_http_instance" | "gce_target_http_proxy" | "gce_target_https_proxy" | "gce_target_pool" | "gce_target_ssl_proxy" | "gce_url_map" | "gcs_bucket" | "generic_node" | "generic_task" | "genomics_dataset" | "genomics_operation" | "gke_cluster" | "gke_nodepool" | "healthcare_annotation_store" | "healthcare_consent_store" | "healthcare_dataset" | "healthcare_dicom_store" | "healthcare_fhir_store" | "healthcare_hl7v2_store" | "http_load_balancer" | "iam_role" | "identitytoolkit_project" | "identitytoolkit_tenant" | "k8s_cluster" | "k8s_container" | "k8s_node" | "k8s_pod" | "logging_exclusion" | "logging_log" | "logging_sink" | "managed_service" | "metric" | "ml_job" | "nat_gateway" | "network_security_policy" | "organization" | "project" | "pubsub_snapshot" | "pubsub_subscription" | "pubsub_topic" | "recommender" | "recommender_insight_type" | "redis_instance" | "reported_errors" | "service_account" | "service_config" | "service_rollout" | "servicedirectory_namespace" | "serviceusage_service" | "serviceuser_service" | "spanner_instance" | "testservice_matrix" | "threat_detector" | "uptime_url" | "vpc_access_connector" | "vpn_gateway" | "vpn_tunnel"> | undefined;
    };
    data: {
        message: string;
        serviceContext: import("../types/shared").ServiceContext;
    };
};
