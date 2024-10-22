export async function GET() {
  console.log("API request received on /api");
  return new Response("Hello world", {
    status: 200,
  });
}
