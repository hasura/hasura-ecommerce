# Architecture
The project is composed in two primary components. The Hasura backend and the the web client (`www`). Under the hood, Docker will create a postgres and minio instance to support the client and the backend. For information on uploading files, see the information on uploading files with Hasura, see the [Minio guide](www/utils/README-MINIO.md) in the utils directory of the web client.

The Hasura instance is configured to auto apply migration data upon init. This provides a smooth developer experience to track any changes to the Hasura project and allows you to check the metadata into version control.

You can scaffold new tables and models as well using a Yaml schema definition and then combine them through the use of some clever make scripts. Documentation on that flow [can be found here.](hasura/models/README.md)

The high-level architecture uses Hasura as a persistent store for users, products, and orders. We use the client's primitives to store view states that we then use to query the content with subscriptions directly from Hasura. It would be trivial to support persisting carts as well, but for the purpose of this demo, we've left that functionality out.

## The Hasura flow follows roughly three parts:
1. Metadata describes the project you're creating in respect to permissions, functions, configurations, tables and the rest. 
2. Models are broken into sub directories here by convetion and used to describe the the shape (`sql` files) and configuration (`yaml` file) for each model you want to create. These are then compiled by `make` commands into a composite table definition that is added to the migration folder as individual tables.
3. Migrations reflect any real-time edits performed in the console you initiated with the `hasura console` command.

## The NextJs Flow
Explaining the details of NextJs is out of the scope of this demo. You can replace this client with any framework of your choosing, the Hasura migration pattern is a powerful primitive on its own that is agnostic of the consuming technology. For a quick primer on NextJs, it's a "config included" framework for React that supports the best of static site generation, server-side-rendered content, and protected execeution environments. More information can be read in the [pages guide.](www/pages/README.md)