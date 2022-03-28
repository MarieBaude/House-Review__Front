import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: '6xeffp9n',
  dataset: 'production',
  apiVersion: '2022-03-28', 
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token: 'skubj5EyYbErySe4PFp73Y1UJw0PpDDkiKUkwfED5a1zAdG5v9bfUI4oeK2Yp0LFgVU4WFtlpvX6VY8VL3WUQUvPJaF4d9npLovyuTS8JGnK7UCmoYOnNkg1DkRFJxkcUmi5QuJmkGW18ekb3WNCcDvGg8KTJGLTDsvfTRdocYem8o2JTMxe', 
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);