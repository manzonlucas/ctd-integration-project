export default function CardProductSkeleton() {
  return (
    <article className="category shadow skeleton-container">
      <img src={'http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg'} alt="" />
      <div className='categoryInfo flex column justify-around'>
        <h2 className="skeleton-h2 m-sides">Skeleton title</h2>
        <p className="skeleton-p m-sides">Skeleton p</p>
      </div>
    </article >
  )
}