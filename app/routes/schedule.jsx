import { useLoaderData, Form } from 'remix';

export const loader = async () => {
  // this only runs on the server
  const response = await fetch(
    'https://vnkupgyb.api.sanity.io/v2021-06-07/data/query/production?query=*[]{title,date}',
  );

  // should do error check
  const data = await response.json();

  const today = new Date();

  const schedule = data.result.filter(
    (episode) => new Date(episode.date) > today,
  );

  return schedule;
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get('title');

  // this doesn't actually work in the demo, both because I was doing something
  // wrong with the env var and because I know you hooligans would mess with the
  // schedule if this *did* work 😅
  const response = await fetch(
    'https://vnkupgyb.api.sanity.io/v2021-06-07/data/mutate/production',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SANITY_LWJ_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mutations: [
          {
            create: {
              _type: 'episode',
              title,
            },
          },
        ],
      }),
    },
  );

  console.log(await response.json());
  if (response.status === 401) {
    throw new Response('Unauthorized', { status: 401 });
  }

  return 'ok';
};

export default function Schedule() {
  const data = useLoaderData();

  return (
    <div>
      <h1>Schedule</h1>
      <Form method="POST">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" />

        <button type="submit">Save Episode</button>
      </Form>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
