export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-ibm-plex-sans-kr)]'>
      <header className='row-start-1 flex gap-[24px] flex-wrap items-center justify-center'>
        헤더
      </header>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        플래닛로그
      </main>
      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
        푸터
      </footer>
    </div>
  )
}
