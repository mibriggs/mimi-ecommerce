import Image from 'next/image'
import { Inter } from 'next/font/google'
import { trpc } from '@/utils/trpc'
import NavBar from '@/components/nav-bar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const greetingQuery = trpc.getGreeting.useQuery();
  
  if (greetingQuery.isLoading) {
    return <span>Loading...</span>
  }

  if (greetingQuery.isError) {
    return <span>An Error Occurred</span>
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {greetingQuery.data}
    </main>
  )
}
