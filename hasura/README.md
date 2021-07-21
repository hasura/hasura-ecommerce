# Note About the Structure of this Directory

You may notice there is a somewhat unusual setup with the metadata/SQL, in the `models` folder.
Original developments on this app began prior to Metadata V3 release.

At that time, table metadata was aggregated entirely into a single `table.yaml`. This can be become more difficult to read as tables grow, so here a makeshift script/tooling setup was used to be able to define models (as both SQL DDL and the Hasura table metadata) individually.

This is not a scalable pattern after initial deployments (without bringing in another tool like https://github.com/bikeshedder/tusker that can calculate diffs between two schemas and print them as migrations) and shouldn't be taken as a proper development pattern.

The correct way to do this today is to use Metadata V3 and take advantage of it enabling individual metadata files.
See here for more information: https://hasura.io/docs/latest/graphql/core/migrations/upgrade-v3.html#metadata-directory