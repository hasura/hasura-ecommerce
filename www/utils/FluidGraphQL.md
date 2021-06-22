# Client SDK

This project uses a clever combination of both Apollo Client and GraphQL Zeus. GraphQL Zeus introspects your schema then creates both typed and non-typed client SDKs for constructing queries using a familiar (and flexible) object notation syntax. This allows for conditional query composition that is otherwise not possible without fairly hacked-together code. Consider this conditional input filter.

```js

const _lte = priceHigh ? {_lte: priceHigh,} : {};
const _gte = priceLow ? { _gte: priceLow,} : {};
const priceFilter =
    priceHigh || priceLow
      ? { price: { ..._lte, ..._gte, },}
      : {};

const { data, error, loading } = useTypedQuery(
    {
      product: [
        { where: { ...priceFilter}},
        { id: true},
      ],
    });
```

Historically, this would be difficult to accomplish as input arguments do not support `@include` or `@skip` directives according to the GraphQl specification. Thanks to primitives like this, it's easy to accomplish.

## Wrapping it up with Apollo Client
It's no secret that Apollo Client is nearly considered must have tooling for the front-end. The query|mutation|subscription hook is very flexible and leads to very readable code. Combining these two methods allow us to leverage the rest of the React ecosystem such as local state to compose these queries and execute them with the Apollo Client.