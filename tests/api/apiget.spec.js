
// import { test, expect } from '@playwright/test';

// test('GET - Verify a post', async ({ request }) => {
//   const response = await request.get(
//     'https://jsonplaceholder.typicode.com/posts/1'
//   );

//   // Verify status code
//   expect(response.status()).toBe(200);

//   // Read JSON response
//   const body = await response.json();

//   // Verify response data
//   expect(body.id).toBe(1);
//   expect(body.userId).toBe(1);
//   expect(body.title).toBeTruthy();

//   console.log(body);
// });

import { test, expect } from '@playwright/test';
test('POST - Create a post', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Playwright API Testing',
        body: 'Learning POST requests',
        userId: 1,
      },
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.title).toBe('Playwright API Testing');
  expect(body.userId).toBe(1);

  console.log(body);
});