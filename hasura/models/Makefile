.PHONY: generate_sql generate_tables_yaml generate_schema_and_tables_metadata

HASURA_URL="http://localhost:8060"
# Don't actually do this, should read from environment variable
HASURA_ADMIN_SECRET="my-secret"

format_sql_file: ## Formats a SQL file using pgFormatter. Use by passing "file=filename" to the command. IE: "make format_sql_file fie
	cat $(file) | docker run --rm -i gavinray/pgformatter:v4.4 --comma-break --wrap-limit 80

generate_sql: ## Generate single SQL file schema from all models
	ruby ./generate-sql.rb \
		--identifiers '/* TABLE */,/* FOREIGN KEYS */,/* TRIGGERS */' \
		--out schema.sql \
		./**/**.sql

generate_tables_yaml: ## Generate tables.yaml file from all models
	ruby ./generate-tables-metadata.rb \
		--out tables.yaml \
		./**/table.yaml

copy_generated_schema_to_migrations: ## 
copy_generated_schema_to_migrations:
	cp schema.sql ../migrations/01_INIT/up.sql

copy_generated_tables_yaml_to_metadata: ## 
copy_generated_tables_yaml_to_metadata:
	cp tables.yaml ../metadata/tables.yaml

reset_docker_images: ## 
reset_docker_images:
	docker-compose down -v
	docker-compose up -d

generate_schema_and_tables_metadata: ## Generate single SQL file schema and tables.yaml from all models
generate_schema_and_tables_metadata: generate_sql generate_tables_yaml

generate_schema_and_tables_metadata_then_copy_to_project_and_reset_docker_images: ## Generates the SQL schema + tables.yaml, copies them to proper location, then tears down Docker images + volumes and sets them back up again for a fresh start with changes applied.
generate_schema_and_tables_metadata_then_copy_to_project_and_reset_docker_images: \
	generate_schema_and_tables_metadata \
	copy_generated_schema_to_migrations \
	copy_generated_tables_yaml_to_metadata \
	reset_docker_images

clear_server_metadata: ## 
clear_server_metadata:
	curl \
		-H "Content-Type: application/json" \
		-H "X-Hasura-Admin-Secret: $(HASURA_ADMIN_SECRET)" \
		--data @../script-resources/v1_query_clear_metadata.json \
		$(HASURA_URL)/v1/query

reset_database_migrations_history: ## 
reset_database_migrations_history:
	curl \
		-H "Content-Type: application/json" \
		-H "X-Hasura-Admin-Secret: $(HASURA_ADMIN_SECRET)" \
		--data @../script-resources/run_sql_reset_migrations.json \
		$(HASURA_URL)/v1/query

reset_schema_public: ## 
reset_schema_public:
	curl \
		-H "Content-Type: application/json" \
		-H "X-Hasura-Admin-Secret: $(HASURA_ADMIN_SECRET)" \
		--data @../script-resources/run_sql_recreate_schema_public.json \
		$(HASURA_URL)/v1/query

reset_database_schema_including_migration_history_and_metadata: ## 
reset_database_schema_including_migration_history_and_metadata: \
	clear_server_metadata \
	reset_database_migrations_history \
	reset_schema_public

reset_and_regenerate_metadata_then_apply: ## Use this to regenerate and re-apply metadata on server without restarting Docker
reset_and_regenerate_metadata_then_apply: \
	clear_server_metadata \
	generate_tables_yaml \
	copy_generated_tables_yaml_to_metadata
	hasura metadata apply --admin-secret=my-secret


pg_dump_table_data: ## Takes a "TABLE=" argument, and dumps data as a "hasura seeds"-usable SQL file
pg_dump_table_data:
	docker-compose exec -it graphql-engine pg_dump \
  	postgres://postgres:postgrespassword@postgres:5432/postgres \
  	--column-inserts --data-only --table=$(TABLE) \
  	> $(TABLE)_seeds.sql

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help