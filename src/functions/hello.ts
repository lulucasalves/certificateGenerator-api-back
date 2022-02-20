export const handler = async event => {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Hello'
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
}
