const TOKEN_URL = "https://api.instamojo.com/oauth2/token/";
const PAYMENT_LINK = "https://api.instamojo.com/v2/payment_requests/";

const TEST_KEY = "test_KmLYAG2ACt0juCLCG9rrKYjZrcEDAGfpZxD";
const TEST_SECRET =
  "test_QvHQ9h5bSYY9rzxJUIZ1DfZxHSTU0lObqs1A5qE2m5aAVqBEBopRJzamUJX9lWKKXUAPqrXTWLF9dwV7cMPXKqKvGSLzLXLSxdjIrYNPKpI7fsYBd1ouIKgFHUy";
const LIVE_KEY = "slVm1aGJDnDJ31GnWzOolyjEcNK9SQ0bdxImXQFk";
const LIVE_SECRET =
  "8cvc6Bupq4Z5gs11ksG5BTAOTIkXWG1C1LkZTGziuEwYupnutu4iHCeI07fV1N240LdQCu6oJMc0VwEmuZrvqtEwnMZIBnuv40SwybW1KPEWIctIpiGNeIJ6xhniUBkR";

export default async function instamojo(req, res) {
  const body = req.body;
  let response;
  if (body) {
    const input = JSON.parse(body);
    const operation = input?.operation;

    switch (operation) {
      case "TOKEN":
        response = await instamojoToken();
        break;
      case "CREATE_PAYMENT_LINK":
        response = await createPaymentLink(input);
        break;
    }
    return res.json(response);
  }
}

async function instamojoToken() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: TEST_KEY,
      client_secret: TEST_SECRET,
    }),
  };

  try {
    const generateToken = await fetch(TOKEN_URL, options);
    const tokenRes = await generateToken.json();
    return { status: true, token: tokenRes };
  } catch (err) {
    return {
      status: false,
      msg: err.message,
    };
  }
}

async function createPaymentLink(input) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${input.token}`,
      "content-type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      allow_repeated_payments: false,
      send_email: true,
      amount: input.amount,
      purpose: input.purpose,
      buyer_name: input.buyer_name,
      email: input.email,
      phone: input?.phone.toString(),
      webhook: "https://wrapkit.in/api/instamojoWebhook",
      redirect_url: "https://wrapkit.in/order-thank-you",
    }),
  };

  try {
    const generateToken = await fetch(PAYMENT_LINK, options);
    const tokenRes = await generateToken.json();
    return { status: true, response: tokenRes };
  } catch (err) {
    return {
      status: false,
      msg: err.message,
    };
  }
}
