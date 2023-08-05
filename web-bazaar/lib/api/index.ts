// const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT!;
const API_ENDPOINT = "https://test.ashtrei.com/emails";

export async function saveEmail(email: string) {
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
    console.error("Errorssss:", response.status);
  }
}
