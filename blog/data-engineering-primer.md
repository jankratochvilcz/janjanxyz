---
title: "Data Engineering Primer"
date: "2023-08-27"
preview: |
  A short attempt to summarize my learnings about the purpose of the individual components of the data engineering stack, how they relate to each other, and the relevant market offerings for each. Data warehouse, the sematic layer, ELT vs ETL are a few of the topics discussed.
coverImage: "/blog/nana-smirnova-IEiAmhXehwE-unsplash.jpg"
---

WWat is a *data lakehouse*? How is *ELT* different from *ETL*? And what the heck is a *semantic layer*?

Below is a short attempt to summarize my learnings about the purpose of the individual components of the data engineering stack, how they relate to each other, and the relevant market offerings for each.

## End-to-End Data Flow

![Data Flow](/blog/data_engineering_diagram.svg)

The above is an approximation of the modern data flow. It comprises of:
1. **OLTP Database.** The transactional database that gets filled as the customer uses the product.
2. **Ingestor.** This is a variant on the ETL process, with the exception that, for the most part, it loads data into the warehouse without schema transformations
3. **Data Warehouse.** The destination for all of our data that is useful for analysis.
4. **OLAP Schema.** Schemas that contain transformed data optimized for analytical queries.
5. **Data Transformer.** Provides transformation of data in the original OLTP schema into the OLAP schemas. The transformation layer contains definitions of the OLAP schema.
6. **Workflow Orchestrator.** Models dependencies between transformers, triggers them and provides observability into the workings of the transformers.
7. **Semantic Layer.** An abstraction on top of the OLAP schema that provides a query engine to clients and pre-aggregations to offload effort from the warehouse.
8. **Customer-Facing Frontend.** A customer-facing frontend that provides insights to the customer.
9. **Internal BI.** Internally-facing tooling to provide insights to business stakeholders.

There are many variations on the model above. Some variations leverage the older ETL pattern, which transforms data before it reaches the warehouse, making the OLAP schema the only one present in the warehouse.

Another variation is deploying advanced BI tools, like Preset or Power BI, that can handle both internally-facing and externally-facing needs.

## Point of Transformation

One of the critical decisions during the design of a data pipeline is designating where data is transformed from its OLTP-optimized form to its OLAP shape.

**Data transformation is necessary because the nature of queries differs between OLTP (transactional model) and OLAP (analytical model).** OLTP focuses on operating with full individual rows through CRUD operations. Conversely, OLAP queries are typically column-oriented. In other words, OLAP queries want to know the aggregate values of a small group of columns but for many rows simultaneously. Keep this in mind when we discuss columnar data warehouses. 💡

There are several points during the lifecycle of the data when we can perform the transition from row-oriented OLTP to column-oriented OLAP.

1. **Before loading data into the data warehouse.** This is the traditional ETL (extract, transform, and load) process.
2. **After data is loaded into the data warehouse.** This is the current community consensus for scaled data sets.
3. **In semantic layer pre-aggregations.** When data is coming untransformed from the data warehouse, the semantic layer can still provide its own transformations in the form of pre-aggregations
4.  **During query time.** When there is no mechanism for transforming the data, it is transformed during query time using the SQL query formed by the user.

What is the difference between transforming data in your data warehouse and building a pre-aggregation in the semantic layer? One consideration is that all analytical queries should be pointed at the OLAP models, meaning that the OLAP model needs to be complete. However, making the analytical models top fine-grained can be harmful, as it reduces data exploration possibilities for downstream tools. Once again, the name of the game is balance and understanding the underlying business data and requirements.

For this reason, pre-aggregations exist. They don't take wait querying freedom, instead introducing a side mechanism that speeds up frequent queries. In other words, pre-aggregations make frequent queries fast and keep the rare ones possible. A bit more information can be found [here](https://www.getdbt.com/blog/how-do-you-decide-what-to-model-in-dbt-vs-lookml/).

Admittedly, this area sounds theoretically logical, but in practical terms, it still feels murky to me. 

## Columnar Data Warehouse

Looking at the schema above, one question is why move data from the OLTP database to the OLAP database if the initial format is the same. It can feel like doing so only distributes the ETL duties into more components, making things more complex without apparent advantages.

### Columnar Orientation

First, it's important to understand what is a "columnar" data warehouse. 

As the name suggests, a columnar data warehouse turns the tables loaded into it by ninety degrees. Rows become columns and vice versa. In fact, AWS Redshift is essentially a Postgres database that stores individual rows as columns, with a few bits of magic sprinkled on top.

Why does this help? Analytical queries usually query a large portion of table rows but ask only about a couple of columns.

```sql
SELECT column1, column2, AVG(column3) AS average
FROM your_table
WHERE condition
GROUP BY column1, column2
HAVING aggregate_condition
ORDER BY average DESC;
```
*A simple analytical query*

With the columnar design, all values for the same column are stored on the "line" in the database, which means that these values are concentrated on only a few pages on disk and not spread out like in a row-oriented design.

As a result of this design, queries that do a `SUM` or `AVG` over a column become very fast, but queries that do `SELECT * from a couple of rows` become slower.

### Decoupling of Compute and Storage

The second characteristic that led to the change from ETL to ELT is the decoupling of storage and computing in cloud warehouses, coupled with cheap storage.

These two developments create a constellation where storing the same data several times over in different shapes is affordable. Unlike in the past, the benefits of having *all* data available in a form close to the raw one, like in a data warehouse, outweigh the storage costs.

In addition, decoupled computing means that transformations consume compute from a different pool than resource queries. Consequently, heavy computations to transform data no longer slow down clients trying to query the warehouse.

## Semantic Layer

**The semantic layer is the data warehouse equivalent of object-relational mapping (ORM) for the transactional database.** 

It aims to provide several capabilities:
1. Abstracts out writing complex SQL queries, which are generated based on a higher-level (pseudo-JSON in case of [Cube](https://cube.dev/)) language.
2. Provides named "dimensions" and "measures" to consumers, ideally creating a shared language for aggregative values and a consistent way to query them.
3. Leverages knowledge about the underlying data to provide a caching layer, usually called "pre-aggregations."
4. Stronger security guarantees by enabling high-level restrictions on model access.

The semantic layer is the newest member of the data stack. As such, it is still relatively immature. An adjacent concept to the semantic layer is [Headless BI](https://www.gooddata.com/headless-bi/).

## In Closing

The world of data engineering is vast and evolving fast. Having a cohesive model of how individual components in the stack interact is useful, as it helps with chosing the right tool for the right job. This is true, especially as individual parts of the toolchain are highly specialized, and the language used to describe individual tools can be vague, especially since the advent of AI, when all data-related tools became "AI enablers".

Hopefully, the notes above help you with navigating the data landscape a bit!