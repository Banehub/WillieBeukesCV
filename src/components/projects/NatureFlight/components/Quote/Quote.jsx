import './Quote.css'

function Quote() {
  return (
    <section className="quote-section">
      <div className="quote-overlay"></div>
      <div className="quote-content">
        <blockquote>
          "The closer we look, the more we understand the beauty of every wingbeat."
        </blockquote>
        <cite>- NatureFlight Team</cite>
      </div>
    </section>
  )
}

export default Quote
