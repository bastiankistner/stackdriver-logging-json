export declare type ResourceMap = {
    'aiplatform.googleapis.com/Endpoint': {
        resource_container: string;
        location: string;
        endpoint_id: string;
    };
    api: {
        project_id: string;
        service: string;
        method: string;
        version: string;
        location: string;
    };
    'apigee.googleapis.com/Environment': {
        resource_container: string;
        org: string;
        env: string;
        location: string;
    };
    app_script_function: {
        project_id: string;
        invocation_type: string;
        function_name: string;
    };
    assistant_action: {
        project_id: string;
        version_id: string;
        action_id: string;
    };
    audited_resource: {
        project_id: string;
        service: string;
        method: string;
    };
    aws_alb_load_balancer: {
        project_id: string;
        name: string;
        region: string;
        aws_account: string;
    };
    aws_cloudfront_distribution: {
        project_id: string;
        distribution_id: string;
        region: string;
        aws_account: string;
    };
    aws_dynamodb_table: {
        project_id: string;
        table: string;
        region: string;
        aws_account: string;
    };
    aws_ebs_volume: {
        project_id: string;
        volume_id: string;
        region: string;
        aws_account: string;
    };
    aws_ec2_instance: {
        project_id: string;
        instance_id: string;
        aws_account: string;
        region: string;
    };
    aws_elasticache_cluster: {
        project_id: string;
        cluster_id: string;
        region: string;
        aws_account: string;
    };
    aws_elb_load_balancer: {
        project_id: string;
        region: string;
        name: string;
        aws_account: string;
    };
    aws_emr_cluster: {
        project_id: string;
        cluster_id: string;
        region: string;
        aws_account: string;
    };
    aws_kinesis_stream: {
        project_id: string;
        stream_name: string;
        region: string;
        aws_account: string;
    };
    aws_lambda_function: {
        project_id: string;
        function_name: string;
        region: string;
        aws_account: string;
    };
    aws_rds_database: {
        project_id: string;
        name: string;
        region: string;
        aws_account: string;
    };
    aws_redshift_cluster: {
        project_id: string;
        cluster_identifier: string;
        region: string;
        aws_account: string;
    };
    aws_s3_bucket: {
        project_id: string;
        bucket_name: string;
        region: string;
        aws_account: string;
    };
    aws_ses: {
        project_id: string;
        region: string;
        aws_account: string;
    };
    aws_sns_topic: {
        project_id: string;
        topic: string;
        region: string;
        aws_account: string;
    };
    aws_sqs_queue: {
        project_id: string;
        queue: string;
        region: string;
        aws_account: string;
    };
    bigquery_biengine_model: {
        project_id: string;
        location: string;
        model_id: string;
    };
    bigquery_dataset: {
        project_id: string;
        dataset_id: string;
    };
    bigquery_dts_config: {
        project_id: string;
        location: string;
        config_id: string;
    };
    bigquery_dts_run: {
        project_id: string;
        location: string;
        config_id: string;
        run_id: string;
    };
    bigquery_project: {
        project_id: string;
        location: string;
    };
    bigquery_resource: {
        project_id: string;
    };
    bigquery_table: {
        project_id: string;
        dataset_id: string;
        table_id: string;
    };
    billing_account: {
        project_id: string;
        account_id: string;
    };
    build: {
        project_id: string;
        build_id: string;
        build_trigger_id: string;
    };
    client_auth_config_brand: {
        project_id: string;
        brand_id: string;
    };
    client_auth_config_client: {
        project_id: string;
        client_id: string;
    };
    cloud_composer_environment: {
        project_id: string;
        location: string;
        environment_name: string;
    };
    cloud_dataproc_cluster: {
        project_id: string;
        cluster_name: string;
        cluster_uuid: string;
        region: string;
    };
    cloud_dataproc_job: {
        project_id: string;
        region: string;
        job_id: string;
        job_uuid: string;
    };
    cloud_debugger_resource: {
        project_id: string;
        app: string;
    };
    cloud_function: {
        project_id: string;
        function_name: string;
        region: string;
    };
    cloud_run_revision: {
        project_id: string;
        service_name: string;
        revision_name: string;
        location: string;
        configuration_name: string;
    };
    cloud_scheduler_job: {
        project_id: string;
        location: string;
        job_id: string;
    };
    cloud_tasks_queue: {
        project_id: string;
        queue_id: string;
        target_type: string;
    };
    cloudiot_device: {
        project_id: string;
        device_num_id: string;
        device_registry_id: string;
        location: string;
    };
    cloudiot_device_registry: {
        project_id: string;
        device_registry_id: string;
        location: string;
    };
    cloudkms_cryptokey: {
        project_id: string;
        location: string;
        key_ring_id: string;
        crypto_key_id: string;
    };
    cloudkms_cryptokeyversion: {
        project_id: string;
        location: string;
        key_ring_id: string;
        crypto_key_id: string;
        crypto_key_version_id: string;
    };
    cloudkms_keyring: {
        project_id: string;
        location: string;
        key_ring_id: string;
    };
    cloudml_model_version: {
        project_id: string;
        model_id: string;
        version_id: string;
        region: string;
    };
    cloudsql_database: {
        project_id: string;
        database_id: string;
        region: string;
    };
    'cloudvolumesgcp-api.netapp.com/NetAppCloudVolumeSO': {
        resource_container: string;
        location: string;
        volume_id: string;
    };
    consumed_api: {
        project_id: string;
        service: string;
        method: string;
        version: string;
        credential_id: string;
        location: string;
    };
    container: {
        project_id: string;
        cluster_name: string;
        namespace_id: string;
        instance_id: string;
        pod_id: string;
        container_name: string;
        zone: string;
    };
    csr_repository: {
        project_id: string;
        name: string;
    };
    dataflow_step: {
        project_id: string;
        job_id: string;
        step_id: string;
        job_name: string;
        region: string;
    };
    dataproc_cluster: {
        project_id: string;
        cluster_id: string;
        zone: string;
    };
    datastore_database: {
        project_id: string;
        database_id: string;
    };
    datastore_index: {
        project_id: string;
        database_id: string;
        index_id: string;
    };
    deployment: {
        project_id: string;
        name: string;
    };
    deployment_manager_manifest: {
        project_id: string;
        manifest_name: string;
        deployment_name: string;
    };
    deployment_manager_operation: {
        project_id: string;
        operation_name: string;
    };
    deployment_manager_resource: {
        project_id: string;
        resource_name: string;
        deployment_name: string;
    };
    deployment_manager_type: {
        project_id: string;
        name: string;
    };
    dns_managed_zone: {
        project_id: string;
        zone_name: string;
        location: string;
    };
    dns_policy: {
        project_id: string;
        policy_name: string;
        location: string;
    };
    dns_query: {
        project_id: string;
        target_name: string;
        location: string;
        target_type: string;
        source_type: string;
    };
    'fleetengine.googleapis.com/Fleet': {
        resource_container: string;
        location: string;
    };
    folder: {
        folder_id: string;
    };
    gae_app: {
        project_id: string;
        module_id: string;
        version_id: string;
        zone: string;
    };
    gce_autoscaler: {
        project_id: string;
        autoscaler_id: string;
        location: string;
    };
    gce_backend_bucket: {
        project_id: string;
        backend_bucket_id: string;
    };
    gce_backend_service: {
        project_id: string;
        backend_service_id: string;
        location: string;
    };
    gce_client_ssl_policy: {
        project_id: string;
        client_ssl_policy_id: string;
    };
    gce_commitment: {
        project_id: string;
        commitment_id: string;
        location: string;
    };
    gce_disk: {
        project_id: string;
        disk_id: string;
        zone: string;
    };
    gce_firewall_rule: {
        project_id: string;
        firewall_rule_id: string;
    };
    gce_forwarding_rule: {
        project_id: string;
        forwarding_rule_id: string;
        region: string;
    };
    gce_health_check: {
        project_id: string;
        health_check_id: string;
    };
    gce_image: {
        project_id: string;
        image_id: string;
    };
    gce_instance: {
        project_id: string;
        instance_id: string;
        zone: string;
    };
    gce_instance_group: {
        project_id: string;
        instance_group_id: string;
        instance_group_name: string;
        location: string;
    };
    gce_instance_group_manager: {
        project_id: string;
        instance_group_manager_id: string;
        instance_group_manager_name: string;
        location: string;
    };
    gce_instance_template: {
        project_id: string;
        instance_template_id: string;
        instance_template_name: string;
    };
    gce_license: {
        project_id: string;
        license_id: string;
    };
    gce_network: {
        project_id: string;
        network_id: string;
    };
    gce_network_endpoint_group: {
        project_id: string;
        zone: string;
        network_endpoint_group_id: string;
    };
    gce_node_group: {
        project_id: string;
        node_group_id: string;
        zone: string;
    };
    gce_node_template: {
        project_id: string;
        node_template_id: string;
        region: string;
    };
    gce_operation: {
        project_id: string;
        operation_name: string;
        location: string;
    };
    gce_packet_mirroring: {
        project_id: string;
        packet_mirroring_id: string;
        region: string;
    };
    gce_project: {
        project_id: string;
    };
    gce_reserved_address: {
        project_id: string;
        reserved_address_id: string;
        location: string;
    };
    gce_resource_policy: {
        project_id: string;
        resource_policy_id: string;
        region: string;
    };
    gce_route: {
        project_id: string;
        route_id: string;
    };
    gce_router: {
        project_id: string;
        router_id: string;
        region: string;
    };
    gce_snapshot: {
        project_id: string;
        snapshot_id: string;
    };
    gce_ssl_certificate: {
        project_id: string;
        ssl_certificate_id: string;
        ssl_certificate_name: string;
    };
    gce_subnetwork: {
        project_id: string;
        subnetwork_id: string;
        subnetwork_name: string;
        location: string;
    };
    gce_target_http_instance: {
        project_id: string;
        target_http_instance_id: string;
        zone: string;
    };
    gce_target_http_proxy: {
        project_id: string;
        target_http_proxy_id: string;
    };
    gce_target_https_proxy: {
        project_id: string;
        target_https_proxy_id: string;
    };
    gce_target_pool: {
        project_id: string;
        target_pool_id: string;
        zone: string;
    };
    gce_target_ssl_proxy: {
        project_id: string;
        target_ssl_proxy_id: string;
    };
    gce_url_map: {
        project_id: string;
        url_map_id: string;
    };
    gcs_bucket: {
        project_id: string;
        bucket_name: string;
        location: string;
    };
    generic_node: {
        project_id: string;
        location: string;
        namespace: string;
        node_id: string;
    };
    generic_task: {
        project_id: string;
        location: string;
        namespace: string;
        job: string;
        task_id: string;
    };
    genomics_dataset: {
        project_id: string;
        dataset_id: string;
    };
    genomics_operation: {
        project_id: string;
        operation_id: string;
    };
    gke_cluster: {
        project_id: string;
        cluster_name: string;
        location: string;
    };
    gke_nodepool: {
        project_id: string;
        nodepool_name: string;
        location: string;
        cluster_name: string;
    };
    global: {
        project_id: string;
    };
    healthcare_annotation_store: {
        project_id: string;
        location: string;
        dataset_id: string;
        annotation_store_id: string;
    };
    healthcare_consent_store: {
        project_id: string;
        location: string;
        dataset_id: string;
        consent_store_id: string;
    };
    healthcare_dataset: {
        project_id: string;
        location: string;
        dataset_id: string;
    };
    healthcare_dicom_store: {
        project_id: string;
        location: string;
        dataset_id: string;
        dicom_store_id: string;
    };
    healthcare_fhir_store: {
        project_id: string;
        location: string;
        dataset_id: string;
        fhir_store_id: string;
    };
    healthcare_hl7v2_store: {
        project_id: string;
        location: string;
        dataset_id: string;
        hl7v2_store_id: string;
    };
    http_load_balancer: {
        project_id: string;
        forwarding_rule_name: string;
        url_map_name: string;
        target_proxy_name: string;
        backend_service_name: string;
        zone: string;
    };
    iam_role: {
        project_id: string;
        role_name: string;
    };
    identitytoolkit_project: {
        project_id: string;
    };
    identitytoolkit_tenant: {
        project_id: string;
        tenant_name: string;
    };
    k8s_cluster: {
        project_id: string;
        location: string;
        cluster_name: string;
    };
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
    k8s_node: {
        project_id: string;
        location: string;
        cluster_name: string;
        node_name: string;
    };
    k8s_pod: {
        project_id: string;
        location: string;
        cluster_name: string;
        namespace_name: string;
        pod_name: string;
    };
    logging_exclusion: {
        project_id: string;
        name: string;
    };
    logging_log: {
        project_id: string;
        name: string;
    };
    logging_sink: {
        project_id: string;
        name: string;
        destination: string;
    };
    managed_service: {
        project_id: string;
        service_name: string;
        producer_project_id: string;
    };
    metric: {
        project_id: string;
        name: string;
    };
    ml_job: {
        project_id: string;
        job_id: string;
        task_name: string;
    };
    nat_gateway: {
        project_id: string;
        region: string;
        router_id: string;
        gateway_name: string;
    };
    network_security_policy: {
        project_id: string;
        policy_name: string;
    };
    organization: {
        organization_id: string;
    };
    project: {
        project_id: string;
    };
    pubsub_snapshot: {
        project_id: string;
        snapshot_id: string;
    };
    pubsub_subscription: {
        project_id: string;
        subscription_id: string;
    };
    pubsub_topic: {
        project_id: string;
        topic_id: string;
    };
    recommender: {
        project_id: string;
        recommender_id: string;
        location: string;
    };
    recommender_insight_type: {
        project_id: string;
        insight_type_id: string;
        location: string;
    };
    redis_instance: {
        project_id: string;
        region: string;
        instance_id: string;
        node_id: string;
    };
    reported_errors: {
        project_id: string;
    };
    service_account: {
        project_id: string;
        email_id: string;
        unique_id: string;
    };
    service_config: {
        project_id: string;
        service_name: string;
        service_config_id: string;
    };
    service_rollout: {
        project_id: string;
        service_name: string;
        rollout_id: string;
    };
    servicedirectory_namespace: {
        project_id: string;
        location: string;
        namespace_name: string;
    };
    serviceusage_service: {
        project_id: string;
        service_name: string;
    };
    serviceuser_service: {
        project_id: string;
        service_name: string;
    };
    spanner_instance: {
        project_id: string;
        instance_id: string;
        location: string;
        instance_config: string;
    };
    testservice_matrix: {
        project_id: string;
        matrix_id: string;
    };
    threat_detector: {
        project_id: string;
        detector_name: string;
    };
    uptime_url: {
        project_id: string;
        host: string;
    };
    vpc_access_connector: {
        project_id: string;
        location: string;
        connector_name: string;
    };
    vpn_gateway: {
        project_id: string;
        gateway_id: string;
        region: string;
    };
    vpn_tunnel: {
        project_id: string;
        tunnel_id: string;
        tunnel_name: string;
        location: string;
    };
};
export declare const LABELS_FOR_RESOURCE: Record<keyof ResourceMap, readonly string[]>;
