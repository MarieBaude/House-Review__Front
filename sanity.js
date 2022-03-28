import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: '6xeffp9n',
  dataset: 'production',
  apiVersion: '2022-03-28', 
  useCdn: true,
  token: process.env.NEXT_APP_SANITY_TOKEN, 
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);