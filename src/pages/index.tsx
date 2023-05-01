import Image from 'next/image'
import { Inter } from 'next/font/google'
import { trpc } from '@/utils/trpc'

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
      <button 
      className='rounded-full bg-amber-300 p-5 w-40 text-stone-50' 
      onClick={() => console.log('Button Clicked')}
      >
        Checkout
      </button>
    </main>
  )
}
