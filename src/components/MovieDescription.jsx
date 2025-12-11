import { useParams, Link } from "react-router-dom";

function MovieDescription() {
  const { id } = useParams();

  const movies = JSON.parse(localStorage.getItem("movies")) || [];
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <p className="text-gray-700 mb-6">{movie.description}</p>

      <iframe
        className="w-full h-80 rounded-lg shadow"
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <br />
      <br />

      <Link
        to="/"
        className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default MovieDescription;
