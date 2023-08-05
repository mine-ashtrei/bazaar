const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT!;

export async function saveEmail(email: string) {
  console.log("BLBLB");
  console.log(API_ENDPOINT);
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
    }),
  });

  if (response.ok) {
    console.info("Saved");
  } else {
    // If there was an error, log it
    console.error("Error:", response.status);
  }
}
