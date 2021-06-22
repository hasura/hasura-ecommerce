# Hasura E-Commerce Demo
Running this demo requires very very dependencies.
1. Docker and Docker Compose installed. [Install instructions.](https://docs.docker.com/get-docker/)
2. Stripe Secret and Publishable keys. _The account doesn't need to be verified as no transactions will be happening._ [Instructions here.](https://stripe.com/docs/keys)
3. Hasura CLI installed. [Instructions here.](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html)

## Running the Project
```sh-session
$ git clone https://github.com/hasura/hasura-ecommerce
<modify .env.example to have your real Stripe test keys if you want checkout to work>
$ docker-compose up -d
$ cd hasura
<assuming you have Hasura CLI installed>
$ hasura seeds apply 

Visit http://localhost:3000 for Next.js frontend
Visit http://localhost:8060 for Hasura console (admin secret = "my-secret")
Visit http://localhost:9000 for Minio dashboard (login = "minio:minio123")
````

1. Clone the repo to your local machine.
2. Navigate inside the top level directory.
3. (Optional) In the `.env.example` file, replace `<STRIPE_SECRET_KEY>` and `<STRIPE_PUBLISHABLE_KEY>` and `<STRIPE_WEBHOOK_SECRET> with your stripe keys.
4. Run the project with `docker-compose up -d` - the `-d` tells docker to run in detached mode, which will not put out any console information. If you'd like to see what's happening, omit the `-d` and it will run in the forefront.
5. After confirming you can view the website at `localhost:3000` - navigate into the `hasura` directory. Run the command `hasura seeds apply` - this will populate product and user data into your hasura instance.
6. To play with the hasura console, run `hasura console` which will open a hasura console for you to operate.

For more details, see the [architecture guide.](Architecture.md)