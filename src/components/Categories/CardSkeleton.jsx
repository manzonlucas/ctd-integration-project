export default function CardSkeleton() {
  return (
    <article className="flex column radius-10 shadow skeleton-container" style={{ width: '280px', height: '255px' }}>
      <img src={'http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg'} alt="category card skeleton" />
      <div className='flex column justify-around grow-1'>
        <h2 className="skeleton-h2 m-sides">Skeleton title</h2>
        <p className="skeleton-p m-sides">Skeleton p</p>
      </div>
    </article >
  )
}