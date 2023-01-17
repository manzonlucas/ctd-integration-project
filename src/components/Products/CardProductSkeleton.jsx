export default function CardProductSkeleton() {
  return (
    <article className="flex justify-around radius-10 bg-white shadow m-auto cardProduct shadow skeleton-container">
      <div className='w-90 h-100'>
        <img src={'http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg'} alt="skeleton image" className="inline-block m-auto w-100 h-100 fit-cover" />
      </div>
      <div className='w-90 h-100 p-10 flex column justify-around'>
        <h2 className="skeleton-h2 m-sides">Skeleton title</h2>
        <p className="skeleton-p m-sides">Skeleton p</p>
      </div>
    </article >
  )
}