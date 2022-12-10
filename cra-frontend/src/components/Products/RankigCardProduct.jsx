

export default function RankingCardProduct({ product }) {

  const RANKING = '★★★★★☆☆☆☆☆';
  function getRankingCard(ranking) {
    return RANKING.slice(5 - ranking, 10 - ranking);
  }



  return  (
    
    <section className="rankingCardProduct">
      <div>
        <p className="rankingCards">{getRankingCard(3)}</p>
      </div>
    </section>
  )
}