start_stripe_webhook_listener:
	docker run --net=host --rm -it stripe/stripe-cli:latest listen \
			--api-key sk_test_XaYURKl3k5bVtc5EHl0vWpcY00rbF6cuHq \
			--forward-to http://localhost:3000/api/webhooks/stripe \
			--forward-connect-to http://localhost:3000/api/webhooks/stripe

trigger_stripe_payment_intent_webhook:
	docker run --net=host --rm -it stripe/stripe-cli trigger payment_intent.created \
		--api-key sk_test_XaYURKl3k5bVtc5EHl0vWpcY00rbF6cuHq

trigger_stripe_payment_intent_succeeded_webhook:
	docker run --net=host --rm -it stripe/stripe-cli trigger payment_intent.succeeded \
		--api-key sk_test_XaYURKl3k5bVtc5EHl0vWpcY00rbF6cuHq

trigger_stripe_payment_intent_payment_failed_webhook:
	docker run --net=host --rm -it stripe/stripe-cli trigger payment_intent.payment_failed \
		--api-key sk_test_XaYURKl3k5bVtc5EHl0vWpcY00rbF6cuHq
