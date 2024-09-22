export const plansMap = [
    {
        id: "basic",
        name: "Basic",
        description: "Get started with BlogScriptAI!",
        price: "99",
        items: ["3 Blog Posts", "3 Transcription"],
        paymentLink: "https://buy.stripe.com/test_fZeeXHeh62NW1vG9AA",
        priceId:
            process.env.NODE_ENV === "development"
                ? "price_1Q1SCMSJQgh9I0JYmzM6jlCA"
                : "",
    },
    {
        id: "pro",
        name: "Pro",
        description: "All Blog Posts, let’s go!",
        price: "299",
        items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
        paymentLink: "https://buy.stripe.com/test_eVa8zj5KA88g6Q0145",
        priceId:
            process.env.NODE_ENV === "development"
                ? "price_1Q1SCMSJQgh9I0JYLkT6kkKM"
                : "",
    },
];
