import { redirect } from 'next/navigation';

/**
 * @page
 * @returns {JSX.Element} The home page.
 */
export default function Home(): JSX.Element {
  redirect('/dashboard');

  return <main>Hello World</main>;
}
